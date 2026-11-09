/**
 * Google Search Console CLI & Automation Tool for Mohammed Jouda Portfolio
 * Powered by zero-dependency native Node.js (v18+)
 * 
 * Usage:
 *   node gsc.js auth           - Authenticate with Google OAuth 2.0
 *   node gsc.js sites          - List verified sites in Google Search Console
 *   node gsc.js sitemaps       - Check sitemaps status
 *   node gsc.js inspect <url>  - Inspect indexing status of any URL
 *   node gsc.js analytics      - Query search performance (queries, clicks, impressions)
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { URL } = require('url');

const SECRETS_FILE = path.join(__dirname, 'client_secrets.json');
const TOKEN_FILE = path.join(__dirname, 'token.json');
const DEFAULT_SITE = 'sc-domain:mohammedjouda.com';

const SCOPES = [
  'https://www.googleapis.com/auth/webmasters',
  'https://www.googleapis.com/auth/webmasters.readonly'
];

function loadSecrets() {
  if (!fs.existsSync(SECRETS_FILE)) {
    console.error('Error: client_secrets.json not found in ' + __dirname);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(SECRETS_FILE, 'utf8'));
  const config = data.installed || data.web;
  if (!config) {
    console.error('Error: Invalid client_secrets.json format. Expected "installed" or "web" key.');
    process.exit(1);
  }
  return config;
}

function loadToken() {
  if (!fs.existsSync(TOKEN_FILE)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
  } catch (e) {
    return null;
  }
}

function saveToken(tokenData) {
  fs.writeFileSync(TOKEN_FILE, JSON.stringify(tokenData, null, 2), 'utf8');
}

async function getValidAccessToken() {
  const token = loadToken();
  if (!token) {
    throw new Error('Not authenticated. Please run: node gsc.js auth');
  }

  // Check if access token is still valid (with 60s buffer)
  const now = Date.now();
  if (token.access_token && token.expiry_date && token.expiry_date > now + 60000) {
    return token.access_token;
  }

  // Need refresh
  if (!token.refresh_token) {
    throw new Error('Refresh token missing. Please re-run: node gsc.js auth');
  }

  const secrets = loadSecrets();
  console.log('Refreshing expired access token...');

  const res = await fetch(secrets.token_uri || 'https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: secrets.client_id,
      client_secret: secrets.client_secret,
      refresh_token: token.refresh_token,
      grant_type: 'refresh_token'
    })
  });

  const refreshed = await res.json();
  if (refreshed.error) {
    throw new Error(`Failed to refresh token: ${refreshed.error_description || refreshed.error}`);
  }

  token.access_token = refreshed.access_token;
  token.expiry_date = Date.now() + (refreshed.expires_in * 1000);
  saveToken(token);
  return token.access_token;
}

async function authenticate() {
  const secrets = loadSecrets();
  const PORT = 3000;
  const redirectUri = `http://localhost:${PORT}`;

  const authUrl = new URL(secrets.auth_uri || 'https://accounts.google.com/o/oauth2/auth');
  authUrl.searchParams.set('client_id', secrets.client_id);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', SCOPES.join(' '));
  authUrl.searchParams.set('access_type', 'offline');
  authUrl.searchParams.set('prompt', 'consent');

  console.log('================================================================');
  console.log(' Google Search Console Authentication for Mohammed Jouda');
  console.log('================================================================');
  console.log('\n1. A local listener is waiting on port ' + PORT);
  console.log('2. Please open the following URL in your browser:\n');
  console.log(authUrl.toString());
  console.log('\n3. Sign in with the Google Account that manages mohammedjouda.com in Search Console.');
  console.log('4. Grant the requested Search Console permissions.');
  console.log('================================================================\n');

  // Try to open automatically via start command
  try {
    const { exec } = require('child_process');
    exec(`start "" "${authUrl.toString()}"`);
  } catch (e) { }

  return new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      try {
        const reqUrl = new URL(req.url, `http://localhost:${PORT}`);
        const code = reqUrl.searchParams.get('code');
        const error = reqUrl.searchParams.get('error');

        if (error) {
          res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(`<h1>Authentication Failed</h1><p>${error}</p>`);
          server.close();
          reject(new Error(`OAuth Error: ${error}`));
          return;
        }

        if (code) {
          console.log('Authorization code received. Exchanging for tokens...');

          const tokenRes = await fetch(secrets.token_uri || 'https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              client_id: secrets.client_id,
              client_secret: secrets.client_secret,
              code: code,
              grant_type: 'authorization_code',
              redirect_uri: redirectUri
            })
          });

          const tokenData = await tokenRes.json();
          if (tokenData.error) {
            throw new Error(`Token exchange error: ${tokenData.error_description || tokenData.error}`);
          }

          tokenData.expiry_date = Date.now() + (tokenData.expires_in * 1000);
          saveToken(tokenData);

          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(`
            <div style="font-family: system-ui, sans-serif; text-align: center; padding: 50px;">
              <h1 style="color: #10B981;">✓ Successfully Connected!</h1>
              <p>Google Search Console has been linked successfully.</p>
              <p>You can close this browser tab and return to the terminal.</p>
            </div>
          `);

          console.log('\n[SUCCESS] Token saved to token.json');
          console.log('Google Search Console is now connected and ready to use!\n');
          server.close();
          resolve(tokenData);
        }
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message);
        server.close();
        reject(err);
      }
    });

    server.listen(PORT, () => {
      console.log(`Waiting for Google callback on http://localhost:${PORT} ...`);
    });

    server.on('error', (err) => {
      reject(err);
    });
  });
}

async function listSites() {
  const token = await getValidAccessToken();
  const res = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  if (data.error) {
    throw new Error(`API Error: ${data.error.message || JSON.stringify(data.error)}`);
  }
  console.log('\n=== Verified Google Search Console Properties ===');
  if (!data.siteEntry || !data.siteEntry.length) {
    console.log('No sites found for this Google account.');
  } else {
    data.siteEntry.forEach(s => {
      console.log(`- URL: ${s.siteUrl} (Permission: ${s.permissionLevel})`);
    });
  }
  console.log('');
  return data.siteEntry;
}

async function listSitemaps(siteUrl = DEFAULT_SITE) {
  const token = await getValidAccessToken();
  const encodedSite = encodeURIComponent(siteUrl);
  const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/sitemaps`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  if (data.error) {
    throw new Error(`API Error: ${data.error.message || JSON.stringify(data.error)}`);
  }
  console.log(`\n=== Sitemaps for ${siteUrl} ===`);
  if (!data.sitemap || !data.sitemap.length) {
    console.log('No sitemaps submitted yet.');
  } else {
    data.sitemap.forEach(sm => {
      console.log(`- Path: ${sm.path}`);
      console.log(`  Last Downloaded: ${sm.lastDownloaded || 'N/A'}`);
      console.log(`  Last Submitted:  ${sm.lastSubmitted || 'N/A'}`);
      console.log(`  Warnings:        ${sm.warnings || 0}`);
      console.log(`  Errors:          ${sm.errors || 0}`);
      if (sm.contents) {
        sm.contents.forEach(c => {
          console.log(`  Type: ${c.type} -> Submitted: ${c.submitted}, Indexed: ${c.indexed}`);
        });
      }
    });
  }
  console.log('');
}

async function inspectUrl(targetUrl, siteUrl = DEFAULT_SITE) {
  if (!targetUrl) {
    console.error('Please specify a URL to inspect. Example: node gsc.js inspect https://www.mohammedjouda.com/about');
    return;
  }
  const token = await getValidAccessToken();
  console.log(`\nInspecting URL: ${targetUrl} (Property: ${siteUrl}) ...`);

  const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      inspectionUrl: targetUrl,
      siteUrl: siteUrl,
      languageCode: 'ar'
    })
  });

  const data = await res.json();
  if (data.error) {
    throw new Error(`API Error: ${data.error.message || JSON.stringify(data.error)}`);
  }

  const result = data.inspectionResult || {};
  const indexStatus = result.indexStatusResult || {};

  console.log('\n=== URL Inspection Result ===');
  console.log(`URL:               ${targetUrl}`);
  console.log(`Coverage State:    ${indexStatus.coverageState || 'Unknown'}`);
  console.log(`Verdict:           ${indexStatus.verdict || 'Unknown'}`);
  console.log(`Indexing State:    ${indexStatus.indexingState || 'Unknown'}`);
  console.log(`Last Crawl Time:   ${indexStatus.lastCrawlTime || 'Not yet crawled'}`);
  console.log(`Crawled As:        ${indexStatus.crawledAs || 'N/A'}`);
  console.log(`Page Fetch State:  ${indexStatus.pageFetchState || 'N/A'}`);
  console.log(`Robots TXT State:  ${indexStatus.robotsTxtState || 'N/A'}`);
  console.log(`User Canonical:    ${indexStatus.userCanonical || 'None declared'}`);
  console.log(`Google Canonical:  ${indexStatus.googleCanonical || 'None selected'}`);
  console.log('==============================\n');
  return indexStatus;
}

async function queryAnalytics(days = 28, siteUrl = DEFAULT_SITE) {
  const token = await getValidAccessToken();
  const encodedSite = encodeURIComponent(siteUrl);

  const end = new Date();
  end.setDate(end.getDate() - 2); // Search console data has a 2-3 day lag
  const start = new Date(end);
  start.setDate(start.getDate() - days);

  const startDate = start.toISOString().split('T')[0];
  const endDate = end.toISOString().split('T')[0];

  console.log(`\nQuerying Search Performance (${startDate} to ${endDate}) for ${siteUrl} ...`);

  const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      startDate: startDate,
      endDate: endDate,
      dimensions: ['query'],
      rowLimit: 15
    })
  });

  const data = await res.json();
  if (data.error) {
    throw new Error(`API Error: ${data.error.message || JSON.stringify(data.error)}`);
  }

  console.log('\n=== Top Search Queries (Keywords) ===');
  if (!data.rows || !data.rows.length) {
    console.log('No click/impression data recorded yet in this time window.');
  } else {
    console.table(data.rows.map(r => ({
      Query: r.keys[0],
      Clicks: r.clicks,
      Impressions: r.impressions,
      CTR: `${(r.ctr * 100).toFixed(1)}%`,
      Position: r.position.toFixed(1)
    })));
  }
  console.log('');
}

async function exchangeCodeManually(code) {
  if (!code) {
    console.error('Please specify the code. Example: node gsc.js code 4/0A...');
    return;
  }
  const secrets = loadSecrets();
  const PORT = 3000;
  const redirectUri = `http://localhost:${PORT}`;

  console.log('Exchanging authorization code for tokens...');
  const tokenRes = await fetch(secrets.token_uri || 'https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: secrets.client_id,
      client_secret: secrets.client_secret,
      code: code.trim(),
      grant_type: 'authorization_code',
      redirect_uri: redirectUri
    })
  });

  const tokenData = await tokenRes.json();
  if (tokenData.error) {
    throw new Error(`Token exchange error: ${tokenData.error_description || tokenData.error}`);
  }

  tokenData.expiry_date = Date.now() + (tokenData.expires_in * 1000);
  saveToken(tokenData);
  console.log('\n[SUCCESS] Token saved to token.json');
  console.log('Google Search Console is now connected and ready to use!\n');
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';

  try {
    switch (command) {
      case 'auth':
        await authenticate();
        break;
      case 'code':
        await exchangeCodeManually(args[1]);
        break;
      case 'sites':
        await listSites();
        break;
      case 'sitemaps':
        await listSitemaps(args[1] || DEFAULT_SITE);
        break;
      case 'inspect':
        await inspectUrl(args[1], args[2] || DEFAULT_SITE);
        break;
      case 'analytics':
      case 'query':
        await queryAnalytics(parseInt(args[1] || '28', 10), args[2] || DEFAULT_SITE);
        break;
      default:
        console.log(`
Google Search Console Tool for Mohammed Jouda
Usage:
  node gsc.js auth              - Authenticate with your Google Account
  node gsc.js sites             - List all Search Console properties
  node gsc.js sitemaps          - View submitted sitemaps & indexed count
  node gsc.js inspect <URL>     - Check real-time indexing status of any URL
  node gsc.js analytics [days]  - View clicks, impressions & ranking keywords
        `);
    }
  } catch (err) {
    console.error('\n[Error]', err.message || err);
    process.exit(1);
  }
}

main();

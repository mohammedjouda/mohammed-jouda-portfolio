/**
 * Prerender & Multilingual SEO Generation Engine for Mohammed Jouda Portfolio
 * Generates static HTML files and XML Sitemap for all English and Arabic routes.
 * Ensures 100% adherence to Google Search Central Multilingual & International SEO standards:
 * - Language-specific clean URL structures (/ar/...)
 * - Self-referencing canonical tags
 * - Complete reciprocal bidirectional hreflang links (en, ar, x-default)
 * - Localized OpenGraph and Twitter card metadata
 * - Synchronized sitemap.xml with xhtml:link alternates
 */

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const indexHtmlPath = path.join(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Load i18n and caseStudiesData from script.dev.js
const scriptContent = fs.readFileSync(path.join(rootDir, 'script.dev.js'), 'utf8');

const i18nStart = scriptContent.indexOf('const i18n = {');
const i18nEnd = scriptContent.indexOf('// --- State Variables ---');
const i18nCode = scriptContent.substring(i18nStart + 13, i18nEnd).trim().replace(/;$/, '');
const i18n = eval('(' + i18nCode + ')');

const csStart = scriptContent.indexOf('const caseStudiesData = {');
const csEnd = scriptContent.indexOf('// --- 10. Dedicated Project Detail View & Gallery Controller ---');
const csCode = scriptContent.substring(csStart + 24, csEnd).trim().replace(/;$/, '');
const caseStudiesData = eval('(' + csCode + ')');

function translateHtml(html, dict) {
  return html.replace(/(<([a-zA-Z0-9]+)\b[^>]*?\bdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/gi, (match, openTag, tagName, key, innerContent, closeTag) => {
    if (dict && dict[key]) {
      return `${openTag}${dict[key]}${closeTag}`;
    }
    return match;
  });
}

// 12 Base Site Routes
const baseRoutes = [
  {
    subPath: '', // home
    navRoute: 'home',
    activeViewId: 'view-home',
    priority: '1.0',
    changefreq: 'weekly',
    title: {
      en: 'Mohammed Jouda | Backend & AI Integration Engineer',
      ar: 'محمد جودة | مهندس Backend وتكامل الذكاء الاصطناعي | Mohammed Jouda'
    },
    description: {
      en: 'Mohammed Jouda (محمد جودة) is a Backend & AI Integration Engineer specializing in Laravel, PHP, REST APIs, and practical AI integrations. Explore case studies and engineering milestones.',
      ar: 'محمد جودة (Mohammed Jouda) مهندس تطوير خلفي وتكامل الذكاء الاصطناعي متخصص في Laravel و PHP و REST APIs والحلول السحابية وأتمتة مسارات العمل.'
    }
  },
  {
    subPath: 'about',
    navRoute: 'about',
    activeViewId: 'view-about',
    priority: '0.8',
    changefreq: 'monthly',
    title: {
      en: 'Mohammed Jouda | About Me & Architecture Principles',
      ar: 'محمد جودة | عنّي والقدرات الهندسية | Mohammed Jouda | About Me'
    },
    description: {
      en: 'Learn about Mohammed Jouda, Backend & AI Integration Engineer. Discover architectural principles, engineering standards, performance optimization, and background.',
      ar: 'محمد جودة (Mohammed Jouda) مهندس تطوير خلفي وتكامل الذكاء الاصطناعي متخصص في Laravel و PHP و REST APIs والحلول الذكية. استكشف المعايير والقدرات الهندسية.'
    }
  },
  {
    subPath: 'career',
    navRoute: 'career',
    activeViewId: 'view-career',
    priority: '0.8',
    changefreq: 'monthly',
    title: {
      en: 'Mohammed Jouda | Career Experience & Milestones',
      ar: 'محمد جودة | المسيرة المهنية والخبرات | Mohammed Jouda | Career'
    },
    description: {
      en: 'Explore the engineering career and milestones of Mohammed Jouda: robust backend architecture, REST API design, database scaling, and technical training.',
      ar: 'المسيرة المهنية للمهندس محمد جودة (Mohammed Jouda) - خبرات هندسية مثبتة، معمارية أنظمة خوادم متينة، تصميم REST APIs، وإدارة قواعد البيانات.'
    }
  },
  {
    subPath: 'projects',
    navRoute: 'projects',
    activeViewId: 'view-projects',
    priority: '0.9',
    changefreq: 'weekly',
    title: {
      en: 'Mohammed Jouda | Featured Projects & Case Studies',
      ar: 'محمد جودة | معرض المشاريع ودراسات الحالة | Mohammed Jouda | Projects'
    },
    description: {
      en: 'Explore engineering projects and production case studies by Mohammed Jouda in Laravel, AI automation, WebSockets, and database optimization.',
      ar: 'استكشف المشاريع الهندسية ودراسات الحالة للمهندس محمد جودة (Mohammed Jouda) في Laravel، تكامل الذكاء الاصطناعي، وأتمتة مسارات العمل التجاري.'
    }
  },
  {
    subPath: 'achievements',
    navRoute: 'achievements',
    activeViewId: 'view-achievements',
    priority: '0.7',
    changefreq: 'monthly',
    title: {
      en: 'Mohammed Jouda | Achievements & Certifications',
      ar: 'محمد جودة | الإنجازات والشهادات | Mohammed Jouda | Achievements'
    },
    description: {
      en: 'Verified academic and technical credentials for Mohammed Jouda - B.Sc. in Web Technology & Information Security with Honors, Docker foundations, and n8n.',
      ar: 'الشهادات والاعتمادات الأكاديمية والمهنية للمهندس محمد جودة (Mohammed Jouda) - بكالوريوس تكنولوجيا الويب وأمن المعلومات بمرتبة الشرف.'
    }
  },
  {
    subPath: 'contact',
    navRoute: 'contact',
    activeViewId: 'view-contact',
    priority: '0.9',
    changefreq: 'monthly',
    title: {
      en: 'Mohammed Jouda | Contact & Engineering Inquiries',
      ar: 'محمد جودة | تواصل معي للعمل | Mohammed Jouda | Contact'
    },
    description: {
      en: 'Get in touch with Mohammed Jouda for backend engineering projects, Laravel consulting, AI workflow integration, or contract opportunities.',
      ar: 'تواصل مع المهندس محمد جودة (Mohammed Jouda) لمناقشة المشاريع الهندسية، استشارات Laravel، دمج الذكاء الاصطناعي وأتمتة مسارات العمل.'
    }
  },
  {
    subPath: 'projects/lead-automation',
    projectId: 'lead-automation',
    navRoute: 'projects',
    activeViewId: 'view-project-detail',
    priority: '0.85',
    changefreq: 'monthly',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/ai-leads/ai-leads.webp',
    ogImageWidth: 500,
    ogImageHeight: 373,
    ogImageAlt: 'AI Lead Triage & Automation - Mohammed Jouda',
    title: {
      en: 'Mohammed Jouda | AI Lead Triage & Automation System Case Study',
      ar: 'محمد جودة | نظام AI لمعالجة العملاء المحتملين | AI Lead Triage & Automation'
    },
    description: {
      en: 'Engineering case study: Automated lead triage and processing system powered by Laravel, Redis Queues, n8n, and Gemini API by Mohammed Jouda.',
      ar: 'دراسة حالة هندسية: نظام معالجة وتوجيه العملاء المحتملين بالذكاء الاصطناعي باستخدام Laravel و Redis Queues و n8n و Gemini بواسطة محمد جودة.'
    }
  },
  {
    subPath: 'projects/sprint-mind',
    projectId: 'sprint-mind',
    navRoute: 'projects',
    activeViewId: 'view-project-detail',
    priority: '0.85',
    changefreq: 'monthly',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/sprint-mind/sprint-mind-hero.webp',
    ogImageWidth: 500,
    ogImageHeight: 400,
    ogImageAlt: 'SprintMind AI Platform - Mohammed Jouda',
    title: {
      en: 'Mohammed Jouda | SprintMind AI Agile Planning Platform Case Study',
      ar: 'محمد جودة | منظومة SprintMind AI لإدارة السبرنتات والتخطيط | SprintMind AI'
    },
    description: {
      en: 'Engineering case study: AI-assisted Agile sprint management and planning platform built on Laravel 13, Gemini 3.5 Flash, and automated task workflows.',
      ar: 'دراسة حالة هندسية: منصة إدارة سبرنتات وتخطيط بالذكاء الاصطناعي تعتمد على Laravel 13 و Gemini 3.5 Flash وأتمتة المهام بواسطة محمد جودة.'
    }
  },
  {
    subPath: 'projects/messenger',
    projectId: 'messenger',
    navRoute: 'projects',
    activeViewId: 'view-project-detail',
    priority: '0.85',
    changefreq: 'monthly',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/messenger/messenger_ai.webp',
    ogImageWidth: 480,
    ogImageHeight: 480,
    ogImageAlt: 'Real-Time AI Messenger - Mohammed Jouda',
    title: {
      en: 'Mohammed Jouda | Real-Time AI Messenger Case Study',
      ar: 'محمد جودة | تطبيق المراسلة الفورية بالذكاء الاصطناعي | Real-Time AI Messenger'
    },
    description: {
      en: 'Engineering case study: Real-time messaging platform with embedded AI assistant, powered by WebSockets, Laravel Echo, and Vue 3 by Mohammed Jouda.',
      ar: 'دراسة حالة هندسية: منصة محادثة فورية مباشرة مع مساعد ذكي مدمج تعتمد على WebSockets و Laravel Echo و Vue 3 بواسطة محمد جودة.'
    }
  },
  {
    subPath: 'projects/marsa-store',
    projectId: 'marsa-store',
    navRoute: 'projects',
    activeViewId: 'view-project-detail',
    priority: '0.85',
    changefreq: 'monthly',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/mersa/mersa-hero.webp',
    ogImageWidth: 1400,
    ogImageHeight: 781,
    ogImageAlt: 'Marsa Store Multi-Vendor Platform - Mohammed Jouda',
    title: {
      en: 'Mohammed Jouda | Marsa Store Multi-Vendor Marketplace Case Study',
      ar: 'محمد جودة | متجر مرسى متعدد البائعين | Marsa Store Multi-Vendor'
    },
    description: {
      en: 'Engineering case study: Multi-vendor eCommerce platform in Laravel featuring strict vendor tenant isolation and optimized SQL indexing.',
      ar: 'دراسة حالة هندسية: منصة تجارة إلكترونية متعددة التجار في Laravel مع عزل صارم لبيانات التجار وتحسين استعلامات قواعد البيانات بواسطة محمد جودة.'
    }
  },
  {
    subPath: 'projects/write-ai',
    projectId: 'write-ai',
    navRoute: 'projects',
    activeViewId: 'view-project-detail',
    priority: '0.85',
    changefreq: 'monthly',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/write-ai/hero-write-ai.webp',
    ogImageWidth: 800,
    ogImageHeight: 829,
    ogImageAlt: 'Write AI Content Platform - Mohammed Jouda',
    title: {
      en: 'Mohammed Jouda | Write AI Intelligent Content Platform Case Study',
      ar: 'محمد جودة | منصة Write AI للتدوين الذكي | Write AI Platform'
    },
    description: {
      en: 'Engineering case study: Intelligent blogging SaaS integrating CMS workflows with automated LLM content generation and SEO pipelines.',
      ar: 'دراسة حالة هندسية: منصة SaaS ذكية للتدوين تجمع بين إدارة المحتوى وأتمتة توليد المحتوى وتحسين محركات البحث SEO بواسطة محمد جودة.'
    }
  },
  {
    subPath: 'projects/techno-cms',
    projectId: 'techno-cms',
    navRoute: 'projects',
    activeViewId: 'view-project-detail',
    priority: '0.85',
    changefreq: 'monthly',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/cms-techno-plus/tecno-hero.webp',
    ogImageWidth: 1400,
    ogImageHeight: 933,
    ogImageAlt: 'Techno Plus CMS - Mohammed Jouda',
    title: {
      en: 'Mohammed Jouda | Techno Plus Modular CMS Case Study',
      ar: 'محمد جودة | منصة Techno Plus لإدارة المحتوى المعيارية | Techno Plus CMS'
    },
    description: {
      en: 'Engineering case study: Modular enterprise administrative CMS built on Laravel Filament, Livewire, and Alpine.js with hardened RBAC.',
      ar: 'دراسة حالة هندسية: نظام إدارة محتوى معياري متطور يعتمد على Laravel و Filament و Livewire لإدارة المحتوى والصلاحيات بواسطة محمد جودة.'
    }
  }
];

// Build full array of 24 localized routes (12 English + 12 Arabic)
const allRoutes = [];

for (const base of baseRoutes) {
  const enUrl = `https://www.mohammedjouda.com${base.subPath ? `/${base.subPath}` : '/'}`;
  const arUrl = `https://www.mohammedjouda.com/ar${base.subPath ? `/${base.subPath}` : ''}`;

  // English Version
  allRoutes.push({
    ...base,
    lang: 'en',
    dir: 'ltr',
    filePath: base.subPath === '' ? 'index.html' : path.join(base.subPath, 'index.html'),
    canonical: enUrl,
    enUrl,
    arUrl,
    title: base.title.en,
    description: base.description.en
  });

  // Arabic Version
  allRoutes.push({
    ...base,
    lang: 'ar',
    dir: 'rtl',
    filePath: base.subPath === '' ? path.join('ar', 'index.html') : path.join('ar', base.subPath, 'index.html'),
    canonical: arUrl,
    enUrl,
    arUrl,
    title: base.title.ar,
    description: base.description.ar
  });
}

function generateRouteHtml(route) {
  let html = indexHtml;

  // 1. Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);

  // 2. Replace self-referencing canonical tag
  html = html.replace(/<link rel="canonical" href="[^"]*">/i, `<link rel="canonical" href="${route.canonical}">`);

  // 3. Replace reciprocal hreflang alternate tags
  const hreflangBlock = [
    `<link rel="alternate" hreflang="en" href="${route.enUrl}">`,
    `  <link rel="alternate" hreflang="ar" href="${route.arUrl}">`,
    `  <link rel="alternate" hreflang="x-default" href="${route.enUrl}">`
  ].join('\n');

  html = html.replace(
    /<link rel="alternate" hreflang="en" href="[^"]*">\s*<link rel="alternate" hreflang="ar" href="[^"]*">\s*<link rel="alternate" hreflang="x-default" href="[^"]*">/i,
    hreflangBlock
  );

  // 4. Replace meta description
  html = html.replace(
    /<meta name="description"[\s\S]*?content="[^"]*">/i,
    `<meta name="description"\n    content="${route.description}">`
  );

  // 5. Replace OpenGraph tags
  html = html.replace(/<meta property="og:title" content="[^"]*">/i, `<meta property="og:title" content="${route.title}">`);
  html = html.replace(/<meta property="og:description"[\s\S]*?content="[^"]*">/i, `<meta property="og:description"\n    content="${route.description}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/i, `<meta property="og:url" content="${route.canonical}">`);
  html = html.replace(/<meta property="og:locale" content="[^"]*">/i, `<meta property="og:locale" content="${route.lang === 'ar' ? 'ar_AR' : 'en_US'}">`);
  html = html.replace(/<meta property="og:locale:alternate" content="[^"]*">/i, `<meta property="og:locale:alternate" content="${route.lang === 'ar' ? 'en_US' : 'ar_AR'}">`);

  if (route.ogImage) {
    html = html.replace(/<meta property="og:image" content="[^"]*">/i, `<meta property="og:image" content="${route.ogImage}">`);
    html = html.replace(/<meta property="og:image:width" content="[^"]*">/i, `<meta property="og:image:width" content="${route.ogImageWidth || 1200}">`);
    html = html.replace(/<meta property="og:image:height" content="[^"]*">/i, `<meta property="og:image:height" content="${route.ogImageHeight || 630}">`);
    if (route.ogImageAlt) {
      html = html.replace(/<meta property="og:image:alt" content="[^"]*">/i, `<meta property="og:image:alt" content="${route.ogImageAlt}">`);
    }
  }

  // 6. Replace Twitter tags
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/i, `<meta name="twitter:title" content="${route.title}">`);
  html = html.replace(/<meta name="twitter:description"[\s\S]*?content="[^"]*">/i, `<meta name="twitter:description"\n    content="${route.description}">`);
  if (route.ogImage) {
    html = html.replace(/<meta name="twitter:image" content="[^"]*">/i, `<meta name="twitter:image" content="${route.ogImage}">`);
  }

  // 7. Handle language attributes and direction
  if (route.lang === 'ar') {
    html = html.replace(/<html\b[^>]*>/i, '<html lang="ar" class="dark" dir="rtl">');
    html = html.replace(/<button class="lang-btn active" data-lang="en">EN<\/button>/gi, '<button class="lang-btn" data-lang="en">EN</button>');
    html = html.replace(/<button class="lang-btn" data-lang="ar">عربي<\/button>/gi, '<button class="lang-btn active" data-lang="ar">عربي</button>');
    html = html.replace(/<button class="lang-btn active" data-lang="en" data-cursor="English">EN<\/button>/gi, '<button class="lang-btn" data-lang="en" data-cursor="English">EN</button>');
    html = html.replace(/<button class="lang-btn" data-lang="ar" data-cursor="عربي">AR<\/button>/gi, '<button class="lang-btn active" data-lang="ar" data-cursor="عربي">AR</button>');
    html = translateHtml(html, i18n.ar);

    // Rewrite internal navigation hrefs on Arabic pages for search engine crawler discovery
    html = html.replace(/href="#home"/g, 'href="/ar"');
    html = html.replace(/href="#about"/g, 'href="/ar/about"');
    html = html.replace(/href="#career"/g, 'href="/ar/career"');
    html = html.replace(/href="#projects"/g, 'href="/ar/projects"');
    html = html.replace(/href="#achievements"/g, 'href="/ar/achievements"');
    html = html.replace(/href="#contact"/g, 'href="/ar/contact"');
  } else {
    html = html.replace(/<html\b[^>]*>/i, '<html lang="en" class="dark" dir="ltr">');
    html = html.replace(/href="#home"/g, 'href="/"');
    html = html.replace(/href="#about"/g, 'href="/about"');
    html = html.replace(/href="#career"/g, 'href="/career"');
    html = html.replace(/href="#projects"/g, 'href="/projects"');
    html = html.replace(/href="#achievements"/g, 'href="/achievements"');
    html = html.replace(/href="#contact"/g, 'href="/contact"');
  }

  // 8. Adjust active view in body
  if (route.activeViewId && route.activeViewId !== 'view-home') {
    html = html.replace(/id="view-home" class="page-view active"/i, 'id="view-home" class="page-view"');
    const targetRegex = new RegExp(`id="${route.activeViewId}" class="page-view"`, 'i');
    html = html.replace(targetRegex, `id="${route.activeViewId}" class="page-view active"`);
  }

  // 9. Adjust desktop and mobile nav active items
  if (route.navRoute && route.navRoute !== 'home') {
    html = html.replace(/<a href="[^"]*" class="nav-link active"/i, '<a href="#home" class="nav-link"');
    html = html.replace(/<a href="[^"]*" class="nav-item active"/i, '<a href="#home" class="nav-item"');

    const desktopNavRegex = new RegExp(`(<a href="[^"]*" class="nav-link)"(\\s+data-route="${route.navRoute}")`, 'i');
    html = html.replace(desktopNavRegex, '$1 active"$2');

    const mobileNavRegex = new RegExp(`(<a href="[^"]*" class="nav-item)"(\\s+data-route="${route.navRoute}")`, 'i');
    html = html.replace(mobileNavRegex, '$1 active"$2');
  }

  // 10. Populate Project Detail content if project page
  if (route.projectId && caseStudiesData[route.projectId]) {
    const p = caseStudiesData[route.projectId];
    const pTitle = p.title[route.lang] || p.title.en;
    const pSub = p.subtitle[route.lang] || p.subtitle.en;
    const pCat = p.category[route.lang] || p.category.en;
    const pStatus = p.status[route.lang] || p.status.en;
    const pChallenge = p.challenge ? (p.challenge[route.lang] || p.challenge.en) : '';
    const pSolution = p.solution ? (p.solution[route.lang] || p.solution.en) : '';

    html = html.replace(/<h1 id="detail-title" class="project-detail-title">[^<]*<\/h1>/i, `<h1 id="detail-title" class="project-detail-title">${pTitle}</h1>`);
    html = html.replace(/<p id="detail-subtitle" class="project-detail-subtitle">[^<]*<\/p>/i, `<p id="detail-subtitle" class="project-detail-subtitle">${pSub}</p>`);
    html = html.replace(/<span id="detail-breadcrumb-title" class="breadcrumb-current">[^<]*<\/span>/i, `<span id="detail-breadcrumb-title" class="breadcrumb-current">${pTitle}</span>`);
    html = html.replace(/<span id="detail-category" class="badge-tag tag-primary">[^<]*<\/span>/i, `<span id="detail-category" class="badge-tag tag-primary">${pCat}</span>`);
    html = html.replace(/<span id="detail-year" class="badge-tag tag-muted">[^<]*<\/span>/i, `<span id="detail-year" class="badge-tag tag-muted">${p.year}</span>`);
    html = html.replace(/<span id="detail-status" class="badge-tag tag-success">[^<]*<\/span>/i, `<span id="detail-status" class="badge-tag tag-success">${pStatus}</span>`);

    if (pChallenge) {
      html = html.replace(/<div id="detail-challenge" class="prose-block">[\s\S]*?<\/div>/i, `<div id="detail-challenge" class="prose-block"><p>${pChallenge}</p></div>`);
    }
    if (pSolution) {
      html = html.replace(/<div id="detail-solution" class="prose-block">[\s\S]*?<\/div>/i, `<div id="detail-solution" class="prose-block"><p>${pSolution}</p></div>`);
    }
    if (p.image) {
      html = html.replace(/id="detail-main-image" src="[^"]*"/i, `id="detail-main-image" src="${p.image}"`);
    }
  }

  // 11. Adjust Structured Data JSON-LD
  html = html.replace(/"url":\s*"https:\/\/www\.mohammedjouda\.com\/"/i, `"url": "${route.canonical}"`);
  html = html.replace(/"@id":\s*"https:\/\/www\.mohammedjouda\.com\/#profilepage"/i, `"@id": "${route.canonical}#profilepage"`);
  html = html.replace(/"inLanguage":\s*\["ar",\s*"en"\]/i, `"inLanguage": "${route.lang}"`);

  return html;
}

function generateSitemap(routes) {
  const today = '2026-11-12';
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const route of routes) {
    xml += `  <url>\n`;
    xml += `    <loc>${route.canonical}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${route.enUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="ar" href="${route.arUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${route.enUrl}" />\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  return xml;
}

console.log('=== Prerendering Static Routes & SEO Assets for Mohammed Jouda Portfolio ===');

let createdCount = 0;
for (const route of allRoutes) {
  // Don't overwrite the master source index.html template with the generated one
  if (route.filePath === 'index.html') {
    continue;
  }
  const targetFile = path.join(rootDir, route.filePath);
  const targetDir = path.dirname(targetFile);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const renderedHtml = generateRouteHtml(route);
  fs.writeFileSync(targetFile, renderedHtml, 'utf8');
  console.log(`[OK] Generated (${route.lang}): /${route.filePath.replace(/\\/g, '/')} -> ${route.canonical}`);
  createdCount++;
}

// Generate updated sitemap.xml
const sitemapContent = generateSitemap(allRoutes);
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapContent, 'utf8');
console.log(`[OK] Generated sitemap.xml containing all ${allRoutes.length} bilingual URLs with full reciprocal hreflang annotations!`);

console.log(`=== Finished: Successfully generated ${createdCount} static route pages + sitemap.xml! ===`);

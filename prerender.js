/**
 * Prerender Script for Mohammed Jouda Portfolio
 * Generates static HTML files for all sitemap routes so search engines (Googlebot)
 * receive 100% accurate, self-referencing canonical tags, custom titles, and meta descriptions.
 */

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const indexHtmlPath = path.join(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Load i18n from script.dev.js
const scriptContent = fs.readFileSync(path.join(rootDir, 'script.dev.js'), 'utf8');
const start = scriptContent.indexOf('const i18n = {');
const end = scriptContent.indexOf('// --- State Variables ---');
const i18nCode = scriptContent.substring(start + 13, end).trim().replace(/;$/, '');
const i18n = eval('(' + i18nCode + ')');

function translateHtml(html, dict) {
  return html.replace(/(<([a-zA-Z0-9]+)\b[^>]*?\bdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/gi, (match, openTag, tagName, key, innerContent, closeTag) => {
    if (dict && dict[key]) {
      return `${openTag}${dict[key]}${closeTag}`;
    }
    return match;
  });
}

const routes = [
  {
    path: 'ar',
    canonical: 'https://www.mohammedjouda.com/ar',
    title: 'محمد جودة | مهندس Backend وتكامل الذكاء الاصطناعي | Mohammed Jouda',
    description: 'محمد جودة (Mohammed Jouda) مهندس تطوير خلفي وتكامل الذكاء الاصطناعي متخصص في Laravel و PHP و REST APIs والحلول السحابية وأتمتة مسارات العمل.',
    activeViewId: 'view-home',
    navRoute: 'home',
    lang: 'ar',
    dir: 'rtl'
  },
  {
    path: 'about',
    canonical: 'https://www.mohammedjouda.com/about',
    title: 'محمد جودة | عنّي والقدرات الهندسية | Mohammed Jouda | About Me',
    description: 'محمد جودة (Mohammed Jouda) مهندس تطوير خلفي وتكامل الذكاء الاصطناعي متخصص في Laravel و PHP و REST APIs والحلول الذكية. استكشف المعايير والقدرات الهندسية.',
    activeViewId: 'view-about',
    navRoute: 'about'
  },
  {
    path: 'career',
    canonical: 'https://www.mohammedjouda.com/career',
    title: 'محمد جودة | المسيرة المهنية والخبرات | Mohammed Jouda | Career',
    description: 'المسيرة المهنية للمهندس محمد جودة (Mohammed Jouda) - خبرات هندسية مثبتة، معمارية أنظمة خوادم متينة، تصميم REST APIs، وإدارة قواعد البيانات.',
    activeViewId: 'view-career',
    navRoute: 'career'
  },
  {
    path: 'projects',
    canonical: 'https://www.mohammedjouda.com/projects',
    title: 'محمد جودة | معرض المشاريع ودراسات الحالة | Mohammed Jouda | Projects',
    description: 'استكشف المشاريع الهندسية ودراسات الحالة للمهندس محمد جودة (Mohammed Jouda) في Laravel، تكامل الذكاء الاصطناعي، وأتمتة مسارات العمل التجاري.',
    activeViewId: 'view-projects',
    navRoute: 'projects'
  },
  {
    path: 'achievements',
    canonical: 'https://www.mohammedjouda.com/achievements',
    title: 'محمد جودة | الإنجازات والشهادات | Mohammed Jouda | Achievements',
    description: 'الشهادات والاعتمادات الأكاديمية والمهنية للمهندس محمد جودة (Mohammed Jouda) - بكالوريوس تكنولوجيا الويب وأمن المعلومات بمرتبة الشرف.',
    activeViewId: 'view-achievements',
    navRoute: 'achievements'
  },
  {
    path: 'contact',
    canonical: 'https://www.mohammedjouda.com/contact',
    title: 'محمد جودة | تواصل معي للعمل | Mohammed Jouda | Contact',
    description: 'تواصل مع المهندس محمد جودة (Mohammed Jouda) لمناقشة المشاريع الهندسية، استشارات Laravel، دمج الذكاء الاصطناعي وأتمتة مسارات العمل.',
    activeViewId: 'view-contact',
    navRoute: 'contact'
  },
  {
    path: 'projects/lead-automation',
    canonical: 'https://www.mohammedjouda.com/projects/lead-automation',
    title: 'محمد جودة | نظام AI لمعالجة العملاء المحتملين | AI Lead Triage & Automation',
    description: 'دراسة حالة هندسية: نظام معالجة وتوجيه العملاء المحتملين بالذكاء الاصطناعي باستخدام Laravel و Redis Queues و n8n و Gemini بواسطة محمد جودة.',
    activeViewId: 'view-project-detail',
    navRoute: 'projects',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/ai-leads/ai-leads.webp',
    ogImageWidth: 500,
    ogImageHeight: 373,
    ogImageAlt: 'AI Lead Triage & Automation - Mohammed Jouda'
  },
  {
    path: 'projects/sprint-mind',
    canonical: 'https://www.mohammedjouda.com/projects/sprint-mind',
    title: 'محمد جودة | منظومة SprintMind AI لإدارة السبرنتات والتخطيط | SprintMind AI',
    description: 'دراسة حالة هندسية: منصة إدارة سبرنتات وتخطيط بالذكاء الاصطناعي تعتمد على Laravel 13 و Gemini 3.5 Flash وأتمتة المهام بواسطة محمد جودة.',
    activeViewId: 'view-project-detail',
    navRoute: 'projects',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/sprint-mind/sprint-mind-hero.webp',
    ogImageWidth: 500,
    ogImageHeight: 400,
    ogImageAlt: 'SprintMind AI Platform - Mohammed Jouda'
  },
  {
    path: 'projects/messenger',
    canonical: 'https://www.mohammedjouda.com/projects/messenger',
    title: 'محمد جودة | تطبيق المراسلة الفورية بالذكاء الاصطناعي | Real-Time AI Messenger',
    description: 'دراسة حالة هندسية: منصة محادثة فورية مباشرة مع مساعد ذكي مدمج تعتمد على WebSockets و Laravel Echo و Vue 3 بواسطة محمد جودة.',
    activeViewId: 'view-project-detail',
    navRoute: 'projects',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/messenger/messenger_ai.webp',
    ogImageWidth: 480,
    ogImageHeight: 480,
    ogImageAlt: 'Real-Time AI Messenger - Mohammed Jouda'
  },
  {
    path: 'projects/marsa-store',
    canonical: 'https://www.mohammedjouda.com/projects/marsa-store',
    title: 'محمد جودة | متجر مرسى متعدد البائعين | Marsa Store Multi-Vendor',
    description: 'دراسة حالة هندسية: منصة تجارة إلكترونية متعددة التجار في Laravel مع عزل صارم لبيانات التجار وتحسين استعلامات قواعد البيانات بواسطة محمد جودة.',
    activeViewId: 'view-project-detail',
    navRoute: 'projects',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/mersa/mersa-hero.webp',
    ogImageWidth: 1400,
    ogImageHeight: 781,
    ogImageAlt: 'Marsa Store Multi-Vendor Platform - Mohammed Jouda'
  },
  {
    path: 'projects/write-ai',
    canonical: 'https://www.mohammedjouda.com/projects/write-ai',
    title: 'محمد جودة | منصة Write AI للتدوين الذكي | Write AI Platform',
    description: 'دراسة حالة هندسية: منصة SaaS ذكية للتدوين تجمع بين إدارة المحتوى وأتمتة توليد المحتوى وتحسين محركات البحث SEO بواسطة محمد جودة.',
    activeViewId: 'view-project-detail',
    navRoute: 'projects',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/write-ai/hero-write-ai.webp',
    ogImageWidth: 800,
    ogImageHeight: 829,
    ogImageAlt: 'Write AI Content Platform - Mohammed Jouda'
  },
  {
    path: 'projects/techno-cms',
    canonical: 'https://www.mohammedjouda.com/projects/techno-cms',
    title: 'محمد جودة | منصة Techno Plus لإدارة المحتوى المعيارية | Techno Plus CMS',
    description: 'دراسة حالة هندسية: نظام إدارة محتوى معياري متطور يعتمد على Laravel و Filament و Livewire لإدارة المحتوى والصلاحيات بواسطة محمد جودة.',
    activeViewId: 'view-project-detail',
    navRoute: 'projects',
    ogImage: 'https://www.mohammedjouda.com/assets/projects/cms-techno-plus/tecno-hero.webp',
    ogImageWidth: 1400,
    ogImageHeight: 933,
    ogImageAlt: 'Techno Plus CMS - Mohammed Jouda'
  }
];

function generateRouteHtml(route) {
  let html = indexHtml;

  // 1. Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);

  // 2. Replace canonical tag
  html = html.replace(/<link rel="canonical" href="[^"]*">/i, `<link rel="canonical" href="${route.canonical}">`);

  // 3. Replace meta description
  html = html.replace(/<meta name="description"\s+content="[^"]*">/i, `<meta name="description"\n    content="${route.description}">`);

  // 4. Replace OpenGraph tags
  html = html.replace(/<meta property="og:title" content="[^"]*">/i, `<meta property="og:title" content="${route.title}">`);
  html = html.replace(/<meta property="og:description"\s+content="[^"]*">/i, `<meta property="og:description"\n    content="${route.description}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/i, `<meta property="og:url" content="${route.canonical}">`);

  if (route.ogImage) {
    html = html.replace(/<meta property="og:image" content="[^"]*">/i, `<meta property="og:image" content="${route.ogImage}">`);
    html = html.replace(/<meta property="og:image:width" content="[^"]*">/i, `<meta property="og:image:width" content="${route.ogImageWidth || 1200}">`);
    html = html.replace(/<meta property="og:image:height" content="[^"]*">/i, `<meta property="og:image:height" content="${route.ogImageHeight || 630}">`);
    if (route.ogImageAlt) {
      html = html.replace(/<meta property="og:image:alt" content="[^"]*">/i, `<meta property="og:image:alt" content="${route.ogImageAlt}">`);
    }
  }

  // 5. Replace Twitter tags
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/i, `<meta name="twitter:title" content="${route.title}">`);
  html = html.replace(/<meta name="twitter:description"\s+content="[^"]*">/i, `<meta name="twitter:description"\n    content="${route.description}">`);
  if (route.ogImage) {
    html = html.replace(/<meta name="twitter:image" content="[^"]*">/i, `<meta name="twitter:image" content="${route.ogImage}">`);
  }

  // 6. Handle language and RTL for Arabic page
  if (route.lang === 'ar') {
    html = html.replace(/<html\b[^>]*>/i, '<html lang="ar" class="dark" dir="rtl">');
    html = html.replace(/<meta property="og:locale" content="[^"]*">/i, '<meta property="og:locale" content="ar_AR">');
    html = html.replace(/<button class="lang-btn active" data-lang="en">EN<\/button>/gi, '<button class="lang-btn" data-lang="en">EN</button>');
    html = html.replace(/<button class="lang-btn" data-lang="ar">عربي<\/button>/gi, '<button class="lang-btn active" data-lang="ar">عربي</button>');
    html = translateHtml(html, i18n.ar);
  }

  // 7. Adjust active view class in body
  if (route.activeViewId && route.activeViewId !== 'view-home') {
    html = html.replace(/id="view-home" class="page-view active"/i, 'id="view-home" class="page-view"');
    const targetRegex = new RegExp(`id="${route.activeViewId}" class="page-view"`, 'i');
    html = html.replace(targetRegex, `id="${route.activeViewId}" class="page-view active"`);
  }

  // 8. Adjust desktop and mobile nav active items
  if (route.navRoute && route.navRoute !== 'home') {
    html = html.replace(/<a href="#home" class="nav-link active"/i, '<a href="#home" class="nav-link"');
    html = html.replace(/<a href="#home" class="nav-item active"/i, '<a href="#home" class="nav-item"');

    const desktopNavRegex = new RegExp(`(<a href="#${route.navRoute}" class="nav-link)"`, 'i');
    html = html.replace(desktopNavRegex, '$1 active"');

    const mobileNavRegex = new RegExp(`(<a href="#${route.navRoute}" class="nav-item)"`, 'i');
    html = html.replace(mobileNavRegex, '$1 active"');
  }

  return html;
}

console.log('--- Prerendering Static Routes for Mohammed Jouda Portfolio ---');

let createdCount = 0;
for (const route of routes) {
  const targetDir = path.join(rootDir, ...route.path.split('/'));
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const targetFile = path.join(targetDir, 'index.html');
  const renderedHtml = generateRouteHtml(route);
  fs.writeFileSync(targetFile, renderedHtml, 'utf8');
  console.log(`[OK] Generated: /${route.path} -> ${route.canonical}`);
  createdCount++;
}

console.log(`--- Finished: Successfully generated ${createdCount} static route pages! ---`);

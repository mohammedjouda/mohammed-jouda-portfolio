/**
 * Mohammed Jouda Portfolio - Client-Side SPA Router & Interactive Dynamics
 * Features: Zero-Reload Page Transitions, Follower Cursor, Bento Spotlight, Bilingual (EN/AR), Theme, & Project Filter
 */

(function () {
  'use strict';

  // --- Translation Dictionary (EN & AR) for Mohammed Jouda ---
  const i18n = {
    en: {
      pageTitles: {
        home: "Mohammed Jouda | Full Stack Web Developer",
        about: "Mohammed Jouda | About Me",
        career: "Mohammed Jouda | Career Experience",
        projects: "Mohammed Jouda | Featured Projects",
        achievements: "Mohammed Jouda | Achievements & Certifications",
        contact: "Mohammed Jouda | Get In Touch",
        'project-detail': "Mohammed Jouda | Project Details",
        '404': "Mohammed Jouda | 404 - Page Not Found"
      },
      navHome: "Home",
      navAbout: "About",
      navCareer: "Career",
      navProjects: "Projects",
      navAchievements: "Achievements",
      navContact: "Contact",
      rights: "All rights reserved.",
      heroTitle: "Hi, I'm Mohammed Jouda",
      roleTitle: "Full Stack Web Developer",
      location: "Based in Gaza, Palestine",
      downloadCv: "Download CV",
      heroBio: "Software Engineer with over 3 years of experience crafting high-performance, secure web applications. Strong core in Laravel, PHP, and AI API integration, paired with modern reactive frontends in Vue.js and React.",
      sectionLead: "Explore everything I've crafted, contributed, and accomplished.",
      projectsTitle: "Projects Showcase",
      projectsSubtitle: "A selection of real apps built to solve real problems.",
      exploreAll: "Explore projects",
      aboutTitle: "About Me",
      aboutSubtitle: "Who I am, what drives me, and the architectural principles I follow.",
      aboutSlide1Loc: "Gaza, Palestine • Tech Ecosystem",
      aboutSlide1Title: "Tech Presentations & Community Workshops",
      aboutSlide2Status: "Available for High-Impact Roles",
      aboutSlide2Title: "Mohammed Jouda • Full Stack Web Developer",
      bioLeadRole: "Full Stack Software Engineer",
      bioExpHighlight: "3+ Years Production Experience",
      aboutMetricsTitle: "Verified Engineering Metrics",
      aboutMetric1Label: "Years Production",
      aboutMetric1Sub: "Laravel, AI & Vue.js",
      aboutMetric2Label: "Degree GPA",
      aboutMetric2Sub: "Very Good (Honors)",
      aboutMetric3Label: "AI Training Hours",
      aboutMetric3Sub: "Intensive Track at UCASTI",
      aboutMetric4Label: "RESTful Endpoints",
      aboutMetric4Sub: "Documented via Swagger",
      aboutPhilEyebrow: "CORE PRINCIPLES",
      aboutPhilTitle: "Architectural Philosophy & Standards",
      aboutPhilSubtitle: "Engineering standards that guarantee resilience, speed, and clean code maintainability.",
      philPerfTitle: "Performance & Scalability",
      philPerfDesc: "Query optimization, database indexing, Redis caching, and async queues to deliver sub-100ms API response times.",
      philSecTitle: "Information Security",
      philSecDesc: "Hardened RBAC, OAuth, 2FA, sanitized endpoints, and strict data protection by design.",
      philAiTitle: "AI-Augmented Engineering",
      philAiDesc: "Using LLMs, embeddings, and prompt engineering to automate workflows and build intelligent applications.",
      philArchTitle: "Clean Architecture",
      philArchDesc: "Adherence to SOLID, decoupled service layers, and event-driven patterns that make codebases joy to scale.",
      filterAllSkills: "All",
      filterBackend: "Backend & APIs",
      filterFrontend: "Frontend & UI",
      filterAi: "AI & Automation",
      filterDevops: "DevOps & Tools",
      aboutCtaReadyBadge: "Ready to Build Scalable Systems",
      aboutCtaHeading: "Have an Ambitious Project in Mind?",
      aboutCtaDesc: "Whether designing resilient multi-tenant architectures or integrating intelligent AI workflows, I am ready to collaborate.",
      skillsTitle: "Skills & Tools",
      skillsSubtitle: "Covering web, frontend, and backend technologies.",
      achievementsTitle: "Achievements & Certifications",
      achievementsSubtitle: "A curated collection of certificates and badges I've earned throughout my professional and academic journey.",
      viewCertificate: "View Certificate",
      certTypeLabel: "TYPE",
      certCategoryLabel: "CATEGORY",
      certIssueDateLabel: "ISSUE DATE",
      credentialUrlBtn: "Credential URL",
      certCareerLabel: "CAREER",
      careerTitle: "Professional Experience",
      careerSubtitle: "My engineering journey, contributions, and practical impact.",
      testimonialsTitle: "Testimonials",
      testimonialsSubtitle: "What clients and colleagues say about working with me.",
      degreeHonor: "Bachelor Degree - 83.92% (Very Good)",
      tarekRole: "Property Management & Marketplace Client",
      tarekQuote: "Mohammed demonstrated solid understanding of backend architecture and API performance on the marketplace platform. He paid great attention to code quality, database query optimization, and delivering a reliable system.",
      alaaRole: "UCASTI & Academic Faculty, Gaza",
      alaaQuote: "Mohammed was consistently among the top engineers academically and practically; disciplined, deeply committed to clean code and SOLID principles, and excels at integrating AI capabilities into modern web applications.",
      marsaSummary: "Architected a scalable backend system handling complex vendor-product relationships with isolated workflows and dynamic permission management. Implemented RBAC, OAuth, 2FA, and secure payment integrations, improving transaction efficiency by 30%.",
      writeaiSummary: "Intelligent blogging platform developed during an intensive 90-hour program. Integrated AI generation tools to assist in automated content creation, prompt optimization, and smart editor workflows with LLM integration.",
      messengerSummary: "Production-grade real-time messaging system utilizing WebSockets (Pusher/Laravel Echo), live typing indicators, and group chat. Features a decoupled AI API service layer for intelligent conversational replies and queue-ready message handling.",
      technoSummary: "Engineered a full-featured Content Management System using Laravel, Filament, and Livewire for a reactive, SPA-like user experience without custom JavaScript overhead. Rapid admin panel development with custom filters and table widgets.",
      aboutHeadline: "Software Engineer Dedicated to Scalable Systems & AI Innovation",
      aboutP1: "I am a Software Engineer with over 3 years of experience designing and developing scalable, secure, and high-performance web applications. My core strength lies in backend engineering using PHP and Laravel, paired with reactive frontend expertise in Vue.js and React.",
      aboutP2: "A Clean Code advocate dedicated to SOLID principles, RESTful API design, and agile methodologies, with a proven track record in building multi-vendor marketplaces, SaaS platforms, and incorporating AI technologies to optimize workflows and deliver smart, impactful products.",
      eduTitle: "Bachelor of Web Technology & Information Security",
      eduSub: "Palestine Technical College | Gaza, Palestine - GPA: 83.92% (Very Good)",
      career1Role: "Backend Developer Trainee (Laravel & AI Integration)",
      career1Desc: "Engaged in an intensive, 120-hour market-driven backend program at UCASTI. Mastered advanced Laravel & PHP, applied modern AI workflows to accelerate coding and intelligent debugging, and successfully integrated AI capabilities into smart, modern web solutions.",
      career2Role: "Full Stack Developer (Trainee)",
      career2Desc: "Developed and documented 40+ secure RESTful API endpoints using Laravel at Areisto. Refined backend performance, reducing response times by 20% through efficient database queries and caching strategies. Collaborated within agile teams.",
      career3Role: "Freelance Backend Developer",
      career3Desc: "Developed an enterprise backend system for a property management platform, managing 500+ records and enhancing lead processing efficiency by 35%. Designed optimized relational database schemas and strict authentication levels.",
      careerHeroBadge: "Verified Engineering Experience",
      careerActionCv: "Download Full CV (PDF)",
      careerActionHire: "Discuss Opportunities",
      careerActionGithub: "GitHub Profile",
      careerMetric1Num: "3+ Years",
      careerMetric1Label: "Production Engineering",
      careerMetric1Sub: "Laravel, AI Integration & Vue.js",
      careerMetric2Num: "120+ Hours",
      careerMetric2Label: "AI & Laravel Track",
      careerMetric2Sub: "Intensive Program at UCASTI",
      careerMetric3Num: "40+ APIs",
      careerMetric3Label: "RESTful Endpoints",
      careerMetric3Sub: "Documented via Swagger at Areisto",
      careerMetric4Num: "20% Drop",
      careerMetric4Label: "Latency Reduction",
      careerMetric4Sub: "Query Optimization & Caching",
      careerMetric5Num: "35% Boost",
      careerMetric5Label: "Lead Processing Speed",
      careerMetric5Sub: "Enterprise Schema & Strict RBAC",
      careerFilterAll: "All Experience",
      careerFilterLaravel: "Laravel & AI Systems",
      careerFilterFullstack: "Full Stack & APIs",
      careerFilterFreelance: "Freelance & Enterprise",
      careerTimelineView: "Timeline View",
      careerGridView: "Impact Matrix",
      careerStatusActive: "Active Trainee",
      careerStatusCompleted: "Completed",
      careerStatusContract: "Contract Engagement",
      careerShippedLabel: "Associated Deliverables & Case Studies:",
      careerDeepDiveBtn: "Technical Architecture & Deep-Dive",
      careerDeepDiveClose: "Hide Architecture Details",
      careerFoundationsTitle: "Academic Foundations & Growth Ecosystem",
      careerFoundationsSub: "Formal web technology & information security degree paired with competitive talent acceleration fellowships.",
      careerEducationHeading: "Academic Degree & Selective Growth Programs",
      eduDegreeTitle: "Bachelor of Web Technology & Information Security",
      eduDegreeDesc: "Comprehensive engineering education covering distributed web architectures, relational database modeling, network defense, secure cryptography, and modern software engineering principles.",
      degreeConferredStatus: "Degree Conferred",
      eduHonorGpa: "GPA: 83.92% (Very Good / Honors)",
      eduMajorSecurity: "Web Security & Cryptography",
      eduRelationalDb: "Relational Data Systems (MySQL)",
      capstoneBadgeTitle: "Graduation Capstone Project • Grade: 83.92%",
      capstoneProjectTitle: "Marsa Store - Multi-Vendor Marketplace Platform",
      capstoneProjectSummary: "Architected a production-ready multi-vendor e-commerce platform in Laravel with tenant vendor isolation, Role-Based Access Control (RBAC), multi-currency dynamic listings, and optimized database query plans.",
      capstoneViewCaseBtn: "Explore Project Case Study",
      taqatTitle: "Tech Ecosystem & Talent Acceleration Fellow",
      taqatSummary: "Selected for intensive talent programs focused on cutting-edge software development practices, cross-border freelance collaboration, code reviews, and agile engineering workflows.",
      fellowshipStatus: "Selective Fellowship",
      careerEndorsementsTitle: "Mentorship & Client Endorsements",
      careerEndorsementsSub: "Observations from academic faculty and enterprise project leads.",
      careerCtaTitle: "Need an Engineer Who Delivers Measurable Performance?",
      careerCtaSubtitle: "Available for high-impact software roles, full-stack Laravel platforms, and AI integrations.",
      careerCtaBtn: "Start a Conversation",
      careerCtaCv: "Download Resume (PDF)",
      contactTitle: "Get In Touch",
      contactSubtitle: "Let's discuss full-stack engineering, AI integrations, or software opportunities.",
      statusAvailableTitle: "Available for new opportunities",
      statusAvailableSub: "Open to high-impact freelance projects, technical consultations, and full-time engineering roles.",
      statusResponseTime: "Reply time: under 24 hours",
      statusTimezone: "UTC+2 (Gaza / Palestine)",
      directEmail: "Direct Email",
      phoneWhatsapp: "Phone & WhatsApp",
      locationGaza: "Gaza, Palestine",
      remoteReady: "Remote Ready",
      connectSocial: "Professional Networks",
      directMessageTitle: "Send Direct Message",
      reachOut: "Ready to collaborate?",
      contactText: "Whether you have an upcoming project, freelance inquiry, or want to discuss full-stack engineering and AI integration, feel free to reach out.",
      basedIn: "Location",
      formName: "Your Name",
      formEmail: "Email Address",
      formSubject: "Subject",
      formMsg: "Message",
      sendMsg: "Send Message",
      msgSent: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      sendingMsg: "Sending message...",
      msgError: "Failed to send message. Please reach out directly at mohammedjouda02@gmail.com or via WhatsApp.",
      quickConsultText: "Need a direct technical discussion?",
      quickConsultLink: "Chat on WhatsApp →",
      searchTrigger: "Search or press",
      searchPlaceholder: "Type a command or search...",
      paletteNavigate: "to navigate",
      paletteSelect: "to select",
      paletteDismiss: "to close",
      readCaseStudy: "Explore Case Study",
      csChallengeTitle: "The Challenge & Requirements",
      csSolutionTitle: "The Engineering Solution",
      csTechTitle: "Technologies & Architecture",
      csHighlightsTitle: "Key Engineering Highlights",
      csDiscuss: "Discuss Similar Project",
      csLiveDemo: "Live Demo",
      csSourceCode: "Source Code",
      toastEmailCopied: "Email copied to clipboard!",
      toastPhoneCopied: "Phone copied to clipboard!",
      toastThemeChanged: "Theme switched successfully",
      toastLanguageChanged: "Language switched to English",
      groupPages: "Pages & Views",
      groupProjects: "Featured Case Studies",
      groupActions: "Quick Actions",
      actionDownloadCv: "Download Resume (PDF)",
      actionCopyEmail: "Copy Email Address",
      actionCopyPhone: "Copy Phone / WhatsApp",
      actionToggleTheme: "Toggle Dark / Light Theme",
      actionSwitchLang: "Switch Language to Arabic",
      actionGithub: "Visit GitHub Profile",
      actionLinkedin: "Connect on LinkedIn",
      actionX: "Visit X (Twitter) Profile",
      actionInstagram: "Follow on Instagram",
      paletteEmpty: "No matching commands or pages found.",
      viewProject: "View Project",
      showDetails: "Show Details",
      hideDetails: "Hide Details",
      exploreFullCaseStudy: "Explore Full Case Study",
      backToProjects: "Back to Projects",
      liveDemo: "Live System",
      sourceCode: "Source Code",
      discussSimilarProject: "Discuss Similar Architecture",
      projectSpecs: "Project Specifications",
      engineeringRole: "Role",
      timeline: "Timeline",
      projectContext: "Context",
      quickInquiry: "Need a Similar Solution?",
      interfacePreviewTitle: "System Architecture Interface Preview",
      leadArchitectRole: "Lead Full-Stack Architect",
      deliverables: "Deliverables",
      deliverablesValue: "Codebase, DB, Docs",
      previousProject: "← Previous Project",
      nextProject: "Next Project →",
      keyHighlights: "Key Highlights",
      technologiesUsed: "Tech Stack",
      systemPerformanceTitle: "Architectural Impact & Verified Metrics",
      engineeringHighlightsTitle: "Key Engineering Highlights",
      ctaProjectTitle: "Ready to Build a High-Performance System?",
      ctaProjectDesc: "Let us collaborate to architect scalable, resilient web applications tailored to your business goals.",
      badgeGraduation: "Graduation Project",
      badgeAICapstone: "AI Capstone",
      badgeRealTime: "Real-Time System",
      badgeCMS: "Content Management",
      badgeEnterprise: "Enterprise SaaS",
      badgeHealthcare: "Healthcare System",
      marsaCategory: "E-Commerce & Multi-Vendor",
      marsaTitle: "Marsa Store (Multi-Vendor Marketplace)",
      marsaH1: "✓ Multi-Vendor Product & Order Isolation",
      marsaH2: "✓ RBAC, OAuth & 2-Factor Authentication",
      marsaH3: "✓ Secure Payment Gateway Integration",
      writeaiCategory: "Artificial Intelligence SaaS",
      writeaiTitle: "Write AI (AI-Powered Blog Application)",
      writeaiH1: "✓ LLM Prompt Engineering & Context Injection",
      writeaiH2: "✓ Automated Meta Generation & SEO Optimization",
      writeaiH3: "✓ Reactive Markdown & Rich WYSIWYG Editor",
      messengerCategory: "WebSockets & Communications",
      messengerTitle: "AI-Powered Real-Time Messenger",
      messengerH1: "✓ WebSockets & Laravel Echo Broadcasting",
      messengerH2: "✓ Decoupled Intelligent Conversational AI Bot",
      messengerH3: "✓ Vue 3 Composition API & State Architecture",
      technoCategory: "Enterprise CMS & Admin",
      technoTitle: "Techno Plus CMS",
      technoH1: "✓ Filament Resource Scaffolding & Custom Tables",
      technoH2: "✓ Livewire Reactive Components without JS Bloat",
      technoH3: "✓ Dynamic Media Management & Access Controls",
      holmeCategory: "Engineering Management",
      holmeTitle: "Holme Engineering Consulting Platform",
      holmeSummary: "Enterprise portal for engineering consultancies handling project tracking, milestone audits, and client reporting.",
      holmeH1: "✓ Automated Milestone & Progress Tracking",
      holmeH2: "✓ Background Queues for Heavy Financial Reports",
      holmeH3: "✓ Multi-Tiered Client & Inspector Access Levels",
      curewayCategory: "HealthTech & Scheduling",
      curewayTitle: "Cureway Healthcare & Clinic Portal",
      curewaySummary: "Comprehensive clinic appointment and patient record management system with automated reminders and encrypted medical record logs.",
      curewayH1: "✓ Real-Time Doctor Slot Conflict Prevention",
      curewayH2: "✓ Encrypted Patient Medical History Storage",
      curewayH3: "✓ Automated Notification Webhooks",
      quickPreview: "Quick Preview",
      closeModal: "Close",
      marsaOrigin: "EDUCATION: Graduation Project (83.92%)",
      writeaiOrigin: "CERTIFICATES: AI Capstone @ UCASTI 90h",
      messengerOrigin: "CAREER: Real-Time WebSockets",
      technoOrigin: "CAREER: Filament CMS Platform",
      holmeOrigin: "CAREER: Enterprise Platform",
      curewayOrigin: "CAREER: HealthTech Scheduling",
      viewPhoto: "View Photo",
      statusAvailable: "Available for projects",
      heroTitleShort: "Mohammed Jouda",
      filterAll: "All Projects",
      filterFullstack: "Full Stack & Marketplace",
      filterAi: "AI & Automation",
      filterCms: "Laravel & Filament",
      emptyProjectsTitle: "No projects match this category",
      emptyProjectsDesc: "Try selecting another category or view all available engineering case studies.",
      resetFilter: "View All Projects",
      notFoundTag: "Error 404 • Not Found",
      notFoundTitle: "Route Not Found",
      notFoundSubtitle: "The page or case study you're looking for doesn't exist, has been relocated, or the link is broken.",
      returnHome: "Back to Home",
      exploreProjects: "Explore Projects",
      contactMe: "Contact Me",
      notFoundHint: "Tip: Press Ctrl + K to open Command Palette and jump anywhere across the portfolio.",
      backToTop: "Back to top"
    },
    ar: {
      pageTitles: {
        home: "محمد جودة | مطوّر Full Stack",
        about: "محمد جودة | عنّي",
        career: "محمد جودة | المسيرة المهنية",
        projects: "محمد جودة | معرض المشاريع",
        achievements: "محمد جودة | الإنجازات والشهادات",
        contact: "محمد جودة | تواصل معي",
        'project-detail': "محمد جودة | تفاصيل المشروع",
        '404': "محمد جودة | 404 - الصفحة غير موجودة"
      },
      navHome: "الرئيسية",
      navAbout: "عنّي",
      navCareer: "المسيرة المهنية",
      navProjects: "المشاريع",
      navAchievements: "الإنجازات",
      navContact: "تواصل معي",
      rights: "جميع الحقوق محفوظة.",
      heroTitle: "مرحباً، أنا محمد جودة",
      roleTitle: "مطوّر Full Stack",
      location: "غزة، فلسطين",
      downloadCv: "تحميل السيرة الذاتية",
      heroBio: "مهندس برمجيات بخبرة تزيد عن 3 سنوات في بناء وتطوير تطبيقات ويب آمنة وعالية الأداء. تخصص عميق في Laravel و PHP ودمج أدوات الذكاء الاصطناعي، مع واجهات تفاعلية حديثة بـ Vue.js و React.",
      sectionLead: "استكشف كل ما صمّمته، وساهمت فيه، وأنجزته.",
      projectsTitle: "معرض المشاريع",
      projectsSubtitle: "مجموعة مختارة من التطبيقات الحقيقية لحل مشكلات فعلية.",
      exploreAll: "استكشف المشاريع",
      aboutTitle: "عنّي",
      aboutSubtitle: "من أنا، وما الذي يلهمني، والمبادئ الهندسية التي أتبعها.",
      aboutSlide1Loc: "غزة، فلسطين • البيئة التقنية وريادة الأعمال",
      aboutSlide1Title: "محاضرات تقنية وورش عمل برمجية للمجتمع التقني",
      aboutSlide2Status: "متاح للمشاريع والفرص النوعية",
      aboutSlide2Title: "محمد جودة • مهندس برمجيات ومطور ويب متكامل",
      bioLeadRole: "مهندس برمجيات Full Stack",
      bioExpHighlight: "أكثر من 3 سنوات خبرة إنتاجية",
      aboutMetricsTitle: "مؤشرات الأثر والإنجاز الهندسي الموثق",
      aboutMetric1Label: "سنوات خبرة إنتاجية",
      aboutMetric1Sub: "تطوير Laravel والذكاء الاصطناعي وVue.js",
      aboutMetric2Label: "معدل التخرج بمرتبة الشرف",
      aboutMetric2Sub: "جيد جداً مرتفع (83.92%)",
      aboutMetric3Label: "ساعة تدريب تخصصي",
      aboutMetric3Sub: "مسار مكثف بحاضنة UCASTI",
      aboutMetric4Label: "نقاط نهاية برمجية RESTful",
      aboutMetric4Sub: "موثقة ومعمارية آمنة بـ Swagger",
      aboutPhilEyebrow: "المبادئ الهندسية الأساسية",
      aboutPhilTitle: "المعمارية البرمجية والمبادئ الهندسية",
      aboutPhilSubtitle: "معايير تضمن متانة الأنظمة، سرعة الاستجابة، وقابلية التوسع والصيانة بكفاءة.",
      philPerfTitle: "الأداء الفائق وقابلية التوسع",
      philPerfDesc: "تحسين استعلامات قواعد البيانات، الفهرسة، التخزين المؤقت بـ Redis، وطوابير المهام لسرعة استجابة فائقة تحت 100ms.",
      philSecTitle: "أمن المعلومات والتشفير",
      philSecDesc: "صلاحيات RBAC محكمة، مصادقة ثنائية 2FA، تطهير وفحص المدخلات، وحماية البيانات بالتصميم.",
      philAiTitle: "هندسة مدعومة بالذكاء الاصطناعي",
      philAiDesc: "توظيف نماذج LLM وهندسة الأوامر والأتمتة الذكية لبناء حلول استثنائية.",
      philArchTitle: "الكود النظيف والمعمارية المتينة",
      philArchDesc: "التزام راسخ بمبادئ SOLID، وعزل طبقات الخدمات، وأنماط التصميم المتطورة لسهولة التوسع.",
      filterAllSkills: "الكل",
      filterBackend: "الأنظمة الخلفية والـ APIs",
      filterFrontend: "الواجهات الأمامية",
      filterAi: "الذكاء الاصطناعي والأتمتة",
      filterDevops: "الأدوات والـ DevOps",
      aboutCtaReadyBadge: "جاهز لبناء أنظمة برمجية متطورة",
      aboutCtaHeading: "هل لديك مشروع طموح تود تحويله إلى واقع؟",
      aboutCtaDesc: "سواء كنت ترغب في تصميم بنية تحتية متكاملة لمتجر متعدد التجار أو دمج حلول الذكاء الاصطناعي، يسعدني العمل معك.",
      skillsTitle: "المهارات والأدوات",
      skillsSubtitle: "تشمل تقنيات الويب والواجهات الأمامية والخلفية.",
      achievementsTitle: "الإنجازات والشهادات",
      achievementsSubtitle: "مجموعة مختارة من الشهادات والاعتمادات التي نلتها خلال مسيرتي المهنية والأكاديمية.",
      viewCertificate: "عرض الشهادة",
      certTypeLabel: "النوع",
      certCategoryLabel: "التصنيف",
      certIssueDateLabel: "تاريخ الإصدار",
      credentialUrlBtn: "رابط الاعتماد",
      certCareerLabel: "المسار المهني",
      careerTitle: "المسيرة المهنية",
      careerSubtitle: "مسيرتي المهنية وخبراتي العملية ومشاركاتي التقنية.",
      testimonialsTitle: "التوصيات والآراء",
      testimonialsSubtitle: "ما يقوله العملاء والمشرفون عن العمل معي.",
      degreeHonor: "درجة البكالوريوس - 83.92% (جيد جداً)",
      tarekRole: "عميل منصة إدارة العقارات والمتجر",
      tarekQuote: "أظهر محمد فهماً عميقاً لهندسة النظم الخلفية وأداء الـ APIs في منصة المتجر. اهتمامه بجودة الكود وتحسين استعلامات قواعد البيانات جعل النظام موثوقاً وسريعاً للغاية.",
      alaaRole: "مشرف أكاديمي وباحث في حاضنة UCASTI",
      alaaQuote: "كان محمد من خيرة المهندسين المتميزين دراسياً وعملياً - ملتزم جداً بمعايير الكود النظيف ومبادئ SOLID، ولديه مرونة وسرعة استثنائية في دمج أدوات الذكاء الاصطناعي وحل المشكلات المعقدة.",
      marsaSummary: "هندسة معمارية لنظام خلفي متكامل لإدارة العلاقات المعقدة بين التجار والمنتجات بصلاحيات ديناميكية. تطبيق معايير الأمان RBAC و OAuth و 2FA وبوابات الدفع الإلكتروني، مما رفع كفاءة المعاملات بنسبة 30%.",
      writeaiSummary: "منصة تدوين ذكية تم بناؤها خلال برنامج تدريبي مكثف (90 ساعة). دمج أدوات التوليد بالذكاء الاصطناعي لدعم صناعة المحتوى وهندسة الأوامر (Prompt Engineering) باستخدام نماذج LLM الحديثة.",
      messengerSummary: "نظام محادثة فوري بمستوى إنتاجي يعتمد على تقنيات WebSockets (Laravel Echo/Pusher) ومؤشرات الكتابة المباشرة والمجموعات، مع طبقة خدمات مستقلة لدمج الذكاء الاصطناعي للردود التفاعلية.",
      technoSummary: "بناء نظام إدارة محتوى متكامل (CMS) باستخدام Laravel و Filament و Livewire لتجربة مستخدم تفاعلية وسريعة كأنها SPA بدون تعقيدات JavaScript، مع لوحات تحكم ديناميكية وفلاتر متطورة.",
      aboutHeadline: "مهندس برمجيات شغوف بالأنظمة القابلة للتوسع والحلول الذكية",
      aboutP1: "مهندس برمجيات بخبرة تزيد عن 3 سنوات في تصميم وتطوير تطبيقات ويب آمنة، قابلة للتوسع وعالية الأداء. تخصصي الأساسي في هندسة الواجهات الخلفية باستخدام PHP و Laravel، إلى جانب خبرة متقدمة في الواجهات الأمامية بـ Vue.js و React.",
      aboutP2: "ملتزم بمبادئ الكود النظيف (Clean Code) وقواعد SOLID وتصميم واجهات RESTful API، مع سجل مميز في بناء منصات التجارة متعددة التجار (Multi-Vendor)، وتطبيقات SaaS، ودمج تقنيات الذكاء الاصطناعي لرفع كفاءة العمل.",
      eduTitle: "بكالوريوس تكنولوجيا الويب وأمن المعلومات",
      eduSub: "كلية فلسطين التقنية | غزة، فلسطين - معدل: 83.92% (جيد جداً)",
      career1Role: "متدرب تطوير واجهات خلفية (Laravel والذكاء الاصطناعي)",
      career1Desc: "برنامج مكثف لمدة 120 ساعة في حاضنة UCASTI ركز على متطلبات السوق وإتقان نظام Laravel ودمج أدوات الذكاء الاصطناعي في تسريع البرمجة والـ Debugging وبناء حلول ذكية.",
      career2Role: "متدرب مطور Full Stack",
      career2Desc: "تطوير وتوثيق أكثر من 40 نقطة نهاية RESTful API آمنة باستخدام Laravel لدى شركة Areisto، وتحسين سرعة استجابة النظام بنسبة 20% عبر تحسين الاستعلامات والـ Caching.",
      career3Role: "مطور واجهات خلفية مستقل (عن بعد)",
      career3Desc: "بناء نظام خلفي متين لمنصة إدارة العقارات مع معالجة أكثر من 500 عقار ورفع كفاءة إدارة العملاء بنسبة 35%، وتصميم قواعد بيانات علائقية محكمة الصلاحيات.",
      careerHeroBadge: "خبرة هندسية موثقة",
      careerActionCv: "تحميل السيرة الذاتية (PDF)",
      careerActionHire: "تواصل لمناقشة فرصة",
      careerActionGithub: "الملف الشخصي على GitHub",
      careerMetric1Num: "+3 سنوات",
      careerMetric1Label: "خبرة إنتاجية",
      careerMetric1Sub: "تطوير Laravel والذكاء الاصطناعي وVue.js",
      careerMetric2Num: "120+ ساعة",
      careerMetric2Label: "تخصص Laravel والذكاء الاصطناعي",
      careerMetric2Sub: "برنامج تدريبي مكثف بحاضنة UCASTI",
      careerMetric3Num: "40+ نقطة",
      careerMetric3Label: "واجهات RESTful برمجية",
      careerMetric3Sub: "هندسة وتوثيق Swagger لدى Areisto",
      careerMetric4Num: "20% تسريع",
      careerMetric4Label: "تقليل زمن الاستجابة",
      careerMetric4Sub: "تحسين الاستعلامات والـ Caching",
      careerMetric5Num: "35% زيادة",
      careerMetric5Label: "سرعة معالجة الطلبات",
      careerMetric5Sub: "معمارية علائقية وصلاحيات RBAC",
      careerFilterAll: "كافة المسارات",
      careerFilterLaravel: "أنظمة Laravel والذكاء الاصطناعي",
      careerFilterFullstack: "Full Stack وواجهات برمجة",
      careerFilterFreelance: "العمل الحر والمؤسسي",
      careerTimelineView: "المخطط الزمني",
      careerGridView: "مصفوفة الأثر",
      careerStatusActive: "مسار تدريبي نشط",
      careerStatusCompleted: "مكتمل بنجاح",
      careerStatusContract: "عقد استشاري",
      careerShippedLabel: "المشاريع والنماذج البرمجية المرتبطة:",
      careerDeepDiveBtn: "المعمارية التقنية والتفاصيل الهندسية",
      careerDeepDiveClose: "إخفاء التفاصيل المعمارية",
      careerFoundationsTitle: "الأساس الأكاديمي والبرامج الريادية",
      careerFoundationsSub: "درجة بكالوريوس في تكنولوجيا الويب وأمن المعلومات مع برامج تنافسية لتسريع المواهب التقنية.",
      careerEducationHeading: "الدرجة الأكاديمية وبرامج تسريع المواهب التقنية",
      eduDegreeTitle: "بكالوريوس تكنولوجيا الويب وأمن المعلومات",
      eduDegreeDesc: "منهاج هندسي مكثف في معمارية الويب، ونمذجة قواعد البيانات العلائقية، والتشفير التطبيقي، ومبادئ هندسة البرمجيات الحديثة.",
      degreeConferredStatus: "تخرج مع مرتبة الشرف",
      eduHonorGpa: "المعدل التراكمي: 83.92% (جيد جداً مرتفع)",
      eduMajorSecurity: "أمن الويب والتشفير التطبيقي",
      eduRelationalDb: "أنظمة قواعد البيانات العلائقية (MySQL)",
      capstoneBadgeTitle: "مشروع التخرج المعتمد • بمعدل 83.92%",
      capstoneProjectTitle: "متجر مرسى - منصة تجارة إلكترونية متعددة التجار",
      capstoneProjectSummary: "تصميم وبناء بنية برمجية متكاملة لمتجر متعدد التجار في Laravel مع عزل بيانات التجار، وصلاحيات RBAC، وفهارس استعلام محسنة ذات أداء عالي.",
      capstoneViewCaseBtn: "استعراض دراسة حالة المشروع",
      taqatTitle: "زميل تسريع المواهب وتطوير البرمجيات",
      taqatSummary: "تم اختياري ضمن برامج ريادية مكثفة ركزت على أفضل الممارسات البرمجية، والعمل الحر العابر للحدود، ومراجعة الأكواد، ومنهجيات Agile.",
      fellowshipStatus: "زمالة تنافسية مميزة",
      careerEndorsementsTitle: "شهادات وتوصيات المشرفين والعملاء",
      careerEndorsementsSub: "آراء من المشرفين الأكاديميين وأصحاب المشاريع المؤسسية.",
      careerCtaTitle: "تبحث عن مهندس برمجيات يركز على الكفاءة والنتائج القابلة للقياس؟",
      careerCtaSubtitle: "متاح للمشاريع المتقدمة، وتطوير منصات Laravel المتكاملة، ودمج تقنيات الذكاء الاصطناعي.",
      careerCtaBtn: "تواصل معي الآن",
      careerCtaCv: "تحميل السيرة الذاتية (PDF)",
      contactTitle: "تواصل معي",
      contactSubtitle: "فلنبنِ شيئاً استثنائياً معاً.",
      statusAvailableTitle: "متاح للفرص والمشاريع الجديدة",
      statusAvailableSub: "مستعد للمشاريع المستقلة ذات الأثر العالي، والاستشارات التقنية، والوظائف الهندسية المتكاملة.",
      statusResponseTime: "زمن الرد: أقل من 24 ساعة",
      statusTimezone: "توقيت القدس UTC+2 (غزة / فلسطين)",
      directEmail: "البريد الإلكتروني المباشر",
      phoneWhatsapp: "الهاتف وواتساب",
      locationGaza: "غزة، فلسطين",
      remoteReady: "جاهز للعمل عن بعد",
      connectSocial: "الشبكات والمنصات المهنية",
      directMessageTitle: "إرسال رسالة مباشرة",
      reachOut: "جاهز للتعاون في مشروعك؟",
      contactText: "سواء كان لديك مشروع قادم، استفسار عمل حر، أو ترغب في مناقشة هندسة الويب وتطبيقات الذكاء الاصطناعي، يسعدني دائماً تواصلك.",
      basedIn: "الموقع",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formSubject: "موضوع الرسالة",
      formMsg: "رسالتك",
      sendMsg: "إرسال الرسالة",
      msgSent: "شكراً لك! تم استلام رسالتك بنجاح وسأتواصل معك في أقرب وقت.",
      sendingMsg: "جاري الإرسال...",
      msgError: "تعذر إرسال الرسالة تلقائياً. يُرجى التواصل مباشرة عبر البريد الإلكتروني أو واتساب.",
      quickConsultText: "هل تحتاج إلى مناقشة فنية فورية لمشروعك؟",
      quickConsultLink: "تحدث مباشرة عبر واتساب ←",
      searchTrigger: "بحث أو اضغط",
      searchPlaceholder: "ابحث عن صفحة، مشروع، أو إجراء...",
      paletteNavigate: "للتنقل",
      paletteSelect: "للاختيار",
      paletteDismiss: "للإغلاق",
      readCaseStudy: "استعراض دراسة الحالة",
      csChallengeTitle: "المشكلة والمتطلبات الهندسية",
      csSolutionTitle: "الحل والمعمارية البرمجية",
      csTechTitle: "التقنيات والأدوات المستخدمة",
      csHighlightsTitle: "أبرز الإنجازات والنتائج",
      csDiscuss: "تواصل لمشروع مشابه",
      csLiveDemo: "معاينة حية",
      csSourceCode: "كود المصدر",
      toastEmailCopied: "تم نسخ البريد الإلكتروني بنجاح!",
      toastPhoneCopied: "تم نسخ رقم الهاتف بنجاح!",
      toastThemeChanged: "تم تبديل المظهر بنجاح",
      toastLanguageChanged: "تم تبديل اللغة إلى العربية",
      groupPages: "صفحات وأقسام الموقع",
      groupProjects: "دراسات الحالة للمشاريع",
      groupActions: "إجراءات وأدوات سريعة",
      actionDownloadCv: "تحميل السيرة الذاتية (PDF)",
      actionCopyEmail: "نسخ البريد الإلكتروني",
      actionCopyPhone: "نسخ رقم الهاتف / واتساب",
      actionToggleTheme: "تبديل المظهر (ليلي / نهاري)",
      actionSwitchLang: "تبديل اللغة إلى الإنجليزية",
      actionGithub: "زيارة الملف الشخصي على GitHub",
      actionLinkedin: "التواصل عبر LinkedIn",
      actionX: "زيارة الحساب على X (تويتر)",
      actionInstagram: "المتابعة عبر إنستغرام",
      paletteEmpty: "لم يتم العثور على نتائج مطابقة.",
      viewProject: "عرض المشروع",
      showDetails: "عرض التفاصيل",
      hideDetails: "إخفاء التفاصيل",
      exploreFullCaseStudy: "استكشف دراسة الحالة للمشروع",
      backToProjects: "العودة إلى المشاريع",
      liveDemo: "النظام الحي",
      sourceCode: "الكود المصدري",
      discussSimilarProject: "ناقش معمارية مشابهة",
      projectSpecs: "المواصفات التقنية للمشروع",
      engineeringRole: "الدور الهندسي",
      timeline: "الفترة الزمنية",
      projectContext: "سياق المشروع",
      quickInquiry: "هل تحتاج حلاً برمجياً مشابهاً؟",
      interfacePreviewTitle: "معاينة واجهة ومعمارية النظام",
      leadArchitectRole: "مهندس معماري ومطور شامل",
      deliverables: "المخرجات",
      deliverablesValue: "الكود، قواعد البيانات، التوثيق",
      previousProject: "← المشروع السابق",
      nextProject: "المشروع التالي →",
      keyHighlights: "أبرز الإنجازات المعمارية",
      technologiesUsed: "التقنيات المستخدمة",
      systemPerformanceTitle: "الأثر المعماري والمقاييس المعتمدة",
      engineeringHighlightsTitle: "أبرز النقاط الهندسية",
      ctaProjectTitle: "هل تود بناء نظام برمجي عالي الأداء؟",
      ctaProjectDesc: "دعنا نتعاون لتصميم وبناء تطبيقات ويب متطورة وقابلة للتوسع تلبي متطلبات عملك.",
      badgeGraduation: "مشروع التخرج",
      badgeAICapstone: "مشروع ذكاء اصطناعي",
      badgeRealTime: "نظام فوري",
      badgeCMS: "إدارة المحتوى",
      badgeEnterprise: "نظام مؤسسي",
      badgeHealthcare: "نظام رعاية صحية",
      marsaCategory: "تجارة إلكترونية ومتعدد التجار",
      marsaTitle: "متجر مرسى (منصة تجارة متعددة التجار)",
      marsaH1: "✓ عزل متكامل لحسابات التجار والمنتجات والطلبات",
      marsaH2: "✓ نظام صلاحيات متقدم ومصادقة ثنائية 2FA",
      marsaH3: "✓ دمج بوابات دفع إلكتروني آمنة وعالية الموثوقية",
      writeaiCategory: "منصة ذكاء اصطناعي SaaS",
      writeaiTitle: "منصة تدوين مدعومة بالذكاء الاصطناعي (Write AI)",
      writeaiH1: "✓ هندسة أوامر النماذج اللغوية وحقن السياق الذكي",
      writeaiH2: "✓ توليد تلقائي للبيانات الوصفية وتحسين محركات البحث SEO",
      writeaiH3: "✓ محرر تدوين تفاعلي متقدم يدعم Markdown",
      messengerCategory: "أنظمة تواصل ومحادثة فورية (WebSockets)",
      messengerTitle: "تطبيق مراسلة فوري مدعوم بالذكاء الاصطناعي",
      messengerH1: "✓ بث فوري للرسائل عبر تقنيات WebSockets و Laravel Echo",
      messengerH2: "✓ بوت محادثة ذكي بطبقة خدمات مستقلة",
      messengerH3: "✓ بنية تفاعلية متطورة باستخدام Vue 3 Composition API",
      technoCategory: "نظام إدارة محتوى ولوحات تحكم مؤسسية",
      technoTitle: "نظام تكنو بلس لإدارة المحتوى (Techno Plus CMS)",
      technoH1: "✓ توليد موارد متقدمة وجداول مخصصة عبر Filament",
      technoH2: "✓ مكونات تفاعلية فورية بـ Livewire بدون تعقيد JavaScript",
      technoH3: "✓ إدارة وسائط ديناميكية وصلاحيات وصول دقيقة",
      holmeCategory: "منصة إدارة المشاريع والاستشارات الهندسية",
      holmeTitle: "منصة هولم للاستشارات وإدارة المشاريع (Holme)",
      holmeSummary: "منصة مؤسسية للاستشارات وإدارة المشاريع الهندسية لمتابعة الإنجاز، وتدقيق المعالم، والتقارير المالية للعملاء.",
      holmeH1: "✓ تتبع آلي للمراحل والتقدم الزمني للمشاريع",
      holmeH2: "✓ معالجة تقارير مالية ضخمة في الخلفية عبر طوابير المهام",
      holmeH3: "✓ مستويات صلاحيات متعددة للعملاء والمشرفين والمهندسين",
      curewayCategory: "منظومة طبية وإدارة العيادات (HealthTech)",
      curewayTitle: "بوابة كيورواي لإدارة العيادات الطبية (Cureway)",
      curewaySummary: "نظام شامل لإدارة المواعيد الطبية وسجلات المرضى في العيادات، مع تذكيرات آلية وسجلات طبية مشفرة.",
      curewayH1: "✓ منع تضارب المواعيد والفتحات الزمنية للأطباء في الوقت الفعلي",
      curewayH2: "✓ تخزين مشفر لسجلات المرضى والتاريخ الطبي",
      curewayH3: "✓ إشعارات وتنبيهات برمجية تلقائية للمواعيد",
      quickPreview: "معاينة سريعة",
      closeModal: "إغلاق",
      marsaOrigin: "التعليم: مشروع التخرج (83.92%)",
      writeaiOrigin: "الشهادات: مشروع التخرج للذكاء الاصطناعي (حاضنة UCASTI 90 ساعة)",
      messengerOrigin: "المسيرة المهنية: أنظمة محادثة فورية بـ WebSockets",
      technoOrigin: "المسيرة المهنية: منصة إدارة محتوى بـ Filament",
      holmeOrigin: "المسيرة المهنية: منصة استشارات مؤسسية",
      curewayOrigin: "المسيرة المهنية: منظومة رعاية صحية ومواعيد",
      viewPhoto: "عرض الصورة",
      statusAvailable: "متاح للمشاريع الجديدة",
      heroTitleShort: "محمد جودة",
      filterAll: "كافة المشاريع",
      filterFullstack: "تطوير شامل ومتاجر",
      filterAi: "ذكاء اصطناعي وأتمتة",
      filterCms: "لارافيل ولوحات تحكم",
      emptyProjectsTitle: "لا توجد مشاريع مطابقة لهذا التصنيف",
      emptyProjectsDesc: "جرّب اختيار تصنيف آخر أو استعرض كافة دراسات الحالة الهندسية المتاحة.",
      resetFilter: "عرض كافة المشاريع",
      notFoundTag: "خطأ 404 • غير موجود",
      notFoundTitle: "الصفحة غير موجودة",
      notFoundSubtitle: "الصفحة أو دراسة الحالة التي تبحث عنها غير متوفرة، أو تم نقلها، أو الرابط غير صالح.",
      returnHome: "العودة للرئيسية",
      exploreProjects: "استعراض المشاريع",
      contactMe: "تواصل معي",
      notFoundHint: "تلميح: اضغط Ctrl + K لفتح لوحة الأوامر والانتقال الفوري إلى أي قسم في الموقع.",
      backToTop: "إلى الأعلى"
    }
  };

  // --- State Variables ---
  let currentLang = localStorage.getItem('portfolio_lang') || 'en';
  let currentTheme = localStorage.getItem('portfolio_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  let currentRoute = 'home';

  // --- DOM Elements ---
  const htmlEl = document.documentElement;
  const mainContent = document.getElementById('main-content');
  const allViews = document.querySelectorAll('.page-view');
  const cursor = document.getElementById('custom-cursor');
  const cursorArrowPath = document.getElementById('cursor-arrow-path');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const toastContainer = document.getElementById('toast-container');
  const commandPaletteModal = document.getElementById('command-palette-modal');
  const paletteSearchInput = document.getElementById('palette-search-input');
  const paletteCloseBtn = document.getElementById('palette-close-btn');
  const paletteResults = document.getElementById('palette-results');
  const desktopSearchBtn = document.getElementById('desktop-search-btn');
  const mobileSearchBtn = document.getElementById('mobile-search-btn');
  const viewProjectDetail = document.getElementById('view-project-detail');
  const detailBackBtn = document.getElementById('detail-back-btn');
  const detailBreadcrumbTitle = document.getElementById('detail-breadcrumb-title');
  const detailCategory = document.getElementById('detail-category');
  const detailYear = document.getElementById('detail-year');
  const detailStatus = document.getElementById('detail-status');
  const detailTitle = document.getElementById('detail-title');
  const detailSubtitle = document.getElementById('detail-subtitle');
  const detailDemoLink = document.getElementById('detail-demo-link');
  const detailGithubLink = document.getElementById('detail-github-link');
  const detailDiscussBtn = document.getElementById('detail-discuss-btn');
  const detailMainImage = document.getElementById('detail-main-image');
  const galleryPrevBtn = document.getElementById('gallery-prev-btn');
  const galleryNextBtn = document.getElementById('gallery-next-btn');
  const galleryCounter = document.getElementById('gallery-counter');
  const detailThumbnailsStrip = document.getElementById('detail-thumbnails-strip');
  const detailMetricsGrid = document.getElementById('detail-metrics-grid');
  const detailChallenge = document.getElementById('detail-challenge');
  const detailSolution = document.getElementById('detail-solution');
  const detailTechTags = document.getElementById('detail-tech-tags');
  const detailHighlightsList = document.getElementById('detail-highlights-list');
  const seqPrevProject = document.getElementById('seq-prev-project');
  const seqPrevTitle = document.getElementById('seq-prev-title');
  const seqNextProject = document.getElementById('seq-next-project');
  const seqNextTitle = document.getElementById('seq-next-title');
  const detailOriginBadge = document.getElementById('detail-origin-badge');
  const detailSpecTimeline = document.getElementById('detail-spec-timeline');
  const detailSpecContext = document.getElementById('detail-spec-context');
  const detailGalleryViewport = document.getElementById('detail-gallery-viewport');
  const sidebarDiscussBtn = document.getElementById('sidebar-discuss-btn');
  const projectQuickModal = document.getElementById('project-quick-modal');
  const quickModalCategory = document.getElementById('quick-modal-category');
  const quickModalStatus = document.getElementById('quick-modal-status');
  const quickModalYear = document.getElementById('quick-modal-year');
  const quickModalCloseBtn = document.getElementById('quick-modal-close-btn');
  const quickModalImage = document.getElementById('quick-modal-image');
  const quickModalTitle = document.getElementById('quick-modal-title');
  const quickModalDesc = document.getElementById('quick-modal-desc');
  const quickModalProvIcon = document.getElementById('quick-modal-prov-icon');
  const quickModalProvText = document.getElementById('quick-modal-prov-text');
  const quickModalMetrics = document.getElementById('quick-modal-metrics');
  const quickModalHighlights = document.getElementById('quick-modal-highlights');
  const quickModalTechTags = document.getElementById('quick-modal-tech-tags');
  const quickModalDemoLink = document.getElementById('quick-modal-demo-link');
  const quickModalCodeLink = document.getElementById('quick-modal-code-link');
  const quickModalDismissBtn = document.getElementById('quick-modal-dismiss-btn');
  const quickModalViewFullBtn = document.getElementById('quick-modal-view-full-btn');

  // --- 1. CLIENT-SIDE SPA ROUTER (Zero-Reload Navigation) ---
  const validRoutes = ['home', 'about', 'career', 'projects', 'achievements', 'contact', 'project-detail', '404'];

  function navigateTo(route, updateHash = true) {
    const requestedRoute = route;

    // Check if route is a direct project detail route (e.g. project-marsa-store or project/marsa-store)
    if (route && (route.startsWith('project-') || route.startsWith('project/'))) {
      const projectId = route.replace(/^project[-/]/, '');
      if (caseStudiesData && caseStudiesData[projectId]) {
        currentRoute = route;

        // Hide all views & show project detail view
        allViews.forEach((view) => view.classList.remove('active'));
        if (viewProjectDetail) {
          viewProjectDetail.classList.add('active');
        }

        // Render project data
        renderProjectDetail(projectId);

        // Update active nav links (highlight projects nav item)
        document.querySelectorAll('[data-route]').forEach((link) => {
          if (link.getAttribute('data-route') === 'projects') {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Update document title
        const project = caseStudiesData[projectId];
        const projTitle = project.title[currentLang] || project.title.en;
        document.title = currentLang === 'ar' ? `محمد جودة | ${projTitle}` : `Mohammed Jouda | ${projTitle}`;

        // Scroll to top
        if (mainContent) {
          mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Update window hash
        if (updateHash) {
          if (window.location.hash !== `#${route}`) {
            window.history.pushState(null, '', `#${route}`);
          }
        }

        // Close mobile drawer
        closeDrawer();
        return;
      } else {
        // Unknown project ID! Route to 404
        route = '404';
      }
    }

    if (!validRoutes.includes(route)) {
      route = '404';
    }

    currentRoute = route;

    // 1. Hide all views & show active
    allViews.forEach((view) => {
      view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${route}`);
    if (targetView) {
      targetView.classList.add('active');
    }

    // If 404 view, update dynamic path display
    if (route === '404') {
      const pathDisplay = document.getElementById('not-found-path-display');
      if (pathDisplay) {
        pathDisplay.textContent = `/${requestedRoute || 'unknown'}`;
      }
    }

    // 2. Smoothly scroll main container to top
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 3. Update active nav links across desktop sidebar & mobile drawer
    document.querySelectorAll('[data-route]').forEach((link) => {
      if (link.getAttribute('data-route') === route) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 4. Update document title dynamically
    const dict = i18n[currentLang] || i18n.en;
    if (dict.pageTitles && dict.pageTitles[route]) {
      document.title = dict.pageTitles[route];
    }

    // 5. Update window hash for browser history support (Back/Forward)
    if (updateHash) {
      if (window.location.hash !== `#${route}`) {
        window.history.pushState(null, '', `#${route}`);
      }
    }

    // 6. Close mobile drawer if open
    closeDrawer();
  }

  // Handle routing clicks on any element with data-route
  document.addEventListener('click', (e) => {
    const routeTrigger = e.target.closest('[data-route]');
    if (routeTrigger) {
      e.preventDefault();
      const targetRoute = routeTrigger.getAttribute('data-route');
      navigateTo(targetRoute, true);
    }
  });

  // Listen to browser Back / Forward buttons & direct hash navigation
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash, false);
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    if (hash !== currentRoute) {
      navigateTo(hash, false);
    }
  });

  // --- 2. Custom Blue Pointer Cursor Implementation ---
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

  if (cursor && !prefersReducedMotion && !isTouchDevice) {
    let targetX = -100;
    let targetY = -100;
    let isVisible = false;
    let rafPending = false;

    function showCursor() {
      if (!isVisible) {
        isVisible = true;
        cursor.classList.add('visible');
        cursor.style.opacity = '1';
        htmlEl.classList.add('has-custom-cursor');
      }
    }

    function hideCursor() {
      if (isVisible) {
        isVisible = false;
        cursor.classList.remove('visible', 'clicking', 'hovering');
        cursor.style.opacity = '0';
        htmlEl.classList.remove('has-custom-cursor');
      }
    }

    function onMouseMove(e) {
      targetX = e.clientX;
      targetY = e.clientY;

      // Window viewport edge boundary check (prevents cursor freezing on viewport perimeter)
      if (
        e.clientX <= 0 ||
        e.clientY <= 0 ||
        e.clientX >= window.innerWidth - 1 ||
        e.clientY >= window.innerHeight - 1
      ) {
        hideCursor();
        return;
      }

      showCursor();

      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
          cursor.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
          rafPending = false;
        });
      }
    }

    // 1. Mouse movement tracking
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 2. Comprehensive viewport exit detection across window, document, and root html
    document.addEventListener('mouseleave', hideCursor);
    document.documentElement.addEventListener('mouseleave', hideCursor);
    window.addEventListener('mouseleave', hideCursor);

    // 3. Out-of-document boundary check
    document.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget && !e.toElement) {
        hideCursor();
      }
    });

    // 4. Window blur and tab visibility change (alt-tab, devtools, other apps)
    window.addEventListener('blur', hideCursor);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) hideCursor();
    });

    // 5. Re-entry detection
    document.addEventListener('mouseenter', showCursor);
    document.documentElement.addEventListener('mouseenter', showCursor);

    // 6. Click interactions
    window.addEventListener('mousedown', () => {
      if (isVisible) cursor.classList.add('clicking');
    });

    window.addEventListener('mouseup', () => {
      cursor.classList.remove('clicking');
    });

    // 7. Interactive Hover Listeners with delegation for static and dynamic controls
    document.addEventListener('mouseover', (e) => {
      const el = e.target.closest('a, button, input, textarea, select, [data-route], [data-cursor], .palette-item, .cs-action-btn, .cs-link-btn, .filter-btn, .bento-card, .method-interactive-card, .btn-preview-action, .quick-tech-tag, .career-toggle-details-btn, .career-project-chip, .cert-modern-card, .contact-status-card, .method-card, .social-brand-card, .career-role-card, .not-found-card, .floating-back-to-top, .projects-empty-state');
      if (el && isVisible) {
        cursor.classList.add('hovering');
        const color = el.getAttribute('data-cursor-color');
        if (color && cursorArrowPath) {
          cursorArrowPath.style.fill = color;
        }
      }
    });

    document.addEventListener('mouseout', (e) => {
      const el = e.target.closest('a, button, input, textarea, select, [data-route], [data-cursor], .palette-item, .cs-action-btn, .cs-link-btn, .filter-btn, .bento-card, .method-interactive-card, .btn-preview-action, .quick-tech-tag, .career-toggle-details-btn, .career-project-chip, .cert-modern-card, .contact-status-card, .method-card, .social-brand-card, .career-role-card, .not-found-card, .floating-back-to-top, .projects-empty-state');
      if (el && (!e.relatedTarget || !el.contains(e.relatedTarget))) {
        cursor.classList.remove('hovering');
        if (cursorArrowPath) {
          cursorArrowPath.style.fill = '#265C91';
        }
      }
    });
  }

  // --- 3. Dynamic Radial Spotlight & 3D Perspective Tilt on Cards (Bento, Projects, Career, Achievements & Contact) ---
  const bentoCards = document.querySelectorAll(
    '.bento-card, .about-bento-card, .project-full-card, .cert-modern-card, .contact-status-card, .method-card, .social-brand-card, .contact-bento-form-panel, .career-role-card, .not-found-card, .projects-empty-state'
  );
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  bentoCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      if (prefersReduced) return;

      // Do not tilt form panel while user is actively interacting with form fields
      if (card.classList.contains('contact-bento-form-panel') && e.target.closest('input, textarea, button')) {
        card.style.transform = '';
        return;
      }

      // Micro-interaction: Subtle 3D perspective tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      let maxTilt = 4.5;
      let translateY = -2;
      let perspective = 850;

      if (card.classList.contains('project-full-card')) {
        maxTilt = 3.2;
        translateY = -6;
        perspective = 1000;
      } else if (card.classList.contains('cert-modern-card')) {
        maxTilt = 3.6;
        translateY = -6;
        perspective = 950;
      } else if (card.classList.contains('contact-status-card')) {
        maxTilt = 2.4;
        translateY = -4;
        perspective = 850;
      } else if (card.classList.contains('method-card')) {
        maxTilt = 2.0;
        translateY = -3;
        perspective = 800;
      } else if (card.classList.contains('social-brand-card')) {
        maxTilt = 2.8;
        translateY = -3;
        perspective = 750;
      } else if (card.classList.contains('not-found-card')) {
        maxTilt = 2.4;
        translateY = -4;
        perspective = 900;
      } else if (card.classList.contains('career-role-card')) {
        maxTilt = 2.0;
        translateY = -3;
        perspective = 900;
      } else if (card.classList.contains('contact-bento-form-panel')) {
        maxTilt = 1.2;
        translateY = -2;
        perspective = 1200;
      }

      const rotateX = (-percentY * maxTilt).toFixed(2);
      const rotateY = (percentX * maxTilt).toFixed(2);

      card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${translateY}px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // --- 4. Theme Toggle (Dark / Light) ---
  function applyTheme(theme, showFeedback = false) {
    currentTheme = theme;
    if (theme === 'dark') {
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
    if (showFeedback && typeof showToast === 'function') {
      const dict = i18n[currentLang] || i18n.en;
      showToast(dict.toastThemeChanged, 'theme');
    }
  }

  const themeBtns = [
    document.getElementById('desktop-theme-btn'),
    document.getElementById('mobile-theme-btn')
  ].filter(Boolean);

  themeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const newTheme = htmlEl.classList.contains('dark') ? 'light' : 'dark';
      applyTheme(newTheme, true);
    });
  });

  // --- 5. Language & RTL Switching ---
  function applyLanguage(lang, showFeedback = false) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update buttons active state
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update all i18n text nodes
    const dict = i18n[lang] || i18n.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const toggleBtn = el.closest('.career-deep-dive-toggle');
      if (toggleBtn && toggleBtn.getAttribute('aria-expanded') === 'true' && key === 'careerDeepDiveBtn') {
        el.textContent = dict.careerDeepDiveClose || 'Hide Architecture Details';
      } else if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update search input placeholder
    if (paletteSearchInput && dict.searchPlaceholder) {
      paletteSearchInput.placeholder = dict.searchPlaceholder;
    }

    // Update profile photo trigger and lightbox labels
    const profileTrigger = document.getElementById('profile-photo-trigger');
    if (profileTrigger) {
      profileTrigger.setAttribute('data-cursor', dict.viewPhoto || 'View Photo');
      profileTrigger.setAttribute('aria-label', lang === 'ar' ? 'عرض الصورة الشخصية لمحمد جودة' : 'View Mohammed Jouda Profile Photo');
    }
    const photoCloseBtn = document.getElementById('photo-lightbox-close-btn');
    if (photoCloseBtn) {
      photoCloseBtn.setAttribute('data-cursor', dict.closeModal || 'Close');
      photoCloseBtn.setAttribute('aria-label', dict.closeModal || 'Close');
    }

    const certCloseBtn = document.getElementById('cert-modal-close-btn');
    if (certCloseBtn) {
      certCloseBtn.setAttribute('data-cursor', dict.closeModal || 'Close');
      certCloseBtn.setAttribute('aria-label', dict.closeModal || 'Close');
    }

    // Update contact form placeholders and cursor hints
    const contactName = document.getElementById('contact-name');
    if (contactName) contactName.placeholder = lang === 'ar' ? 'الاسم بالكامل' : 'John Doe';
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) contactEmail.placeholder = lang === 'ar' ? 'name@example.com' : 'john@example.com';
    const contactSubject = document.getElementById('contact-subject');
    if (contactSubject) contactSubject.placeholder = lang === 'ar' ? 'استفسار عن مشروع / استشارة تقنية' : 'Project Inquiry / Consultation';
    const contactMsg = document.getElementById('contact-msg');
    if (contactMsg) contactMsg.placeholder = lang === 'ar' ? 'مرحباً محمد، أود التواصل بشأن...' : "Hello Mohammed, I'd like to collaborate on...";

    const contactStatusCard = document.querySelector('.contact-status-card');
    if (contactStatusCard) contactStatusCard.setAttribute('data-cursor', lang === 'ar' ? 'متاح' : 'Available');
    const emailMethodCard = document.querySelector('.method-card-email');
    if (emailMethodCard) emailMethodCard.setAttribute('data-cursor', lang === 'ar' ? 'إرسال بريد' : 'Send Email');
    const phoneMethodCard = document.querySelector('.method-card-phone');
    if (phoneMethodCard) phoneMethodCard.setAttribute('data-cursor', lang === 'ar' ? 'محادثة واتساب' : 'Chat on WhatsApp');
    const locationMethodCard = document.querySelector('.method-card-location');
    if (locationMethodCard) locationMethodCard.setAttribute('data-cursor', lang === 'ar' ? 'الموقع' : 'Location');
    const contactSubmitBtn = document.querySelector('.spa-submit-btn');
    if (contactSubmitBtn) contactSubmitBtn.setAttribute('data-cursor', lang === 'ar' ? 'إرسال الرسالة' : 'Send Message');

    // Update project cards cursor
    document.querySelectorAll('.project-full-card').forEach(card => {
      card.setAttribute('data-cursor', dict.viewProject || 'View Project');
    });

    // Refresh achievements cards language
    if (typeof updateAchievementsGridLanguage === 'function') {
      updateAchievementsGridLanguage(lang);
    }

    // Refresh active certificate detail modal if open
    if (typeof isCertModalOpen === 'function' && isCertModalOpen() && activeCertId) {
      openCertModal(activeCertId);
    }

    // Refresh command palette if active
    if (typeof renderPaletteResults === 'function' && typeof isPaletteOpen === 'function' && isPaletteOpen()) {
      renderPaletteResults(paletteSearchInput ? paletteSearchInput.value : '');
    }

    // Refresh quick preview modal if open
    if (typeof isQuickModalOpen === 'function' && isQuickModalOpen() && currentQuickModalProjectId) {
      renderQuickModal(currentQuickModalProjectId);
    }

    // If currently on a project detail page, re-render it
    if (currentRoute && (currentRoute.startsWith('project-') || currentRoute.startsWith('project/'))) {
      const projectId = currentRoute.replace(/^project[-/]/, '');
      if (typeof renderProjectDetail === 'function') {
        renderProjectDetail(projectId);
      }
      const project = caseStudiesData[projectId];
      if (project) {
        const projTitle = project.title[lang] || project.title.en;
        document.title = lang === 'ar' ? `محمد جودة | ${projTitle}` : `Mohammed Jouda | ${projTitle}`;
      }
    } else if (dict.pageTitles && dict.pageTitles[currentRoute]) {
      document.title = dict.pageTitles[currentRoute];
    }

    if (showFeedback && typeof showToast === 'function') {
      showToast(dict.toastLanguageChanged, 'globe');
    }
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      if (selected && selected !== currentLang) {
        applyLanguage(selected, true);
      }
    });
  });

  // --- 6. Mobile Navigation Drawer ---
  function openDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.add('open');
      drawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.remove('open');
      drawerOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  // --- 7. Projects Category Filter & Smooth Motion (in #view-projects) ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-full-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleIndex = 0;

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        const matches = filter === 'all' || category.includes(filter);

        if (matches) {
          card.classList.remove('filtering-hidden', 'filtering-out');
          card.classList.add('filtering-in');
          card.style.animationDelay = `${visibleIndex * 60}ms`;
          visibleIndex++;

          const cleanup = () => {
            card.classList.remove('filtering-in');
            card.style.animationDelay = '';
            card.removeEventListener('animationend', cleanup);
          };
          card.addEventListener('animationend', cleanup);
        } else {
          card.classList.remove('filtering-in');
          card.style.animationDelay = '';
          card.classList.add('filtering-out');

          setTimeout(() => {
            if (card.classList.contains('filtering-out')) {
              card.classList.remove('filtering-out');
              card.classList.add('filtering-hidden');
            }
          }, 200);
        }
      });

      // Dynamic empty state indicator for project category filtering
      const emptyStateEl = document.getElementById('projects-empty-state');
      if (emptyStateEl) {
        if (visibleIndex === 0) {
          emptyStateEl.classList.remove('hidden');
        } else {
          emptyStateEl.classList.add('hidden');
        }
      }
    });
  });

  const emptyStateResetBtn = document.getElementById('empty-state-reset-btn');
  if (emptyStateResetBtn) {
    emptyStateResetBtn.addEventListener('click', () => {
      const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
      if (allFilterBtn) allFilterBtn.click();
    });
  }

  // Accessible keyboard activation for project cards (Enter and Space)
  projectCards.forEach((card) => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('a, button, input')) return;
        e.preventDefault();
        const projectId = card.getAttribute('data-project-id');
        if (projectId) {
          navigateTo(`project-${projectId}`, true);
        }
      }
    });
  });

  // --- 7b. Career Experience Interactive Filters & View Modes (in #view-career) ---
  const careerFilterBtns = document.querySelectorAll('.career-filter-btn');
  const careerNodes = document.querySelectorAll('.career-milestone-node');

  careerFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      careerFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-career-filter');

      careerNodes.forEach((node) => {
        const track = node.getAttribute('data-track') || '';
        if (filter === 'all' || track.includes(filter)) {
          node.style.display = '';
          node.classList.remove('filtered-out');
        } else {
          node.style.display = 'none';
          node.classList.add('filtered-out');
        }
      });
    });
  });

  // Career View Mode (Timeline vs Impact Grid)
  const careerViewBtns = document.querySelectorAll('.career-view-btn');
  const careerContainer = document.getElementById('career-timeline-container');

  careerViewBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      careerViewBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-view-mode');
      if (careerContainer) {
        if (mode === 'grid') {
          careerContainer.classList.add('mode-grid');
          careerContainer.classList.remove('mode-timeline');
        } else {
          careerContainer.classList.add('mode-timeline');
          careerContainer.classList.remove('mode-grid');
        }
      }
    });
  });

  // Career Technical Deep-Dive Accordion Trigger
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.career-deep-dive-toggle');
    if (trigger) {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-target');
      const drawer = document.getElementById(targetId);
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      if (drawer) {
        if (isExpanded) {
          drawer.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
          const toggleText = trigger.querySelector('.toggle-text');
          const dict = i18n[currentLang] || i18n.en;
          if (toggleText) toggleText.textContent = dict.careerDeepDiveBtn || 'Technical Architecture & Deep-Dive';
        } else {
          drawer.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
          const toggleText = trigger.querySelector('.toggle-text');
          const dict = i18n[currentLang] || i18n.en;
          if (toggleText) toggleText.textContent = dict.careerDeepDiveClose || 'Hide Architecture Details';
        }
      }
    }
  });

  // --- 8. Conversion Tracking Engine & Analytics Dispatcher ---
  function trackConversion(eventName, params = {}) {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      lang: currentLang,
      route: currentRoute,
      ...params
    };

    console.log(`[Lead & Conversion Tracker] ${eventName}:`, payload);

    // Push to Google Tag / GA4 if present
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    }
    // Push to Google Tag Manager dataLayer if present
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }
    // Push to Cloudflare Web Analytics / custom event if available
    if (window.cfAnalytics && typeof window.cfAnalytics.track === 'function') {
      window.cfAnalytics.track(eventName, payload);
    }
  }
  window.trackConversion = trackConversion;

  // Global Conversion Tracking Listener for High-Impact Lead Actions
  document.addEventListener('click', (e) => {
    // 1. Resume / CV PDF Download
    const cvLink = e.target.closest('a[href*="Mohammed_Jouda_CV.pdf"]');
    if (cvLink) {
      trackConversion('lead_cv_download', {
        href: cvLink.getAttribute('href'),
        label: cvLink.textContent.trim() || 'Download CV'
      });
      return;
    }

    // 2. WhatsApp Direct Chat
    const waLink = e.target.closest('a[href*="wa.me"]');
    if (waLink) {
      trackConversion('lead_whatsapp_click', {
        href: waLink.getAttribute('href'),
        label: 'Direct WhatsApp Chat'
      });
      return;
    }

    // 3. Email Direct Click
    const mailLink = e.target.closest('a[href^="mailto:"]');
    if (mailLink) {
      trackConversion('lead_email_click', {
        href: mailLink.getAttribute('href'),
        label: 'Direct Email Contact'
      });
      return;
    }

    // 4. Project Case Study Exploration
    const projectTrigger = e.target.closest('[data-project-id], .project-full-card, .btn-preview-action');
    if (projectTrigger) {
      const pId = projectTrigger.getAttribute('data-project-id') || 
                  (projectTrigger.closest('[data-project-id]') && projectTrigger.closest('[data-project-id]').getAttribute('data-project-id'));
      if (pId) {
        trackConversion('case_study_interaction', { project_id: pId });
      }
    }
  });

  // --- 8b. Real Asynchronous Contact Form Submission Handler ---
  window.handleContactSubmit = async function () {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const msgInput = document.getElementById('contact-msg');
    const botcheck = document.getElementById('contact-botcheck');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('contact-submit-btn');
    const submitText = document.getElementById('contact-submit-text');
    const submitIcon = document.getElementById('contact-submit-icon');

    // Anti-spam honeypot verification
    if (botcheck && botcheck.value.trim() !== '') {
      console.warn('Spam bot caught via honeypot field.');
      return;
    }

    const dict = i18n[currentLang] || i18n.en;
    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : 'Project Inquiry / Consultation';
    const message = msgInput ? msgInput.value.trim() : '';

    if (!name || !email || !message) {
      return;
    }

    // Set interactive loading state
    if (submitBtn) submitBtn.disabled = true;
    if (submitText) submitText.textContent = dict.sendingMsg || 'Sending message...';
    if (submitIcon) {
      submitIcon.outerHTML = '<span id="contact-submit-icon" class="spa-submit-spinner" aria-hidden="true"></span>';
    }
    if (feedback) {
      feedback.className = 'form-feedback hidden';
      feedback.textContent = '';
    }

    const payload = {
      name: name,
      email: email,
      _subject: `[Portfolio Lead] ${subject} - from ${name}`,
      message: message,
      _template: 'table',
      _captcha: 'false',
      site_locale: currentLang
    };

    // Check if running on file:// protocol where FormSubmit blocks requests
    if (window.location.protocol === 'file:') {
      console.warn('FormSubmit requires an HTTP/HTTPS origin and cannot accept file:// protocol.');
      if (feedback) {
        feedback.innerHTML = `
          <div style="font-weight: 700; margin-bottom: 6px;">
            ${currentLang === 'ar' ? '⚠️ تنبيه للتطوير المحلي' : '⚠️ Local Protocol Notice'}
          </div>
          <div style="font-size: 13px; line-height: 1.5; margin-bottom: 8px;">
            ${currentLang === 'ar' 
              ? 'خدمات نماذج الويب تمنع استقبال الطلبات من مسار الملفات المباشر (file://). لتجربة النموذج بنجاح، يُرجى فتح الموقع عبر خادم محلي مثل <code>http://localhost:3333</code> أو بعد رفعه على الاستضافة الحية.' 
              : 'Web form APIs block requests originating from file:// URLs. To test live submission, please run via local web server (e.g. <code>http://localhost:3333</code>) or on a live domain.'}
          </div>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-top: 8px;">
            <a href="mailto:mohammedjouda02@gmail.com?subject=${encodeURIComponent('[Portfolio Inquiry] ' + subject)}&body=${encodeURIComponent('From: ' + name + '\n\n' + message)}" class="error-action-link">
              ✉ ${currentLang === 'ar' ? 'إرسال عبر البريد مباشرة' : 'Email Directly'}
            </a>
            <a href="https://wa.me/970599108787?text=${encodeURIComponent('Hello Mohammed, my name is ' + name + '. ' + subject + ' - ' + message)}" target="_blank" rel="noopener noreferrer" class="error-action-link">
              💬 ${currentLang === 'ar' ? 'مراسلة عبر واتساب' : 'Chat on WhatsApp'}
            </a>
          </div>
        `;
        feedback.className = 'form-feedback warning';
        feedback.classList.remove('hidden');
      }
      if (submitBtn) submitBtn.disabled = false;
      if (submitText) submitText.textContent = dict.sendMsg || 'Send Message';
      const sp = document.getElementById('contact-submit-icon');
      if (sp) {
        sp.outerHTML = `<svg id="contact-submit-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
      }
      return;
    }

    try {
      // FormSubmit AJAX API delivers messages directly to mohammedjouda02@gmail.com via activated secure token
      const response = await fetch('https://formsubmit.co/ajax/1961d5ede44be63fef11e95540ad8fb4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));
      const isSuccess = response.ok && (result.success === 'true' || result.success === true);

      if (isSuccess) {
        // Genuine Success
        const successMsg = dict.msgSent || 'Thank you! Your message has been sent successfully.';
        if (feedback) {
          feedback.textContent = successMsg;
          feedback.className = 'form-feedback success';
          feedback.classList.remove('hidden');
        }

        if (form) form.reset();
        showToast(successMsg, 'check');

        trackConversion('lead_form_submitted', {
          sender_name: name,
          sender_email: email,
          subject: subject
        });

        setTimeout(() => {
          if (feedback) feedback.classList.add('hidden');
        }, 9000);
      } else if (result.message && /activation/i.test(result.message)) {
        // First-time Form Activation Required by FormSubmit
        console.warn('FormSubmit Activation Required:', result.message);
        if (feedback) {
          feedback.innerHTML = `
            <div style="font-weight: 700; margin-bottom: 6px;">
              ${currentLang === 'ar' ? '⚠️ خطوة أخيرة مطلوبة لتفعيل الاستلام' : '⚠️ Activation Required for First Use'}
            </div>
            <div style="font-size: 13px; line-height: 1.55;">
              ${currentLang === 'ar' 
                ? 'أرسلت خدمة FormSubmit رسالة تأكيد إلى بريدك <strong>mohammedjouda02@gmail.com</strong>. يُرجى فتح بريدك (أو مجلد الـ Spam / الرسائل غير المرغوب فيها) والضغط على زر <strong>Activate Form</strong> لمرة واحدة فقط، لتبدأ كل الرسائل القادمة بالوصول فوراً لصندوق بريدك!' 
                : 'FormSubmit has sent an activation link to <strong>mohammedjouda02@gmail.com</strong>. Please check your inbox or Spam folder and click <strong>Activate Form</strong> once to enable direct delivery for all future messages.'}
            </div>
          `;
          feedback.className = 'form-feedback warning';
          feedback.classList.remove('hidden');
        }
        showToast(currentLang === 'ar' ? 'تحقق من بريدك لتأكيد تفعيل النموذج' : 'Check email to activate form', 'alert');
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('Direct API submission encountered issue:', err);
      const errorMsg = dict.msgError || 'Failed to send message. Please reach out directly at mohammedjouda02@gmail.com or via WhatsApp.';
      if (feedback) {
        feedback.innerHTML = `
          <div>${errorMsg}</div>
          <div style="margin-top: 10px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <a href="mailto:mohammedjouda02@gmail.com?subject=${encodeURIComponent('[Portfolio] ' + subject)}&body=${encodeURIComponent('From: ' + name + '\n\n' + message)}" class="error-action-link">
              ✉ ${currentLang === 'ar' ? 'مراسلة عبر البريد مباشرة' : 'Email Directly'}
            </a>
            <a href="https://wa.me/970599108787?text=${encodeURIComponent('Hello Mohammed, my name is ' + name + '. ' + subject + ' - ' + message)}" target="_blank" rel="noopener noreferrer" class="error-action-link">
              💬 ${currentLang === 'ar' ? 'محادثة عبر واتساب' : 'Chat on WhatsApp'}
            </a>
          </div>
        `;
        feedback.className = 'form-feedback error';
        feedback.classList.remove('hidden');
      }

      showToast(currentLang === 'ar' ? 'تعذر الإرسال الآلي، يُرجى المراسلة المباشرة' : 'Auto-send failed, please email directly', 'alert');
    } finally {
      // Restore submit button state
      if (submitBtn) submitBtn.disabled = false;
      if (submitText) submitText.textContent = dict.sendMsg || 'Send Message';
      const spinner = document.getElementById('contact-submit-icon');
      if (spinner) {
        spinner.outerHTML = `
          <svg id="contact-submit-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        `;
      }
    }
  };

  // --- 9. Toast Notification System ---
  function showToast(message, iconType = 'check') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';

    let iconSvg = '';
    if (iconType === 'check') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else if (iconType === 'copy') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>';
    } else if (iconType === 'sun' || iconType === 'theme') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>';
    } else if (iconType === 'globe') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';
    } else {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    }

    toast.innerHTML = `<span class="toast-icon">${iconSvg}</span><span class="toast-text">${message}</span>`;
    toastContainer.appendChild(toast);

    let dismissed = false;
    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      toast.classList.add('fade-out');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 260);
    };

    toast.addEventListener('click', dismiss);
    setTimeout(dismiss, 3200);
  }

  // --- 10. Interactive Case Studies Modal System ---
  const caseStudiesData = {
    'marsa-store': {
      category: { en: "E-Commerce & Multi-Vendor", ar: "التجارة الإلكترونية والمنصات المتعددة" },
      year: "2025",
      status: { en: "Graduation Project (Honors)", ar: "مشروع التخرج بمرتبة الشرف" },
      origin: {
        icon: "edu",
        en: "EDUCATION: Graduation Project (83.92%)",
        ar: "التعليم الأكاديمي: مشروع التخرج (83.92%)"
      },
      title: { en: "Marsa Store - Multi-Vendor Marketplace", ar: "متجر مرسى - منصة تجارة متعددة التجار" },
      subtitle: {
        en: "Scalable backend architecture with isolated multi-tenant workflows and dynamic permission matrix.",
        ar: "معمارية خلفية قابلة للتوسع مع عزل بيانات التجار وإدارة الصلاحيات متعددة المستويات."
      },
      image: "assets/projects/nexus.webp",
      gallery: [
        "assets/projects/nexus.webp",
        "assets/projects/devaura/2.webp"
      ],
      metrics: [
        { value: "+30%", labelEn: "Transaction Efficiency", labelAr: "كفاءة المعاملات" },
        { value: "RBAC + 2FA", labelEn: "Security Standard", labelAr: "معايير الأمان" },
        { value: "500+", labelEn: "Catalog Capacity", labelAr: "سعة كتالوج المنتجات" }
      ],
      challenge: {
        en: "Building a multi-vendor marketplace requires strict data isolation between vendors, dynamic commission calculation, and high-security transactional guarantees without performance bottlenecks when handling concurrent shopping carts.",
        ar: "بناء منصة تجارة إلكترونية متعددة التجار يتطلب عزلاً صارماً لبيانات وسجلات كل تاجر، واحتساب العمولات بدقة، وضمان أمان المعاملات المالية دون التأثير على سرعة استجابة السلات الشرائية المتزامنة."
      },
      solution: {
        en: "Engineered a modular Laravel backend using Repository and Service patterns. Implemented Role-Based Access Control (RBAC), OAuth2 authentication, two-factor verification (2FA), and indexed relational schemas in MySQL to achieve sub-100ms query latency.",
        ar: "تصميم بنية خلفية معيارية في Laravel بالاعتماد على نمطي Service و Repository. تطبيق نظام صلاحيات دقيق (RBAC)، ومصادقة OAuth2، والتحقق الثنائي (2FA)، مع فهرسة جداول MySQL لتحقيق زمن استجابة استعلامات أقل من 100 ميلي ثانية."
      },
      techStack: ["Laravel 11", "PHP 8.2", "MySQL", "Vue.js", "RBAC & OAuth2", "Tailwind CSS", "Stripe API"],
      highlights: {
        en: [
          "Vendor and customer data isolation with tenant-scoped Eloquent models.",
          "Fine-grained permissions engine with 2-Factor Authentication and secure session tokens.",
          "Optimized database query performance reducing order processing latency by 30%."
        ],
        ar: [
          "عزل كامل لبيانات التجار والعملاء على مستوى نماذج Eloquent وقواعد البيانات.",
          "محرك صلاحيات متقدم مع التحقق الثنائي (2FA) وإدارة آمنة للجلسات والرموز المميزة.",
          "تحسين شامل للاستعلامات قلل زمن معالجة الطلبات بنسبة 30%."
        ]
      },
      liveUrl: "",
      codeUrl: "https://github.com/mohamed-jouda/marsa-store",
      contactSubject: "Project Inquiry: Multi-Vendor Platform (Marsa Store)"
    },
    'write-ai': {
      category: { en: "AI SaaS & Content Automation", ar: "برمجيات الذكاء الاصطناعي وصناعة المحتوى" },
      year: "2026",
      status: { en: "AI Capstone", ar: "مشروع ذكاء اصطناعي نوعي" },
      origin: {
        icon: "ai",
        en: "CERTIFICATES: AI Capstone @ UCASTI 90h",
        ar: "الشهادات: مشروع التخرج للذكاء الاصطناعي (90 ساعة)"
      },
      title: { en: "Write AI - Intelligent Blogging Application", ar: "Write AI - منصة تدوين ذكية بالذكاء الاصطناعي" },
      subtitle: {
        en: "Automated content generation, prompt engineering, and real-time Markdown editor integrated with LLM APIs.",
        ar: "توليد تلقائي للمحتوى، وهندسة الأوامر الذكية، ومحرر Markdown فوري متصل بنماذج الذكاء الاصطناعي."
      },
      image: "assets/projects/selectai/1.webp",
      gallery: [
        "assets/projects/selectai/1.webp",
        "assets/projects/portfolio/1.webp"
      ],
      metrics: [
        { value: "< 2.5s", labelEn: "Generation Speed", labelAr: "سرعة توليد المسودة" },
        { value: "70%", labelEn: "Draft Time Saved", labelAr: "توفير وقت الصياغة" },
        { value: "LLMs", labelEn: "API Orchestration", labelAr: "تكامل نماذج الذكاء" }
      ],
      challenge: {
        en: "Writers often face creative blocks and formatting friction when drafting technical articles. The challenge was building an intelligent editor that generates cohesive, tone-consistent drafts while preserving complete author control without API timeouts.",
        ar: "يواجه الكتّاب وصنّاع المحتوى تحدي انقطاع الأفكار وصياغة المقالات التقنية. كان التحدي هو ابتكار منصة ذكية تقترح وتصيغ مسودات متماسكة مع الحفاظ على تحكم الكاتب وتجنب الهلوسة في النصوص."
      },
      solution: {
        en: "Connected Laravel to external LLM APIs using asynchronous queue workers for prompt evaluation. Built a reactive Markdown editor featuring side-by-side preview, configurable prompt templates, and automated SEO metadata generation.",
        ar: "ربط نظام Laravel بواجهات الذكاء الاصطناعي (LLM APIs) عبر طوابير معالجة غير متزامنة (Queues) لمعالجة الـ Prompts. بناء محرر Markdown تفاعلي يدعم معاينة فورية، مع قوالب أوامر متخصصة وتوليد تلقائي لبيانات الـ SEO."
      },
      techStack: ["Laravel", "PHP 8.2", "OpenAI API", "RESTful APIs", "Vue.js", "Tailwind CSS", "Redis Queues"],
      highlights: {
        en: [
          "Decoupled prompt engineering pipeline with fallback handlers for third-party API latency.",
          "Instant SEO slug, tag, and social summary generation based on article body.",
          "Responsive live Markdown editor with synchronized side-by-side preview."
        ],
        ar: [
          "بنية معمارية مستقلة لهندسة الأوامر مع آليات احتياطية عند بطء استجابة الـ API.",
          "توليد فوري للكلمات الدلالية والروابط الصديقة لمحركات البحث (SEO Slugs) وملخصات المشاركة.",
          "محرر Markdown تفاعلي فوري متزامن مع شاشة المعاينة الحية."
        ]
      },
      liveUrl: "",
      codeUrl: "https://github.com/mohamed-jouda/write-ai",
      contactSubject: "Project Inquiry: AI-Powered Platform (Write AI)"
    },
    'messenger': {
      category: { en: "Real-Time Systems & AI", ar: "أنظمة فورية وتكامل الذكاء الاصطناعي" },
      year: "2025",
      status: { en: "Active Project", ar: "مشروع نشط" },
      origin: {
        icon: "career",
        en: "CAREER: Real-Time WebSockets",
        ar: "المسيرة المهنية: أنظمة محادثة فورية بـ WebSockets"
      },
      title: { en: "Real-Time AI Messenger Application", ar: "تطبيق المراسلة الفوري والذكي" },
      subtitle: {
        en: "Instant peer-to-peer and group messaging with live typing indicators and AI conversational assist.",
        ar: "محادثات فورية مباشرة وجماعية مع مؤشرات الكتابة الحية ومساعد ذكي للردود المحادثية."
      },
      image: "assets/projects/devaura/1.webp",
      gallery: [
        "assets/projects/devaura/1.webp",
        "assets/projects/selectai/1.webp"
      ],
      metrics: [
        { value: "< 50ms", labelEn: "Message Latency", labelAr: "زمن وصول الرسالة" },
        { value: "WebSockets", labelEn: "Transport Layer", labelAr: "بروتوكول النقل" },
        { value: "99.9%", labelEn: "Delivery Guarantee", labelAr: "ضمان التسليم" }
      ],
      challenge: {
        en: "Traditional HTTP polling creates noticeable latency and overburdens servers during peak activity. The application required instant delivery, user presence tracking, and an AI conversational partner without freezing the active UI thread.",
        ar: "استخدام بروتوكول HTTP التقليدي للـ Polling يستهلك موارد الخادم ويسبب بطء المراسلة. تطلب المشروع تسليم الرسائل في أجزاء من الثانية، وتتبع حالة الاتصال وقراءة الرسائل، مع دمج مساعد ذكي دون تعطيل تدفق المحادثة."
      },
      solution: {
        en: "Implemented WebSockets architecture using Laravel Echo and Pusher/Soketi channels. Engineered asynchronous background dispatchers to handle AI response generation without delaying live messaging.",
        ar: "تطبيق معمارية WebSockets المتطورة عبر Laravel Echo وخوادم Pusher/Soketi. تصميم مشغلات أحداث تعمل في الخلفية لمعالجة ردود الذكاء الاصطناعي دون إيقاف المحادثات الحية أو انتظار إجابة النموذج."
      },
      techStack: ["Laravel", "WebSockets", "Pusher / Echo", "PHP", "MySQL", "JavaScript ES6+", "CSS3"],
      highlights: {
        en: [
          "Sub-50ms message broadcast between active WebSocket channels.",
          "Live typing indicators, message seen status, and connection presence heartbeat.",
          "Background worker pipeline handling AI assistant interactions cleanly."
        ],
        ar: [
          "بث فوري للرسائل خلال أقل من 50 ميلي ثانية بين قنوات الـ WebSockets النشطة.",
          "مؤشرات كتابة حية، وإشعارات قراءة الرسائل، وتتبع نبضات اتصال المستخدمين.",
          "خط معالجة في الخلفية يدير تفاعلات الذكاء الاصطناعي بانسيابية تامة."
        ]
      },
      liveUrl: "",
      codeUrl: "https://github.com/mohamed-jouda/ai-realtime-messenger",
      contactSubject: "Project Inquiry: Real-Time Chat & AI (Messenger)"
    },
    'techno-cms': {
      category: { en: "CMS & Administrative Frameworks", ar: "أنظمة إدارة المحتوى ولوحات التحكم" },
      year: "2024",
      status: { en: "Deployed", ar: "منشور ومكتمل" },
      origin: {
        icon: "career",
        en: "CAREER: Filament CMS Platform",
        ar: "المسيرة المهنية: منصة إدارة محتوى بـ Filament"
      },
      title: { en: "Techno Plus Modular CMS Platform", ar: "منصة Techno Plus لإدارة المحتوى التفاعلي" },
      subtitle: {
        en: "Reactive administrative content control built with Laravel, Filament, and Livewire for rapid workflows.",
        ar: "لوحة تحكم تفاعلية لإدارة المحتوى تعتمد على Laravel و Filament و Livewire لإدارة سريعة وخفيفة."
      },
      image: "assets/projects/devaura/2.webp",
      gallery: [
        "assets/projects/devaura/2.webp",
        "assets/projects/devaura/1.webp"
      ],
      metrics: [
        { value: "-60%", labelEn: "Admin Setup Time", labelAr: "سرعة تجهيز الواجهات" },
        { value: "Livewire SPA", labelEn: "Reactive Layer", labelAr: "طبقة التفاعل" },
        { value: "12+ Resources", labelEn: "Configured Modules", labelAr: "الوحدات البرمجية" }
      ],
      challenge: {
        en: "Custom administrative portals often suffer from duplicated CRUD logic, divergent design systems, and brittle client-side scripts that inflate development time and maintenance cost.",
        ar: "لوحات التحكم التقليدية تعاني عادة من تكرار أكواد CRUD، وتناقض واجهات المستخدم، وهشاشة ربط مكتبات الـ JavaScript مما يبطئ تسليم الميزات للعملاء."
      },
      solution: {
        en: "Architected a modular Content Management System leveraging Laravel Filament and Livewire. Provided reactive client experiences with dynamic data tables, complex relational filters, export utilities, and localized admin dashboards.",
        ar: "بناء نظام إدارة محتوى معياري بالاعتماد على Laravel Filament و Livewire. توفير تجربة مستخدم سريعة وفورية بجداول بيانات ديناميكية، وفلاتر علائقية معقدة، وأدوات تصدير بيانات، ودعم كامل للواجهات متعددة اللغات."
      },
      techStack: ["Laravel", "Filament v3", "Livewire", "Alpine.js", "Tailwind CSS", "MySQL"],
      highlights: {
        en: [
          "12+ specialized resource models configured with dynamic relations and audit logging.",
          "Zero custom JavaScript overhead thanks to Livewire component lifecycle.",
          "Custom analytics widgets and export engines for tabular reporting."
        ],
        ar: [
          "أكثر من 12 نموذجاً ومورداً برمجياً مع علاقات ديناميكية وسجل تدقيق للعمليات.",
          "تجربة تفاعلية سلسة دون الحاجة لكتابة كود JavaScript مخصص بفضل Livewire.",
          "عناصر إحصائية وتحليلية مخصصة ومحركات لتصدير التقارير وجداول البيانات."
        ]
      },
      liveUrl: "",
      codeUrl: "https://github.com/mohamed-jouda/techno-plus-cms",
      contactSubject: "Project Inquiry: Custom CMS / Admin Panel (Techno Plus)"
    },
    'holme': {
      category: { en: "Enterprise Engineering & Portal", ar: "أنظمة وبوابات الشركات الهندسية" },
      year: "2024",
      status: { en: "Client Portal", ar: "بوابة أعمال حقيقية" },
      origin: {
        icon: "career",
        en: "CAREER: Enterprise Platform",
        ar: "المسيرة المهنية: منصة استشارات مؤسسية"
      },
      title: { en: "Holme Engineering Corporate Platform", ar: "منصة Holme Engineering الهندسية" },
      subtitle: {
        en: "High-integrity corporate platform showcasing structural engineering portfolios, technical specifications, and client consultation pipelines.",
        ar: "منصة ويب متكاملة للشركات الهندسية لعرض المشاريع الإنشائية، والمواصفات الفنية، واستقبال طلبات الاستشارات."
      },
      image: "assets/projects/holme/1.webp",
      gallery: [
        "assets/projects/holme/1.webp",
        "assets/projects/holme/2.webp"
      ],
      metrics: [
        { value: "98/100", labelEn: "Performance Score", labelAr: "درجة الأداء وسرعة التحميل" },
        { value: "+28%", labelEn: "Lead Conversion", labelAr: "معدل تحويل الاستفسارات" },
        { value: "WebP / Lazy", labelEn: "Asset Compression", labelAr: "ضغط الميديا الذكي" }
      ],
      challenge: {
        en: "Civil engineering firms present high-resolution CAD renderings and project photographs that frequently trigger high bandwidth usage, slow mobile response, and lost inquiries.",
        ar: "تحتاج المكاتب الهندسية إلى استعراض مخططات ورسومات عالية الدقة، مما يؤدي عادةً لبطء تحميل الصفحات وضعف تجربة الاستخدام على الهواتف وخسارة استفسارات العملاء."
      },
      solution: {
        en: "Developed an enterprise-grade platform with modern asset pipelines, responsive layouts, automated inquiry routing, and custom project taxonomy filters tailored for engineering practices.",
        ar: "تطوير منصة رقمية ذات أداء فائق مع معالجة ذكية للوسائط، وتصميم متجاوب مع كافة الشاشات، وتوجيه تلقائي لاستفسارات واستشارات العملاء وفلاتر متخصصة للمشاريع الهندسية."
      },
      techStack: ["Laravel", "PHP", "Tailwind CSS", "JavaScript", "MySQL", "Vite"],
      highlights: {
        en: [
          "Sub-second load times achieved across image-dense project portfolios.",
          "Automated lead capture system with notification webhooks.",
          "Accessible, responsive layout compliant with international web standards."
        ],
        ar: [
          "تحميل فوري في أقل من ثانية بالرغم من الكثافة العالية لصور ومخططات المشاريع.",
          "نظام تلقائي لاستقبال طلبات الاستشارة مع إشعارات مباشرة للإدارة.",
          "تصميم متجاوب وسهل الوصول متوافق مع المعايير الدولية لتصفح الويب."
        ]
      },
      liveUrl: "",
      codeUrl: "https://github.com/mohamed-jouda/holme-engineering-platform",
      contactSubject: "Project Inquiry: Engineering / Corporate Platform (Holme)"
    },
    'cureway': {
      category: { en: "Healthcare & Patient Management", ar: "الرعاية الصحية وإدارة المرضى" },
      year: "2024",
      status: { en: "Healthcare Platform", ar: "منصة رعاية صحية ذكية" },
      origin: {
        icon: "career",
        en: "CAREER: HealthTech Scheduling",
        ar: "المسيرة المهنية: منظومة رعاية صحية ومواعيد"
      },
      title: { en: "Cureway Healthcare Management System", ar: "نظام Cureway للرعاية الصحية وإدارة الحجوزات" },
      subtitle: {
        en: "Confidential appointment scheduling, clinical record workflows, and role-based staff portals designed for medical clinics.",
        ar: "جدولة مواعيد آمنة، وإدارة السجلات الطبية وسير العمل للعيادات بمستويات صلاحيات دقيقة."
      },
      image: "assets/projects/cureway/1.webp",
      gallery: [
        "assets/projects/cureway/1.webp",
        "assets/projects/cureway/2.webp"
      ],
      metrics: [
        { value: "< 45s", labelEn: "Booking Velocity", labelAr: "سرعة حجز الموعد" },
        { value: "Encrypted", labelEn: "Data Privacy", labelAr: "حماية وخصوصية البيانات" },
        { value: "99.9%", labelEn: "Uptime Reliability", labelAr: "جاهزية واستقرار النظام" }
      ],
      challenge: {
        en: "Medical appointment scheduling requires zero booking collisions, strict confidentiality of health records, and an interface that remains accessible to patients of varying technical proficiencies.",
        ar: "تتطلب أنظمة العيادات منع التضارب في مواعيد الأطباء، مع حماية تامة لخصوصية السجلات الطبية وسهولة مطلقة في حجز المواعيد للمرضى من مختلف الفئات."
      },
      solution: {
        en: "Constructed a secure healthcare scheduling backend with transactional database locking to prevent double bookings. Incorporated role-based views separating reception, physician notes, and patient history.",
        ar: "بناء نظام خلفي آمن لجدولة المواعيد يعتمد على الإقفال المتزامن لقاعدة البيانات لمنع التكرار، مع واجهات منفصلة بصلاحيات مخصصة لموظفي الاستقبال والأطباء والمرضى."
      },
      techStack: ["Laravel", "PHP 8", "MySQL", "RESTful APIs", "Bootstrap / CSS", "JavaScript"],
      highlights: {
        en: [
          "ACID transactional scheduling engine preventing duplicate booking collisions.",
          "Granular patient confidentiality controls separating clinical notes from administrative data.",
          "Real-time appointment slot calculation and calendar sync."
        ],
        ar: [
          "محرك جدولة بمعايير ACID يمنع نهائياً تضارب المواعيد المزدوجة.",
          "ضوابط سرية دقيقة تفصل السجلات السريرية الطبية عن البيانات الإدارية.",
          "احتساب فوري لأوقات الأطباء المتاحة ومزامنة التقويم المباشر."
        ]
      },
      liveUrl: "",
      codeUrl: "https://github.com/mohamed-jouda/cureway-healthcare",
      contactSubject: "Project Inquiry: Healthcare / Management Platform (Cureway)"
    }
  };

  // --- 10. Dedicated Project Detail View & Gallery Controller ---
  let currentProjectDetailId = null;
  let currentGalleryImages = [];
  let currentGalleryIndex = 0;

  function renderProjectDetail(projectId) {
    const project = caseStudiesData[projectId];
    if (!project || !viewProjectDetail) return;

    currentProjectDetailId = projectId;

    // Breadcrumb title
    if (detailBreadcrumbTitle) {
      detailBreadcrumbTitle.textContent = project.title[currentLang] || project.title.en;
    }

    // Header Badges & Titles
    if (detailCategory) {
      detailCategory.textContent = project.category[currentLang] || project.category.en;
    }
    if (detailYear) {
      detailYear.textContent = project.year;
    }
    if (detailStatus) {
      detailStatus.textContent = project.status[currentLang] || project.status.en;
    }
    if (detailOriginBadge) {
      if (project.origin) {
        detailOriginBadge.textContent = project.origin[currentLang] || project.origin.en;
        detailOriginBadge.style.display = 'inline-flex';
      } else {
        detailOriginBadge.style.display = 'none';
      }
    }
    if (detailTitle) {
      detailTitle.textContent = project.title[currentLang] || project.title.en;
    }
    if (detailSubtitle) {
      detailSubtitle.textContent = project.subtitle[currentLang] || project.subtitle.en;
    }

    // Sidebar specifications
    if (detailSpecTimeline) {
      detailSpecTimeline.textContent = project.year;
    }
    if (detailSpecContext) {
      detailSpecContext.textContent = project.status[currentLang] || project.status.en;
    }

    // Action Links
    if (detailDemoLink) {
      if (project.liveUrl) {
        detailDemoLink.href = project.liveUrl;
        detailDemoLink.classList.remove('hidden');
      } else {
        detailDemoLink.classList.add('hidden');
      }
    }

    if (detailGithubLink) {
      if (project.codeUrl) {
        detailGithubLink.href = project.codeUrl;
        detailGithubLink.classList.remove('hidden');
      } else {
        detailGithubLink.classList.add('hidden');
      }
    }

    if (detailDiscussBtn) {
      detailDiscussBtn.onclick = () => {
        navigateTo('contact');
        const subjectField = document.getElementById('contact-subject');
        if (subjectField) {
          subjectField.value = project.contactSubject;
          subjectField.focus();
        }
      };
    }

    if (sidebarDiscussBtn) {
      sidebarDiscussBtn.onclick = () => {
        if (detailDiscussBtn) detailDiscussBtn.click();
      };
    }

    // Gallery Setup
    currentGalleryImages = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
    currentGalleryIndex = 0;
    updateGalleryView();

    // Clicking gallery viewport opens current image in full-screen Lightbox Modal
    if (detailGalleryViewport) {
      detailGalleryViewport.onclick = (e) => {
        if (e.target.closest('.gallery-nav-btn')) return;
        if (currentGalleryImages && currentGalleryImages[currentGalleryIndex]) {
          const pTitle = project.title[currentLang] || project.title.en;
          openPhotoModal(currentGalleryImages[currentGalleryIndex], pTitle);
        }
      };
    }

    // Architectural Metrics Grid
    if (detailMetricsGrid) {
      detailMetricsGrid.innerHTML = project.metrics.map(m => `
        <div class="detail-metric-card">
          <span class="detail-metric-val">${m.value}</span>
          <span class="detail-metric-label">${currentLang === 'ar' ? m.labelAr : m.labelEn}</span>
        </div>
      `).join('');
    }

    // Problem & Solution
    if (detailChallenge) {
      detailChallenge.textContent = project.challenge[currentLang] || project.challenge.en;
    }
    if (detailSolution) {
      detailSolution.textContent = project.solution[currentLang] || project.solution.en;
    }

    // Tech Tags in Sidebar
    if (detailTechTags) {
      detailTechTags.innerHTML = project.techStack.map(t => `<span class="detail-tech-tag">${t}</span>`).join('');
    }

    // Key Highlights with custom check icon
    if (detailHighlightsList) {
      const list = project.highlights[currentLang] || project.highlights.en || [];
      detailHighlightsList.innerHTML = list.map(h => `
        <div class="detail-highlight-card">
          <span class="check-icon">✓</span>
          <span>${h}</span>
        </div>
      `).join('');
    }

    // Sequential Project Navigation (Prev / Next project)
    const projectKeys = ['marsa-store', 'write-ai', 'messenger', 'techno-cms', 'holme', 'cureway'];
    const currentIndex = projectKeys.indexOf(projectId);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + projectKeys.length) % projectKeys.length;
      const nextIndex = (currentIndex + 1) % projectKeys.length;
      const prevProj = caseStudiesData[projectKeys[prevIndex]];
      const nextProj = caseStudiesData[projectKeys[nextIndex]];

      if (seqPrevProject && prevProj) {
        seqPrevProject.setAttribute('data-route', `project-${projectKeys[prevIndex]}`);
        if (seqPrevTitle) {
          seqPrevTitle.textContent = prevProj.title[currentLang] || prevProj.title.en;
        }
      }
      if (seqNextProject && nextProj) {
        seqNextProject.setAttribute('data-route', `project-${projectKeys[nextIndex]}`);
        if (seqNextTitle) {
          seqNextTitle.textContent = nextProj.title[currentLang] || nextProj.title.en;
        }
      }
    }
  }

  function updateGalleryView() {
    if (!currentGalleryImages || currentGalleryImages.length === 0) return;
    if (currentGalleryIndex < 0) currentGalleryIndex = 0;
    if (currentGalleryIndex >= currentGalleryImages.length) currentGalleryIndex = currentGalleryImages.length - 1;

    if (detailMainImage) {
      detailMainImage.src = currentGalleryImages[currentGalleryIndex];
    }
    if (galleryCounter) {
      galleryCounter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
    }

    if (detailThumbnailsStrip) {
      detailThumbnailsStrip.innerHTML = currentGalleryImages.map((src, idx) => `
        <div class="gallery-thumb-item ${idx === currentGalleryIndex ? 'active' : ''}" data-thumb-index="${idx}">
          <img src="${src}" alt="Thumbnail ${idx + 1}" loading="lazy">
        </div>
      `).join('');

      detailThumbnailsStrip.querySelectorAll('.gallery-thumb-item').forEach(thumb => {
        thumb.addEventListener('click', () => {
          const idx = parseInt(thumb.getAttribute('data-thumb-index'), 10);
          if (!isNaN(idx)) {
            currentGalleryIndex = idx;
            updateGalleryView();
          }
        });
      });
    }
  }

  if (galleryPrevBtn) {
    galleryPrevBtn.addEventListener('click', () => {
      if (currentGalleryImages.length > 1) {
        currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        updateGalleryView();
      }
    });
  }

  if (galleryNextBtn) {
    galleryNextBtn.addEventListener('click', () => {
      if (currentGalleryImages.length > 1) {
        currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
        updateGalleryView();
      }
    });
  }

  // --- Quick Preview Modal Controller ---
  let currentQuickModalProjectId = null;

  function isQuickModalOpen() {
    return !!(projectQuickModal && projectQuickModal.classList.contains('open'));
  }

  function renderQuickModal(projectId) {
    const project = caseStudiesData[projectId];
    if (!project) return;

    if (quickModalCategory) {
      quickModalCategory.textContent = project.category[currentLang] || project.category.en;
    }
    if (quickModalStatus) {
      quickModalStatus.textContent = project.status[currentLang] || project.status.en;
    }
    if (quickModalYear) {
      quickModalYear.textContent = project.year;
    }
    if (quickModalImage) {
      quickModalImage.src = project.image;
      quickModalImage.alt = project.title[currentLang] || project.title.en;
    }
    if (quickModalTitle) {
      quickModalTitle.textContent = project.title[currentLang] || project.title.en;
    }
    if (quickModalDesc) {
      quickModalDesc.textContent = project.subtitle[currentLang] || project.subtitle.en;
    }

    if (project.origin) {
      if (quickModalProvIcon) // provenance icon updated via SVG
      if (quickModalProvText) quickModalProvText.textContent = project.origin[currentLang] || project.origin.en;
    }

    if (quickModalMetrics) {
      quickModalMetrics.innerHTML = project.metrics.map(m => `
        <div class="quick-metric-chip">
          <span class="quick-metric-val">${m.value}</span>
          <span class="quick-metric-label">${currentLang === 'ar' ? m.labelAr : m.labelEn}</span>
        </div>
      `).join('');
    }

    if (quickModalHighlights) {
      const list = project.highlights[currentLang] || project.highlights.en || [];
      quickModalHighlights.innerHTML = list.map(h => `
        <div class="quick-highlight-item">
          <span class="quick-highlight-check">✓</span>
          <span class="quick-highlight-text">${h}</span>
        </div>
      `).join('');
    }

    if (quickModalTechTags) {
      quickModalTechTags.innerHTML = project.techStack.map(t => `<span class="quick-tech-tag">${t}</span>`).join('');
    }

    if (quickModalDemoLink) {
      if (project.liveUrl) {
        quickModalDemoLink.href = project.liveUrl;
        quickModalDemoLink.classList.remove('hidden');
      } else {
        quickModalDemoLink.classList.add('hidden');
      }
    }

    if (quickModalCodeLink) {
      if (project.codeUrl) {
        quickModalCodeLink.href = project.codeUrl;
        quickModalCodeLink.classList.remove('hidden');
      } else {
        quickModalCodeLink.classList.add('hidden');
      }
    }
  }

  function openQuickModal(projectId) {
    const project = caseStudiesData[projectId];
    if (!project || !projectQuickModal) return;

    currentQuickModalProjectId = projectId;
    renderQuickModal(projectId);

    projectQuickModal.classList.add('open');
    projectQuickModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickModal() {
    if (!projectQuickModal) return;
    projectQuickModal.classList.remove('open');
    projectQuickModal.setAttribute('aria-hidden', 'true');
    if (!(mobileDrawer && mobileDrawer.classList.contains('open')) && !isPaletteOpen()) {
      document.body.style.overflow = '';
    }
  }

  if (quickModalCloseBtn) quickModalCloseBtn.addEventListener('click', closeQuickModal);
  if (quickModalDismissBtn) quickModalDismissBtn.addEventListener('click', closeQuickModal);

  if (projectQuickModal) {
    projectQuickModal.addEventListener('click', (e) => {
      if (e.target === projectQuickModal) {
        closeQuickModal();
      }
    });
  }

  if (quickModalViewFullBtn) {
    quickModalViewFullBtn.addEventListener('click', () => {
      if (currentQuickModalProjectId) {
        const targetId = currentQuickModalProjectId;
        closeQuickModal();
        navigateTo(`project-${targetId}`, true);
      }
    });
  }

  // --- 10.5 Profile Photo Lightbox Controller ---
  const photoLightboxModal = document.getElementById('photo-lightbox-modal');
  const photoLightboxCloseBtn = document.getElementById('photo-lightbox-close-btn');
  const profilePhotoTrigger = document.getElementById('profile-photo-trigger');

  function isPhotoModalOpen() {
    return !!(photoLightboxModal && photoLightboxModal.classList.contains('open'));
  }

  function openPhotoModal(customSrc, customCaption) {
    if (!photoLightboxModal) return;
    const photoLightboxImg = document.getElementById('photo-lightbox-img');
    const captionName = document.querySelector('.photo-lightbox-caption .caption-name');
    const captionRole = document.querySelector('.photo-lightbox-caption .caption-role');
    const captionVerified = document.querySelector('.photo-lightbox-caption .caption-verified-badge');
    const captionStatus = document.querySelector('.photo-lightbox-caption .caption-status');
    const captionDot = document.querySelector('.photo-lightbox-caption .caption-dot-sep');

    if (photoLightboxImg && customSrc) {
      photoLightboxImg.src = customSrc;
      if (customCaption) {
        if (captionName) captionName.textContent = customCaption;
        if (captionRole) captionRole.textContent = currentLang === 'ar' ? 'معاينة المشروع بدقة عالية' : 'High-Resolution Project Preview';
        if (captionVerified) captionVerified.style.display = 'none';
        if (captionStatus) captionStatus.style.display = 'none';
        if (captionDot) captionDot.style.display = 'none';
      }
    } else if (photoLightboxImg && !customSrc) {
      photoLightboxImg.src = 'assets/images/mohammed-profile.jpg';
      const dict = i18n[currentLang] || i18n.en;
      if (captionName) captionName.textContent = dict.heroTitleShort || 'Mohammed Jouda';
      if (captionRole) captionRole.textContent = dict.roleTitle || 'Full Stack Web Developer';
      if (captionVerified) captionVerified.style.display = '';
      if (captionStatus) captionStatus.style.display = '';
      if (captionDot) captionDot.style.display = '';
    }
    if (typeof closeQuickModal === 'function' && typeof isQuickModalOpen === 'function' && isQuickModalOpen()) {
      closeQuickModal();
    }
    if (typeof closeCommandPalette === 'function' && isPaletteOpen()) {
      closeCommandPalette();
    }
    photoLightboxModal.classList.add('open');
    photoLightboxModal.setAttribute('aria-hidden', 'false');
    if (profilePhotoTrigger) {
      profilePhotoTrigger.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closePhotoModal() {
    if (!photoLightboxModal) return;
    photoLightboxModal.classList.remove('open');
    photoLightboxModal.setAttribute('aria-hidden', 'true');
    if (profilePhotoTrigger) {
      profilePhotoTrigger.setAttribute('aria-expanded', 'false');
    }
    if (!(mobileDrawer && mobileDrawer.classList.contains('open')) && !isPaletteOpen() && !(typeof isQuickModalOpen === 'function' && isQuickModalOpen())) {
      document.body.style.overflow = '';
    }
  }

  if (photoLightboxCloseBtn) {
    photoLightboxCloseBtn.addEventListener('click', closePhotoModal);
  }

  if (photoLightboxModal) {
    photoLightboxModal.addEventListener('click', (e) => {
      if (e.target === photoLightboxModal) {
        closePhotoModal();
      }
    });
  }

  if (profilePhotoTrigger) {
    profilePhotoTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openPhotoModal();
    });
  }

  // --- 10.6 Achievements & Certificate Lightbox Controller ---
  const CERTIFICATES_DATA = {
    "freelance-workplace": {
      id: "freelance-workplace",
      image: "assets/achievements/howtoenterthefreelanceworkplace.webp",
      url: "assets/achievements/howtoenterthefreelanceworkplace.webp",
      en: {
        title: "How to Enter the Freelance Workplace",
        issuer: "Education For Employment Palestine (EFE Palestine)",
        type: "Professional Training",
        category: "Freelance & Remote Work",
        issueDate: "June 2026",
        badgeDate: "ISSUED ON JUNE 2026",
        careerRole: "Earned during: Technical Training in Virtual Jobs",
        careerDesc: "Completed 29 hours of technical training and psychosocial support covering freelance platforms, client proposals, and remote work readiness.",
        tags: ["Certificate", "Professional"]
      },
      ar: {
        title: "كيف تدخل سوق العمل الحر",
        issuer: "مؤسسة التعليم من أجل التوظيف - فلسطين",
        type: "تدريب مهني متخصص",
        category: "العمل الحر والعمل عن بعد",
        issueDate: "يونيو 2026",
        badgeDate: "صادرة في يونيو 2026",
        careerRole: "تم الإنجاز خلال: برنامج التدريب التقني لمهارات العمل عن بعد",
        careerDesc: "إتمام 29 ساعة تدريب تقني ودعم مهني متخصص في منصات العمل الحر، صياغة العروض، والتواصل الفعال مع العملاء عن بعد.",
        tags: ["شهادة معتمدة", "مهني"]
      }
    },
    "build-with-ai": {
      id: "build-with-ai",
      image: "assets/achievements/buildwithai.webp",
      url: "assets/achievements/buildwithai.webp",
      en: {
        title: "Build with AI: Masr Edition",
        issuer: "Google for Developers & Information Technology Institute (ITI)",
        type: "Technical Program",
        category: "Artificial Intelligence",
        issueDate: "May 2026",
        badgeDate: "ISSUED ON MAY 2026",
        careerRole: "Earned during: Google for Developers Virtual AI Summit",
        careerDesc: "Hands-on participation alongside 5,000+ engineers covering generative AI architectures, Google Gemini multimodal APIs, and LLM agent integration.",
        tags: ["Certificate", "AI"]
      },
      ar: {
        title: "البناء باستخدام الذكاء الاصطناعي: نسخة مصر",
        issuer: "مطورو Google ومعهد تكنولوجيا المعلومات (ITI)",
        type: "قمة تقنية متخصصة",
        category: "الذكاء الاصطناعي",
        issueDate: "مايو 2026",
        badgeDate: "صادرة في مايو 2026",
        careerRole: "تم الإنجاز خلال: قمة Google لمطوري الذكاء الاصطناعي",
        careerDesc: "مشاركة تطبيقية وتدريب عملي بين أكثر من 5,000 مطور على تقنيات الذكاء الاصطناعي التوليدي، معمارية نماذج Gemini متعددة الوسائط، ودمج وكلاء الذكاء الاصطناعي.",
        tags: ["شهادة حضور", "ذكاء اصطناعي"]
      }
    },
    "code2career": {
      id: "code2career",
      image: "assets/achievements/code2carrer.webp",
      url: "assets/achievements/code2carrer.webp",
      en: {
        title: "Code2Career - Frontend Development Path",
        issuer: "Gaza Sky Geeks",
        type: "Bootcamp",
        category: "Programming",
        issueDate: "March 2026",
        badgeDate: "ISSUED ON MARCH 2026",
        careerRole: "Earned during: Junior Frontend Developer @ Gaza Sky Geeks",
        careerDesc: "Completed an intensive 100-hour frontend engineering track covering modern JavaScript, reactive component architectures, state management, and high-performance UX.",
        tags: ["Bootcamp", "Programming"]
      },
      ar: {
        title: "مسار تطوير الواجهات الأمامية - Code2Career",
        issuer: "غزة سكاي جيكس",
        type: "معسكر تدريبي مكثف",
        category: "هندسة البرمجيات",
        issueDate: "مارس 2026",
        badgeDate: "صادرة في مارس 2026",
        careerRole: "تم الإنجاز خلال: مطور واجهات أمامية @ Gaza Sky Geeks",
        careerDesc: "إتمام مسار هندسي مكثف مدته 100 ساعة في جافاسكريبت الحديثة، بنية المكونات التفاعلية، وإدارة الحالة وتطوير واجهات عالية الأداء والموثوقية.",
        tags: ["معسكر مكثف", "برمجة"]
      }
    },
    "gemini-educator": {
      id: "gemini-educator",
      image: "assets/achievements/gemini_certified_educator.webp",
      url: "assets/achievements/gemini_certified_educator.webp",
      en: {
        title: "Gemini Certified Educator",
        issuer: "Google for Education",
        type: "Accredited Qualification",
        category: "Artificial Intelligence",
        issueDate: "December 2025",
        badgeDate: "ISSUED ON DECEMBER 2025",
        careerRole: "Earned during: Google AI in Education Program",
        careerDesc: "Validated competency in leveraging Google Gemini AI models for prompt engineering, intelligent workflows, automated analysis, and interactive educational content.",
        tags: ["Certification", "AI"]
      },
      ar: {
        title: "معلم معتمد في تقنيات Gemini",
        issuer: "Google for Education",
        type: "اعتماد مهني دولي",
        category: "الذكاء الاصطناعي",
        issueDate: "ديسمبر 2025",
        badgeDate: "صادرة في ديسمبر 2025",
        careerRole: "تم الإنجاز خلال: برنامج اعتمادات Google للذكاء الاصطناعي",
        careerDesc: "إثبات الكفاءة والمهارات المتقدمة لتسخير نماذج Gemini التوليدية من Google في أتمتة تدفقات العمل وصياغة المحتوى التعليمي والتقني التفاعلي.",
        tags: ["اعتماد دولي", "ذكاء اصطناعي"]
      }
    },
    "google-educator": {
      id: "google-educator",
      image: "assets/achievements/google_certified_educator_level1.webp",
      url: "assets/achievements/google_certified_educator_level1.webp",
      en: {
        title: "Google Certified Educator Level 1",
        issuer: "Google for Education",
        type: "Professional Credential",
        category: "Cloud & EdTech",
        issueDate: "December 2025",
        badgeDate: "ISSUED ON DECEMBER 2025",
        careerRole: "Earned during: Google Professional Qualifications",
        careerDesc: "Demonstrated skills and competencies needed to leverage cloud productivity ecosystems, collaborative software architectures, and secure digital workflows.",
        tags: ["Certification", "Cloud"]
      },
      ar: {
        title: "معلم معتمد من Google - المستوى الأول",
        issuer: "Google for Education",
        type: "اعتماد مهني دولي",
        category: "السحابة والإنتاجية",
        issueDate: "ديسمبر 2025",
        badgeDate: "صادرة في ديسمبر 2025",
        careerRole: "تم الإنجاز خلال: اعتمادات Google المهنية",
        careerDesc: "إثبات إتقان حزمة تطبيقات Google السحابية، بيئات العمل التشاركية الآمنة، وتنظيم البيانات وسير العمل الرقمي الفعال.",
        tags: ["اعتماد دولي", "سحابة"]
      }
    },
    "bachelor-degree": {
      id: "bachelor-degree",
      image: "assets/achievements/code2carrer.webp",
      url: "assets/Mohammed_Jouda_CV.pdf",
      en: {
        title: "Bachelor of Web Technology & Info Security",
        issuer: "Palestine Technical College",
        type: "Academic Degree",
        category: "Web Engineering & Security",
        issueDate: "GPA 83.92% (Very Good)",
        badgeDate: "GRADUATED WITH 83.92%",
        careerRole: "Academic Distinction & Graduation Honors",
        careerDesc: "Graduated with Very Good standing (83.92%). Specialized in secure full-stack web engineering, relational database architectures, network security, and modern web application development.",
        tags: ["Degree", "Honors"]
      },
      ar: {
        title: "بكالوريوس تكنولوجيا الويب وأمن المعلومات",
        issuer: "كلية فلسطين التقنية",
        type: "درجة أكاديمية",
        category: "نظم الويب وأمن المعلومات",
        issueDate: "معدل 83.92% (جيد جداً)",
        badgeDate: "تخرج بمعدل 83.92%",
        careerRole: "تميز أكاديمي ومشروع تخرج هندسي",
        careerDesc: "التخرج بتقدير عام جيد جداً (83.92%)، مع تركيز متخصص في هندسة برمجيات الويب الآمنة، قواعد البيانات العلائقية، وحماية النظم والـ APIs.",
        tags: ["بكالوريوس", "مرتبة شرف"]
      }
    }
  };

  const certDetailModal = document.getElementById('cert-detail-modal');
  const certModalCloseBtn = document.getElementById('cert-modal-close-btn');
  let activeCertId = null;

  function isCertModalOpen() {
    return !!(certDetailModal && certDetailModal.classList.contains('active'));
  }

  function openCertModal(certId) {
    const cert = CERTIFICATES_DATA[certId];
    if (!cert || !certDetailModal) return;
    activeCertId = certId;

    if (typeof closePhotoModal === 'function' && typeof isPhotoModalOpen === 'function' && isPhotoModalOpen()) {
      closePhotoModal();
    }
    if (typeof closeQuickModal === 'function' && typeof isQuickModalOpen === 'function' && isQuickModalOpen()) {
      closeQuickModal();
    }
    if (typeof closeCommandPalette === 'function' && isPaletteOpen()) {
      closeCommandPalette();
    }

    const isArabic = currentLang === 'ar';
    const data = isArabic ? cert.ar : cert.en;

    const imgEl = document.getElementById('cert-modal-img');
    const titleEl = document.getElementById('cert-modal-title');
    const issuerEl = document.getElementById('cert-modal-issuer');
    const typeEl = document.getElementById('cert-modal-type');
    const catEl = document.getElementById('cert-modal-category');
    const dateEl = document.getElementById('cert-modal-date');
    const urlBtn = document.getElementById('cert-modal-url-btn');
    const careerRoleEl = document.getElementById('cert-modal-career-role');
    const careerDescEl = document.getElementById('cert-modal-career-desc');

    if (imgEl) {
      imgEl.src = cert.image;
      imgEl.alt = data.title;
    }
    if (titleEl) titleEl.textContent = data.title;
    if (issuerEl) issuerEl.textContent = data.issuer;
    if (typeEl) typeEl.textContent = data.type;
    if (catEl) catEl.textContent = data.category;
    if (dateEl) dateEl.textContent = data.issueDate;
    if (urlBtn) {
      urlBtn.href = cert.url;
    }
    if (careerRoleEl) careerRoleEl.textContent = data.careerRole;
    if (careerDescEl) careerDescEl.textContent = data.careerDesc;

    certDetailModal.classList.add('active');
    certDetailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    if (!certDetailModal) return;
    certDetailModal.classList.remove('active');
    certDetailModal.setAttribute('aria-hidden', 'true');
    activeCertId = null;

    if (!(mobileDrawer && mobileDrawer.classList.contains('open')) && 
        !isPaletteOpen() && 
        !(typeof isQuickModalOpen === 'function' && isQuickModalOpen()) &&
        !(typeof isPhotoModalOpen === 'function' && isPhotoModalOpen())) {
      document.body.style.overflow = '';
    }
  }

  function updateAchievementsGridLanguage(lang) {
    const grid = document.getElementById('achievements-grid');
    if (!grid) return;
    const cards = grid.querySelectorAll('.cert-modern-card');
    cards.forEach((card) => {
      const id = card.getAttribute('data-cert-id');
      const cert = CERTIFICATES_DATA[id];
      if (!cert) return;
      const data = lang === 'ar' ? cert.ar : cert.en;

      const titleEl = card.querySelector('[data-cert-field="title"]');
      const issuerEl = card.querySelector('[data-cert-field="issuer"]');
      const tagsWrap = card.querySelector('[data-cert-field="tags"]');
      const dateEl = card.querySelector('[data-cert-field="badgeDate"]');
      const btnTextEl = card.querySelector('.cert-view-btn-text');

      if (titleEl) titleEl.textContent = data.title;
      if (issuerEl) issuerEl.textContent = data.issuer;
      if (dateEl) dateEl.textContent = data.badgeDate;
      if (btnTextEl) btnTextEl.textContent = lang === 'ar' ? 'عرض الشهادة' : 'View Certificate';

      if (tagsWrap && Array.isArray(data.tags)) {
        tagsWrap.innerHTML = data.tags.map(t => `<span class="cert-tag">${t}</span>`).join('');
      }

      card.setAttribute('data-cursor', lang === 'ar' ? 'عرض الشهادة' : 'View Certificate');
    });
  }

  if (certModalCloseBtn) {
    certModalCloseBtn.addEventListener('click', closeCertModal);
  }

  if (certDetailModal) {
    certDetailModal.addEventListener('click', (e) => {
      if (e.target === certDetailModal) {
        closeCertModal();
      }
    });
  }

  // Keyboard activation for cert cards
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const certCard = document.activeElement && document.activeElement.closest('.cert-modern-card');
      if (certCard) {
        e.preventDefault();
        const certId = certCard.getAttribute('data-cert-id');
        if (certId) openCertModal(certId);
      }
    }
  });

  // Project Cards & Profile Photo Click Delegation
  document.addEventListener('click', (e) => {
    // If clicking inside certificate modal, photo lightbox, quick modal, or command palette, let their handlers take care of it
    if (e.target.closest('#cert-detail-modal') || e.target.closest('#photo-lightbox-modal') || e.target.closest('#project-quick-modal') || e.target.closest('#command-palette-modal')) return;

    // Check if clicking a modern certificate card in achievements section
    const certCard = e.target.closest('.cert-modern-card');
    if (certCard) {
      e.preventDefault();
      const certId = certCard.getAttribute('data-cert-id');
      if (certId) {
        openCertModal(certId);
        return;
      }
    }

    // Check if clicking personal profile photo trigger (sidebar avatar, mobile header avatar, drawer avatar)
    const avatarEl = e.target.closest('#profile-photo-trigger, .avatar-wrapper, .avatar-lg, .avatar-sm, .avatar-md');
    if (avatarEl && !avatarEl.closest('.testimonial-bubble')) {
      if (avatarEl.closest('.mobile-profile-chip') || avatarEl.closest('.drawer-header') || avatarEl.id === 'profile-photo-trigger' || avatarEl.closest('.avatar-wrapper')) {
        e.preventDefault();
        openPhotoModal();
        return;
      }
    }

    // 1. Direct route button click (e.g. data-project-route if present anywhere)
    const projectBtn = e.target.closest('[data-project-route]');
    if (projectBtn) {
      e.preventDefault();
      const projectId = projectBtn.getAttribute('data-project-route');
      if (projectId) {
        navigateTo(`project-${projectId}`, true);
      }
      return;
    }

    // 2. Click on a project card (.project-full-card) -> Navigate directly to Project Detail Page
    const card = e.target.closest('.project-full-card');
    if (card) {
      // If user clicked an external link (like github/demo) inside the card, let it open
      if (e.target.closest('a[href]:not([href^="#"])')) return;

      const projectId = card.getAttribute('data-project-id');
      if (projectId) {
        e.preventDefault();
        navigateTo(`project-${projectId}`, true);
      }
    }
  });

  // --- 11. Command Palette Controller (Ctrl+K / Cmd+K Spotlight) ---
  let paletteActiveIndex = 0;
  let currentFilteredItems = [];

  function isPaletteOpen() {
    return !!(commandPaletteModal && commandPaletteModal.classList.contains('open'));
  }

  function getPaletteItems() {
    const dict = i18n[currentLang] || i18n.en;
    return [
      // Group 1: Navigation
      {
        id: 'nav-home',
        group: dict.groupPages,
        title: dict.navHome,
        desc: currentLang === 'ar' ? 'الصفحة الرئيسية ونبذة موجزة' : 'Overview and signature bento grid',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>',
        badge: 'View',
        keywords: 'home main start رئيسية بداية',
        action: () => navigateTo('home')
      },
      {
        id: 'nav-about',
        group: dict.groupPages,
        title: dict.navAbout,
        desc: currentLang === 'ar' ? 'السيرة الهندسية والمهارات والتعليم' : 'Engineering bio, principles, and tech stack',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        badge: 'View',
        keywords: 'about bio skills education عني سيرة مهارات تعليم',
        action: () => navigateTo('about')
      },
      {
        id: 'nav-career',
        group: dict.groupPages,
        title: dict.navCareer,
        desc: currentLang === 'ar' ? 'الخبرات العملية والمسيرة المهنية' : 'Work experience, roles, and achievements',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
        badge: 'View',
        keywords: 'career experience work jobs مهنة خبرات وظائف',
        action: () => navigateTo('career')
      },
      {
        id: 'nav-projects',
        group: dict.groupPages,
        title: dict.navProjects,
        desc: currentLang === 'ar' ? 'استعراض كافة المشاريع ودراسات الحالة' : 'Full gallery of production applications',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>',
        badge: 'View',
        keywords: 'projects showcase portfolio مشاريع أعمال برمجة',
        action: () => navigateTo('projects')
      },
      {
        id: 'nav-achievements',
        group: dict.groupPages,
        title: dict.navAchievements,
        desc: currentLang === 'ar' ? 'الشهادات والبرامج المكثفة والأوسمة' : 'Certifications and verified credentials',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>',
        badge: 'View',
        keywords: 'achievements certs diplomas شهادات إنجازات أوسمة',
        action: () => navigateTo('achievements')
      },
      {
        id: 'nav-contact',
        group: dict.groupPages,
        title: dict.navContact,
        desc: currentLang === 'ar' ? 'قنوات التواصل ونموذج الرسائل المباشر' : 'Get in touch for engineering collaborations',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
        badge: 'View',
        keywords: 'contact email phone message تواصل ايميل هاتف',
        action: () => navigateTo('contact')
      },

      // Group 2: Featured Case Studies
      {
        id: 'cs-marsa',
        group: dict.groupProjects,
        title: caseStudiesData['marsa-store'].title[currentLang] || caseStudiesData['marsa-store'].title.en,
        desc: caseStudiesData['marsa-store'].subtitle[currentLang] || caseStudiesData['marsa-store'].subtitle.en,
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
        badge: 'Study',
        keywords: 'marsa store ecommerce marketplace multivendor laravel vue مرسى متجر تجارة إلكترونية',
        action: () => navigateTo('project-marsa-store')
      },
      {
        id: 'cs-writeai',
        group: dict.groupProjects,
        title: caseStudiesData['write-ai'].title[currentLang] || caseStudiesData['write-ai'].title.en,
        desc: caseStudiesData['write-ai'].subtitle[currentLang] || caseStudiesData['write-ai'].subtitle.en,
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 9h6"></path><path d="M9 13h6"></path><path d="M9 17h4"></path></svg>',
        badge: 'Study',
        keywords: 'write ai blog saas llm openai prompt ذكاء اصطناعي تدوين محتوى',
        action: () => navigateTo('project-write-ai')
      },
      {
        id: 'cs-messenger',
        group: dict.groupProjects,
        title: caseStudiesData['messenger'].title[currentLang] || caseStudiesData['messenger'].title.en,
        desc: caseStudiesData['messenger'].subtitle[currentLang] || caseStudiesData['messenger'].subtitle.en,
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
        badge: 'Study',
        keywords: 'messenger chat websockets realtime pusher echo مراسلة دردشة فوري',
        action: () => navigateTo('project-messenger')
      },
      {
        id: 'cs-technocms',
        group: dict.groupProjects,
        title: caseStudiesData['techno-cms'].title[currentLang] || caseStudiesData['techno-cms'].title.en,
        desc: caseStudiesData['techno-cms'].subtitle[currentLang] || caseStudiesData['techno-cms'].subtitle.en,
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>',
        badge: 'Study',
        keywords: 'techno cms filament livewire admin dashboard لوحة تحكم إدارة محتوى',
        action: () => navigateTo('project-techno-cms')
      },
      {
        id: 'cs-holme',
        group: dict.groupProjects,
        title: caseStudiesData['holme'].title[currentLang] || caseStudiesData['holme'].title.en,
        desc: caseStudiesData['holme'].subtitle[currentLang] || caseStudiesData['holme'].subtitle.en,
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>',
        badge: 'Study',
        keywords: 'holme engineering civil structural portal هندسة شركات بوابات',
        action: () => navigateTo('project-holme')
      },
      {
        id: 'cs-cureway',
        group: dict.groupProjects,
        title: caseStudiesData['cureway'].title[currentLang] || caseStudiesData['cureway'].title.en,
        desc: caseStudiesData['cureway'].subtitle[currentLang] || caseStudiesData['cureway'].subtitle.en,
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
        badge: 'Study',
        keywords: 'cureway health medical clinic appointment رعاية صحية عيادات حجز',
        action: () => navigateTo('project-cureway')
      },

      // Group 3: Quick Actions
      {
        id: 'act-cv',
        group: dict.groupActions,
        title: dict.actionDownloadCv,
        desc: 'Mohammed_Jouda_CV.pdf',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
        badge: 'PDF',
        keywords: 'resume cv pdf download سيرة ذاتية تحميل ملف',
        action: () => {
          window.open('assets/Mohammed_Jouda_CV.pdf', '_blank');
        }
      },
      {
        id: 'act-copy-email',
        group: dict.groupActions,
        title: dict.actionCopyEmail,
        desc: 'mohammedjouda02@gmail.com',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>',
        badge: 'Copy',
        keywords: 'copy email mail address نسخ بريد ايميل',
        action: () => {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('mohammedjouda02@gmail.com').then(() => {
              showToast(dict.toastEmailCopied, 'check');
            }).catch(() => {
              showToast('mohammedjouda02@gmail.com', 'check');
            });
          } else {
            showToast('mohammedjouda02@gmail.com', 'check');
          }
        }
      },
      {
        id: 'act-copy-phone',
        group: dict.groupActions,
        title: dict.actionCopyPhone,
        desc: '+970599108787',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
        badge: 'Copy',
        keywords: 'copy phone whatsapp call نسخ هاتف جوال واتساب',
        action: () => {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('+970599108787').then(() => {
              showToast(dict.toastPhoneCopied, 'check');
            }).catch(() => {
              showToast('+970599108787', 'check');
            });
          } else {
            showToast('+970599108787', 'check');
          }
        }
      },
      {
        id: 'act-theme',
        group: dict.groupActions,
        title: dict.actionToggleTheme,
        desc: currentLang === 'ar' ? 'التبديل الفوري بين المظهر المظلم والفاتح' : 'Instant toggle between dark and light modes',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>',
        badge: 'Theme',
        keywords: 'theme dark light mode مظهر ليلي نهاري',
        action: () => {
          const nextTheme = htmlEl.classList.contains('dark') ? 'light' : 'dark';
          applyTheme(nextTheme, true);
        }
      },
      {
        id: 'act-lang',
        group: dict.groupActions,
        title: dict.actionSwitchLang,
        desc: currentLang === 'en' ? 'التحويل إلى اللغة العربية مع اتجاه اليمين لليسار' : 'Switch interface to English (LTR)',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
        badge: 'Language',
        keywords: 'language switch arabic english لغة عربي انجليزي ترجمة',
        action: () => {
          const nextLang = currentLang === 'en' ? 'ar' : 'en';
          applyLanguage(nextLang, true);
        }
      },
      {
        id: 'act-github',
        group: dict.groupActions,
        title: dict.actionGithub,
        desc: 'github.com/mohamed-jouda',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>',
        badge: 'Link',
        keywords: 'github code repo git جيت هب كود مستودع',
        action: () => {
          window.open('https://github.com/mohamed-jouda', '_blank');
        }
      },
      {
        id: 'act-linkedin',
        group: dict.groupActions,
        title: dict.actionLinkedin,
        desc: 'linkedin.com/in/mohammed-joudaa',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
        badge: 'Link',
        keywords: 'linkedin connect network لينكد ان شبكة تواصل',
        action: () => {
          window.open('https://www.linkedin.com/in/mohammed-joudaa/', '_blank');
        }
      },
      {
        id: 'act-x',
        group: dict.groupActions,
        title: dict.actionX,
        desc: 'x.com/mohammed_jouda',
        icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
        badge: 'Link',
        keywords: 'x twitter tweet post تويتر منصة اكس تغريدات',
        action: () => {
          window.open('https://x.com/mohammed_jouda', '_blank');
        }
      },
      {
        id: 'act-instagram',
        group: dict.groupActions,
        title: dict.actionInstagram,
        desc: 'instagram.com/mohammed_jouda',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
        badge: 'Link',
        keywords: 'instagram ig insta photo صور انستغرام تواصل',
        action: () => {
          window.open('https://instagram.com/mohammed_jouda', '_blank');
        }
      }
    ];
  }

  function renderPaletteResults(query = '') {
    if (!paletteResults) return;

    const allItems = getPaletteItems();
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) {
      currentFilteredItems = allItems;
    } else {
      currentFilteredItems = allItems.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(cleanQuery);
        const descMatch = (item.desc || '').toLowerCase().includes(cleanQuery);
        const kwMatch = (item.keywords || '').toLowerCase().includes(cleanQuery);
        const groupMatch = (item.group || '').toLowerCase().includes(cleanQuery);
        return titleMatch || descMatch || kwMatch || groupMatch;
      });
    }

    if (currentFilteredItems.length === 0) {
      const dict = i18n[currentLang] || i18n.en;
      paletteResults.innerHTML = `
        <div class="palette-empty">
          <p>${dict.paletteEmpty || 'No matching commands or pages found.'}</p>
        </div>
      `;
      paletteActiveIndex = -1;
      return;
    }

    if (paletteActiveIndex >= currentFilteredItems.length || paletteActiveIndex < 0) {
      paletteActiveIndex = 0;
    }

    let html = '';
    let currentGroup = '';
    currentFilteredItems.forEach((item, index) => {
      if (item.group !== currentGroup) {
        currentGroup = item.group;
        html += `<div class="palette-group-title">${currentGroup}</div>`;
      }

      const isActive = index === paletteActiveIndex ? ' active' : '';
      html += `
        <div class="palette-item${isActive}" data-palette-index="${index}">
          <span class="palette-item-icon">${item.icon}</span>
          <div class="palette-item-content">
            <span class="palette-item-title">${item.title}</span>
            <span class="palette-item-desc">${item.desc}</span>
          </div>
          <span class="palette-item-badge">${item.badge}</span>
        </div>
      `;
    });

    paletteResults.innerHTML = html;

    const activeEl = paletteResults.querySelector('.palette-item.active');
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }

  function updatePaletteActiveItem() {
    if (!paletteResults) return;
    const items = paletteResults.querySelectorAll('.palette-item');
    items.forEach(el => {
      const idx = parseInt(el.getAttribute('data-palette-index'), 10);
      if (idx === paletteActiveIndex) {
        el.classList.add('active');
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.classList.remove('active');
      }
    });
  }

  function executePaletteItem(index) {
    if (index >= 0 && index < currentFilteredItems.length) {
      const item = currentFilteredItems[index];
      closeCommandPalette();
      if (typeof item.action === 'function') {
        item.action();
      }
    }
  }

  function openCommandPalette() {
    if (!commandPaletteModal) return;
    if (typeof closeQuickModal === 'function' && typeof isQuickModalOpen === 'function' && isQuickModalOpen()) {
      closeQuickModal();
    }
    commandPaletteModal.classList.add('open');
    commandPaletteModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (paletteSearchInput) {
      paletteSearchInput.value = '';
      paletteActiveIndex = 0;
      renderPaletteResults('');
      setTimeout(() => paletteSearchInput.focus(), 60);
    }
  }

  function closeCommandPalette() {
    if (!commandPaletteModal) return;
    commandPaletteModal.classList.remove('open');
    commandPaletteModal.setAttribute('aria-hidden', 'true');
    if (!(mobileDrawer && mobileDrawer.classList.contains('open')) && !(typeof isQuickModalOpen === 'function' && isQuickModalOpen())) {
      document.body.style.overflow = '';
    }
    if (paletteSearchInput) paletteSearchInput.blur();
  }

  if (desktopSearchBtn) desktopSearchBtn.addEventListener('click', openCommandPalette);
  if (mobileSearchBtn) mobileSearchBtn.addEventListener('click', openCommandPalette);
  if (paletteCloseBtn) paletteCloseBtn.addEventListener('click', closeCommandPalette);

  if (commandPaletteModal) {
    commandPaletteModal.addEventListener('click', (e) => {
      if (e.target === commandPaletteModal) {
        closeCommandPalette();
      }
    });
  }

  if (paletteSearchInput) {
    paletteSearchInput.addEventListener('input', (e) => {
      paletteActiveIndex = 0;
      renderPaletteResults(e.target.value);
    });

    paletteSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentFilteredItems.length > 0) {
          paletteActiveIndex = (paletteActiveIndex + 1) % currentFilteredItems.length;
          updatePaletteActiveItem();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentFilteredItems.length > 0) {
          paletteActiveIndex = (paletteActiveIndex - 1 + currentFilteredItems.length) % currentFilteredItems.length;
          updatePaletteActiveItem();
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        executePaletteItem(paletteActiveIndex);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeCommandPalette();
      }
    });
  }

  if (paletteResults) {
    paletteResults.addEventListener('click', (e) => {
      const itemEl = e.target.closest('.palette-item');
      if (itemEl) {
        const idx = parseInt(itemEl.getAttribute('data-palette-index'), 10);
        executePaletteItem(idx);
      }
    });
  }


  // --- 10.7 About Page Multi-Photo Slider Controller ---
  let currentAboutSlide = 0;
  const totalAboutSlides = 2;

  function setAboutSlide(index) {
    const slides = document.querySelectorAll('.about-slider-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const counter = document.getElementById('about-slider-counter');

    if (!slides.length) return;

    currentAboutSlide = (index + totalAboutSlides) % totalAboutSlides;

    slides.forEach((slide, idx) => {
      if (idx === currentAboutSlide) {
        slide.classList.add('active');
        slide.setAttribute('aria-hidden', 'false');
      } else {
        slide.classList.remove('active');
        slide.setAttribute('aria-hidden', 'true');
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === currentAboutSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    if (counter) {
      counter.textContent = `0${currentAboutSlide + 1} / 0${totalAboutSlides}`;
    }
  }

  function initAboutSlider() {
    const prevBtn = document.getElementById('about-slider-prev');
    const nextBtn = document.getElementById('about-slider-next');
    const dots = document.querySelectorAll('.slider-dot');
    const slides = document.querySelectorAll('.about-slider-slide');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setAboutSlide(currentAboutSlide - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setAboutSlide(currentAboutSlide + 1);
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const slideIdx = parseInt(dot.getAttribute('data-slide-to'), 10) || 0;
        setAboutSlide(slideIdx);
      });
    });

    slides.forEach((slide) => {
      slide.addEventListener('click', () => {
        const img = slide.querySelector('.about-slide-img');
        const src = img ? img.getAttribute('src') : null;
        if (typeof openPhotoModal === 'function') {
          openPhotoModal(src);
        }
      });
      slide.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          slide.click();
        }
      });
    });
  }

  // --- 10.8 About Page Skills & Tools Category Filter ---
  function initAboutSkillsFilter() {
    const filterNav = document.getElementById('about-skills-filter-nav');
    if (!filterNav) return;

    const filterPills = filterNav.querySelectorAll('.skill-filter-pill');
    const skillCards = document.querySelectorAll('.skill-card-item');

    filterPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const filter = pill.getAttribute('data-filter');

        filterPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');

        skillCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('hidden-skill');
          } else {
            card.classList.add('hidden-skill');
          }
        });
      });
    });
  }

  // Global Keyboard Shortcuts (Ctrl+K / Cmd+K Spotlight Search and Escape)
  function handleGlobalShortcuts(e) {
    // Check for K key across all layouts (English 'k'/'K', Arabic 'ن', e.code 'KeyK', keyCode 75, which 75)
    const isK = e.code === 'KeyK' || 
                (e.key && e.key.toLowerCase() === 'k') || 
                e.key === 'ن' || 
                e.keyCode === 75 || 
                e.which === 75;

    if ((e.ctrlKey || e.metaKey) && isK) {
      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === 'function') {
        e.stopImmediatePropagation();
      }

      if (commandPaletteModal && commandPaletteModal.classList.contains('open')) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
      return false;
    }

    if (e.key === 'Escape' || e.code === 'Escape' || e.keyCode === 27) {
      if (typeof isCertModalOpen === 'function' && isCertModalOpen()) {
        e.preventDefault();
        closeCertModal();
        return;
      }
      if (typeof isPhotoModalOpen === 'function' && isPhotoModalOpen()) {
        e.preventDefault();
        closePhotoModal();
        return;
      }
      if (typeof isQuickModalOpen === 'function' && isQuickModalOpen()) {
        e.preventDefault();
        closeQuickModal();
        return;
      }
      if (commandPaletteModal && commandPaletteModal.classList.contains('open')) {
        e.preventDefault();
        closeCommandPalette();
      }
    }
  }

  // Register in capture phase to reliably preempt browser default search shortcuts
  window.addEventListener('keydown', handleGlobalShortcuts, { capture: true });

  // --- Floating Back-To-Top Button Controller ---
  const floatingBackToTopBtn = document.getElementById('floating-back-to-top');

  function checkBackToTopVisibility() {
    if (!floatingBackToTopBtn) return;
    const scrollPos = (mainContent ? mainContent.scrollTop : 0) || window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPos > 350) {
      floatingBackToTopBtn.classList.add('visible');
    } else {
      floatingBackToTopBtn.classList.remove('visible');
    }
  }

  if (mainContent) {
    mainContent.addEventListener('scroll', checkBackToTopVisibility, { passive: true });
  }
  window.addEventListener('scroll', checkBackToTopVisibility, { passive: true });

  if (floatingBackToTopBtn) {
    floatingBackToTopBtn.addEventListener('click', () => {
      if (mainContent) {
        mainContent.scrollTo({ top: 0, behavior: 'smooth' });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Initial State and Route Initialization on Page Load ---
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  initAboutSlider();
  initAboutSkillsFilter();
  const initialHash = window.location.hash.replace('#', '') || 'home';
  navigateTo(initialHash, false);

  console.log('Mohammed Jouda SPA Router initialized successfully.');
})();

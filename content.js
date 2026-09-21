/* ============================================================
   EDIT YOUR WEBSITE WORDS HERE
   ------------------------------------------------------------
   1. Change the text between the quotation marks.
   2. Keep the commas, brackets and quotation marks in place.
   3. Save the file and refresh the page to see your changes.
   ============================================================ */

window.SITE_TEXT = {
  // --- Page titles ----------------------------------------------------
  pageTitles: {
    home: "Yuxin Chen — Strategy, Marketing, AI and Human",
    about: "About Yuxin Chen",
    work: "Selected Work — Yuxin Chen"
  },

  // --- Basic identity -------------------------------------------------
  brandName: "Yuxin Chen",
  brandRole: "Portfolio / 2026",

  // --- Navigation -----------------------------------------------------
  navEducation: "Education",
  navProjects: "Projects",
  navInternships: "Internships",
  navSkills: "Skills",
  navAbout: "About",
  navWork: "Selected work",
  navContact: "Contact",
  languageLabel: "中文",

  // --- Application note ----------------------------------------------
  applicationLine1: "Applying for MSc Strategic Marketing",
  applicationLine2: "Imperial College London",

  // --- Home hero ------------------------------------------------------
  heroMajor: "International Business Economics",
  heroSchool: "University of Nottingham Ningbo China",
  heroEyebrow: "International Business Economics · UNNC",
  heroIntro: "I explore how strategy, marketing, AI and human behaviour shape the brands people choose.",
  keywords: ["Strategy", "Marketing", "AI", "Human"],

  heroRoleLine1: "Growth Strategist",
  heroRoleLine2: "& AI Product Builder",
  locationEyebrow: "Based in Ningbo, China",
  openToLine1: "Open to London",
  openToLine2: "and beyond.",

  marquee: ["Yuxin Chen"],

  portraitSrc: "assets/images/yuxin-portrait-transparent.png",
  portraitAlt: "Yuxin Chen portrait",

  // --- Home about preview --------------------------------------------
  aboutLabel: "About",
  aboutNumber: "01",
  aboutTitleLead: "Strategy that feels",
  aboutTitleAccent: "human.",
  aboutParagraphs: [
    "I am an International Business Economics student at the University of Nottingham Ningbo China, interested in the space where business, culture and everyday behaviour meet.",
    "My work sits at the intersection of strategy, marketing, AI and human experience. I want to understand how businesses can turn insight into brands and experiences that people genuinely choose to be part of."
  ],


  // --- Homepage CV card feed ------------------------------------------
  feedEyebrow: "Experience / A visual CV",
  feedTitle: "Scroll through the work behind the person.",
  feedIntro: "Education, research, projects, internships and the skills that connect them.",
  feedSections: [
    {
      id: "education",
      number: "01",
      label: "Education",
      title: "Education",
      intro: "The academic foundation behind how I think about business, behaviour and markets.",
      cards: [
        {
          id: "unnc",
          eyebrow: "Sep 2023 — Present",
          title: "University of Nottingham Ningbo China",
          subtitle: "BSc International Business Economics",
          summary: "",
          image: "assets/images/projects/unnc-bell-tower.jpg",
          imageAlt: "UNNC campus and bell tower at sunset.",
          gallery: ["assets/images/projects/unnc-bell-tower.jpg", "assets/images/projects/group-project-1.jpg", "assets/images/projects/group-project-2.jpg"],
          coverLabel: "UNNC",
          coverMeta: "International Business Economics",
          tags: ["Ningbo, China", "Sep 2023 — Present"],
          details: [
            "Relevant coursework: Industrial Economics, Quantitative Economics, Principles of Economics, Human Resource Management and Firm Strategy and Internationalisation.",
            "Academic performance details to be added once finalised."
          ],
          documents: [],
          links: []
        },
        {
          id: "pku",
          eyebrow: "Jul 2024 — Aug 2024",
          title: "Peking University Summer Programme",
          subtitle: "Media and International Relations",
          summary: "",
          image: "assets/images/projects/pku-gate.jpg",
          imageAlt: "Yuxin inside the Peking University library.",
          gallery: ["assets/images/projects/pku-gate.jpg", "assets/images/projects/pku-cover.jpg", "assets/images/projects/pku-group.jpg"],
          coverLabel: "PKU",
          coverMeta: "Media & International Relations",
          tags: ["Beijing, China", "92/100"],
          details: [
            "Academic Experience: Studied under Prof. Chen Kaihe, final mark: 92/100.",
            "Course focus: media, international relations and China's global communication."
          ],
          documents: [],
          links: []
        }
      ]
    },
    {
      id: "projects",
      number: "02",
      label: "Projects",
      title: "Project Experience",
      compactHeading: true,
      intro: "Research questions, product ideas and content systems that translate insight into action.",
      cards: [
        {
          id: "trust-by-design",
          eyebrow: "Jun 2026 — Sep 2026",
          title: "Trust by Design",
          subtitle: "Consumer research & experimental design",
          summary: "A 2×2 randomised experiment on AI recommendation disclosure, framing and consumer trust in recommerce.",
          image: "assets/images/projects/trust-by-design-ai-house.png",
          imageAlt: "AI Hacker House exterior seen through a window reflection.",
          coverLabel: "Trust by Design",
          coverMeta: "2×2 / 90 interfaces / 600 respondents",
          tags: ["Consumer research", "Experiment", "AI", "Recommerce"],
          details: [
            "Designed a 2×2 randomised consumer experiment testing AI recommendation disclosure and economic versus sustainability framing.",
            "Audited approximately 90 recommerce interfaces across three platforms to identify recurring consumer trust signals.",
            "Built the end-to-end protocol covering a 40–60-participant pilot, manipulation checks and a main study targeting 600 valid respondents.",
            "Specified a preregistered marketing-analytics framework using HC3 robust OLS, interaction analysis, logistic regression and bootstrap mediation."
          ],
          documents: [],
          links: []
        },
        {
          id: "uniradar",
          eyebrow: "Jun 2026 — Jul 2026",
          title: "UniRadar",
          subtitle: "AI product & user journey",
          summary: "An AI-enabled postgraduate-application platform with a four-module multi-agent architecture.",
          image: "assets/images/projects/uniradar-bear.png",
          imageFit: "contain",
          imageAlt: "Cartoon bear holding a heart, used as the UniRadar cover.",
          coverLabel: "UniRadar",
          coverMeta: "AI product / 4 modules / MVP",
          tags: ["Product", "AI agents", "MVP", "User journey"],
          details: [
            "Led product discovery and MVP scoping around programme interpretation, profile assessment and preparation planning.",
            "Designed a four-module multi-agent architecture with intent recognition, structured JSON outputs, matching logic and tiered model routing.",
            "Built and deployed the product website with Codex and coding agents, integrating model APIs and testing important product flows.",
            "Developed a freemium monetisation model and paid-feature roadmap."
          ],
          documents: [],
          links: []
        },
        {
          id: "chinese-culture-column",
          eyebrow: "Sep 2025 — May 2026",
          title: "Chinese Culture Course Reading Column",
          subtitle: "Editor-in-Chief",
          summary: "Built a content-to-community growth loop for a university reading column serving approximately 2,800 users.",
          image: "assets/images/projects/chinese-culture-event.jpg",
          imageAlt: "Chinese Culture Course reading event group photo.",
          gallery: ["assets/images/projects/chinese-culture-event.jpg", "assets/images/projects/chinese-culture-heic.jpg"],
          coverLabel: "16 A/B tests",
          coverMeta: "2,800 users / +21% engagement",
          tags: ["Editorial strategy", "A/B testing", "Community"],
          details: [
            "Developed audience segmentation and content strategy around topic selection, publication cadence and promotion.",
            "Designed and analysed 16 A/B tests across 12 releases, improving engagement by 21% and registration conversion by 12%.",
            "Connected WeChat articles, Canva and Figma assets and offline events into a repeat-readership loop."
          ],
          documents: [],
          links: []
        }
      ]
    },
    {
      id: "internships",
      number: "03",
      label: "Internships",
      title: "Internship Experience",
      compactHeading: true,
      intro: "Real-world work across growth, communications, AI, operations and professional services.",
      cards: [
        {
          id: "dewu",
          eyebrow: "Aug 2026 — Present",
          title: "Dewu (Poizon) | 95 Fen",
          titleNoWrap: true,
          subtitle: "PR and Reputation Management Intern",
          summary: "Building AI-enabled PR intelligence tools for issue monitoring, trend analysis and reputation research.",
          image: "assets/images/projects/dewu-group-3.jpg",
          imageAlt: "Yuxin at the Dewu eleventh anniversary event.",
          gallery: ["assets/images/projects/dewu-group-3.jpg", "assets/images/projects/dewu-personal-2.jpg", "assets/images/projects/dewu-personal.jpg", "assets/images/projects/dewu-group.jpg"],
          coverLabel: "Dewu",
          coverMeta: "AI PR intelligence",
          tags: ["AI workflow", "Reputation", "PR intelligence"],
          details: [
            "Built two production-ready AI-enabled PR intelligence agents, delivering an MVP in three days and completing ten iterations over three weeks.",
            "Developed a five-dimension, six-market trend-research framework and expanded coverage by 13 sources.",
            "Designed an eight-stage quality-assurance workflow covering relevance checks, precedent review, exclusion logic, human review and search audits.",
            "Converted the agents into a reusable team workflow with logs, checklists, a knowledge base and version controls."
          ],
          documents: [],
          links: []
        },
        {
          id: "didi",
          eyebrow: "Nov 2025 — Jan 2026",
          title: "DiDi Chuxing",
          subtitle: "Marketing Intern, Government Affairs and User Growth",
          summary: "Supported university growth activations and compliance-sensitive service recovery across three campuses.",
          image: "assets/images/projects/didi-christmas.jpg",
          imageAlt: "DiDi university activation in Ningbo.",
          gallery: ["assets/images/projects/didi-field.jpg", "assets/images/projects/didi-office.jpg", "assets/images/projects/didi-christmas.jpg"],
          coverLabel: "DiDi",
          coverMeta: "2,100+ registrations",
          tags: ["Growth", "Operations", "Service recovery"],
          details: [
            "Supported an offline-to-online acquisition funnel across three universities, generating more than 2,100 registrations.",
            "Created and maintained a tracker for more than 100 government-escalated and compliance-sensitive cases.",
            "Helped clear the full historical backlog and processed six urgent cases within 30 minutes during a peak period.",
            "Synthesised complaint themes, customer-experience issues and retention signals to support service improvement."
          ],
          documents: [],
          links: []
        },
        {
          id: "nubs",
          eyebrow: "Nov 2025 — Present",
          title: "NUBS Communications & Marketing",
          subtitle: "Communications and Marketing Intern",
          summary: "Owned alumni and graduate stories across multiple platforms and built a performance tracker for editorial decisions.",
          image: "assets/images/projects/nubs-campus.jpg",
          imageAlt: "University of Nottingham students outside the campus clock tower.",
          imagePosition: "center 45%",
          coverLabel: "10,000 views",
          coverMeta: "13 profiles / 3× typical reach",
          tags: ["Brand storytelling", "Editorial", "Analytics"],
          details: [
            "Supported brand positioning and student-recruitment communications across WeChat, Xiaohongshu, Douyin, Bilibili and LinkedIn.",
            "Owned 13 alumni and graduate profiles from background research and interviews through writing, approval and publication.",
            "Published more than ten profiles that each received over 3,000 views, with the strongest article reaching around 10,000 views.",
            "Built an Excel-based cross-platform performance tracker using PivotTables and dynamic filters."
          ],
          documents: [],
          links: [
            {
              label: "Alumni Interviews",
              href: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&__biz=MzI4MzA1MDg0Mg==&scene=1&album_id=1338208991692013570&count=3#wechat_redirect"
            },
            {
              label: "Graduate Interviews",
              href: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&__biz=MzI4MzA1MDg0Mg==&scene=1&album_id=4699624645203869699&count=3#wechat_redirect"
            }
          ]
        },
        {
          id: "meirunmei",
          eyebrow: "Jun 2025 — Aug 2025",
          title: "Yunnan Meirunmei International Trade",
          subtitle: "Finance and Event Operations Intern",
          summary: "Supported a cross-border B2B conference and maintained finance, inventory and transaction controls.",
          image: "assets/images/projects/meirunmei-conference.jpg",
          imageAlt: "Greater Mekong Subregion Natural Rubber Industry Cooperation Matchmaking Conference.",
          imagePosition: "center center",
          coverLabel: "GMS Rubber Summit",
          coverMeta: "Cross-border B2B operations",
          tags: ["Event operations", "Cross-border B2B", "Finance"],
          details: [
            "Supported the execution framework for the Greater Mekong Subregion Natural Rubber Industry Cooperation Matchmaking Conference.",
            "Organised company and participant information and documented business needs for cross-border stakeholder engagement.",
            "Maintained transaction controls by cross-checking invoices, customs documents, sales records and delivery information.",
            "Built batch-level inventory and sales trackers and supported account reconciliation."
          ],
          documents: [],
          links: []
        },
        {
          id: "lefu-law",
          eyebrow: "May 2024 — Jul 2024",
          title: "Lefu Law Firm",
          subtitle: "Legal and Business Assistant Intern",
          summary: "Supported pharmaceutical M&A due diligence and built a structured database of policy and industry research.",
          image: "assets/images/projects/volunteer.jpg",
          imageAlt: "Yuxin volunteering at the Girls Night In event.",
          imagePosition: "center 40%",
          coverLabel: "M&A / Policy",
          coverMeta: "80+ policy records",
          tags: ["Due diligence", "Policy research", "Business analysis"],
          details: [
            "Supported due diligence for a pharmaceutical-sector merger and acquisition by reviewing corporate, transaction and compliance materials.",
            "Built a structured database of more than 80 policy and industry records.",
            "Analysed policies related to Yunnan's resource economy, industrial-park economy and port economy from 2016 to 2022.",
            "Maintained action trackers and project documentation across legal and commercial workstreams."
          ],
          documents: [],
          links: []
        }
      ]
    },
    {
      id: "skills",
      number: "04",
      label: "Skills",
      title: "Skills",
      intro: "The capabilities I use to move from an open question to a clear, usable answer.",
      display: "list",
      cards: [
        {
          id: "skill-ai",
          eyebrow: "Capability",
          title: "AI & Product",
          subtitle: "Workflow design, prompt engineering and product thinking",
          summary: "AI agent and multi-agent workflow design, prompt engineering, model API integration, structured outputs and model routing.",
          image: "",
          imageAlt: "",
          coverLabel: "AI",
          coverMeta: "Agent workflows / product",
          tags: ["AI agents", "Prompt engineering", "Model APIs"],
          details: [
            "Multi-agent workflow design and prompt engineering.",
            "Model API integration, structured JSON outputs, intent recognition and model routing.",
            "Few-shot and fallback design, quality assurance and reusable workflow documentation."
          ],
          documents: [],
          links: []
        },
        {
          id: "skill-data",
          eyebrow: "Capability",
          title: "Data & Analytics",
          subtitle: "Turning behavioural signals into decisions",
          summary: "Advanced Excel, funnel analysis, A/B testing, multiple regression and marketing and audience analytics.",
          image: "",
          imageAlt: "",
          coverLabel: "Data",
          coverMeta: "A/B testing / regression",
          tags: ["Advanced Excel", "A/B testing", "Regression"],
          details: [
            "Funnel analysis, A/B testing, multiple regression and marketing analytics.",
            "Advanced Excel including PivotTables, lookups, dynamic filters and conditional formatting.",
            "Experience building tracking systems for content, campaigns, inventory and service operations."
          ],
          documents: [],
          links: []
        },
        {
          id: "skill-brand",
          eyebrow: "Capability",
          title: "Brand & Communication",
          subtitle: "Editorial strategy, storytelling and stakeholder communication",
          summary: "Brand storytelling, editorial strategy, audience segmentation, interviewing, writing and stakeholder communication.",
          image: "",
          imageAlt: "",
          coverLabel: "Brand",
          coverMeta: "Editorial / storytelling",
          tags: ["Brand storytelling", "Editorial", "Communication"],
          details: [
            "Audience segmentation, content strategy and editorial workflows.",
            "Interviewing, writing, narrative development and publication across multiple platforms.",
            "Stakeholder communication across academic, corporate and cross-border environments."
          ],
          documents: [],
          links: []
        },
        {
          id: "skill-tools",
          eyebrow: "Capability",
          title: "Tools & Languages",
          subtitle: "A flexible toolkit for research, product and communication",
          summary: "Codex, TokenDance, Notion, PowerPoint, Figma, Canva, WeChat Analytics, Google Trends, Douyin Index and Xiaohongshu. English / Mandarin.",
          image: "",
          imageAlt: "",
          coverLabel: "Tools",
          coverMeta: "English / Mandarin",
          tags: ["Codex", "TokenDance", "Notion", "Figma"],
          details: [
            "AI and product: Codex, coding agents, TokenDance.",
            "Content and design: Notion, PowerPoint, Figma, Canva.",
            "Research and analytics: WeChat Analytics, Google Trends, Douyin Index and Xiaohongshu.",
            "Languages: English and Mandarin."
          ],
          documents: [],
          links: []
        }
      ]
    },
  ],

  // --- About page -----------------------------------------------------
  aboutPageEyebrow: "About / Yuxin Chen",
  aboutPageTitle: "A strategist in the making.",
  aboutPageIntro: "I am interested in the decisions behind the brands people notice, trust and remember — and in how insight becomes strategy.",
  aboutPagePortraitSrc: "assets/images/yuxin-portrait-transparent.png",
  aboutPageStats: [
    { value: "Top 1%", label: "Human Resource Management and Trends in Work and Organisations" },
    { value: "92/100", label: "Peking University summer programme in Media and International Relations" },
    { value: "2,100+", label: "registrations generated through university growth activations at DiDi" },
    { value: "10,000", label: "views on the strongest alumni profile at NUBS China" }
  ],
  aboutStoryTitle: "The longer version",
  aboutStoryParagraphs: [
    "I grew up curious about why people choose what they choose. That curiosity led me to International Business Economics at the University of Nottingham Ningbo China, and then into research, content, growth and product work across very different environments.",
    "At university, I have edited a Chinese culture reading column, run campaigns for the ESG Professional League and worked with the Communications and Marketing Office to tell the stories of alumni and graduates. In industry, I have worked across marketing activation at DiDi, cross-border operations at an international trade company, legal and business research at a law firm, and AI-enabled reputation management at Dewu.",
    "What connects these experiences is a simple question: how can a better understanding of people lead to clearer strategy, stronger stories and more human experiences?"
  ],
  aboutValuesTitle: "What I care about",
  aboutValues: [
    {
      title: "Consumer insight",
      text: "Understanding the small signals behind choice, trust and behaviour."
    },
    {
      title: "Brand storytelling",
      text: "Turning research and institutional knowledge into stories people want to follow."
    },
    {
      title: "AI & experimentation",
      text: "Using new tools to test ideas faster without losing human judgement."
    },
    {
      title: "Human experience",
      text: "Designing the moments that make a brand feel useful, memorable and real."
    }
  ],
  aboutToolkitTitle: "Toolkit",
  aboutToolkit: [
    "Consumer research & experimentation",
    "Marketing analytics & A/B testing",
    "Brand and editorial strategy",
    "AI workflow & product thinking",
    "Stakeholder communication",
    "English / Mandarin"
  ],
  aboutWhyImperialTitle: "Why Imperial?",
  aboutWhyImperialBody: "This section is intentionally open for your final Why Imperial statement, research interests and personal statement extract.",
  aboutCtaTitle: "Let’s talk about strategy, marketing and people.",
  aboutCtaBody: "I am applying for the MSc Strategic Marketing at Imperial College London. For collaborations, internships or a longer conversation, please get in touch.",
  aboutCtaButtonLabel: "Contact me",

  // --- Work page ------------------------------------------------------
  workEyebrow: "Selected work / next",
  workTitle: "Four studies in strategy, stories and people.",
  projectsPageEyebrow: "Selected work / 2026",
  projectsPageTitle: "Four studies in strategy, stories and people.",
  projectsPageIntro: "A closer look at the projects that have shaped how I think about consumers, brands, AI and growth.",
  projectsPageNote: "Use the menu to move between case studies.",

  // --- Project details ------------------------------------------------
  projects: [
    {
      id: "trust-by-design",
      number: "01",
      title: "Trust by Design",
      subtitle: "Consumer research & experimental design",
      year: "2026",
      role: "Independent researcher",
      context: "A research project examining how AI recommendation disclosure and message framing influence consumer trust in recommerce.",
      metrics: [
        { value: "2×2", label: "randomised experiment design" },
        { value: "~90", label: "recommerce interfaces audited" },
        { value: "600", label: "valid respondents targeted" }
      ],
      approach: [
        "Designed a 2×2 randomised consumer experiment testing how AI recommendation disclosure and economic versus sustainability framing influence purchase intention, recommendation credibility, perceived transparency and platform trust.",
        "Developed a structured market-audit framework for approximately 90 recommerce interfaces across three major platforms, coding recommendation cues, price framing, sustainability claims, authenticity assurance, social proof and product-condition information.",
        "Built the end-to-end research protocol covering a 40–60-participant pilot, manipulation checks, questionnaire design, random assignment and a main study targeting 600 valid respondents.",
        "Specified a preregistered marketing-analytics framework using HC3 robust OLS, interaction analysis, logistic regression, reliability testing and 5,000-resample bootstrap mediation."
      ],
      outcome: "The project produced a structured experimental protocol and a marketing-analytics framework that connects AI disclosure, message framing and consumer trust in a fast-growing digital market.",
      reflection: "This project strengthened my belief that good marketing strategy starts with a well-designed question, not a quick answer.",
      visual: "matrix"
    },
    {
      id: "uniradar",
      number: "02",
      title: "UniRadar",
      subtitle: "AI product & user journey",
      year: "2026",
      role: "Independent Product Manager & Outstanding Lead Teaching Assistant",
      context: "An AI-enabled postgraduate-application platform developed during the Guancha AI Product Manager Bootcamp.",
      metrics: [
        { value: "4", label: "multi-agent product modules" },
        { value: "3", label: "priority user pain points identified" },
        { value: "MVP", label: "scoped, built and deployed" }
      ],
      approach: [
        "Led end-to-end product discovery and MVP scoping, identifying three priority pain points and defining the user journey, value proposition and product scope around programme interpretation, profile assessment and preparation planning.",
        "Designed a four-module multi-agent architecture covering programme decoding, applicant profiling, gap assessment and SMART planning, with intent recognition, structured JSON outputs, matching logic and tiered model routing.",
        "Built and deployed the product website with Codex and coding agents, integrating model APIs and testing authentication, quota management, token usage, structured outputs and exception handling.",
        "Developed a freemium monetisation model and paid-feature roadmap, then evaluated output completeness, routing accuracy, factual reliability and actionability."
      ],
      outcome: "The project turned a broad application-support idea into a clear product architecture, a working website and a monetisation roadmap.",
      reflection: "Working across user research, product logic and implementation showed me that strategy becomes real only when it is translated into a simple user experience.",
      visual: "stack"
    },
    {
      id: "nubs-communications",
      number: "03",
      title: "NUBS Communications & Marketing",
      subtitle: "Brand storytelling & editorial strategy",
      year: "2025–2026",
      role: "Communications and Marketing Intern",
      context: "Communications and Marketing Office, Nottingham University Business School China.",
      metrics: [
        { value: "13", label: "alumni and graduate profiles owned end-to-end" },
        { value: "10+", label: "profiles with more than 3,000 views" },
        { value: "10,000", label: "views on the strongest article" }
      ],
      approach: [
        "Supported brand positioning and student-recruitment communications across WeChat, Xiaohongshu, Douyin, Bilibili and LinkedIn, adapting narratives and creative formats to platform-specific audiences.",
        "Owned 13 alumni and graduate profiles from background research and interviews through narrative development, writing, approval and publication, while managing editorial workflows and stakeholder feedback in Notion.",
        "Built an Excel-based cross-platform performance tracker using PivotTables, dynamic filters and comparative metrics to monitor reach, engagement and content performance.",
        "Published more than ten profiles that each received over 3,000 views — approximately three times the typical level — with the strongest article reaching around 10,000 views."
      ],
      outcome: "The work strengthened the school’s editorial pipeline and showed how a consistent narrative can travel across multiple platforms and audiences.",
      reflection: "The work taught me that good brand storytelling is not just about writing well; it is about listening, shaping a narrative and measuring whether it travels.",
      visual: "editorial"
    },
    {
      id: "growth-in-practice",
      number: "04",
      title: "Growth in Practice",
      subtitle: "DiDi & Dewu internship experiences",
      year: "2025–2026",
      role: "Marketing Intern at DiDi; PR and Reputation Management Intern at Dewu",
      context: "Two internships across growth operations and AI-enabled reputation management.",
      metrics: [
        { value: "2,100+", label: "registrations generated at DiDi university activations" },
        { value: "100%", label: "historical backlog cleared for 100+ cases" },
        { value: "2", label: "production-ready AI agents built at Dewu" }
      ],
      sections: [
        {
          title: "DiDi — Growth & service recovery",
          text: "Supported an offline-to-online acquisition funnel across three universities, generating more than 2,100 registrations at an average of over 700 per activation. Built a tracker for more than 100 government-escalated and compliance-sensitive cases, helped clear the full historical backlog, and improved the driver service-recovery workflow by consolidating information and accelerating handovers."
        },
        {
          title: "Dewu — AI reputation management",
          text: "Built two production-ready AI-enabled PR intelligence agents, delivering an MVP in three days and completing ten iterations over three weeks. Developed a five-dimension, six-market trend-research framework, designed an eight-stage quality-assurance workflow, and converted the agents into a reusable team process with logs, checklists, a knowledge base and version controls."
        }
      ],
      approach: [
        "Balanced fast operational execution with structured tracking, clear ownership and follow-up across teams.",
        "Used AI workflows to extend research coverage and improve the reliability, traceability and reuse of reputation insights.",
        "Translated operational signals into recommendations for service recovery, channel performance and content strategy."
      ],
      outcome: "The two internships showed me how strategy is tested in the real world — through registrations, service recovery, issue monitoring and the way teams make decisions under pressure.",
      reflection: "I am most useful when I can connect the details of an operation to the bigger question of what a brand or team is trying to achieve.",
      visual: "split"
    }
  ],

  // --- Contact --------------------------------------------------------
  contactEyebrow: "Contact",
  contactTitle: "Let’s work together!",
  contactTitleLine1: "Let’s work",
  contactTitleLine2: "together!",
  contactCtaLabel: "Get in touch",
  emailLabel: "Email ☺️",
  emailHref: "mailto:Xinxin09131@outlook.com",
  linkedinLabel: "LinkedIn ↗",
  linkedinHref: "https://www.linkedin.com/in/yoki-chen-b00524301?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  cvLabel: "Download CV ↓",
  cvHref: "assets/docs/cv-chen-yuxin.pdf"
};

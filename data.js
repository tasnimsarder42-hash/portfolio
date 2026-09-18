const PORTFOLIO_DATA = {
    // ---------------------------------------------------------
    // PERSONAL INFO & HERO
    // ---------------------------------------------------------
    personal: {
        name: "Md. Tasnim Sarder Niloy",
        umbrellaTitle: "Client Operations & Data Specialist",
        eyebrow: "// DATA-DRIVEN PROFESSIONAL",
        tagline: "4+ years turning client relationships into revenue and messy data into decisions — and building the tools that do it.",
        summaryLines: [
            "Client Operations & Data Specialist with 4+ years of cross-functional experience driving client retention, streamlining operational data workflows, and executing high-conversion digital strategies.",
            "Proven track record in managing client lifecycles, maintaining structured databases of 4,000+ items with 30% operational efficiency improvements, and independently architecting automation software to eliminate repetitive business bottlenecks.",
            "Adept at connecting client-facing operations with robust technical workflows to deliver measurable, sustained business value."
        ],
        heroImage: "Image/portfolio-picture.jpg",
        cvFile: "CV/Tasnim-Sarder-Niloy-CV.pdf",
        contact: {
            email: "tasnimsarder42@gmail.com",
            phone: "+880 1857-188429",
            whatsapp: "8801857188429",
            github: "https://github.com/tasnimsarder42-hash",
            linkedin: "https://linkedin.com/in/tasnimsarder42",
            behance: "https://www.behance.net/tasnimniloy42"
        },
        heroStats: [
            { icon: "fa-briefcase", label: "4+ Years Experience" },
            { icon: "fa-database", label: "4,000+ Product Database" },
            { icon: "fa-star", label: "95% Client Satisfaction" },
            { icon: "fa-code", label: "1 Platform Built Solo" }
        ],
        aboutStats: [
            { target: 4, suffix: "+", desc: "Years Experience" },
            { target: 30, suffix: "%", desc: "Operational Efficiency Gain" },
            { target: 35, suffix: "%", desc: "Audience Engagement Growth" },
            { target: 80, suffix: "%", desc: "Inventory Speed Improvement" }
        ]
    },

    // ---------------------------------------------------------
    // CAREER JOURNEY (Experience Timeline)
    // ---------------------------------------------------------
    experience: [
        {
            role: "Client Relationship Manager",
            company: "Toppers Academy",
            location: "Dhaka",
            date: "Aug 2026 – Present",
            isCurrent: true,
            desc: [
                "Manage client and student interactions, follow-ups, and service-related information while maintaining an organised, responsive client experience.",
                "Maintain accurate client/student records across operational tracking systems; identify missing or inconsistent information and coordinate timely corrections.",
                "Advise students on IELTS preparation, study-abroad options, and application steps.",
                "Coordinate with internal teams to track activities and keep client documentation complete and on schedule."
            ]
        },
        {
            role: "Client Relationship Executive",
            company: "Sonali Sourav Tours & Travels",
            location: "Dhaka",
            date: "Jan 2026 – Aug 2026",
            isCurrent: false,
            desc: [
                "Primary point of contact for migration and visa case files, maintaining accurate records and timely follow-up.",
                "Verified visa and migration documentation for accuracy and completeness before submission, reducing errors in client filings.",
                "Coordinated case-status updates with internal teams, travel partners, and consulates."
            ]
        },
        {
            role: "Content Manager",
            company: "ICT Layer",
            location: "Dhaka",
            date: "Sep 2025 – Dec 2025",
            isCurrent: false,
            desc: [
                "Managed digital content and campaign assets across CMS platforms, tracking performance metrics tied to a 35% increase in audience engagement.",
                "Ran A/B tests on content formats and analysed user-interaction data to guide lead-generation strategy.",
                "Coordinated designer and developer workflows with 100% on-time delivery against release schedules."
            ]
        },
        {
            role: "Data Operator",
            company: "Nitex",
            location: "Dhaka",
            date: "Feb 2024 – Aug 2025",
            isCurrent: false,
            desc: [
                "Processed and maintained structured datasets covering 4,000+ products in Excel.",
                "Designed automated data-categorisation structures that cut manual retrieval time and resolved operational bottlenecks by 30%.",
                "Compiled and visualised inventory and supply-chain metrics for leadership stocking and planning decisions."
            ]
        },
        {
            role: "Video Editor",
            company: "Digital Dropouts",
            location: "Dhaka",
            date: "Sep 2023 – Dec 2023",
            isCurrent: false,
            desc: [
                "Edited 30+ video projects in Final Cut Pro, supporting a 20% lift in client social media engagement."
            ]
        },
        {
            role: "Sales & Support Representative",
            company: "10 Minute School",
            location: "Dhaka",
            date: "Apr 2022 – Aug 2023",
            isCurrent: false,
            desc: [
                "Matched 50+ students daily with relevant course offerings using student demographic and needs data.",
                "Exceeded monthly conversion targets and held a 95% customer-satisfaction score."
            ]
        }
    ],

    // Compact Early Career Strip
    earlyCareer: [
        {
            role: "Graphic Designer (Intern)",
            company: "UY Lab",
            location: "Dhaka",
            date: "Apr 2021 – Jun 2021"
        },
        {
            role: "Sales Executive",
            company: "Puma",
            location: "Dhaka",
            date: "May 2019 – Oct 2019"
        },
        {
            role: "Sales Associate",
            company: "Aarong",
            location: "Dhaka",
            date: "Apr 2017 – May 2018"
        }
    ],

    // ---------------------------------------------------------
    // SKILLS & EXPERTISE (Grouped Tags, No Arbitrary %)
    // ---------------------------------------------------------
    skills: {
        categories: [
            {
                title: "Client & Revenue",
                icon: "fa-briefcase",
                tags: [
                    "B2B Sales",
                    "B2C Sales",
                    "Client Relationship Management",
                    "CRM Management",
                    "Account Follow-up & Retention",
                    "Consultative Selling",
                    "Telemarketing",
                    "Customer Support",
                    "Lead Qualification"
                ]
            },
            {
                title: "Data & Operations",
                icon: "fa-chart-line",
                tags: [
                    "Data Validation & Quality Control",
                    "Record & Documentation Management",
                    "Reporting & Performance Tracking",
                    "Document Verification",
                    "CRM & Client Record Management",
                    "Process Automation",
                    "Data Categorization",
                    "Supply Chain Tracking",
                    "Inventory Optimization",
                    "Performance Analytics"
                ]
            },
            {
                title: "Tools",
                icon: "fa-screwdriver-wrench",
                tags: [
                    "Python (basic)",
                    "Google Workspace",
                    "Selenium (automation)",
                    "Git/GitHub",
                    "MS Excel",
                    "Adobe Acrobat Pro",
                    "Content Management Systems (CMS)",
                    "Final Cut Pro",
                    "Adobe Creative Suite"
                ]
            }
        ]
    },

    // ---------------------------------------------------------
    // SELECTED WORK (Task 4)
    // ---------------------------------------------------------
    projects: [
        {
            id: "bulkly-v3",
            featured: true,
            title: "Bulkly V3 — Omnichannel Marketing & Outreach Hub",
            tagline: "An AI-powered outreach platform for travel and migration agencies.",
            role: "Sole designer and developer",
            tags: ["Python 3.14", "CustomTkinter", "Selenium WebDriver", "Google Gemini API", "FastAPI", "Next.js", "PyInstaller"],
            githubUrl: "https://github.com/tasnimsarder42-hash/Project-Bulkly",
            details: {
                problem: "At a travel and migration agency, client outreach was fully manual: one message at a time, across five different platforms, with no record of who had been contacted or what stage their enquiry had reached. Follow-ups were missed and lead data lived in scattered spreadsheets.",
                whatIBuilt: "Bulkly is a desktop application that unifies outreach across WhatsApp, Instagram, Facebook Messenger, Telegram, and Threads into a single interface. It imports leads from Excel, generates campaign templates in three tones (Friendly, Urgent, Professional), uses the Google Gemini API for context-aware smart replies, and includes batch tooling for building WhatsApp lead communities. Distributed as a standalone Windows executable.",
                howIApproachedIt: "I designed the architecture, wrote the automation layer against Selenium WebDriver, built the dark-theme interface in CustomTkinter, and planned a web platform (FastAPI backend, Next.js front end) as the next phase. I documented the implementation plan and known issues as versioned specs before building each module.",
                whyItMatters: "I came to this from the operations side, not from engineering. I built it because I could see exactly where the manual process was leaking time, and I wanted to fix it rather than describe it."
            }
        },
        {
            id: "nitex-database",
            featured: false,
            title: "Product Catalogue Database Architecture",
            orgDate: "Nitex · Apr 2024 – Jun 2024",
            tags: ["Excel", "Database Design", "QR/SKU Systems", "Process Automation"],
            image: "Image/work-03.jpg",
            imageAlt: "Nitex digital product catalogue and inventory database architecture",
            details: {
                problem: "Physical inventory tracking was disorganised, causing supply-chain delays and repeated manual searches.",
                action: "Built a centralised digital database for 4,000+ unique products and designed a QR-based SKU system to automate inventory identification.",
                result: "80% faster inventory identification, manual search errors eliminated, and consistent data accuracy across the organisation."
            },
            metrics: [
                "4,000+ Products Catalogued",
                "80% Faster Identification",
                "100% Data Accuracy"
            ]
        },
        {
            id: "design-visual-work",
            featured: false,
            title: "Design & Visual Work",
            tags: ["Adobe Creative Suite", "Final Cut Pro", "Brand Collateral"],
            copy: "Marketing collateral, flyers, posters and 30+ edited video projects across agency and internship work.",
            behanceUrl: "https://www.behance.net/tasnimniloy42",
            thumbnails: [
                { src: "Image/work-01.jpg", alt: "Visual marketing collateral design" },
                { src: "Image/work-02.jpg", alt: "Brand promotional poster and graphics" }
            ]
        }
    ],

    // ---------------------------------------------------------
    // EDUCATION & CERTIFICATIONS (No GPA / CGPA figures)
    // ---------------------------------------------------------
    education: {
        degrees: [
            {
                degree: "Bachelor of Arts in English",
                institution: "National University, Bangladesh (NU)",
                date: "2022"
            },
            {
                degree: "Higher Secondary Certificate (HSC) — Business Studies",
                institution: "Gulshan Commerce College",
                date: "2016"
            },
            {
                degree: "Secondary School Certificate (SSC) — Business Studies",
                institution: "Banani Bidyaniketan School And College",
                date: "2014"
            }
        ],
        certifications: [
            {
                name: "Professional Graphic Design",
                meta: "UY Lab"
            },
            {
                name: "Diploma in Computer Graphics Design",
                meta: "2014"
            }
        ]
    },

    // ---------------------------------------------------------
    // LANGUAGES & VOLUNTEER (Task 2b: Bangla & English only)
    // ---------------------------------------------------------
    languages: [
        { name: "Bangla", level: "Native" },
        { name: "English", level: "Full Professional Proficiency" }
    ],
    volunteer: [
        {
            title: "Cultural Club",
            role: "Team Lead",
            date: "Mar 2017 – Mar 2020",
            desc: "Performed in and managed all cultural events; led the cultural chorus team."
        }
    ],

    // ---------------------------------------------------------
    // THEME & STYLING (Unchanged - within existing design system)
    // ---------------------------------------------------------
    theme: {
        accentPrimary: "#C9A84C",
        accentSecondary: "#1ABCB4",
        bgPrimary: "#0A0C0F",
        bgSecondary: "#111418",
        bgTertiary: "#1A1E24",
        textPrimary: "#F0EDE8",
        textSecondary: "#9A9590",
        textMuted: "#8E8A84",
        fontHeading: "'Barlow Condensed', sans-serif",
        fontBody: "'DM Sans', sans-serif"
    }
};

const PORTFOLIO_DATA = {
    // ---------------------------------------------------------
    // PERSONAL INFO & HERO
    // ---------------------------------------------------------
    personal: {
        name: "Md. Tasnim Sarder Niloy",
        tagline: "4+ years turning data into decisions, relationships into revenue.",
        summaryLines: [
            "Dynamic Sales & Operations Specialist with 4+ years of cross-functional experience driving sales revenue, optimizing data workflows, and executing high-conversion digital content strategies.",
            "Proven track record in managing B2B relationships, overseeing complex supply chains, and leading large-scale content projects for global clients.",
            "Passionate about leveraging data analytics and CRM tools to identify growth opportunities and streamline business processes."
        ],
        heroImage: "Image/Portfolio Picture.jpg",
        contact: {
            email: "tasnimsarder42@gmail.com",
            phone: "+880 1857-188429",
            whatsapp: "8801857188429",
            linkedin: "https://linkedin.com/in/tasnimsarder42",
            behance: "https://www.behance.net/tasnimniloy42"
        },
        heroStats: [
            { icon: "fa-briefcase", label: "4+ Years Experience" },
            { icon: "fa-bolt", label: "30% Efficiency Boost" },
            { icon: "fa-database", label: "4,000+ Product DB" },
            { icon: "fa-star", label: "95% Client Satisfaction" }
        ],
        aboutStats: [
            { target: 4, suffix: "+", desc: "Years of Experience" },
            { target: 30, suffix: "%", desc: "Operational Efficiency Improvement" },
            { target: 35, suffix: "%", desc: "Audience Engagement Growth" },
            { target: 80, suffix: "%", desc: "Inventory Speed Improvement" }
        ]
    },

    // ---------------------------------------------------------
    // CAREER JOURNEY (Experience)
    // ---------------------------------------------------------
    experience: [
        {
            role: "Client Relationship Executive",
            company: "Sonali Sourav Tours & Travels",
            date: "Jan 2026 – Present",
            location: "Dhaka",
            isCurrent: true,
            desc: [
                "Act as the primary point of contact for building and maintaining strong, long-term client relationships.",
                "Provide expert guidance on migration and visa processes to ensure clients receive accurate, tailored information.",
                "Collaborate with internal teams to ensure all client documentation and visa requirements are met with high precision."
            ]
        },
        {
            role: "Content Manager",
            company: "ICT Layer",
            date: "Sep 2025 – Dec 2025",
            location: "Dhaka",
            desc: [
                "Orchestrated comprehensive digital content strategies across platforms using CMS tools, boosting target audience engagement and web traffic by 35%.",
                "Directed cross-functional workflows between designers and developers to deliver on-brand marketing assets, adhering to strict release deadlines 100% of the time.",
                "Analyzed user interaction metrics and A/B tested content formats to maximize inbound lead generation and optimize digital presence."
            ]
        },
        {
            role: "Data Operator",
            company: "Nitex",
            date: "Feb 2024 – Aug 2024",
            location: "Dhaka",
            desc: [
                "Processed and analyzed supply chain datasets for over 4,000 products using Excel and data tracking tools, delivering actionable insights to stakeholders.",
                "Formulated automated data categorization structures, significantly reducing manual data retrieval times and resolving operational bottlenecks by 30%.",
                "Visualized probable business outcomes based on historical inventory metrics, enabling senior leadership to execute optimized stocking strategies."
            ]
        },
        {
            role: "Sales & Support Representative",
            company: "10 Minute School",
            date: "Apr 2022 – May 2023",
            location: "Dhaka",
            desc: [
                "Executed high-volume outbound telesales and inbound consulting workflows, matching 50+ students daily with customized educational solutions.",
                "Leveraged student demographic data to recommend targeted courses, exceeding monthly conversion targets and achieving a 95% customer satisfaction score."
            ]
        },
        {
            role: "Video Editor",
            company: "Digital Dropouts",
            date: "Sep 2023 – Dec 2023",
            location: "Dhaka",
            desc: [
                "Edited 30+ high-retention video projects using Final Cut Pro, elevating client social media engagement by 20%."
            ]
        },
        {
            role: "Graphic Designer",
            company: "UY Lab | Internship",
            date: "Apr 2021 – Jun 2021",
            location: "Dhaka",
            desc: [
                "Created targeted visual marketing collateral catering to distinct client brand guidelines."
            ]
        },
        {
            role: "Sales Executive",
            company: "Puma | Part-time",
            date: "May 2019 – Oct 2019",
            location: "Dhaka",
            desc: [
                "Drove direct retail sales through advanced upselling and personalized B2C customer service techniques."
            ]
        },
        {
            role: "Sales Associate",
            company: "Aarong | Part-time",
            date: "Apr 2017 – May 2018",
            location: "Dhaka",
            desc: [
                "Drove direct retail sales through advanced upselling and personalized B2C customer service techniques."
            ]
        }
    ],

    // ---------------------------------------------------------
    // SKILLS & EXPERTISE
    // ---------------------------------------------------------
    skills: {
        categories: [
            {
                title: "Business Skills",
                icon: "fa-briefcase",
                tags: ["B2B Sales", "B2C Sales", "Operations Management", "Content Strategy & Development", "Client Relationship Management", "CRM Management", "Telemarketing", "Project Management"]
            },
            {
                title: "Technical Skills",
                icon: "fa-chart-bar",
                tags: ["Data Analysis", "Data Entry & Management", "Performance Analytics", "AI Model Optimization", "Data Visualization & Reporting"]
            },
            {
                title: "Tools & Software",
                icon: "fa-tools",
                tags: ["MS Excel", "Content Management Systems (CMS)", "Final Cut Pro", "Adobe Creative Suite", "Adobe Professional"]
            }
        ],
        proficiency: [
            { label: "B2B/B2C Sales", percent: 90 },
            { label: "CRM & Client Management", percent: 88 },
            { label: "Content Strategy", percent: 85 },
            { label: "Data Analysis & Reporting", percent: 82 },
            { label: "Operations Management", percent: 80 }
        ]
    },

    // ---------------------------------------------------------
    // EDUCATION & CERTS
    // ---------------------------------------------------------
    education: {
        degrees: [
            { degree: "Bachelor of Arts in English", institution: "National University, Bangladesh (NU)", date: "2022", result: "CGPA: 2.38 / 4.00" },
            { degree: "Higher Secondary Certificate (HSC)", institution: "Gulshan Commerce College", date: "2016", result: "GPA: 4.00 / 5.00" },
            { degree: "Secondary School Certificate (SSC)", institution: "Banani Bidyaniketan School And College", date: "2014", result: "GPA: 3.88 / 5.00" }
        ],
        certifications: [
            { name: "Professional Graphic Design", meta: "UY Lab | Grade: A" },
            { name: "Diploma in Computer Graphics Design", meta: "2014" }
        ]
    },

    // ---------------------------------------------------------
    // LANGUAGES & VOLUNTEER
    // ---------------------------------------------------------
    languages: [
        { name: "Bangla", reading: 3, writing: 3, speaking: 3 },
        { name: "English", reading: 3, writing: 3, speaking: 3 },
        { name: "Hindi", reading: 1, writing: 1, speaking: 3 }
    ],
    volunteer: [
        { title: "Cultural Club", role: "Team Lead", date: "Mar 2017 – Mar 2020", desc: "Performed in and managed all cultural events; led the cultural chorus team." }
    ],

    // ---------------------------------------------------------
    // LINKEDIN POSTS (Custom Native Cards)
    // ---------------------------------------------------------
    linkedinPosts: [
        {
            text: "I played a small game with two AI systems recently to test their capabilities in real-world scenarios...",
            url: "https://www.linkedin.com/posts/tasnimsarder42_i-played-a-small-game-with-two-ai-systems-ugcPost-7443540603193192448-2wLW",
            date: "Recent Activity"
        },
        {
            text: "As the election is upon our heads, we have an important responsibility to reflect on our future...",
            url: "https://www.linkedin.com/posts/tasnimsarder42_as-the-election-is-upon-our-heads-we-have-share-7421432328067096576-vINI",
            date: "Recent Activity"
        },
        {
            text: "I'm happy to share that I'm starting a new position. Excited for this next chapter!",
            url: "https://www.linkedin.com/posts/tasnimsarder42_im-happy-to-share-that-im-starting-a-new-ugcPost-7413626000179126272-gzYa",
            date: "Career Update"
        },
        {
            text: "I'm happy to share that I'm starting a new position! A great milestone in my journey.",
            url: "https://www.linkedin.com/posts/tasnimsarder42_im-happy-to-share-that-im-starting-a-new-ugcPost-7375196525854953472-BAXf",
            date: "Career Update"
        },
        {
            text: "I'm happy to share that I'm starting a new position! Looking forward to learning and growing.",
            url: "https://www.linkedin.com/posts/tasnimsarder42_im-happy-to-share-that-im-starting-a-new-ugcPost-7162861506030759936-Ta8B",
            date: "Career Update"
        },
        {
            text: "I'm happy to share that I'm starting a new position! Thanks to everyone who supported me.",
            url: "https://www.linkedin.com/posts/tasnimsarder42_im-happy-to-share-that-im-starting-a-new-ugcPost-7115250917939056641-OHL2",
            date: "Career Update"
        },
        {
            text: "To gain a good employee-owner relationship, communication and trust are the absolute keys to success...",
            url: "https://www.linkedin.com/posts/tasnimsarder42_to-gain-a-good-employee-owner-relationship-share-6937643659404140544-JT1Q",
            date: "Professional Insight"
        }
    ],

    // ---------------------------------------------------------
    // BEHANCE PROJECTS
    // ---------------------------------------------------------
    behanceProjects: [
        { id: "240440987", title: "Womanish Product Display Project" },
        { id: "240133317", title: "Promotional Content" },
        { id: "168109795", title: "Welcome to the Pecha-Verse" },
        { id: "123325253", title: "Minimalist Christmas Wallpaper" },
        { id: "120290621", title: "Minimalist Halloween wallpaper" },
        { id: "116360185", title: "Mental Artwork" },
        { id: "115780335", title: "Esports Logo for Kingzone X" },
        { id: "115520485", title: "Minimalist Logo for Travelling Co." },
        { id: "115516753", title: "Minimalist LOGO for marketing agency" },
        { id: "115475329", title: "Minimalist Logo for housing Co." },
        { id: "114876083", title: "Bifold Brochure" },
        { id: "114805589", title: "Minimalist LOGO for Electric Car Co." }
    ],

    // ---------------------------------------------------------
    // FEATURED PROJECT
    // ---------------------------------------------------------
    featuredProject: {
        title: "Product Catalogue Database Architecture",
        company: "Nitex",
        date: "Apr 2024 – Jun 2024",
        status: "COMPLETED",
        problem: "Severe supply chain inefficiencies caused by unorganized tracking of physical product inventory.",
        action: "Engineered a centralized digital database encompassing 4,000+ unique physical products and designed a QR-based SKU recognition system to automate tracking.",
        result: "Eliminated widespread manual search errors, accelerating inventory identification speed by 80% and ensuring total data accuracy across the organization.",
        metrics: [
            "4,000+ Products Catalogued",
            "80% Faster Identification",
            "100% Data Accuracy"
        ],
        image: "Image/Image 3.JPG"
    }
};

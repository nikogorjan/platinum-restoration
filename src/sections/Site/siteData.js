// Single source of truth for the Platinum Restoration & Construction draft site.
// Copy is taken verbatim from platinumrestorationandconstruction.com (old site)
// wherever it existed; anything invented is marked [Draft].

export const SITE = {
    name: "Platinum Restoration & Construction",
    phone: "(984) 520-7175",
    phoneHref: "tel:9845207175",
    email: "platinumrestorationandconstruction@outlook.com",
    address: "267 Timber Dr. Unit 407, Garner NC 27529",
    serviceArea: "Serving the Triangle area, North Carolina",
    facebook: "https://www.facebook.com/p/Platinum-Restoration-Construction-100091479665177/",
    logo: "/aditional-assets/logo/Platinum-Restoration-and-Construction-horizontal.webp",
    favicon: "/aditional-assets/logo/favicon.png",
};

export const HERO = {
    subtitle: "30+ Years of Restoration, Property Management & Construction",
    titleLine1: "Your Home. Your Vision.",
    titleLine2: "Our Expertise.",
    text: "Transforming Your Property Into a Sanctuary and Investment You Can Trust. We bring your vision to life with expert craftsmanship, reliable service, and a commitment to excellence.",
    image: "/aditional-assets/images/Gallery-5.png",
};

// Side-by-side composite (left = before, right = after) shown in the
// interactive comparison widget in the About section.
export const BEFORE_AFTER_IMAGE = "/aditional-assets/images/repair-water-damaged-home-scaled.jpeg";

export const ABOUT = {
    title: "Rooted in the Triangle, Built on Trust",
    text: "At Platinum Restoration and Construction, we're more than just a service provider — we're a local company with deep roots in the Triangle area.",
    text2: "Born and raised here, our owner understands the unique needs of our community and is committed to delivering exceptional results that reflect our shared values.",
    checklist: [
        "As a faith-based company, honesty and integrity are at the heart of everything we do",
        "Over 30 years of experience, expertise, integrity, and personalized care",
    ],
    owner: "Jayson Chatham",
    ownerRole: "Owner",
    image1: "/aditional-assets/images/Gallery-3.webp",
    image2: "/aditional-assets/images/Gallery-6.webp",
};

export const KEY_BENEFITS = [
    {
        tab: "Comprehensive Solutions",
        title: "Comprehensive Solutions for Every Need",
        text: "Whether it's restoration, property management, or construction, we're your one-stop shop for expert services.",
        image: "/aditional-assets/images/water-damage-repair.jpeg",
        points: [
            "Water damage repairs, mold remediation, crawlspace and insulation solutions, and more.",
            "Residential remodels, roofing, painting, and windows and doors to transform your home.",
            "Proactive property management and reliable repairs to protect your investment.",
        ],
    },
    {
        tab: "30+ Years of Experience",
        title: "Expertise Backed by Over 30 Years of Experience",
        text: "We bring decades of industry knowledge and skilled craftsmanship to every project.",
        image: "/aditional-assets/images/crawl-space-sealing-scaled.jpeg",
        points: [
            "Solutions tailored to your property's unique needs and your personal vision.",
            "Attention to detail ensures long-lasting quality and exceptional results.",
        ],
    },
    {
        tab: "Personalized Approach",
        title: "A Personalized Approach to Every Project",
        text: "Your property is unique, and we treat it that way by tailoring our services to fit your goals and lifestyle.",
        image: "/aditional-assets/images/Gallery-6.webp",
        points: [
            "Custom designs, upgrades, and maintenance plans created just for you.",
            "Open communication throughout the process so you're always informed and involved.",
        ],
    },
    {
        tab: "Stress-Free Service",
        title: "Stress-Free Service You Can Trust",
        text: "We handle the hard work, so you can focus on what matters most.",
        image: "/aditional-assets/images/Sheetrock.png",
        points: [
            "Quick responses to emergencies and routine maintenance requests.",
            "Transparent pricing with detailed estimates to keep you in control.",
        ],
    },
    {
        tab: "Long-Term Value",
        title: "Long-Term Value and Peace of Mind",
        text: "Our work is designed to enhance your property's performance, beauty, and value for years to come.",
        image: "/aditional-assets/images/Gallery-4.png",
        points: [
            "Energy-efficient upgrades that save money and boost comfort.",
            "Durable, high-quality materials and expert craftsmanship that stand the test of time.",
        ],
    },
];

// Problem → solution pairs from the old home page ("When Challenges Arise,
// We Provide Solutions That Last" + "Comprehensive Coverage for Your Property").
export const CHALLENGES = {
    headline: "When Challenges Arise, We Provide Solutions That Last",
    painHeadline: "Living With Property Issues With No End in Sight?",
    pains: [
        {
            icon: "ri-money-dollar-circle-line",
            title: "Rising Costs",
            text: "Delaying repairs or updates can lead to more significant and expensive problems over time.",
        },
        {
            icon: "ri-emotion-unhappy-line",
            title: "Daily Frustration",
            text: "Outdated or damaged spaces affect your quality of life and property's value.",
        },
        {
            icon: "ri-timer-flash-line",
            title: "Stressful Management",
            text: "Keeping up with maintenance and tenant satisfaction can feel like a full-time job.",
        },
    ],
    pairs: [
        {
            problemTitle: "Water Damage",
            problem: "Leaks, flooding, or damp crawlspaces that threaten your home's safety and comfort.",
            solutionTitle: "Expert Restoration",
            solution: "From water damage repairs to mold remediation, we restore your home to its best condition.",
            href: "/restoration-services",
        },
        {
            problemTitle: "Outdated Spaces",
            problem: "Kitchens, bathrooms, or living areas that no longer meet your needs.",
            solutionTitle: "Tailored Construction",
            solution: "Remodels, roofing, painting, and more to create spaces that reflect your vision and needs.",
            href: "/construction-services",
        },
        {
            problemTitle: "Property Maintenance",
            problem: "The stress of managing repairs, tenant concerns, and unexpected issues.",
            solutionTitle: "Seamless Property Management",
            solution: "Proactive care, reliable repairs, and tenant-first management that simplify ownership.",
            href: "/property-management",
        },
    ],
    ctaTitle: "Ready to Take the First Step?",
    ctaText: "Contact us today at 984-520-7175 to schedule your free consultation. Let's protect, enhance, and transform your home or property with Platinum service and care.",
};

// Slim trust strip ("Licensed and Insured Professionals" + company facts).
export const TRUST_STRIP = [
    { icon: "ri-shield-check-line", text: "Licensed & Insured" },
    { icon: "ri-award-line", text: "30+ Years of Experience" },
    { icon: "ri-community-line", text: "Faith-Based, Locally Owned" },
    { icon: "ri-chat-check-line", text: "Free Consultations" },
];

// "Our Promise to You" trio + faith intro (old home page) — used on Contact.
export const PROMISE = {
    intro: "As a faith-based company, honesty and integrity are at the heart of everything we do. We believe that success isn't just measured by the quality of our work but by the relationships we build with our clients.",
    items: [
        {
            icon: "ri-user-heart-line",
            title: "Client-Centered Service",
            text: "You're our top priority, and we strive to deliver a seamless, stress-free experience.",
        },
        {
            icon: "ri-medal-line",
            title: "Professionalism You Can Count On",
            text: "From timely communication to precise execution, we approach every project with care and attention to detail.",
        },
        {
            icon: "ri-price-tag-3-line",
            title: "Competitive Pricing",
            text: "We provide top-quality services at a price that respects your budget, without compromising on excellence.",
        },
    ],
};

// Category-level detail content assembled from the old site's expanded
// service lists and long-form FAQ articles — powers the service detail pages.
export const DETAIL_CONTENT = {
    restoration: {
        description: "We specialize in restoring properties affected by water damage, mold, and other issues, ensuring your home or business is safe and sound.",
        includes: [
            "Water damage repairs",
            "Mold inspections and remediation",
            "Crawlspace remediation and encapsulation",
            "Insulation removal and installation",
            "Vapor barrier and dehumidifier installation",
            "Basement waterproofing and sump pump installation",
        ],
        timeline: "Restoration projects range from a single day for small issues to a week or more for larger, multi-step restorations — we provide a realistic timeline up front and keep you updated throughout.",
    },
    construction: {
        description: "Our experienced team brings your vision to life with high-quality construction solutions.",
        includes: [
            "Residential remodels tailored to your preferences",
            "Expert roofing services",
            "Sheetrock installation and painting",
            "Window and door replacements",
            "Comprehensive drainage solutions",
        ],
        timeline: "Construction projects like remodels or roofing typically take one to three weeks depending on size and customization — with a clear, step-by-step plan before we begin.",
    },
    property: {
        description: "We provide hassle-free property management services to maintain and enhance your investment — for single-family homes, multi-unit buildings, and commercial, retail, and industrial properties.",
        includes: [
            "Routine maintenance and prompt repairs",
            "Tenant-focused management ensuring satisfaction",
            "24/7 emergency response services",
            "Preventative care to avoid costly future issues",
        ],
        timeline: "Most routine maintenance requests are scheduled and resolved within 24 to 48 hours, with emergency repairs prioritized immediately.",
    },
    warranty: "Our work is backed by a workmanship warranty — installation or construction issues are fixed promptly at no additional cost — plus manufacturer's warranties on quality materials ranging from 10 years to lifetime coverage. You receive all warranty details in writing.",
};

export const TESTIMONIALS = [
    {
        name: "Shelia Beach",
        location: "Clayton, NC",
        title: "Job well done!",
        text: "He completed the work, cleaned up all job related debris in a very timely manner. He took the time to answer all my questions and fixed everything to our satisfaction. Job well done. His company is the only people I call for all my repair work now.",
        fullText: "In 2019, we discovered that the flooring in our living room was weak. My husband went underneath the house and discovered that moisture over time had rotted the floor joist that support the floor structure. He then started making calls to different companies for a repair estimate. He contacted four companies and no one would take on the job. I knew Jayson had replaced our roof, so I contacted him to see if he could recommend someone. He informed me that he could do the job. Jayson came out, gave us an estimate and was able to start the job immediately. He completed the work, cleaned up all job related debris in a very timely manner. I was very concerned about the moisture buildup under my house so I asked Jayson what my options were to prevent this from happening again in the future. He installed additional vent on the front porch for better air flow. He also sprayed a Mold Preventative on the underside of the house. We are very satisfied and grateful for Jayson Chatham and his company for the work they did for us. He took the time to answer all my questions and fixed everything to our satisfaction. Job well done. His company is the only people I call for all my repair work now.",
    },
    {
        name: "Vince and Karen Bankoski",
        location: "Cary, NC",
        title: "Highly recommend!",
        text: "Jayson is honest, and trustworthy, Jayson is very adept in his crafts, therefore his knowledge and expertise are on display in every job he does. If you are looking for an organization that will treat you fairly, Jayson Chatham is your guy.",
        fullText: "This is an unabashed reference for Jayson Chatham, Jayson takes the time to listen to what needs to be done, he also possesses the unique ability to listen between the lines, and what he gives you is actually what you really wanted as well. Jayson is honest, and trustworthy, Jayson is very adept in his crafts, therefore his knowledge and expertise are on display in every job he does. I had a college instructor who believed in the Golden Rule, however, he challenged us to take that adage one step further to the Platinum Rule; Do unto others as THEY would have or you do unto them. Even though Jayson does not know that saying, he practices it in the work that he does. If you are looking for an organization that will treat you fairly, be extremely honest in the work needed, and you want someone who will stand behind his work 100%, Jayson Chatham is your guy. As you can see we highly recommend Jayson unequivocally! Jayson works diligently for two people…Himself and YOU!",
    },
];

export const FAQS = [
    {
        question: "How long will my project take?",
        answer: "At Platinum Restoration and Construction, we understand that your time is valuable. Whether it's a restoration, remodeling, or repair project, we strive to provide realistic timelines and deliver results efficiently without compromising quality.",
        points: [
            "Restoration projects: from a single day for small issues to a week or more for larger, multi-step restorations.",
            "Construction projects like remodels or roofing: typically one to three weeks.",
            "Property management repairs: most routine tasks completed within 24–48 hours, emergencies prioritized immediately.",
        ],
    },
    {
        question: "Can your services be customized to my needs?",
        answer: "We believe every property and homeowner is unique. That's why customization is at the heart of what we do. Whether it's restoring a water-damaged basement, remodeling a kitchen, or managing repairs for a rental property, our services are tailored to match your vision, preferences, and specific needs.",
        points: [
            "Every project begins with a thorough inspection or consultation.",
            "Flexible options for materials, custom designs, or phased work to fit your budget and timeline.",
            "Your aesthetic preferences are built into remodels and upgrades.",
        ],
    },
    {
        question: "What sets Platinum apart from other companies?",
        answer: "We know you have choices when it comes to restoration, property management, and construction services. What sets us apart is our unwavering commitment to excellence, honesty, and the personalized care we bring to every project.",
        points: [
            "A legacy of excellence — clients return to us project after project.",
            "No hidden fees or surprise charges — detailed, straightforward estimates.",
            "Emergency services respond promptly, and timelines are clear and realistic.",
        ],
    },
    {
        question: "Do you offer warranties or guarantees?",
        answer: "We believe that great work should be backed by great promises. That's why we proudly offer warranties and guarantees for our services. We want you to feel confident in your investment, knowing that our work is built to last and that we're here to support you long after the project is completed.",
        points: [
            "Workmanship warranty — installation or construction issues are fixed promptly at no additional cost.",
            "Manufacturer's warranties on quality materials, from 10 years up to lifetime coverage.",
            "All warranty details provided in writing, with clear terms and easy claims.",
        ],
    },
    {
        question: "What happens if unexpected issues arise during a project?",
        answer: "We understand that unexpected situations can arise during any project, no matter how well it's planned. What sets us apart is our proactive approach to managing these surprises with transparency, professionalism, and your best interests in mind.",
        points: [
            "Thorough upfront inspections identify hidden issues before work begins.",
            "Immediate, honest communication — with photos and a proposed plan — if something arises.",
            "No additional work is ever done without your approval.",
        ],
    },
];

// About page content — verbatim from the old site's About page.
export const ABOUT_PAGE = {
    headline: "Building Trust, Restoring Value, Transforming Spaces",
    intro: "At Platinum Restoration and Construction, we believe your property is more than just a structure — it's your sanctuary, your investment, and a reflection of who you are.",
    experience: "With over 30 years of experience, we have built a reputation for delivering high-quality restoration, property management, and construction services throughout the Triangle area.",
    team: "Our team combines deep expertise, faith-driven values, and a commitment to personalized service to ensure your property is protected, enhanced, and transformed with care and precision.",
    localHeadline: "A Local, Faith-Based Company Serving the Triangle with Integrity",
    localIntro: "Platinum Restoration and Construction is a local, faith-based company rooted in the Triangle community.",
    ownerLine: "Our owner, Jayson Chatham, born and raised here, understands the unique needs of our community and takes pride in serving all clients with integrity and excellence.",
    image: "/aditional-assets/images/Gallery-6.webp",
    imageSecondary: "/aditional-assets/images/crawl-space-sealing-scaled.jpeg",
    values: [
        {
            icon: "ri-hand-heart-line",
            title: "Faith and Integrity",
            text: "Honesty, transparency, and respect guide every interaction and project we undertake.",
            image: "/aditional-assets/images/home-mold-treatment.jpeg",
        },
        {
            icon: "ri-user-heart-line",
            title: "Client-Centered Approach",
            text: "Your satisfaction is our top priority, and we strive to exceed your expectations at every step.",
            image: "/aditional-assets/images/Gallery-4.png",
        },
        {
            icon: "ri-award-line",
            title: "Unmatched Expertise",
            text: "With decades of experience, we bring the knowledge and skill needed to deliver exceptional results.",
            image: "/aditional-assets/images/Gallery-5.png",
        },
    ],
    servicesIntro: "We specialize in a wide range of services designed to protect, restore, and elevate your property:",
    servicesOutro: "No matter the project, we're here to make your property the best it can be.",
    serviceColumns: [
        {
            icon: "ri-drop-line",
            title: "Restoration",
            href: "/restoration-services",
            image: "/aditional-assets/images/water-damage-repair.jpeg",
            items: [
                "Water damage repairs",
                "Mold inspections and remediation",
                "Crawlspace remediation and vapor barrier installation",
                "Dehumidifier installation and insulation services",
            ],
        },
        {
            icon: "ri-hammer-line",
            title: "Construction",
            href: "/construction-services",
            image: "/aditional-assets/images/Sheetrock.png",
            items: [
                "Residential remodels tailored to your vision",
                "Roofing repairs and replacements",
                "Sheetrock and painting solutions",
                "Custom windows and doors",
            ],
        },
        {
            icon: "ri-home-gear-line",
            title: "Property Management",
            href: "/property-management",
            image: "/aditional-assets/images/Gallery-3.webp",
            items: [
                "Routine maintenance and proactive care",
                "Tenant-focused services that simplify property ownership",
                "Emergency response for urgent repair needs",
            ],
        },
    ],
    trustHeadline: "Why Homeowners and Property Owners Trust Platinum Restoration and Construction",
    trustIntro: "Choosing Platinum Restoration and Construction means partnering with a team that puts your needs first. Here's why homeowners and property owners trust us:",
    trust: [
        {
            title: "Transparent and Fair Pricing",
            text: "No hidden fees — just honest estimates and competitive rates.",
        },
        {
            title: "Reliable and Timely Service",
            text: "We deliver on time without compromising quality.",
        },
        {
            title: "Long-Term Value",
            text: "Our solutions are built to last, enhancing your property's performance and appeal.",
        },
    ],
    mission: "Our mission is simple: to protect and enhance the properties of our clients while fostering trust and delivering unparalleled service.",
    missionEmphasis: "We treat every property as if it were our own, ensuring exceptional results that you can rely on.",
    ctaHeadline: "Let's Build a Better Future for Your Property",
    ctaText: "We're passionate about turning your vision into reality and solving your property's challenges with expertise and care. Contact us today to learn more about how we can help you protect, restore, and transform your space.",
};

export const CTA_SECTION = {
    subtitle: "Ready to Protect, Restore, and Transform Your Property?",
    titleLine1: "Let's Build",
    titleLine2: "Something Amazing",
    text: "Call us today at 984-520-7175 for your FREE consultation and discover how Platinum can make your home or property the best it can be. Let's build something amazing together!",
};

export const RESTORATION_OVERVIEW = {
    headline: "Restore Your Home, Restore Your Peace of Mind",
    intro: "When life throws unexpected challenges your way, Platinum Restoration and Construction is here to bring your home back to its best. With our comprehensive restoration services, we'll restore not only your property but also your peace of mind.",
    coverageTitle: "Everything we cover",
    coverage: [
        "Water damage repairs",
        "Mold inspections and remediation",
        "Crawlspace remediation and encapsulation",
        "Insulation removal and installation",
        "Vapor barrier and dehumidifier installation",
        "Basement waterproofing and sump pump installation",
    ],
};

export const CONSTRUCTION_OVERVIEW = {
    headline: "Reimagine Your Home with Platinum Construction Services",
    intro: "Your home is more than just a structure — it's where life happens. At Platinum Restoration and Construction, we bring your vision to life with expert craftsmanship and personalized solutions.",
    coverageTitle: "Everything we cover",
    coverage: [
        "Residential remodels tailored to your preferences",
        "Expert roofing services",
        "Sheetrock installation and painting",
        "Window and door replacements",
        "Comprehensive drainage solutions",
    ],
};

export const RESTORATION_SERVICES = [
    {
        slug: "water-damage-repairs",
        icon: "ri-drop-line",
        title: "Water Damage Repairs",
        image: "/aditional-assets/images/water-damage-repair.jpeg",
        blurb: "Quickly addressing leaks, flooding, and water damage to prevent further issues and restore your home.",
    },
    {
        slug: "mold-inspections",
        icon: "ri-search-eye-line",
        title: "Mold Inspections",
        image: "/aditional-assets/images/Mold-Inspection.jpg",
        blurb: "Thorough assessments to identify and address mold problems before they escalate.",
    },
    {
        slug: "mold-remediation",
        icon: "ri-shield-cross-line",
        title: "Mold Remediation",
        image: "/aditional-assets/images/home-mold-treatment.jpeg",
        blurb: "Safely removing mold and preventing future growth for a healthier living space.",
    },
    {
        slug: "crawlspace-remediation",
        icon: "ri-home-2-line",
        title: "Crawlspace Remediation",
        image: "/aditional-assets/images/crawl-space-sealing-scaled.jpeg",
        blurb: "Eliminating moisture, mold, and pests to protect your home from the ground up.",
    },
    {
        slug: "insulation-removal-installation",
        icon: "ri-stack-line",
        title: "Insulation Removal & Installation",
        image: "/aditional-assets/images/insulation-removal-installation.png",
        blurb: "Upgrading insulation to improve energy efficiency and comfort.",
    },
    {
        slug: "vapor-barrier-installation",
        icon: "ri-layout-bottom-2-line",
        title: "Vapor Barrier Installation",
        image: "/aditional-assets/images/Vapor-Barrier-Installation.jpg",
        blurb: "Sealing your crawlspace to block moisture and maintain a dry, stable environment.",
    },
    {
        slug: "dehumidifier-installation",
        icon: "ri-water-percent-line",
        title: "Dehumidifier Installation",
        image: "/aditional-assets/images/Gallery-8.png",
        blurb: "Managing humidity levels to protect your home and improve indoor air quality.",
    },
];

export const CONSTRUCTION_SERVICES = [
    {
        slug: "residential-remodels",
        icon: "ri-home-heart-line",
        title: "Residential Remodels",
        image: "/aditional-assets/images/Gallery-6.webp",
        blurb: "Update and upgrade your living spaces with designs that reflect your style and enhance functionality.",
    },
    {
        slug: "sheetrock-painting",
        icon: "ri-brush-line",
        title: "Sheetrock & Painting",
        image: "/aditional-assets/images/Sheetrock.png",
        blurb: "Achieve flawless walls and vibrant finishes with professional drywall and painting services.",
    },
    {
        slug: "windows-doors",
        icon: "ri-door-open-line",
        title: "Windows & Doors",
        image: "/aditional-assets/images/Gallery-4.png",
        blurb: "Enhance energy efficiency, security, and style with expertly installed and customized options.",
    },
    {
        slug: "roofing-repairs",
        icon: "ri-home-4-line",
        title: "Roofing & Repairs",
        image: "/aditional-assets/images/Gallery-5.png",
        blurb: "Protect your home with durable roofing solutions, including repairs, replacements, and inspections.",
    },
    {
        slug: "drainage-solutions",
        icon: "ri-water-flash-line",
        title: "Drainage Solutions",
        image: "/aditional-assets/images/Gallery-8.png",
        blurb: "[Draft — no copy on old site] Grading, drains and gutter solutions that move water away from your home.",
    },
];

export const PROPERTY_MANAGEMENT = {
    slug: "property-management",
        icon: "ri-home-gear-line",
    title: "Property Management & Repairs",
    image: "/aditional-assets/images/Gallery-3.webp",
    blurb: "Hassle-free maintenance, repairs, and tenant-focused management to keep your property running smoothly. Most routine requests are scheduled and resolved within 24 to 48 hours, with 24/7 emergency response for critical situations.",
};

// Per-service content from each individual old-site service page.
// Shape: headline, intro, problems[], solutions[], benefits[] — the
// structure every old service page follows.
export const SERVICE_DETAILS = {
    "water-damage-repairs": {
        headline: "Fast Action, Reliable Results: Your Water Damage Experts",
        intro: "When water wreaks havoc on your home or business, you need a trusted team to restore what matters most. Water damage doesn't wait, and neither do we — whether it's a burst pipe, storm flooding, or hidden leaks, our skilled team responds quickly and effectively.",
        problemsTitle: "The Hidden Problem That Can't Be Ignored",
        problems: [
            { title: "Damage spreads fast", text: "Water travels through floors, walls and ceilings long before you see it." },
            { title: "Mold follows moisture", text: "Untreated damp areas become a health hazard within days." },
            { title: "Costs escalate", text: "Waiting turns a contained repair into a structural problem." },
        ],
        solutionsTitle: "Our Water Damage Repair Process",
        solutions: [
            { title: "Inspection & assessment", text: "Immediate assessment to identify the source and extent of the damage." },
            { title: "Water extraction & drying", text: "Extraction, drying and dehumidification with advanced equipment." },
            { title: "Cleaning & sanitizing", text: "Affected areas cleaned and sanitized to prevent mold growth." },
            { title: "Repairs & restoration", text: "Full restoration of damaged areas — floors, walls and ceilings." },
        ],
        benefits: [
            "Comprehensive services from extraction to final repair",
            "Unmatched workmanship on every restoration",
            "Licensed and insured professionals",
            "Competitive pricing with clear estimates",
            "Customer-focused approach at every step",
        ],
    },
    "mold-inspections": {
        headline: "Comprehensive Mold Inspections That Bring Peace of Mind",
        intro: "When mold invades your home or business, it's more than an eyesore — it's a health hazard. We provide thorough mold inspections to uncover hidden issues, safeguard your property, and protect your loved ones.",
        problemsTitle: "The Hidden Problem You Can't Ignore",
        problems: [
            { title: "Health issues", text: "Allergies, respiratory problems, and asthma flare-ups." },
            { title: "Structural damage", text: "Mold eats away at wood, drywall, and insulation." },
            { title: "Decreased property value", text: "Mold left untreated lowers what your property is worth." },
        ],
        solutionsTitle: "How We Find Your Peace of Mind",
        solutions: [
            { title: "Full property assessment", text: "Including the hidden areas where mold most often thrives." },
            { title: "State-of-the-art detection", text: "Tools that pinpoint even invisible mold colonies." },
            { title: "Clear guidance", text: "The exact steps needed to remove mold and prevent its return." },
        ],
        benefits: [
            "Comprehensive detection, including behind walls and in HVAC systems",
            "Health-focused approach to protect your household",
            "Expert guidance on next steps",
            "Time and cost efficiency",
            "Reliable and trustworthy service",
        ],
        signsTitle: "Signs you need an inspection",
        signs: [
            "Visible mold growth",
            "Persistent musty odors",
            "Unexplained health issues",
            "Water damage or leaks",
            "Humidity problems",
            "Uncertainty about mold presence",
        ],
    },
    "mold-remediation": {
        headline: "Expert Mold Remediation: Restore Your Space and Health",
        intro: "Mold can silently invade your home or business, compromising both health and property. We specialize in comprehensive mold remediation, restoring your space to safety and comfort.",
        problemsTitle: "The Hidden Threat Lurking in Your Property",
        problems: [
            { title: "Health issues", text: "Respiratory problems, allergies and other ongoing health concerns." },
            { title: "Structural damage", text: "Compromised integrity of walls, floors and ceilings." },
            { title: "Persistent odors & stains", text: "Musty smells and discoloration that keep coming back." },
        ],
        solutionsTitle: "Our Comprehensive Mold Remediation",
        solutions: [
            { title: "Inspection & containment", text: "Identifying affected areas and preventing the spread." },
            { title: "Safe removal", text: "Industry-standard methods to fully eliminate mold." },
            { title: "Cleaning & air filtration", text: "Air scrubbing and surface treatment for a healthy space." },
            { title: "Repairs & prevention", text: "Repairing damage and putting prevention measures in place." },
        ],
        benefits: [
            "Comprehensive expertise across inspection, testing and removal",
            "Health-focused solutions",
            "Advanced techniques and equipment",
            "Timely and efficient service — most projects take 1 to 5 days",
            "Reliable customer support",
        ],
        pricingTitle: "Typical investment",
        pricingNote: "The entire mold remediation process typically takes 1 to 5 days.",
        pricing: [
            { label: "Mold remediation", value: "$500 – $6,000" },
        ],
    },
    "crawlspace-remediation": {
        headline: "Protect Your Home from the Ground Up",
        intro: "Your crawlspace plays a crucial role in your home's health and stability. We specialize in comprehensive crawlspace remediation to ensure your property remains safe, dry, and structurally sound.",
        problemsTitle: "The Hidden Dangers Beneath Your Home",
        problems: [
            { title: "Mold growth", text: "Damp crawlspaces breed mold that affects the air you breathe upstairs." },
            { title: "Structural damage", text: "Moisture rots joists and supports, leading to sagging floors." },
            { title: "Pest infestations", text: "Standing moisture attracts insects and rodents." },
        ],
        solutionsTitle: "Our Comprehensive Crawlspace Remediation",
        solutions: [
            { title: "Inspection & assessment", text: "Full diagnosis of moisture sources and existing damage." },
            { title: "Moisture control & cleaning", text: "Water removal, mold remediation and structural repairs." },
            { title: "Encapsulation & barriers", text: "Crawlspace encapsulation with vapor barrier installation." },
            { title: "Dehumidification & prevention", text: "Ventilation, dehumidification and pest prevention measures." },
        ],
        benefits: [
            "Comprehensive solutions from diagnosis to prevention",
            "Improved air quality throughout your home",
            "Better energy efficiency and lower utility bills",
            "Enhanced structural integrity",
            "Professional expertise and exceptional care",
        ],
        signsTitle: "Signs your crawlspace needs attention",
        signs: [
            "Persistent musty odors",
            "Visible mold or water stains",
            "Increased energy bills",
            "Pest infestations",
            "Sagging or uneven floors",
            "Health issues in your home",
        ],
        pricingTitle: "Typical investment",
        pricingNote: "Cost depends on crawlspace size, extent of damage, services needed, accessibility and preventive measures.",
        pricing: [
            { label: "Smaller jobs", value: "$1,500 – $5,000" },
            { label: "Larger projects", value: "$10,000 or more" },
            { label: "Average range", value: "$1,500 – $15,000" },
        ],
    },
    "insulation-removal-installation": {
        headline: "Enhance Your Home's Comfort and Efficiency",
        intro: "Proper insulation is key to maintaining a comfortable and energy-efficient home. We handle removal of old or damaged insulation and installation of high-quality replacements.",
        problemsTitle: "The Hidden Costs of Poor Insulation",
        problems: [
            { title: "Increased energy bills", text: "Heating and cooling systems have to work much harder." },
            { title: "Uneven temperatures", text: "Inconsistent comfort levels from room to room." },
            { title: "Moisture issues", text: "Poor insulation leads to condensation and mold growth." },
        ],
        solutionsTitle: "Comprehensive Insulation Services",
        solutions: [
            { title: "Assessment & diagnosis", text: "Identifying exactly where your insulation falls short." },
            { title: "Safe removal", text: "Extracting old insulation without disturbing contaminants." },
            { title: "Expert installation", text: "Spray foam, batt or blown-in insulation suited to your home." },
            { title: "Air sealing", text: "Finding and sealing leaks to stop energy loss." },
        ],
        benefits: [
            "Enhanced energy efficiency",
            "Improved indoor comfort year-round",
            "Healthier indoor air quality",
            "Comprehensive service including attics and crawlspaces",
            "Experienced and reliable team",
        ],
    },
    "vapor-barrier-installation": {
        headline: "Your Shield Against Moisture Intrusion",
        intro: "Moisture can silently compromise your home's foundation and air quality. We specialize in professional vapor barrier installation, safeguarding your property from the ground up.",
        problemsTitle: "The Hidden Dangers of Moisture in Your Crawl Space",
        problems: [
            { title: "Structural damage", text: "Moisture weakens wooden beams and supports over time." },
            { title: "Mold growth", text: "Damp conditions create health hazards and lasting odors." },
            { title: "Pest infestations", text: "Moisture attracts insects and rodents into your home." },
        ],
        solutionsTitle: "Professional Vapor Barrier Installation",
        solutions: [
            { title: "Detailed inspection", text: "Assessing your crawl space and locating moisture sources." },
            { title: "Expert installation", text: "Installing durable, high-quality vapor barriers." },
            { title: "Preventive measures", text: "Solutions that keep the environment dry long-term." },
            { title: "Ongoing support", text: "Maintenance guidance so protection lasts." },
        ],
        benefits: [
            "Effective moisture protection",
            "Improved air quality",
            "Enhanced energy efficiency",
            "Long-term structural integrity",
            "Experienced and reliable service",
        ],
    },
    "dehumidifier-installation": {
        headline: "Breathe Easier with Professional Dehumidifier Installation",
        intro: "Excess humidity can make your home uncomfortable and lead to mold growth and structural damage. We install dehumidification systems that keep your home healthy and comfortable.",
        problemsTitle: "The Hidden Challenges of Excess Humidity",
        problems: [
            { title: "Mold and mildew growth", text: "Creating health hazards and unpleasant odors." },
            { title: "Structural damage", text: "Causing wood to warp and paint to peel." },
            { title: "Increased energy bills", text: "Your HVAC system works harder to maintain comfort." },
        ],
        solutionsTitle: "Expert Dehumidifier Installation",
        solutions: [
            { title: "Detailed inspection", text: "Assessing humidity levels and sources of excess moisture." },
            { title: "Customized installation", text: "Systems sized to your home and integrated with your HVAC." },
            { title: "Preventive guidance", text: "How to maintain optimal humidity and prevent future issues." },
            { title: "Ongoing support", text: "Maintenance services to keep performance optimal." },
        ],
        benefits: [
            "Customized solutions for your specific home",
            "Healthier indoor air with fewer allergens",
            "Enhanced comfort all year long",
            "Energy efficiency — your HVAC runs better",
            "Trusted expertise from a licensed, insured team",
        ],
    },
    "residential-remodels": {
        headline: "Transform Your Space, Elevate Your Life",
        intro: "Your home should reflect your style and meet your needs, but over time it may need an update to keep up with your life. We turn your vision into reality, creating spaces you'll love coming home to.",
        problemsTitle: "The Remodel Journey: From Problems to Possibilities",
        problems: [
            { title: "Outdated spaces", text: "Kitchens and bathrooms that no longer meet your style or needs." },
            { title: "Limited functionality", text: "Layouts that don't suit your family's lifestyle." },
            { title: "Wear and tear", text: "Dated fixtures, old flooring, or damaged surfaces." },
        ],
        solutionsTitle: "Finding Solutions With Platinum",
        solutions: [
            { title: "Creative design solutions", text: "A design that maximizes style, functionality and value." },
            { title: "Seamless execution", text: "From concept to completion, every detail handled with precision." },
            { title: "Lasting results", text: "High-quality materials and craftsmanship that stand the test of time." },
        ],
        benefits: [
            "Personalized design solutions tailored to your vision",
            "High-quality craftsmanship with durable materials",
            "Comprehensive remodeling for any space in your home",
            "Increased home value and market appeal",
            "Transparent, on-time and on-budget service",
        ],
        signsTitle: "What we remodel",
        signs: [
            "Kitchens — layouts, cabinets, countertops and appliances",
            "Bathrooms — fixtures, tile and lighting",
            "Living spaces — living rooms, bedrooms and dining areas",
            "Home additions that blend with your home's design",
        ],
        pricingTitle: "Typical investment & timelines",
        pricingNote: "Cost and schedule depend on scope, material choices, permits and any hidden issues in older homes. Every project starts with a detailed, transparent estimate.",
        pricing: [
            { label: "Kitchen remodels", value: "$15,000 – $50,000+", time: "6 – 12 weeks" },
            { label: "Bathroom remodels", value: "$8,000 – $25,000", time: "4 – 8 weeks" },
            { label: "Living spaces", value: "$5,000 – $15,000", time: "4 – 6 weeks" },
            { label: "Home additions", value: "$30,000 – $100,000+", time: "2 – 6 months" },
        ],
    },
    "sheetrock-painting": {
        headline: "Flawless Walls, Stunning Finishes",
        intro: "Your walls are the canvas of your home, setting the tone for every room. We bring your vision to life with expert sheetrock installation and precision painting.",
        problemsTitle: "Perfect Walls Made Simple: From Problems to Solutions",
        problems: [
            { title: "Damaged sheetrock", text: "Holes, cracks or poorly finished seams that disrupt your walls." },
            { title: "Uneven surfaces", text: "Textures that don't match or surfaces that highlight imperfections." },
            { title: "Dated or faded paint", text: "Colors that no longer match your style or have lost vibrancy." },
        ],
        solutionsTitle: "Finding Solutions With Platinum",
        solutions: [
            { title: "Sheetrock mastery", text: "Installation and repair handled with precision, leaving surfaces flawless." },
            { title: "Custom finishes", text: "Smooth, modern texture or something unique — tailored to your style." },
            { title: "Precision painting", text: "Rich, even color with clean application and no drips or streaks." },
        ],
        benefits: [
            "Seamless repairs that blend perfectly with existing walls",
            "Professional texturing — knockdown, orange peel, smooth or stippled",
            "Interior and exterior painting with low-VOC, family-safe paints",
            "Thorough prep work: covering, masking, dust containment and priming",
            "Transparent timelines with daily cleanup",
        ],
        pricingTitle: "Typical investment & timelines",
        pricingNote: "Small repairs take 1–2 days, a room-wide install 2–5 days, and whole-home drywall projects 1–2 weeks.",
        pricing: [
            { label: "Sheetrock installation", value: "$1.50 – $3.00 / sq ft" },
            { label: "Sheetrock repair", value: "$100 – $500 per area" },
            { label: "Interior painting", value: "$2 – $6 / sq ft" },
            { label: "Exterior painting", value: "$3 – $7 / sq ft" },
        ],
    },
    "windows-doors": {
        headline: "Redefine Your Home's Style and Efficiency",
        intro: "Your windows and doors are more than just functional — they're the first impression of your home and a key to your comfort and efficiency.",
        problemsTitle: "Subpar Windows and Doors Affect Your Bottom Line",
        problems: [
            { title: "High energy bills", text: "Drafty units let conditioned air escape all year." },
            { title: "Poor security", text: "Worn frames and old locks leave your home vulnerable." },
            { title: "Dated appearance", text: "Old windows and doors pull down your whole exterior." },
        ],
        solutionsTitle: "Tailored Solutions For Your Home",
        solutions: [
            { title: "Energy efficiency", text: "Modern units that keep your home comfortable and bills lower." },
            { title: "Enhanced security", text: "Solid, well-fitted doors and windows that protect your family." },
            { title: "Custom style", text: "Designs and finishes chosen to match your home." },
            { title: "Professional installation", text: "Precise fitting so everything performs as intended." },
        ],
        benefits: [
            "Energy efficiency that saves you money",
            "Enhanced home security",
            "Customized style and design options",
            "Long-lasting quality and durability",
            "Reliable service you can trust",
        ],
    },
    "roofing-repairs": {
        headline: "Protect Your Home with Expert Roofing and Repairs",
        intro: "Your roof does more than shield your home — it safeguards your family, your possessions, and your peace of mind. From small repairs to full replacements, we deliver high-quality craftsmanship and exceptional care.",
        problemsTitle: "From Problems to Peace of Mind",
        problems: [
            { title: "Leaks and water damage", text: "Even small leaks lead to mold, rot and structural damage." },
            { title: "Damaged or missing shingles", text: "Broken shingles compromise your roof's ability to protect." },
            { title: "Storm damage and aging", text: "Wind, hail and time leave your roof exposed and less efficient." },
        ],
        solutionsTitle: "Comprehensive Roofing Solutions",
        solutions: [
            { title: "Fast, reliable repairs", text: "Leaks, storm damage and other issues addressed quickly." },
            { title: "Durable replacements", text: "Asphalt shingles, metal roofing and tile for long-lasting protection." },
            { title: "Preventative maintenance", text: "Regular inspections catch small issues before they escalate." },
            { title: "Emergency services", text: "Prompt, professional response when disaster strikes." },
        ],
        benefits: [
            "Comprehensive roofing: repairs, replacement and inspections",
            "Quality materials — asphalt (20–30 yrs), metal (40–70 yrs), tile (50+ yrs)",
            "Expert craftsmanship with precision installation",
            "Enhanced home value and energy efficiency",
            "Transparent pricing and quick response times",
        ],
        signsTitle: "Roofing materials & lifespans",
        signs: [
            "Asphalt shingles — affordable and versatile, 20–30 years",
            "Metal roofing — lightweight and weather-resistant, 40–70 years",
            "Tile roofing — highly durable, 50+ years",
            "Slate roofing — premium durability, 75–100+ years",
            "Flat roofing — TPO, EPDM rubber or modified bitumen",
        ],
        pricingTitle: "Project timelines",
        pricingNote: "Timelines vary with roof size and design, material choice, weather, any structural repairs and site access. Every estimate is a line-by-line breakdown with no hidden fees.",
        pricing: [
            { label: "Roof repairs", value: "1 – 3 days" },
            { label: "Full replacements", value: "2 – 5 days" },
            { label: "Custom or complex roofs", value: "1 – 2 weeks" },
            { label: "Commercial / flat roofs", value: "1 – 3 weeks" },
        ],
    },
    "drainage-solutions": {
        headline: "Keep Water Away From Your Foundation",
        intro: "[Draft — no dedicated page on the old site] Comprehensive drainage solutions that move water away from your home and protect what's underneath it.",
        problemsTitle: "What Poor Drainage Causes",
        problems: [
            { title: "Standing water", text: "Pooling around the foundation after every heavy rain." },
            { title: "Crawlspace moisture", text: "Water finds its way underneath, bringing mold with it." },
            { title: "Erosion and settling", text: "Uncontrolled runoff undermines soil and hardscaping." },
        ],
        solutionsTitle: "Our Drainage Approach",
        solutions: [
            { title: "Site assessment", text: "Identifying where water collects and how it travels." },
            { title: "Grading and drains", text: "Correcting slope and installing drainage where it's needed." },
            { title: "Gutter solutions", text: "Moving roof runoff safely away from the foundation." },
        ],
        benefits: [
            "Protects your foundation and crawlspace",
            "Prevents recurring moisture and mold problems",
            "Licensed and insured professionals",
            "Competitive pricing with clear estimates",
        ],
    },
    "property-management": {
        headline: "Reliable Property Management & Repairs",
        intro: "Your property is one of your most valuable investments, and maintaining it shouldn't be a hassle. With over 30 years of experience, we're your trusted partner for property maintenance and repairs.",
        problemsTitle: "Managing a Property Comes With Constant Challenges",
        problems: [
            { title: "Unexpected repairs", text: "Appliances break, plumbing leaks and roofs need fixing — often at the worst times." },
            { title: "Tenant satisfaction", text: "Keeping tenants happy and meeting their needs is time-consuming." },
            { title: "Costly damage", text: "Neglected maintenance turns into larger, more expensive problems." },
        ],
        solutionsTitle: "Your Reliable Partner",
        solutions: [
            { title: "Proactive maintenance", text: "Prevent problems before they happen with regular checkups and care." },
            { title: "Efficient repairs", text: "Issues resolved quickly, protecting tenant satisfaction and property value." },
            { title: "Expert management", text: "From emergencies to planned upgrades, we keep your property running." },
        ],
        benefits: [
            "Comprehensive property care with regular inspections",
            "Experienced professionals for residential and commercial properties",
            "Time and stress savings — no coordinating multiple contractors",
            "Increased tenant satisfaction through quick response",
            "Enhanced property value and longevity",
        ],
        signsTitle: "Properties we manage",
        signs: [
            "Single-family homes",
            "Multi-family duplexes and apartment buildings",
            "Rental properties",
            "Office buildings",
            "Retail spaces",
            "Industrial and warehouse properties",
        ],
    },
};

// At-a-glance fact tiles shown under each service hero.
// [Draft — written for the redesign, based on the old site's own claims]
export const SERVICE_FACTS = {
    restoration: [
        { icon: "ri-timer-flash-line", label: "Response", value: "Fast, same-day contact" },
        { icon: "ri-calendar-check-line", label: "Typical duration", value: "1 day – 1+ week" },
        { icon: "ri-shield-check-line", label: "Warranty", value: "Workmanship + materials" },
        { icon: "ri-price-tag-3-line", label: "Estimates", value: "Always free" },
    ],
    construction: [
        { icon: "ri-draft-line", label: "Planning", value: "Detailed written estimate" },
        { icon: "ri-calendar-check-line", label: "Typical duration", value: "1 – 3 weeks" },
        { icon: "ri-shield-check-line", label: "Warranty", value: "Workmanship + materials" },
        { icon: "ri-price-tag-3-line", label: "Estimates", value: "Always free" },
    ],
    property: [
        { icon: "ri-timer-flash-line", label: "Routine requests", value: "Resolved in 24 – 48 hrs" },
        { icon: "ri-alarm-warning-line", label: "Emergencies", value: "24/7 response" },
        { icon: "ri-shield-check-line", label: "Warranty", value: "Workmanship + materials" },
        { icon: "ri-price-tag-3-line", label: "Consultation", value: "Always free" },
    ],
};

// Cross-links shown at the bottom of each service page.
// [Draft — curated for the redesign]
export const RELATED_SERVICES = {
    "water-damage-repairs": ["mold-inspections", "crawlspace-remediation", "dehumidifier-installation"],
    "mold-inspections": ["mold-remediation", "crawlspace-remediation", "dehumidifier-installation"],
    "mold-remediation": ["mold-inspections", "water-damage-repairs", "insulation-removal-installation"],
    "crawlspace-remediation": ["vapor-barrier-installation", "insulation-removal-installation", "dehumidifier-installation"],
    "insulation-removal-installation": ["crawlspace-remediation", "vapor-barrier-installation", "sheetrock-painting"],
    "vapor-barrier-installation": ["crawlspace-remediation", "dehumidifier-installation", "insulation-removal-installation"],
    "dehumidifier-installation": ["crawlspace-remediation", "vapor-barrier-installation", "mold-remediation"],
    "residential-remodels": ["sheetrock-painting", "windows-doors", "roofing-repairs"],
    "sheetrock-painting": ["residential-remodels", "windows-doors", "water-damage-repairs"],
    "windows-doors": ["residential-remodels", "roofing-repairs", "insulation-removal-installation"],
    "roofing-repairs": ["water-damage-repairs", "drainage-solutions", "windows-doors"],
    "drainage-solutions": ["crawlspace-remediation", "roofing-repairs", "water-damage-repairs"],
    "property-management": ["water-damage-repairs", "roofing-repairs", "residential-remodels"],
};

// Services where an urgent-help banner makes sense.
// [Draft — written for the redesign]
export const URGENT_SERVICES = {
    "water-damage-repairs": "Water damage doesn't wait — and neither do we.",
    "mold-remediation": "Mold spreads fast. The sooner it's contained, the less it costs.",
    "roofing-repairs": "Storm damage or an active leak? We provide emergency roof repairs.",
    "property-management": "Emergency at your property? We respond 24/7.",
};

// "How we work" — the four-step approach every old-site service page
// describes (detailed planning, transparent estimates, skilled execution,
// post-project inspection and warranty).
export const PROCESS_STEPS = {
    title: "How we work",
    subtitle: "OUR PROCESS",
    steps: [
        {
            title: "Free consultation & inspection",
            text: "We start with a thorough inspection of your property to identify the real problem — including anything hidden — and understand what you want the outcome to be.",
        },
        {
            title: "Clear plan & transparent estimate",
            text: "You receive a detailed, line-by-line estimate and a step-by-step timeline before any work begins. No hidden fees, no surprise charges.",
        },
        {
            title: "Expert execution",
            text: "Our skilled team works efficiently while maintaining the highest standards — keeping you informed of progress and tidying the workspace daily.",
        },
        {
            title: "Final inspection & warranty",
            text: "We inspect the finished work with you and back it with our workmanship warranty, plus manufacturer coverage on materials.",
        },
    ],
    images: {
        restoration: "/aditional-assets/images/crawl-space-sealing-scaled.jpeg",
        construction: "/aditional-assets/images/Sheetrock.png",
    },
};

export const SERVICE_AREAS = [
    {
        title: "Restoration Services",
        href: "/restoration-services",
        icon: "ri-drop-line",
        blurb: "Comprehensive solutions for water damage repairs, mold remediation, crawlspace repairs, insulation installation, vapor barrier installation, and dehumidifier installation.",
    },
    {
        title: "Construction Services",
        href: "/construction-services",
        icon: "ri-hammer-line",
        blurb: "From residential remodels to roofing, sheetrock, painting, and windows and doors, we turn your dream home into a reality.",
    },
    {
        title: "Property Management",
        href: "/property-management",
        icon: "ri-home-gear-line",
        blurb: "Hassle-free maintenance, repairs, and tenant-focused management to keep your property running smoothly.",
    },
];

// Gallery images from the old site, used in the home "Our Work" slider.
export const WORK_GALLERY = [
    { image: "/aditional-assets/images/Gallery-6.webp", title: "Residential Remodels", href: "/construction-services/residential-remodels" },
    { image: "/aditional-assets/images/water-damage-repair.jpeg", title: "Water Damage Repairs", href: "/restoration-services/water-damage-repairs" },
    { image: "/aditional-assets/images/Gallery-3.webp", title: "Property Management", href: "/property-management" },
    { image: "/aditional-assets/images/Sheetrock.png", title: "Sheetrock & Painting", href: "/construction-services/sheetrock-painting" },
    { image: "/aditional-assets/images/Gallery-4.png", title: "Windows & Doors", href: "/construction-services/windows-doors" },
    { image: "/aditional-assets/images/crawl-space-sealing-scaled.jpeg", title: "Crawlspace Remediation", href: "/restoration-services/crawlspace-remediation" },
];


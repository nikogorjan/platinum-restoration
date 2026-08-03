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
    trustHeadline: "Why Homeowners and Property Owners Trust Platinum",
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

// ---------------------------------------------------------------------------
// TEMPORARY — links to every page that ships with the Construz template, so
// all built components stay browsable while we iterate on the wireframe.
// Remove this (and the TEMPLATE dropdown that renders it) before launch.
// ---------------------------------------------------------------------------
export const TEMPLATE_HOMEPAGES = [
    { title: "Home 01", href: "/pages/homepage/home-1" },
    { title: "Home 02", href: "/pages/homepage/home-2" },
    { title: "Home 03 (our hero)", href: "/pages/homepage/home-3" },
    { title: "Home 04", href: "/pages/homepage/home-4" },
    { title: "Home 05", href: "/pages/homepage/home-5" },
    { title: "Home 01 Onepage", href: "/pages/homepage/home-1-op" },
    { title: "Home 02 Onepage", href: "/pages/homepage/home-2-op" },
    { title: "Home 03 Onepage", href: "/pages/homepage/home-3-op" },
    { title: "Home 04 Onepage", href: "/pages/homepage/home-4-op" },
    { title: "Home 05 Onepage", href: "/pages/homepage/home-5-op" },
];

export const TEMPLATE_INNERPAGES = [
    { title: "About", href: "/pages/innerpage/about" },
    { title: "Service", href: "/pages/innerpage/service" },
    { title: "Service Details", href: "/pages/innerpage/service-details" },
    { title: "Project", href: "/pages/innerpage/project" },
    { title: "Project Details", href: "/pages/innerpage/project-details" },
    { title: "Team", href: "/pages/innerpage/team" },
    { title: "Team Details", href: "/pages/innerpage/team-details" },
    { title: "Blog", href: "/pages/innerpage/blog" },
    { title: "Blog Details", href: "/pages/innerpage/blog-details" },
    { title: "Shop", href: "/pages/innerpage/shop" },
    { title: "Shop Details", href: "/pages/innerpage/shop-details" },
    { title: "Cart", href: "/pages/innerpage/cart" },
    { title: "Checkout", href: "/pages/innerpage/checkout" },
    { title: "Wishlist", href: "/pages/innerpage/wishlist" },
    { title: "Contact", href: "/pages/innerpage/contact" },
    { title: "Demo landing (Envato)", href: "/pages/demo" },
];

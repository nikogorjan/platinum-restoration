// Shared types for the site's content layer (siteData.ts) and components.

export type ServiceArea = "restoration" | "construction" | "property";

export interface SiteInfo {
    name: string;
    legalName: string;
    url: string;
    phone: string;
    phoneHref: string;
    email: string;
    address: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    serviceArea: string;
    areaServed: string;
    founded: string;
    facebook: string;
    logo: string;
    favicon: string;
}

export interface SeoEntry {
    title: string;
    description: string;
}

export interface Hero {
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    text: string;
    image: string;
}

export interface AboutIntro {
    title: string;
    text: string;
    text2: string;
    checklist: string[];
    owner: string;
    ownerRole: string;
}

export interface KeyBenefit {
    tab: string;
    title: string;
    text: string;
    image: string;
    points: string[];
}

export interface IconTextItem {
    icon: string;
    title: string;
    text: string;
}

export interface ChallengePair {
    problemTitle: string;
    problem: string;
    solutionTitle: string;
    solution: string;
    href: string;
}

export interface Challenges {
    headline: string;
    painHeadline: string;
    pains: IconTextItem[];
    pairs: ChallengePair[];
    ctaTitle: string;
    ctaText: string;
}

export interface TrustItem {
    icon: string;
    text: string;
}

export interface Promise {
    intro: string;
    items: IconTextItem[];
}

export interface Testimonial {
    name: string;
    location: string;
    title: string;
    text: string;
    fullText?: string;
}

export interface Faq {
    question: string;
    answer: string;
    points?: string[];
}

export interface Service {
    slug: string;
    icon: string;
    title: string;
    image: string;
    blurb: string;
}

/** A service plus the URL it lives at — used by cards and JSON-LD. */
export interface LinkedService extends Service {
    href: string;
}

export interface TitledStep {
    title: string;
    text: string;
}

export interface PricingRow {
    label: string;
    value: string;
    time?: string;
}

/** Long-form content for one service page. */
export interface ServiceDetail {
    headline: string;
    intro: string;
    problemsTitle: string;
    problems: TitledStep[];
    solutionsTitle: string;
    solutions: TitledStep[];
    benefits: string[];
    signsTitle?: string;
    signs?: string[];
    pricingTitle?: string;
    pricingNote?: string;
    pricing?: PricingRow[];
    showcase?: string;
    showcaseCaption?: string;
    beforeAfter?: string;
    beforeAfterCaption?: string;
}

/** Content shared by every service page in an area. */
export interface AreaContent {
    description: string;
    includes: string[];
    timeline: string;
}

/** Per-area content plus the warranty blurb shared by all of them. */
export type DetailContent = Record<ServiceArea, AreaContent> & {
    warranty: string;
};

export interface ServiceFact {
    icon: string;
    label: string;
    value: string;
}

export interface OverviewContent {
    headline: string;
    intro: string;
    coverageTitle: string;
    coverage: string[];
}

export interface ServiceAreaCard {
    title: string;
    href: string;
    icon: string;
    blurb: string;
}

export interface WorkItem {
    image: string;
    title: string;
    href: string;
}

export interface ProcessSteps {
    title: string;
    subtitle: string;
    steps: TitledStep[];
    images: Record<"restoration" | "construction", string>;
}

export interface CtaSection {
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    text: string;
}

export interface ServiceColumn {
    icon: string;
    title: string;
    href: string;
    image: string;
    items: string[];
}

export interface AboutValue extends IconTextItem {
    image: string;
}

export interface AboutPage {
    headline: string;
    intro: string;
    experience: string;
    team: string;
    localHeadline: string;
    localIntro: string;
    ownerLine: string;
    image: string;
    imageSecondary: string;
    values: AboutValue[];
    servicesIntro: string;
    servicesOutro: string;
    serviceColumns: ServiceColumn[];
    trustHeadline: string;
    trustIntro: string;
    trust: Array<{ title: string; text: string }>;
    mission: string;
    missionEmphasis: string;
    ctaHeadline: string;
    ctaText: string;
}

export interface PrivacySection {
    id: string;
    title: string;
    body: string;
    items?: string[];
}

export interface Privacy {
    intro: string;
    effectiveDate: string;
    sections: PrivacySection[];
}

export interface Breadcrumb {
    name: string;
    path: string;
}

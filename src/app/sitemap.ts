import {
    SITE,
    RESTORATION_SERVICES,
    CONSTRUCTION_SERVICES,
} from "~/sections/Site/siteData";

// Generates /sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap() {
    const now = new Date();

    const staticPages = [
        { path: "/", priority: 1.0, changeFrequency: "monthly" },
        { path: "/about", priority: 0.8, changeFrequency: "yearly" },
        { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
        { path: "/restoration-services", priority: 0.9, changeFrequency: "monthly" },
        { path: "/construction-services", priority: 0.9, changeFrequency: "monthly" },
        { path: "/property-management", priority: 0.8, changeFrequency: "monthly" },
        { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    ];

    const servicePages = [
        ...RESTORATION_SERVICES.map((s) => `/restoration-services/${s.slug}`),
        ...CONSTRUCTION_SERVICES.map((s) => `/construction-services/${s.slug}`),
    ].map((path) => ({ path, priority: 0.7, changeFrequency: "monthly" }));

    return [...staticPages, ...servicePages].map(({ path, priority, changeFrequency }) => ({
        url: `${SITE.url}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
    }));
}

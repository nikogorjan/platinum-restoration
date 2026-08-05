import { SITE, FAQS } from "../siteData";
import type { Breadcrumb } from "../types";

interface StructuredDataProps {
    /** Which schema blocks to emit. */
    type?: "page" | "home" | "contact";
    breadcrumbs?: Breadcrumb[];
    service?: { title: string; blurb: string; url?: string };
    includeFaq?: boolean;
}

// JSON-LD structured data. `type` selects which schema blocks to emit.
// Rendered as a plain script tag so it ships in the static HTML.
const businessSchema = {
    "@type": ["GeneralContractor", "LocalBusiness"],
    "@id": `${SITE.url}/#business`,
    name: SITE.legalName,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}${SITE.logo}`,
    logo: `${SITE.url}${SITE.logo}`,
    foundingDate: SITE.founded,
    priceRange: "$$",
    address: {
        "@type": "PostalAddress",
        streetAddress: SITE.street,
        addressLocality: SITE.city,
        addressRegion: SITE.state,
        postalCode: SITE.postalCode,
        addressCountry: "US",
    },
    areaServed: { "@type": "Place", name: SITE.areaServed },
    sameAs: [SITE.facebook],
};

const StructuredData = ({
    type = "page",
    breadcrumbs = [],
    service,
    includeFaq = false,
}: StructuredDataProps) => {
    const graph: Record<string, unknown>[] = [];

    if (type === "home" || type === "contact") {
        graph.push(businessSchema);
    }

    if (type === "home") {
        graph.push({
            "@type": "WebSite",
            "@id": `${SITE.url}/#website`,
            url: SITE.url,
            name: SITE.legalName,
            publisher: { "@id": `${SITE.url}/#business` },
        });
    }

    if (service) {
        graph.push({
            "@type": "Service",
            name: service.title,
            description: service.blurb,
            serviceType: service.title,
            provider: {
                "@type": "GeneralContractor",
                name: SITE.legalName,
                telephone: SITE.phone,
                url: SITE.url,
            },
            areaServed: { "@type": "Place", name: SITE.areaServed },
            ...(service.url ? { url: `${SITE.url}${service.url}` } : {}),
        });
    }

    if (breadcrumbs.length > 0) {
        graph.push({
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.name,
                item: `${SITE.url}${crumb.path}`,
            })),
        });
    }

    if (includeFaq) {
        graph.push({
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        });
    }

    if (graph.length === 0) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
            }}
        />
    );
};

export default StructuredData;

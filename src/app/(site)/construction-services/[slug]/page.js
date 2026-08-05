import { notFound } from "next/navigation";
import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import ServiceDetailDraft from "~/sections/Site/ServiceDetailDraft";
import StructuredData from "~/sections/Site/StructuredData";
import { CONSTRUCTION_SERVICES, SERVICE_DETAILS } from "~/sections/Site/siteData";
import SiteFaq from "~/sections/Site/SiteFaq";
import Scroll from "~/sections/Common/Scroll";

export function generateStaticParams() {
    return CONSTRUCTION_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = CONSTRUCTION_SERVICES.find((s) => s.slug === slug);
    if (!service) return { title: "Construction Services" };

    const detail = SERVICE_DETAILS[slug] || {};
    const description = `${service.blurb} Serving Garner and the Triangle area of North Carolina — licensed, insured and backed by 30+ years of experience. Free consultation.`;
    const url = `/construction-services/${slug}`;

    return {
        title: service.title,
        description,
        alternates: { canonical: url },
        openGraph: {
            url,
            title: `${service.title} | ${detail.headline || "Construction Services"}`,
            description,
            images: [{ url: service.image, alt: service.title }],
        },
    };
}

export default async function ConstructionServicePage({ params }) {
    const { slug } = await params;
    const service = CONSTRUCTION_SERVICES.find((s) => s.slug === slug);
    if (!service) notFound();

    return (
        <div style={{ overflow: "hidden" }}>
            <StructuredData
                service={{ ...service, url: `/construction-services/${slug}` }}
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "Construction Services", path: "/construction-services" },
                    { name: service.title, path: `/construction-services/${slug}` },
                ]}
                includeFaq
            />
            <SiteHeader />
            <SiteBreadcrumb
                title={service.title}
                parent={{ label: "Construction Services", href: "/construction-services" }}
                image={service.image}
            />
            <ServiceDetailDraft service={service} area="construction" />
            <div className="space-bottom">
                <SiteFaq />
            </div>
            <SiteFooter />
            <Scroll />
        </div>
    );
}

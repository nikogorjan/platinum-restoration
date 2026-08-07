import { notFound } from "next/navigation";
import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import ServiceDetailDraft from "~/sections/Site/ServiceDetailDraft";
import StructuredData from "~/sections/Site/StructuredData";
import { RESTORATION_SERVICES, SERVICE_DETAILS } from "~/sections/Site/siteData";
import SiteFaq from "~/sections/Site/SiteFaq";
import Scroll from "~/sections/Common/Scroll";

export function generateStaticParams() {
    return RESTORATION_SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const service = RESTORATION_SERVICES.find((s) => s.slug === slug);
    if (!service) return { title: "Restoration Services" };

    const detail = SERVICE_DETAILS[slug] || {};
    const description = `${service.blurb} Serving Garner and the Triangle area of North Carolina — licensed, insured and backed by 30+ years of experience. Free consultation.`;
    const url = `/restoration-services/${slug}`;

    return {
        title: service.title,
        description,
        alternates: { canonical: url },
        openGraph: {
            url,
            title: `${service.title} | ${detail.headline || "Restoration Services"}`,
            description,
            images: [{ url: service.image, alt: service.title }],
        },
    };
}

export default async function RestorationServicePage({ params }: Props) {
    const { slug } = await params;
    const service = RESTORATION_SERVICES.find((s) => s.slug === slug);
    if (!service) notFound();

    return (
        <div style={{ overflow: "hidden" }}>
            <StructuredData
                service={{ ...service, url: `/restoration-services/${slug}` }}
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "Restoration Services", path: "/restoration-services" },
                    { name: service.title, path: `/restoration-services/${slug}` },
                ]}
            />
            <SiteHeader />
            <SiteBreadcrumb
                title={service.title}
                parent={{ label: "Restoration Services", href: "/restoration-services" }}
                image={service.image}
            />
            <ServiceDetailDraft service={service} area="restoration" />
            <div className="space-bottom">
                <SiteFaq />
            </div>
            <SiteFooter />
            <Scroll />
        </div>
    );
}

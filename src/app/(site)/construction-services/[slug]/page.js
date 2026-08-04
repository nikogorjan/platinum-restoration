import { notFound } from "next/navigation";
import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import ServiceDetailDraft from "~/sections/Site/ServiceDetailDraft";
import { CONSTRUCTION_SERVICES } from "~/sections/Site/siteData";
import SiteFaq from "~/sections/Site/SiteFaq";
import Scroll from "~/sections/Common/Scroll";

export function generateStaticParams() {
    return CONSTRUCTION_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = CONSTRUCTION_SERVICES.find((s) => s.slug === slug);
    return { title: service ? service.title : "Construction Services" };
}

export default async function ConstructionServicePage({ params }) {
    const { slug } = await params;
    const service = CONSTRUCTION_SERVICES.find((s) => s.slug === slug);
    if (!service) notFound();

    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <SiteBreadcrumb
                title={service.title}
                parent={{ label: "Construction Services", href: "/construction-services" }}
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

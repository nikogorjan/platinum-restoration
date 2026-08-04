import { notFound } from "next/navigation";
import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import ServiceDetailDraft from "~/sections/Site/ServiceDetailDraft";
import { RESTORATION_SERVICES } from "~/sections/Site/siteData";
import SiteFaq from "~/sections/Site/SiteFaq";
import Scroll from "~/sections/Common/Scroll";

export function generateStaticParams() {
    return RESTORATION_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = RESTORATION_SERVICES.find((s) => s.slug === slug);
    return { title: service ? service.title : "Restoration Services" };
}

export default async function RestorationServicePage({ params }) {
    const { slug } = await params;
    const service = RESTORATION_SERVICES.find((s) => s.slug === slug);
    if (!service) notFound();

    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <SiteBreadcrumb
                title={service.title}
                parent={{ label: "Restoration Services", href: "/restoration-services" }}
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

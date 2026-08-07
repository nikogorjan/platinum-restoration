import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import ServiceAreaGrid from "~/sections/Site/ServiceAreaGrid";
import { CONSTRUCTION_SERVICES, CONSTRUCTION_OVERVIEW, PAGE_HEADERS, SEO, OG_IMAGE } from "~/sections/Site/siteData";
import CoverageList from "~/sections/Site/CoverageList";
import TrustStrip from "~/sections/Site/TrustStrip";
import ProcessSteps from "~/sections/Site/ProcessSteps";
import HomeTestimonial from "~/sections/Site/HomeTestimonial";
import HomeContact from "~/sections/Site/HomeContact";
import StructuredData from "~/sections/Site/StructuredData";
import Scroll from "~/sections/Common/Scroll";

export const metadata = {
    title: SEO.construction.title,
    description: SEO.construction.description,
    alternates: { canonical: "/construction-services" },
    openGraph: {
        url: "/construction-services",
        title: SEO.construction.title,
        description: SEO.construction.description,
        images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
};

export default function ConstructionServicesPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <StructuredData breadcrumbs={[{ name: "Home", path: "/" }, { name: "Construction Services", path: "/construction-services" }]} />
            <SiteHeader />
            <SiteBreadcrumb title="Construction Services" image={PAGE_HEADERS.construction} />
            <ServiceAreaGrid
                subTitle="Construction"
                title={CONSTRUCTION_OVERVIEW.headline}
                text={CONSTRUCTION_OVERVIEW.intro}
                items={CONSTRUCTION_SERVICES.map((s) => ({
                    title: s.title,
                    href: `/construction-services/${s.slug}`,
                    blurb: s.blurb,
                }))}
            />
            <CoverageList title={CONSTRUCTION_OVERVIEW.coverageTitle} items={CONSTRUCTION_OVERVIEW.coverage} />
            <TrustStrip />
            <ProcessSteps area="construction" />
            <HomeTestimonial />
            <div className="space-bottom">
                <HomeContact />
            </div>
            <SiteFooter />
            <Scroll />
        </div>
    );
}

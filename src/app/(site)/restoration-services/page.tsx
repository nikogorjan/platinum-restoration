import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import ServiceAreaGrid from "~/sections/Site/ServiceAreaGrid";
import { RESTORATION_SERVICES, RESTORATION_OVERVIEW, PAGE_HEADERS, SEO, OG_IMAGE } from "~/sections/Site/siteData";
import CoverageList from "~/sections/Site/CoverageList";
import TrustStrip from "~/sections/Site/TrustStrip";
import ProcessSteps from "~/sections/Site/ProcessSteps";
import HomeTestimonial from "~/sections/Site/HomeTestimonial";
import HomeContact from "~/sections/Site/HomeContact";
import StructuredData from "~/sections/Site/StructuredData";
import Scroll from "~/sections/Common/Scroll";

export const metadata = {
    title: SEO.restoration.title,
    description: SEO.restoration.description,
    alternates: { canonical: "/restoration-services" },
    openGraph: {
        url: "/restoration-services",
        title: SEO.restoration.title,
        description: SEO.restoration.description,
        images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
};

export default function RestorationServicesPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <StructuredData breadcrumbs={[{ name: "Home", path: "/" }, { name: "Restoration Services", path: "/restoration-services" }]} />
            <SiteHeader />
            <SiteBreadcrumb title="Restoration Services" image={PAGE_HEADERS.restoration} />
            <ServiceAreaGrid
                subTitle="Restoration"
                title={RESTORATION_OVERVIEW.headline}
                text={RESTORATION_OVERVIEW.intro}
                items={RESTORATION_SERVICES.map((s) => ({
                    title: s.title,
                    href: `/restoration-services/${s.slug}`,
                    blurb: s.blurb,
                }))}
            />
            <CoverageList title={RESTORATION_OVERVIEW.coverageTitle} items={RESTORATION_OVERVIEW.coverage} />
            <TrustStrip />
            <ProcessSteps area="restoration" />
            <HomeTestimonial />
            <div className="space-bottom">
                <HomeContact />
            </div>
            <SiteFooter />
            <Scroll />
        </div>
    );
}

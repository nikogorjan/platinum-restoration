import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import ServiceAreaGrid from "~/sections/Site/ServiceAreaGrid";
import { RESTORATION_SERVICES, RESTORATION_OVERVIEW } from "~/sections/Site/siteData";
import CoverageList from "~/sections/Site/CoverageList";
import TrustStrip from "~/sections/Site/TrustStrip";
import ProcessSteps from "~/sections/Site/ProcessSteps";
import HomeTestimonial from "~/sections/Site/HomeTestimonial";
import HomeContact from "~/sections/Site/HomeContact";
import Scroll from "~/sections/Common/Scroll";

export const metadata = { title: "Restoration Services" };

export default function RestorationServicesPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <SiteBreadcrumb title="Restoration Services" />
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

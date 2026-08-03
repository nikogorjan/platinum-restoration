import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import ServiceAreaGrid from "~/sections/Site/ServiceAreaGrid";
import { CONSTRUCTION_SERVICES, CONSTRUCTION_OVERVIEW } from "~/sections/Site/siteData";
import CoverageList from "~/sections/Site/CoverageList";
import TrustStrip from "~/sections/Site/TrustStrip";
import Process from "~/sections/Service/Process";
import HomeTestimonial from "~/sections/Site/HomeTestimonial";
import Contact from "~/sections/Service/Contact";
import Scroll from "~/sections/Common/Scroll";

export const metadata = { title: "Construction Services" };

export default function ConstructionServicesPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <SiteBreadcrumb title="Construction Services" />
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
            <Process />
            <HomeTestimonial />
            <Contact />
            <SiteFooter />
            <Scroll />
        </div>
    );
}

import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import ServiceDetailDraft from "~/sections/Site/ServiceDetailDraft";
import { PROPERTY_MANAGEMENT } from "~/sections/Site/siteData";
import SiteFaq from "~/sections/Site/SiteFaq";
import Scroll from "~/sections/Common/Scroll";

export const metadata = { title: "Property Management & Repairs" };

export default function PropertyManagementPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <SiteBreadcrumb title="Property Management & Repairs" image={PROPERTY_MANAGEMENT.image} />
            <ServiceDetailDraft service={PROPERTY_MANAGEMENT} area="property" />
            <div className="space-bottom">
                <SiteFaq />
            </div>
            <SiteFooter />
            <Scroll />
        </div>
    );
}

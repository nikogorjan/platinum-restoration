import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import ServiceDetailDraft from "~/sections/Site/ServiceDetailDraft";
import { PROPERTY_MANAGEMENT, SEO, OG_IMAGE } from "~/sections/Site/siteData";
import SiteFaq from "~/sections/Site/SiteFaq";
import StructuredData from "~/sections/Site/StructuredData";
import Scroll from "~/sections/Common/Scroll";

export const metadata = {
    title: SEO.property.title,
    description: SEO.property.description,
    alternates: { canonical: "/property-management" },
    openGraph: {
        url: "/property-management",
        title: SEO.property.title,
        description: SEO.property.description,
        images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
};

export default function PropertyManagementPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <StructuredData service={{ title: "Property Management & Repairs", blurb: SEO.property.description, url: "/property-management" }} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Property Management & Repairs", path: "/property-management" }]} includeFaq />
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

import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import {
    AboutStory,
    AboutValues,
    AboutServices,
    AboutTrust,
    AboutServiceArea,
    AboutMission,
    AboutCTA,
} from "~/sections/Site/About";
import SiteMap from "~/sections/Site/SiteMap";
import StructuredData from "~/sections/Site/StructuredData";
import Scroll from "~/sections/Common/Scroll";
import { PAGE_HEADERS, SEO } from "~/sections/Site/siteData";

export const metadata = {
    title: SEO.about.title,
    description: SEO.about.description,
    alternates: { canonical: "/about" },
    openGraph: {
        url: "/about",
        title: SEO.about.title,
        description: SEO.about.description,
    },
};

export default function AboutPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <StructuredData breadcrumbs={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
            <SiteHeader />
            <SiteBreadcrumb title="About Us" image={PAGE_HEADERS.about} />
            <AboutStory />
            <AboutValues />
            <AboutServices />
            <AboutTrust />
            <AboutServiceArea />
            <AboutMission />
            <AboutCTA />
            <SiteMap />
            <SiteFooter />
            <Scroll />
        </div>
    );
}

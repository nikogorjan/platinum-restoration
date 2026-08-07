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
import { PAGE_HEADERS, SEO, OG_IMAGE } from "~/sections/Site/siteData";

export const metadata = {
    title: SEO.about.title,
    description: SEO.about.description,
    alternates: { canonical: "/about" },
    openGraph: {
        url: "/about",
        title: SEO.about.title,
        description: SEO.about.description,
        images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
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

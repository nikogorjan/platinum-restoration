import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import {
    AboutStory,
    AboutValues,
    AboutServices,
    AboutTrust,
    AboutMission,
    AboutCTA,
} from "~/sections/Site/About";
import Scroll from "~/sections/Common/Scroll";

export const metadata = { title: "About Us" };

export default function AboutPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <SiteBreadcrumb title="About Us" />
            <AboutStory />
            <AboutValues />
            <AboutServices />
            <AboutTrust />
            <AboutMission />
            <AboutCTA />
            <SiteFooter />
            <Scroll />
        </div>
    );
}

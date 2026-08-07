import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import ServiceAreaGrid from "~/sections/Site/ServiceAreaGrid";
import { SERVICE_AREAS, SEO, OG_IMAGE } from "~/sections/Site/siteData";
import StructuredData from "~/sections/Site/StructuredData";
import HomeHero from "~/sections/Site/HomeHero";
import HomeAbout from "~/sections/Site/HomeAbout";
import HomeChallenges from "~/sections/Site/HomeChallenges";
import TrustStrip from "~/sections/Site/TrustStrip";
import HomeWhyChoose from "~/sections/Site/HomeWhyChoose";
import HomeWork from "~/sections/Site/HomeWork";
import HomeTestimonial from "~/sections/Site/HomeTestimonial";
import HomeContact from "~/sections/Site/HomeContact";
import SiteFaq from "~/sections/Site/SiteFaq";
import HomeCTA from "~/sections/Site/HomeCTA";
import Scroll from "~/sections/Common/Scroll";

export const metadata = {
    description: SEO.home.description,
    alternates: { canonical: "/" },
    openGraph: {
        url: "/",
        description: SEO.home.description,
        images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
};

export default function HomePage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <StructuredData type="home" includeFaq />
            <SiteHeader />
            <HomeHero />
            <TrustStrip flush />
            <HomeAbout />
            <HomeChallenges />
            <ServiceAreaGrid
                title="Restoration, construction & property care"
                text="Whether it's restoration, property management, or construction, we're your one-stop shop for expert services."
                items={SERVICE_AREAS}
            />
            <HomeWhyChoose />
            <HomeWork />
            <HomeTestimonial />
            <HomeContact />
            <SiteFaq />
            <HomeCTA />
            <SiteFooter />
            <Scroll />
        </div>
    );
}

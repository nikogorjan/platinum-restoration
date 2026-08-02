import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import ServiceAreaGrid from "~/sections/Site/ServiceAreaGrid";
import { SERVICE_AREAS } from "~/sections/Site/siteData";
import HomeHero from "~/sections/Site/HomeHero";
import HomeAbout from "~/sections/Site/HomeAbout";
import HomeWhyChoose from "~/sections/Site/HomeWhyChoose";
import HomeWork from "~/sections/Site/HomeWork";
import HomeTestimonial from "~/sections/Site/HomeTestimonial";
import HomeContact from "~/sections/Site/HomeContact";
import SiteFaq from "~/sections/Site/SiteFaq";
import HomeCTA from "~/sections/Site/HomeCTA";
import Scroll from "~/sections/Common/Scroll";

export default function HomePage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <HomeHero />
            <HomeAbout />
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

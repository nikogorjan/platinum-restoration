import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import AboutThree from "~/sections/About/AboutThree";
import WhyChooseThree from "~/sections/About/WhyChooseThree";
import ProcessThree from "~/sections/About/ProcessThree";
import CounterThree from "~/sections/Common/Counter/CounterThree";
import TestimonialThree from "~/sections/Common/Testimonial/TestimonialThree";
import Scroll from "~/sections/Common/Scroll";

export const metadata = { title: "About Us" };

export default function AboutPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <SiteBreadcrumb title="About Us" />
            <AboutThree />
            <WhyChooseThree />
            <ProcessThree />
            <CounterThree />
            <TestimonialThree />
            <SiteFooter />
            <Scroll />
        </div>
    );
}

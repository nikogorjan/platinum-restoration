import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import ContactArea from "~/sections/Contact/ContactArea";
import ContactMap from "~/sections/Contact/ContactMap";
import Scroll from "~/sections/Common/Scroll";

export const metadata = { title: "Contact" };

export default function ContactPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <SiteBreadcrumb title="Contact" />
            <ContactArea />
            <ContactMap />
            <SiteFooter />
            <Scroll />
        </div>
    );
}

import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import HomeContact from "~/sections/Site/HomeContact";
import ContactPromise from "~/sections/Site/ContactPromise";
import SiteMap from "~/sections/Site/SiteMap";
import Scroll from "~/sections/Common/Scroll";
import { SITE } from "~/sections/Site/siteData";

export const metadata = { title: "Contact" };

const CONTACT_TILES = [
    { icon: "ri-phone-fill", label: "Call us any time", value: SITE.phone, href: SITE.phoneHref },
    { icon: "ri-mail-line", label: "Email us", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: "ri-map-pin-2-line", label: "Visit us", value: SITE.address },
];

export default function ContactPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <SiteBreadcrumb title="Contact" />
            <div className="space-top">
                <div className="container">
                    <div className="row gy-30 gx-30 justify-content-center">
                        {CONTACT_TILES.map((tile) => (
                            <div className="col-xl-4 col-md-6 d-flex" key={tile.label}>
                                <div className="pm-contact-tile">
                                    <i className={tile.icon}></i>
                                    <div>
                                        <span className="label">{tile.label}</span>
                                        {tile.href ? (
                                            <a href={tile.href} className="value">{tile.value}</a>
                                        ) : (
                                            <span className="value">{tile.value}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <HomeContact />
            <ContactPromise />
            <div className="space-top">
                <SiteMap />
            </div>
            <SiteFooter />
            <Scroll />
        </div>
    );
}

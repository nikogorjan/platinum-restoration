import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import Scroll from "~/sections/Common/Scroll";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <SiteBreadcrumb title="Privacy Policy" />
            <div className="space overflow-hidden">
                <div className="container3">
                    <div className="single-page">
                        <h2 className="sec-title2 mb-25">Privacy Policy</h2>
                        <p className="mb-30">
                            [Draft placeholder] The standard privacy policy text goes here —
                            what data the site collects (contact form, analytics), how it is
                            used, and how visitors can get in touch about it.
                        </p>
                        <p className="mb-30">
                            [Draft placeholder] Section for analytics/cookies disclosure.
                        </p>
                        <p>
                            [Draft placeholder] Section for contact details and effective date.
                        </p>
                    </div>
                </div>
            </div>
            <SiteFooter />
            <Scroll />
        </div>
    );
}

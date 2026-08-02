import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/bootstrap.rtl.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "./site-theme.css";

export const metadata = {
  title: {
    default: "Platinum Restoration & Construction",
    template: "%s | Platinum Restoration & Construction",
  },
  description:
    "Water damage repair, mold remediation, crawlspace services and quality construction. Call Platinum Restoration & Construction any time.",
  icons: {
    icon: [
      { rel: "icon", type: "image/png", url: "/aditional-assets/logo/favicon.png" },
    ],
    apple: [
      { rel: "apple-touch-icon", url: "/aditional-assets/logo/favicon.png" },
    ],
    shortcut: [
      { rel: "shortcut icon", url: "/aditional-assets/logo/favicon.png" },
    ],
  },
};

export default function SiteLayout({ children }) {
  return children;
}

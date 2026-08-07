import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/bootstrap.rtl.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "./site-theme.css";
import "./modern.css";
import { SITE, SEO, OG_IMAGE } from "~/sections/Site/siteData";
import StickyCallBar from "~/sections/Site/StickyCallBar";
import Analytics from "~/sections/Site/Analytics";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.legalName} | ${SEO.home.title}`,
    template: `%s | ${SITE.name}`,
  },
  description: SEO.home.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  generator: "Next.js",
  keywords: [
    "water damage repair",
    "mold remediation",
    "mold inspection",
    "crawlspace remediation",
    "vapor barrier installation",
    "insulation installation",
    "dehumidifier installation",
    "residential remodeling",
    "roofing repair",
    "sheetrock and painting",
    "windows and doors",
    "drainage solutions",
    "property management",
    "Garner NC",
    "Triangle area North Carolina",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.legalName,
    locale: "en_US",
    url: SITE.url,
    title: `${SITE.legalName} | ${SEO.home.title}`,
    description: SEO.home.description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE.legalName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.legalName} | ${SEO.home.title}`,
    description: SEO.home.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ rel: "icon", type: "image/png", url: SITE.favicon }],
    apple: [{ rel: "apple-touch-icon", url: SITE.favicon }],
    shortcut: [{ rel: "shortcut icon", url: SITE.favicon }],
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <StickyCallBar />
      <Analytics />
    </>
  );
}

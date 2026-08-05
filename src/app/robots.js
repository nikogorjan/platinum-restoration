import { SITE } from "~/sections/Site/siteData";

// Generates /robots.txt at build time.
export const dynamic = "force-static";

export default function robots() {
    return {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: `${SITE.url}/sitemap.xml`,
        host: SITE.url,
    };
}

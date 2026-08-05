


export const metadata = {
  title: "Platinum Restoration & Construction",
  description: "Water damage repair, mold remediation, crawlspace services and quality construction.",
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
import "~/public/main-assets/css/fonts.css";
import { Plus_Jakarta_Sans } from "next/font/google";

// The site's single font family. Defines the --font-primary CSS variable
// on <body>; only the (site) routes consume it (via site-theme.css) —
// template pages keep their own fonts.
const primaryFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={primaryFont.variable}>
        {children}
      </body>
    </html>
  );
}

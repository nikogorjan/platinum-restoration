


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
import { Inter } from "next/font/google";

// Defines the --font-inter CSS variable on <body>. Only the (site) routes
// consume it (via site-theme.css); template pages keep their own fonts.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}

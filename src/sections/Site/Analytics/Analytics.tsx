import Script from "next/script";

// Google Analytics 4. Renders nothing unless NEXT_PUBLIC_GA_ID is set, so
// local development and preview builds stay out of the client's reporting.
// Set the measurement ID (format: G-XXXXXXXXXX) in the hosting environment.
const Analytics = () => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (!gaId) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaId}');
                `}
            </Script>
        </>
    );
};

export default Analytics;

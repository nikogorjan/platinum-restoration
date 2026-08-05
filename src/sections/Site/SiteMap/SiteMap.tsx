// Full-bleed Google Maps embed of the office location, designed to sit
// flush between sections (no vertical gaps).
const SiteMap = () => {
    return (
        <div className="pm-map">
            <iframe
                src="https://www.google.com/maps?q=267%20Timber%20Dr%20Unit%20407%2C%20Garner%2C%20NC%2027529&output=embed"
                title="Platinum Restoration & Construction — 267 Timber Dr. Unit 407, Garner NC 27529"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default SiteMap;

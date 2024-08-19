import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>SafariTrips</h1>
          <p>Choose Your Favourite destination.</p>
        </div>
        <div>
          <a>
            <i className="fa-brands fa-facebook-square"></i>
          </a>

          <a>
            <i className="fa-brands fa-instagram-square"></i>
          </a>

          <a>
            <i className="fa-brands fa-behance-square"></i>
          </a>

          <a>
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a target="_blank" href="https://changelog.com/">
            Changelog
          </a>
          <a
            target="_blank"
            href="https://famesolutely.com/social-media/126-travel-quotes-for-your-hospitality-or-travel-social-media-account/2022/"
          >
            Status
          </a>
          <a
            target="_blank"
            href="https://dol.wa.gov/vehicles-and-boats/license-plates/trip-permits-unlicensed-vehicles"
          >
            License
          </a>
          <a
            target="_blank"
            href="https://ctrip.en.uptodown.com/android/versions"
          >
            All Versions
          </a>
        </div>

        <div>
          <h4>Community</h4>
          <a target="_blank" href="https://github.com/topics/travel-website">
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.goabroad.com/articles/common-travel-problems-and-solutions"
          >
            Issues
          </a>
          <a target="_blank" href="/">
            Project
          </a>
          <a
            target="_blank"
            href="https://x.com/TravelLeisure?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            Twitter
          </a>
        </div>

        <div>
          <h4>Help</h4>
          <a
            target="_blank"
            href="https://eg.visamiddleeast.com/en_EG/support/consumer/travel-support.html"
          >
            Support
          </a>
          <a
            target="_blank"
            href="https://support.terradotta.com/hc/en-us/articles/22689053990551-Travel-Registry-Troubleshooting-FAQ-Top-20-Most-Common-Issues"
          >
            Troubleshooting
          </a>
          <a href="/contact">Contact Us</a>
        </div>

        <div>
          <h4>Others</h4>
          <a
            target="_blank"
            href="https://www.cadencetravel.com/terms-of-service"
          >
            Terms of Service
          </a>
          <a
            target="_blank"
            href="https://journeytours.com/client-resources/privacy-policy/"
          >
            Privacy Policy
          </a>
          <a
            target="_blank"
            href="https://www.traveltoegypt.net/discover-egypt/facts/company-license"
          >
            License
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

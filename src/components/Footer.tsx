import { siteConfig } from "@/constants/site";
import { SOCIAL_LINKS } from "@/constants/social";
export function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-top">
        <span className="footer-signature">
          traiwit<span>.</span>
        </span>
        <p>
          Thoughtful interfaces.
          <br />
          Useful systems. Always improving.
        </p>
        <a className="back-top" href="#main">
          BACK TO TOP ↑
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <div>
          {SOCIAL_LINKS.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
        <span>DESIGNED & BUILT WITH INTENT.</span>
      </div>
    </footer>
  );
}

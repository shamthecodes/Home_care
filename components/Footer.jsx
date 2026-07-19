import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">CareEase</h3>
          <p className="footer-tagline">We Care, Like Family</p>
          <p className="footer-desc">
            Professional caregivers and personalised care for your loved ones,
            right at home.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social-link">
              Facebook
            </a>
            <a href="#" className="footer-social-link">
              Instagram
            </a>
            <a href="#" className="footer-social-link">
              Twitter
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <Link href="/services">Services</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Our Services</h4>
          <Link href="/services/elderly-care">Elderly Care</Link>
          <Link href="/services/nursing-care">Nursing Care</Link>
          <Link href="/services/physiotherapy">Physiotherapy</Link>
          <Link href="/services/dementia-care">Dementia Care</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-contact-item">
            <Phone className="footer-contact-icon" />
            <span>1800-123-4567 (Toll Free)</span>
          </div>
          <div className="footer-contact-item">
            <Mail className="footer-contact-icon" />
            <span>support@careease.com</span>
          </div>
          <div className="footer-contact-item">
            <MapPin className="footer-contact-icon" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 CareEase. Made with Care & Service.</p>
      </div>
    </footer>
  );
}

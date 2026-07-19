import {
  ShieldCheck,
  BadgeCheck,
  Clock,
  ArrowRight,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import "./Hero.css";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  const avatars = [
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/75.jpg",
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-badge">
            Bangalore&apos;s Most Trusted Home Care Service
          </span>
          <h1 className="hero-heading">
            <span className="hero-heading-dark">Compassionate Care,</span>
            <br />
            <span className="hero-heading-teal">Right at Home</span>
          </h1>
          <p className="hero-subtext">
            Professional caregivers. Personalised care. Better health and
            happiness for your loved ones.
          </p>
          <div className="hero-trust-row">
            <div className="hero-trust-item">
              <div className="hero-trust-icon-circle">
                <ShieldCheck className="hero-trust-icon" />
              </div>
              Verified Caregivers
            </div>
            <div className="hero-trust-item">
              <div className="hero-trust-icon-circle">
                <BadgeCheck className="hero-trust-icon" />
              </div>
              Safe & Reliable
            </div>
            <div className="hero-trust-item">
              <div className="hero-trust-icon-circle">
                <Clock className="hero-trust-icon" />
              </div>
              24/7 Support
            </div>
          </div>
          <div className="hero-location">
            <MapPin size={18} className="location-icon" />
            <span>
              737, 5th Main Rd, Govindaraja Nagar Ward, MC Layout, Vijayanagar,
              Bengaluru, Karnataka 560040
            </span>
          </div>

          {/* CTA button RIGHT after address */}
          <Button
            asChild
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-700 rounded-xl"
          >
            <Link href="/book">
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <div className="hero-social-proof">
            <div className="hero-avatars">
              {avatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar}
                  alt={`Family ${index + 1}`}
                  width={42}
                  height={42}
                  className="hero-avatar"
                />
              ))}
            </div>

            <div>
              <p className="hero-social-text">2,000+ Families Trust Us</p>
              <p className="hero-social-rating">★★★★★ 4.8/5 (2K+ Reviews)</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrap">
            <Image
              src="/hero-image.png"
              alt="Caregiver with elderly woman"
              fill
              className="hero-image"
              priority
            />
          </div>

          {/* <div className="hero-floating-card">
            <div className="hero-avatars-small">
              <div className="hero-avatar-small" />
              <div className="hero-avatar-small" />
              <div className="hero-avatar-small" />
            </div>
            <div>
              <p className="hero-floating-number">10,000+</p>
              <p className="hero-floating-label">Happy Families</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

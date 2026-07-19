"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Phone, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import "./Headnav.css";

export default function Headnav() {
  const { isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { section: "services", label: "Services" },
    { section: "how-it-works", label: "How It Works" },
    { section: "AboutUs", label: "AboutUs" },
    { section: "resources", label: "Resources" },
    { section: "contact", label: "Contact" },
  ];

  const handleNavClick = (e, section) => {
    e.preventDefault();
    setMenuOpen(false);

    const scrollToSection = () => {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (pathname !== "/") {
      router.push("/");

      setTimeout(() => {
        scrollToSection();
      }, 300);
    } else {
      scrollToSection();
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-logo">
          <Image
            src="/nav.png"
            alt="HealthCare Logo"
            width={50}
            height={50}
            className="header-logo-img"
            priority
          />

          <div className="header-logo-text">
            <p className="header-logo-text-main">HealthCare</p>
            <p className="header-logo-text-sub">We Care, Like Family</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={`#${link.section}`}
              onClick={(e) => handleNavClick(e, link.section)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <div className="header-phone">
            <Phone className="header-phone-icon" />

            <div>
              <p className="header-phone-number">+91 9380050238</p>
              <p className="header-phone-label">(Toll Free)</p>
            </div>
          </div>

          <div className="header-auth-desktop">
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className="btn-login">Sign In</button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <button className="btn-signup">Sign Up</button>
                </SignUpButton>
              </>
            ) : (
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: {
                      width: "35px",
                      height: "35px",
                    },
                  },
                }}
              />
            )}
          </div>

          <button
            className="header-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="header-mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={`#${link.section}`}
              onClick={(e) => handleNavClick(e, link.section)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

import Link from "next/link";

import {
  Heart,
  Activity,
  HandHeart,
  Bandage,
  HeartHandshake,
  Syringe,
} from "lucide-react";
import "./ServicesGrid.css";

const services = [
  {
    icon: Syringe,
    title: "Injection IV",
    desc: "Intravenous injections safely administered at home.",
  },
  {
    icon: Syringe,
    title: "Injection IM & SK",
    desc: "Intramuscular and subcutaneous injections at home.",
  },
  {
    icon: Activity,
    title: "Blood Tests",
    desc: "BP, Sugar, Thyroid and any blood test at home.",
  },
  {
    icon: Heart,
    title: "Urine Catheterization",
    desc: "Professional catheterization service at home.",
  },
  {
    icon: HandHeart,
    title: "Cupping Therapy",
    desc: "Traditional cupping therapy at your doorstep.",
  },
  {
    icon: HeartHandshake,
    title: "Ladies Health Care",
    desc: "Specialised women's health care with full privacy.",
  },
];
export default function ServicesGrid() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span className="services-tag">Our Services</span>
        <h2 className="services-title">Comprehensive Care Solutions</h2>
        <p className="services-subtitle">
          Personalized care solutions in the comfort of your home.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div className="service-card" key={i}>
              <div className="service-icon-circle">
                <Icon className="service-icon" />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <Link
                href="/book"
                className="inline-flex items-center gap-1 text-xs font-semibold
    text-[#0d4d4d] mt-3 hover:text-[#25d366] transition-colors"
              >
                Book Now →
              </Link>

              <p className="service-card-desc">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

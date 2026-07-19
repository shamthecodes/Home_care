import Image from "next/image";
import { ShieldCheck, Award, HeartHandshake } from "lucide-react";
import "./AboutUs.css";

const certifications = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: Award, label: "Govt. Registered Care Provider" },
  { icon: HeartHandshake, label: "Member, Senior Care Association" },
];

const caregivers = [
  {
    name: "Mr Mahesh",
    role: "Nursing Caregiver",
    image: "/caregiver1.png",
  },
  {
    name: "Mr Beeresh",
    role: "Nursing",
    image: "/Caregiver2.png",
  },
  {
    name: "Mr Srinivasa",
    role: "Elderly Care Nursing",
    image: "/caregiver3.png", // Change to .png if your file is caregiver3.png
  },
];

export default function AboutUs() {
  return (
    <section className="about-section" id="AboutUs">
      <div className="about-header">
        <span className="about-tag">About Us</span>

        <h2 className="about-title">We Treat Your Family Like Our Own</h2>

        <p className="about-mission">
          Our mission is to deliver reliable, compassionate, and professional
          home care that enhances the quality of life for your loved ones. Every
          caregiver on our team is background-verified, trained, and chosen for
          their genuine care towards the people they serve.
        </p>
      </div>

      <div className="about-caregivers">
        {caregivers.map((cg) => (
          <div className="caregiver-card" key={cg.name}>
            <div className="caregiver-photo">
              <Image
                src={cg.image}
                alt={cg.name}
                fill
                className="caregiver-img"
                sizes="90px"
              />
            </div>

            <h3 className="caregiver-name">{cg.name}</h3>
            <p className="caregiver-role">{cg.role}</p>
          </div>
        ))}
      </div>

      <div className="about-certs">
        {certifications.map((cert) => {
          const Icon = cert.icon;

          return (
            <div className="cert-item" key={cert.label}>
              <Icon className="cert-icon" />
              <span>{cert.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

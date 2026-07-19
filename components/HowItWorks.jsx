import { PhoneCall, ClipboardList, UsersRound, HomeIcon } from "lucide-react";
import "./HowItWorks.css";

const steps = [
  {
    number: 1,
    icon: PhoneCall,
    title: "Free Consultation",
    desc: "Tell us about your needs and get expert advice.",
  },
  {
    number: 2,
    icon: ClipboardList,
    title: "Assessment",
    desc: "We assess your needs and create a personalised care plan.",
  },
  {
    number: 3,
    icon: UsersRound,
    title: "Caregiver Match",
    desc: "We match you with the right caregiver for your needs.",
  },
  {
    number: 4,
    icon: HomeIcon,
    title: "Care Begins",
    desc: "Care starts at home as per your schedule.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-header">
        <span className="how-tag">How It Works</span>
        <h2 className="how-title">Getting Quality Care at Home is Simple</h2>
      </div>
      <div className="how-steps">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div className="how-step" key={i}>
              <div className="how-step-top">
                <div className="how-number">{step.number}</div>
                {i < steps.length - 1 && <div className="how-connector" />}
              </div>

              <div className="how-icon-circle">
                <Icon className="how-icon" />
              </div>

              <h3 className="how-step-title">{step.title}</h3>
              <p className="how-step-desc">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

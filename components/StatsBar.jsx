import { Users, ShieldCheck, Clock, Star } from "lucide-react";
import "./StatsBar.css";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Families Served",
    bg: "#d1fae5",
    color: "#059669",
  },
  {
    icon: ShieldCheck,
    value: "Verified",
    label: "& Certified Caregivers",
    bg: "#dbeafe",
    color: "#2563eb",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    bg: "#ede9fe",
    color: "#7c3aed",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Customer Rating",
    bg: "#fef3c7",
    color: "#d97706",
  },
];

export default function StatsBar() {
  return (
    <section className="stats-section">
      <div className="stats-card">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div className="stats-item" key={i}>
              <div
                className="stats-icon-circle"
                style={{ background: stat.bg }}
              >
                <Icon style={{ color: stat.color }} className="stats-icon" />
              </div>
              <div>
                <p className="stats-value">{stat.value}</p>
                <p className="stats-label">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

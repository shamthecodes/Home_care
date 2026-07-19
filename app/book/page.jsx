import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919380050238";

const services = [
  {
    emoji: "💉",
    title: "Injection IV",
    desc: "Intravenous injection administered safely at home by trained professional.",
    msg: "Hi, I need Injection IV (Intravenous) at home. Can you help me?",
  },
  {
    emoji: "💊",
    title: "Injection IM",
    desc: "Intramuscular injection service at your doorstep.",
    msg: "Hi, I need Injection IM (Intramuscular) at home. Can you help me?",
  },
  {
    emoji: "🩺",
    title: "Injection Subcutaneous",
    desc: "Subcutaneous (SK) injections administered with care at home.",
    msg: "Hi, I need Subcutaneous (SK) Injection at home. Can you help me?",
  },
  {
    emoji: "🏥",
    title: "Urine Catheterization",
    desc: "Professional urine catheterization service at home.",
    msg: "Hi, I need Urine Catheterization service at home. Can you help me?",
  },
  {
    emoji: "🔬",
    title: "Blood Tests",
    desc: "BP, Sugar, Thyroid and any blood test available at home.",
    msg: "Hi, I need a Blood Test (BP/Sugar/Thyroid) at home. Can you help me?",
  },
  {
    emoji: "❤️",
    title: "General Care",
    desc: "Any health problem or general care need — we are here to help.",
    msg: "Hi, I need general home care help. Can you tell me more about your services?",
  },
  {
    emoji: "🫙",
    title: "Cupping Therapy",
    desc: "Professional cupping therapy session at your home.",
    msg: "Hi, I'm interested in Cupping Therapy at home. Can you help me?",
  },
  {
    emoji: "🌸",
    title: "Ladies Health Care",
    desc: "Specialised health care support for women, handled with privacy and care.",
    msg: "Hi, I need Ladies Health Care support at home. Can you help me?",
  },
];

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#f7f9f9] py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-[#d1fae5] text-[#065f46] text-xs font-semibold px-3 py-1 rounded-full mb-3">
            Available 24/7
          </span>

          <h1 className="text-2xl md:text-3xl font-bold text-[#0a2e2e] mb-2">
            Book Home Care Service
          </h1>

          <p className="text-[#4a7070] text-sm max-w-md mx-auto">
            Select the service you need and connect with us directly on
            WhatsApp. We`&apos;`ll respond within minutes.
          </p>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi, I need home care service. Can you help me?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-[#25d366] hover:bg-[#1ebe5d] text-white font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Chat with us on WhatsApp
          </a>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {services.map((service, i) => (
            <a
              key={i}
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                service.msg,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border-2 border-[#eef2f2] p-5 flex flex-col gap-3 transition-all duration-200 hover:border-[#25d366] hover:shadow-md active:scale-[0.98]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-3xl">{service.emoji}</span>

                  <h3 className="font-bold text-[#0a2e2e] mt-2 text-base">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#4a7070] leading-relaxed mt-1">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[#25d366] font-semibold text-sm mt-auto group-hover:gap-2.5 transition-all">
                <MessageCircle className="h-4 w-4" />
                Book via WhatsApp
              </div>
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="bg-white border border-[#eef2f2] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[#0a2e2e] text-sm">
              Prefer to call directly?
            </p>

            <p className="text-[#4a7070] text-xs mt-0.5">
              Available 24/7 for emergencies
            </p>
          </div>

          <a
            href="tel:+919380050238"
            className="flex items-center gap-2 bg-[#0d4d4d] hover:bg-[#1a6b6b] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all whitespace-nowrap"
          >
            📞 +91 93800 50238
          </a>
        </div>

        <p className="text-center text-xs text-[#4a7070] mt-6">
          Serving Vijayanagar, Bengaluru & surrounding areas
        </p>
      </div>
    </div>
  );
}

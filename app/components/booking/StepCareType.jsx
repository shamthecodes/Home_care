import { Button } from "@/components/ui/button";

const careTypes = [
  {
    id: "health-checkup",
    emoji: "🩺",
    title: "Health Checkup",
    desc: "BP, Sugar level, basic health advice at home",
  },
  {
    id: "elderly-nursing",
    emoji: "👴",
    title: "Elderly / Nursing Care",
    desc: "Full-time or part-time caregiver assignment",
  },
  {
    id: "physiotherapy",
    emoji: "🏃",
    title: "Physiotherapy",
    desc: "Expert physiotherapy session at home",
  },
  {
    id: "post-surgery",
    emoji: "🏥",
    title: "Post-Surgery Care",
    desc: "Recovery support and wound care at home",
  },
];

export default function StepCareType({ selected, onSelect, onNext }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#0a2e2e] mb-1">
        What care do you need?
      </h2>
      <p className="text-sm text-[#4a7070] mb-5">
        Select the type of home care service
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {careTypes.map((type) => {
          const isSelected = selected === type.id;
          return (
            <button
              key={type.id}
              onClick={() => onSelect(type.id)}
              className={`text-left p-4 rounded-xl border-2 transition-all duration-200
                ${
                  isSelected
                    ? "border-[#0d4d4d] bg-[#f0f9f9]"
                    : "border-[#eef2f2] hover:border-[#0d4d4d]/30 hover:bg-[#f7fafa]"
                }`}
            >
              <div className="text-2xl mb-2">{type.emoji}</div>
              <p
                className={`font-semibold text-sm mb-0.5
                ${isSelected ? "text-[#0d4d4d]" : "text-[#0a2e2e]"}`}
              >
                {type.title}
              </p>
              <p className="text-xs text-[#4a7070] leading-snug">{type.desc}</p>
            </button>
          );
        })}
      </div>

      <Button
        onClick={onNext}
        disabled={!selected}
        className="w-full bg-[#0d4d4d] hover:bg-[#1a6b6b] text-white h-11"
      >
        Next
      </Button>
    </div>
  );
}

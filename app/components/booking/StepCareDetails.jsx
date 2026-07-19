"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const checkupOptions = [
  { id: "bp", label: "Blood Pressure (BP) Check" },
  { id: "sugar-fasting", label: "Sugar Level — Fasting" },
  { id: "sugar-random", label: "Sugar Level — Random" },
  { id: "basic-advice", label: "Basic Health Advice / Consultation" },
];

const durationOptions = ["Daily", "Weekly", "Monthly", "One-time visit"];

export default function StepCareDetails({
  careType,
  careDetails,
  onChange,
  onNext,
  onBack,
}) {
  const toggle = (key, value) => {
    const current = careDetails[key] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onChange({ ...careDetails, [key]: updated });
  };

  const set = (key, value) => onChange({ ...careDetails, [key]: value });

  const isValid = () => {
    if (careType === "health-checkup") {
      return (careDetails.checks || []).length > 0;
    }
    return !!careDetails.duration && !!careDetails.condition;
  };

  return (
    <div>
      <h2 className="text-lg font-bold text-[#0a2e2e] mb-1">Care Details</h2>
      <p className="text-sm text-[#4a7070] mb-5">
        Tell us more about what you need
      </p>

      {careType === "health-checkup" && (
        <div className="flex flex-col gap-3 mb-6">
          <Label className="text-[#0a2e2e] font-semibold">
            Select checks needed
          </Label>
          {checkupOptions.map((opt) => {
            const isChecked = (careDetails.checks || []).includes(opt.id);
            return (
              <button
                key={opt.id}
                onClick={() => toggle("checks", opt.id)}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all
                  ${
                    isChecked
                      ? "border-[#0d4d4d] bg-[#f0f9f9]"
                      : "border-[#eef2f2] hover:border-[#0d4d4d]/30"
                  }`}
              >
                <div
                  className={`h-5 w-5 rounded border-2 flex items-center justify-center shrink-0
                  ${
                    isChecked
                      ? "bg-[#0d4d4d] border-[#0d4d4d]"
                      : "border-[#d1d5db]"
                  }`}
                >
                  {isChecked && (
                    <span className="text-white text-xs font-bold">✓</span>
                  )}
                </div>
                <span className="text-sm text-[#0a2e2e]">{opt.label}</span>
              </button>
            );
          })}

          <div className="mt-2 flex flex-col gap-1.5">
            <Label htmlFor="concern" className="text-[#0a2e2e]">
              Any specific concern? (optional)
            </Label>
            <Input
              id="concern"
              placeholder="e.g. feeling dizzy, headaches..."
              value={careDetails.concern || ""}
              onChange={(e) => set("concern", e.target.value)}
            />
          </div>
        </div>
      )}

      {careType !== "health-checkup" && (
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <Label className="text-[#0a2e2e] font-semibold mb-2 block">
              Duration needed
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {durationOptions.map((opt) => {
                const isSelected = careDetails.duration === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => set("duration", opt)}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition-all
                      ${
                        isSelected
                          ? "border-[#0d4d4d] bg-[#f0f9f9] text-[#0d4d4d]"
                          : "border-[#eef2f2] text-[#4a7070] hover:border-[#0d4d4d]/30"
                      }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="condition" className="text-[#0a2e2e]">
              Patient condition / notes
            </Label>
            <textarea
              id="condition"
              rows={3}
              placeholder="e.g. recovering from knee surgery, needs mobility support..."
              value={careDetails.condition || ""}
              onChange={(e) => set("condition", e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm
                placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#0d4d4d]/40 resize-none"
            />
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1 border-[#eef2f2]"
        >
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!isValid()}
          className="flex-1 bg-[#0d4d4d] hover:bg-[#1a6b6b] text-white h-11"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";

const timeSlots = [
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const getDays = () => {
  const days = [];
  const now = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push(d);
  }
  return days;
};

export default function StepDateTime({
  date,
  timeSlot,
  onChange,
  onNext,
  onBack,
}) {
  const days = getDays();

  return (
    <div>
      <h2 className="text-lg font-bold text-[#0a2e2e] mb-1">
        Select Date & Time
      </h2>
      <p className="text-sm text-[#4a7070] mb-5">
        Choose your preferred appointment slot
      </p>

      {/* Date strip */}
      <div
        className="flex gap-2 overflow-x-auto pb-2 mb-6"
        style={{ scrollbarWidth: "none" }}
      >
        {days.map((d, i) => {
          const dateStr = d.toISOString().split("T")[0];
          const isSelected = date === dateStr;
          const isToday = i === 0;
          return (
            <button
              key={i}
              onClick={() => onChange({ date: dateStr })}
              className={`flex flex-col items-center min-w-[56px] py-2.5 px-1 rounded-xl border-2
                transition-all shrink-0
                ${
                  isSelected
                    ? "border-[#0d4d4d] bg-[#0d4d4d] text-white"
                    : "border-[#eef2f2] text-[#4a7070] hover:border-[#0d4d4d]/30"
                }`}
            >
              <span className="text-[0.6rem] font-medium">
                {isToday
                  ? "Today"
                  : d.toLocaleDateString("en-IN", { weekday: "short" })}
              </span>
              <span className="text-lg font-bold leading-tight">
                {d.getDate()}
              </span>
              <span className="text-[0.6rem]">
                {d.toLocaleDateString("en-IN", { month: "short" })}
              </span>
            </button>
          );
        })}
      </div>

      {/* Time slots */}
      <p className="text-sm font-semibold text-[#0a2e2e] mb-3">
        Available Time Slots
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-8">
        {timeSlots.map((slot) => {
          const isSelected = timeSlot === slot;
          return (
            <button
              key={slot}
              onClick={() => onChange({ timeSlot: slot })}
              className={`py-2 rounded-lg border-2 text-xs font-medium transition-all
                ${
                  isSelected
                    ? "border-[#0d4d4d] bg-[#0d4d4d] text-white"
                    : "border-[#eef2f2] text-[#4a7070] hover:border-[#0d4d4d]/30"
                }`}
            >
              {slot}
            </button>
          );
        })}
      </div>

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
          disabled={!date || !timeSlot}
          className="flex-1 bg-[#0d4d4d] hover:bg-[#1a6b6b] text-white h-11"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

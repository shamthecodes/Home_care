const steps = [
  "Care Type",
  "Details",
  "Date & Time",
  "Patient Info",
  "Verify",
  "Confirm",
];

export default function BookingStepper({ currentStep }) {
  return (
    <div className="flex items-start justify-between">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <div key={i} className="flex flex-col items-center flex-1 relative">
            {/* connector line */}
            {i < steps.length - 1 && (
              <div
                className={`absolute top-4 left-1/2 w-full h-0.5 z-0 transition-colors duration-300
                  ${isCompleted ? "bg-[#0d4d4d]" : "bg-[#e8f0f0]"}`}
              />
            )}

            {/* circle */}
            <div
              className={`relative z-10 h-8 w-8 rounded-full flex items-center justify-center
                text-xs font-bold transition-all duration-300
                ${
                  isCompleted
                    ? "bg-[#0d4d4d] text-white"
                    : isActive
                      ? "bg-[#0d4d4d] text-white ring-4 ring-[#0d4d4d]/20"
                      : "bg-[#e8f0f0] text-[#4a7070]"
                }`}
            >
              {isCompleted ? "✓" : stepNum}
            </div>

            {/* label */}
            <span
              className={`text-[0.6rem] mt-1.5 text-center leading-tight
                ${
                  isActive
                    ? "text-[#0d4d4d] font-semibold"
                    : isCompleted
                      ? "text-[#0d4d4d]"
                      : "text-gray-400"
                }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

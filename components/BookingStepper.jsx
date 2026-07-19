const steps = ["Service", "Date & Time", "Details", "Verify", "Confirm"];

export default function BookingStepper({ currentStep }) {
  return (
    <div className="flex items-start justify-between mb-8">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <div key={i} className="flex flex-col items-center flex-1 relative">
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold z-10
                ${isCompleted ? "bg-[#0d4d4d] text-white" : ""}
                ${isActive ? "bg-[#0d4d4d] text-white ring-4 ring-[#0d4d4d]/20" : ""}
                ${!isActive && !isCompleted ? "bg-[#e8f0f0] text-[#4a7070]" : ""}
              `}
            >
              {isCompleted ? "✓" : stepNum}
            </div>

            <span
              className={`text-[0.65rem] mt-1 text-center whitespace-nowrap
                ${isActive ? "text-[#0d4d4d] font-semibold" : "text-gray-400"}
              `}
            >
              {label}
            </span>

            {i < steps.length - 1 && (
              <div
                className={`absolute top-4 left-1/2 w-full h-0.5 z-0
                  ${isCompleted ? "bg-[#0d4d4d]" : "bg-[#e8f0f0]"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

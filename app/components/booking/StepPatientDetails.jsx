"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StepPatientDetails({
  patientName,
  patientAge,
  phone,
  address,
  onChange,
  onNext,
  onBack,
}) {
  const isValid = patientName && phone && phone.length >= 10;

  return (
    <div>
      <h2 className="text-lg font-bold text-[#0a2e2e] mb-1">Patient Details</h2>
      <p className="text-sm text-[#4a7070] mb-5">
        We`&apos;`ll use this to confirm your appointment
      </p>

      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="patientName" className="text-[#0a2e2e] font-medium">
            Patient Name
          </Label>
          <Input
            id="patientName"
            placeholder="e.g. Ramesh Kumar"
            value={patientName}
            onChange={(e) => onChange({ patientName: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="patientAge" className="text-[#0a2e2e] font-medium">
            Patient Age
          </Label>
          <Input
            id="patientAge"
            type="number"
            placeholder="e.g. 68"
            value={patientAge}
            onChange={(e) => onChange({ patientAge: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone" className="text-[#0a2e2e] font-medium">
            Your Phone Number
          </Label>
          <div className="flex gap-2">
            <span
              className="flex items-center px-3 bg-[#f7f9f9] border
              border-input rounded-md text-sm text-[#4a7070]"
            >
              +91
            </span>
            <Input
              id="phone"
              type="tel"
              placeholder="98765 43210"
              maxLength={10}
              value={phone}
              onChange={(e) =>
                onChange({ phone: e.target.value.replace(/\D/g, "") })
              }
            />
          </div>
          <p className="text-xs text-[#4a7070]">
            OTP will be sent to verify this number
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="address" className="text-[#0a2e2e] font-medium">
            Home Address
          </Label>
          <textarea
            id="address"
            rows={2}
            placeholder="House no, Street, Area, Bengaluru..."
            value={address}
            onChange={(e) => onChange({ address: e.target.value })}
            className="w-full rounded-md border border-input bg-background px-3 py-2
              text-sm placeholder:text-muted-foreground focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#0d4d4d]/40 resize-none"
          />
        </div>
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
          disabled={!isValid}
          className="flex-1 bg-[#0d4d4d] hover:bg-[#1a6b6b] text-white h-11"
        >
          Send OTP
        </Button>
      </div>
    </div>
  );
}

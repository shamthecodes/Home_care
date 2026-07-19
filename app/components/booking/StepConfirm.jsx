import {
  CheckCircle,
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
  Stethoscope,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const careTypeLabels = {
  "health-checkup": "Health Checkup",
  "elderly-nursing": "Elderly / Nursing Care",
  physiotherapy: "Physiotherapy",
  "post-surgery": "Post-Surgery Care",
};

export default function StepConfirm({ bookingData }) {
  const {
    bookingId,
    careType,
    careDetails,
    date,
    timeSlot,
    patientName,
    patientAge,
    phone,
    address,
  } = bookingData;

  const checksLabel = careDetails?.checks
    ?.map((c) =>
      c === "bp"
        ? "BP Check"
        : c === "sugar-fasting"
          ? "Sugar (Fasting)"
          : c === "sugar-random"
            ? "Sugar (Random)"
            : "Health Advice",
    )
    .join(", ");

  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="h-16 w-16 rounded-full bg-[#d1fae5] flex items-center justify-center">
          <CheckCircle className="h-9 w-9 text-[#059669]" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#0a2e2e] mb-1">
        Booking Confirmed!
      </h2>
      <p className="text-sm text-[#4a7070] mb-3">
        Your appointment has been successfully booked.
      </p>

      <div
        className="inline-block bg-[#f0f9f9] text-[#0d4d4d] font-mono
        text-sm px-4 py-1.5 rounded-full font-semibold mb-6"
      >
        Booking ID: {bookingId}
      </div>

      <Card className="border-[#eef2f2] text-left mb-4">
        <CardContent className="pt-5 flex flex-col gap-3">
          <div className="flex items-start gap-3 text-sm">
            <Stethoscope className="h-4 w-4 text-[#0d4d4d] mt-0.5 shrink-0" />
            <div>
              <p className="text-[#4a7070] text-xs">Service</p>
              <p className="font-medium text-[#0a2e2e]">
                {careTypeLabels[careType]}
              </p>
              {checksLabel && (
                <p className="text-xs text-[#4a7070] mt-0.5">{checksLabel}</p>
              )}
              {careDetails?.duration && (
                <p className="text-xs text-[#4a7070] mt-0.5">
                  Duration: {careDetails.duration}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Calendar className="h-4 w-4 text-[#0d4d4d] shrink-0" />
            <div>
              <p className="text-[#4a7070] text-xs">Date & Time</p>
              <p className="font-medium text-[#0a2e2e]">
                {date} at {timeSlot}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <User className="h-4 w-4 text-[#0d4d4d] shrink-0" />
            <div>
              <p className="text-[#4a7070] text-xs">Patient</p>
              <p className="font-medium text-[#0a2e2e]">
                {patientName}
                {patientAge ? `, ${patientAge} yrs` : ""}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone className="h-4 w-4 text-[#0d4d4d] shrink-0" />
            <div>
              <p className="text-[#4a7070] text-xs">Phone</p>
              <p className="font-medium text-[#0a2e2e]">+91 {phone}</p>
            </div>
          </div>

          {address && (
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-4 w-4 text-[#0d4d4d] mt-0.5 shrink-0" />
              <div>
                <p className="text-[#4a7070] text-xs">Address</p>
                <p className="font-medium text-[#0a2e2e]">{address}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="bg-[#fef9c3] border border-[#fef08a] rounded-xl p-3 mb-6 text-sm text-[#854d0e]">
        📞 Our team will call you within 2 hours to confirm your caregiver.
      </div>

      <Link href="/">
        <Button className="w-full bg-[#0d4d4d] hover:bg-[#1a6b6b] text-white h-11">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

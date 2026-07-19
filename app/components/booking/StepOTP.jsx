"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function StepOTP({ phone, bookingData, onVerified, onBack }) {
  const [otp, setOtp] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [countdown]);

  const sendOTP = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: `+91${phone}` }),
      });
      if (res.ok) {
        setSent(true);
        setCountdown(30);
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const verifyOTP = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: `+91${phone}`,
          otp,
          bookingData,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        onVerified(data.bookingId);
      } else {
        setError(data.error || "Invalid OTP. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-lg font-bold text-[#0a2e2e] mb-1">
        Verify Your Number
      </h2>
      <p className="text-sm text-[#4a7070] mb-6">
        {sent
          ? `OTP sent to +91 ${phone}`
          : `We'll send a 6-digit OTP to +91 ${phone}`}
      </p>

      {!sent ? (
        <Button
          onClick={sendOTP}
          disabled={loading}
          className="w-full bg-[#0d4d4d] hover:bg-[#1a6b6b] text-white h-11 mb-4"
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </Button>
      ) : (
        <div className="flex flex-col gap-4 mb-6">
          <Input
            placeholder="Enter 6-digit OTP"
            value={otp}
            maxLength={6}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            className="text-center text-2xl tracking-[0.5em] font-bold h-14"
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <Button
            onClick={verifyOTP}
            disabled={otp.length !== 6 || loading}
            className="w-full bg-[#0d4d4d] hover:bg-[#1a6b6b] text-white h-11"
          >
            {loading ? "Verifying..." : "Confirm Booking"}
          </Button>

          <div className="text-center">
            {countdown > 0 ? (
              <p className="text-sm text-[#4a7070]">
                Resend OTP in {countdown}s
              </p>
            ) : (
              <button
                onClick={sendOTP}
                className="text-sm text-[#0d4d4d] font-medium underline"
              >
                Resend OTP
              </button>
            )}
          </div>
        </div>
      )}

      {error && !sent && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}

      <Button
        variant="outline"
        onClick={onBack}
        className="w-full border-[#eef2f2]"
      >
        Back
      </Button>
    </div>
  );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-[#f7f9f9]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0d4d4d]">
            Contact Us
          </span>

          <h2 className="mt-2 text-3xl font-bold text-[#0a2e2e]">
            Get in Touch
          </h2>

          <p className="mt-3 text-sm text-[#4a7070]">
            We`&apos;`re here to help. Reach out and we`&apos;`ll respond within
            2 hours.
          </p>
        </div>

        {/* Center Card */}
        <div className="flex flex-col items-center">
          <Card className="w-full max-w-md border-[#eef2f2] shadow-sm">
            <CardContent className="pt-6 space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#0d4d4d] mt-1" />

                <div>
                  <p className="font-semibold text-[#0a2e2e]">Phone</p>

                  <a
                    href="tel:+919380050238"
                    className="text-sm text-[#4a7070] hover:text-[#0d4d4d]"
                  >
                    +91 9380050238
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#0d4d4d] mt-1" />

                <div>
                  <p className="font-semibold text-[#0a2e2e]">Email</p>

                  <a
                    href="mailto:support@careease.com"
                    className="text-sm text-[#4a7070] hover:text-[#0d4d4d]"
                  >
                    support@careease.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#0d4d4d] mt-1" />

                <div>
                  <p className="font-semibold text-[#0a2e2e]">Address</p>

                  <p className="text-sm text-[#4a7070]">
                    737, 5th Main Road,
                    <br />
                    Govindaraja Nagar Ward,
                    <br />
                    MC Layout,
                    <br />
                    Vijayanagar,
                    <br />
                    Bengaluru - 560040
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918951214832?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20home%20care%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full max-w-md"
          >
            <Button className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

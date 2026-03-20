"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  city: z.string().min(1, "Please select your city"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please describe your project (minimum 10 characters)"),
  honeypot: z.string().max(0, "Bot detected"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-serif text-2xl font-bold text-navy mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for contacting A Plumber Service. We&apos;ll be in touch within 1–2 business hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-gold hover:text-gold-dark font-semibold text-sm transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input type="text" {...register("honeypot")} className="hidden" aria-hidden="true" tabIndex={-1} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition text-sm"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="(713) 555-0100"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition text-sm"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition text-sm"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-navy mb-1.5">
            Your City *
          </label>
          <select
            id="city"
            {...register("city")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition text-sm bg-white"
          >
            <option value="">Select your city</option>
            <option value="Houston">Houston, TX</option>
            {cities.map((city) => (
              <option key={city.slug} value={city.name}>{city.name}, TX</option>
            ))}
            <option value="Other">Other / Not Listed</option>
          </select>
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-navy mb-1.5">
            Service Interested In *
          </label>
          <select
            id="service"
            {...register("service")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition text-sm bg-white"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>{service.name}</option>
            ))}
            <option value="Plumbing Repair">Plumbing Repair/Emergency</option>
            <option value="Other">Other</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          Describe Your Project *
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          placeholder="Tell us about your project — what you'd like done, your timeline, and any specific questions..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition text-sm resize-none"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Something went wrong. Please call us directly at (713) 955-6664.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-gold hover:shadow-gold-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send My Free Estimate Request
          </>
        )}
      </button>

      <p className="text-gray-400 text-xs text-center">
        By submitting this form, you agree to be contacted by A Plumber Service regarding your inquiry.
      </p>
    </form>
  );
}

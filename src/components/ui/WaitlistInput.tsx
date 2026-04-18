"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface WaitlistInputProps {
  onSubmit?: (email: string) => void;
  className?: string;
  buttonText?: string;
}

export function WaitlistInput({ onSubmit, className, buttonText = "EXECUTE" }: WaitlistInputProps) {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && email) {
      onSubmit(email);
      setEmail("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-col md:flex-row gap-4 w-full max-w-2xl bg-surface-container-high p-2 rounded-sm border border-outline-variant/30 transition-colors",
        focused ? "border-primary/50" : "",
        className
      )}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        className="flex-1 bg-transparent border-0 focus:ring-0 focus:outline-none px-6 py-4 text-on-surface font-label placeholder:text-on-surface-variant/50"
        placeholder="> enter your email_"
      />
      <button
        type="submit"
        className="bg-primary text-on-primary px-8 py-4 rounded-sm font-label uppercase tracking-widest font-bold hover:bg-primary-container transition-colors whitespace-nowrap"
      >
        {buttonText}
      </button>
    </form>
  );
}
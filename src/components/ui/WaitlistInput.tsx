"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CyberButton } from "./CyberButton";

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
        "flex flex-col md:flex-row gap-4 w-full max-w-2xl bg-surface-container-lowest p-2 rounded-sm border-b-2 border-transparent transition-colors",
        focused ? "border-primary-container" : "border-outline-variant/30",
        className
      )}
    >
      <div className="flex-1 relative flex items-center">
        <span className="text-primary-container ml-4 mr-2 font-body font-bold">&gt;</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
          className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none py-4 text-on-surface font-body placeholder:text-on-surface-variant/50"
          placeholder="enter your email_"
        />
        {focused && (
          <span className="absolute right-4 w-2 h-5 bg-primary-container animate-pulse"></span>
        )}
      </div>
      <CyberButton type="submit" variant="glass" className="py-4">
        {buttonText}
      </CyberButton>
    </form>
  );
}

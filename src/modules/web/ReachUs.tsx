"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Briefcase,
  Bug,
  Lightbulb,
  Send,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const reasons = [
  { id: "connect", label: "Connect", icon: MessageSquare },
  { id: "work", label: "Work with us", icon: Briefcase },
  { id: "bug", label: "Report a bug", icon: Bug },
  { id: "feature", label: "Feature idea", icon: Lightbulb },
];

const ReachUs = () => {
  const [selected, setSelected] = useState("connect");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#080c0f] flex items-center justify-center px-6 py-24 md:px-12 md:py-32 lg:px-24 lg:py-40 relative overflow-hidden">
      {/* Background ambient glow for the whole page (optional) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,170,255,0.04),transparent)]" />

      {/* Main Split Card */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row bg-[#080c0f] rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-[#1a2530] overflow-hidden">
        
        {/* Left Pane - Animation / GIF */}
        <div className="w-full lg:w-[60%] min-h-[400px] lg:h-auto relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#1a2530] flex items-center justify-center bg-[#080c0f] p-6 lg:p-8">
          <img
            src="/reachus hero.gif"
            alt="Wekraft terminal match animation"
            className="w-full h-full object-contain max-h-[600px]"
          />
        </div>

      {/* Right Pane - Form */}
      <div className="w-full lg:w-[40%] bg-[#0d1317] p-6 md:p-8 lg:p-12 flex flex-col rounded-b-[20px] lg:rounded-bl-none lg:rounded-r-[20px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00aaff] mb-3">
              Reach us
            </p>
            <h1 className="text-2xl font-semibold text-white tracking-tight leading-snug mb-2 font-sans">
              Get in touch
            </h1>
            <p className="text-xs text-[#4a6070] leading-relaxed max-w-sm">
              Have a question, found a bug, or want to collaborate? Drop us a
              message and we&apos;ll get back within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4 flex-1"
          >
            {/* reason chips */}
            <div className="space-y-2">
              <label className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#4a6070]">
                Reason
              </label>
              <div className="grid grid-cols-2 gap-2 w-full">
                {reasons.map((r) => {
                  const Icon = r.icon;
                  const active = selected === r.id;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setSelected(r.id)}
                      className={cn(
                        "flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[10px] sm:text-xs font-medium border transition-all duration-200 whitespace-nowrap",
                        active
                          ? "bg-[#00aaff]/10 border-[#00aaff]/20 text-[#00aaff]"
                          : "bg-transparent border-[#1a2530] text-[#4a6070] hover:text-[#c8d8e0] hover:border-white/10"
                      )}
                    >
                      <Icon className="w-3 h-3 flex-shrink-0" />
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Animated Inputs Wrapper */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-4"
              >
              {/* email */}
              <div className="space-y-2">
                <label className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#4a6070]">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#4a6070]" />
                  <Input
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="pl-9 h-10 bg-[#080c0f] border-white/5 rounded-lg text-xs text-[#c8d8e0] placeholder:text-[#4a6070] focus:border-[#00aaff]/30 focus:ring-0"
                  />
                </div>
              </div>

              {/* subject */}
              <div className="space-y-2">
                <label className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#4a6070]">
                  Subject
                </label>
                <Input
                  required
                  type="text"
                  placeholder="Brief summary"
                  className="h-10 bg-[#080c0f] border-white/5 rounded-lg text-xs text-[#c8d8e0] placeholder:text-[#4a6070] focus:border-[#00aaff]/30 focus:ring-0"
                />
              </div>

              {/* message */}
              <div className="space-y-2">
                <label className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#4a6070]">
                  Message
                </label>
                <Textarea
                  required
                  placeholder="Describe what's on your mind..."
                  className="min-h-[100px] bg-[#080c0f] border-white/5 rounded-lg text-xs text-[#c8d8e0] placeholder:text-[#4a6070] focus:border-[#00aaff]/30 focus:ring-0 resize-none"
                />
              </div>

              {/* submit */}
              <div className="flex items-center justify-between pt-2">
                <span className="flex items-center gap-1.5 text-[10px] text-[#4a6070]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00aaff]/80 shadow-[0_0_8px_rgba(0,170,255,0.5)]" />
                  Typically replies in &lt; 24h
                </span>
                <Button
                  type="submit"
                  disabled={sending}
                  className="h-9 px-4 bg-[#00aaff] text-black hover:bg-[#00aaff]/90 rounded-lg text-xs font-bold transition-all duration-200 disabled:opacity-50"
                >
                  {sending ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-3.5 h-3.5" />
                    </motion.div>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      Send message
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </Button>
              </div>
            </motion.div>
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
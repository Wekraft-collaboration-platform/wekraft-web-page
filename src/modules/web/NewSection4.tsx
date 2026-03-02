"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  SearchCheck,
  Zap,
  Code2,
  BrainCircuit,
  Activity,
  ArrowRight,
  CheckCircle2,
  GitPullRequest,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

const SkillMatchingUI = () => (
  <div className="w-full h-full flex items-center justify-center p-6">
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <GitPullRequest className="w-3.5 h-3.5 text-blue-400" />
        <span className="text-[11px] text-neutral-400 font-mono">PR #847 — Refactor auth module</span>
      </div>

      {[
        { name: "Alex Chen", skill: "Auth / Security", match: 97, selected: true },
        { name: "Sarah Kim", skill: "React / Frontend", match: 82, selected: false },
        { name: "Ryan Patel", skill: "Node.js / Backend", match: 71, selected: false },
      ].map((dev, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className={cn(
            "flex items-center gap-3 px-3.5 py-3 rounded-xl border transition-all",
            dev.selected
              ? "border-blue-500/30 bg-blue-500/[0.06]"
              : "border-white/[0.04] bg-white/[0.02]"
          )}
        >
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold",
            dev.selected ? "bg-blue-500/20 text-blue-400" : "bg-white/[0.05] text-neutral-500"
          )}>
            {dev.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-white font-medium">{dev.name}</div>
            <div className="text-[10px] text-neutral-500">{dev.skill}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-1 bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${dev.match}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                className={cn(
                  "h-full rounded-full",
                  dev.selected ? "bg-blue-500" : "bg-neutral-600"
                )}
              />
            </div>
            <span className={cn(
              "text-[10px] font-bold tabular-nums",
              dev.selected ? "text-blue-400" : "text-neutral-600"
            )}>
              {dev.match}%
            </span>
          </div>
          {dev.selected && (
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          )}
        </motion.div>
      ))}
      
      <div className="flex items-center gap-2 pt-1">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-[10px] text-neutral-500">Auto-assigned based on expertise graph</span>
      </div>
    </div>
  </div>
);

const AgenticDefenseUI = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="w-full max-w-sm rounded-xl border border-white/[0.06] bg-black/80 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.04] bg-white/[0.02]">
        <Code2 className="w-3 h-3 text-neutral-600" />
        <span className="text-[11px] text-neutral-500 font-mono">auth/session.ts</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="text-[9px] text-amber-400/80 font-medium">1 issue</span>
        </div>
      </div>
      
      <div className="p-3 font-mono text-[10px] leading-relaxed space-y-0.5">
        <div className="flex items-center gap-2">
          <span className="text-neutral-700 w-5 text-right select-none">14</span>
          <span className="text-purple-400">export const</span>
          <span className="text-blue-300"> validateSession</span>
          <span className="text-neutral-500"> = () =&gt; {"{"}</span>
        </div>
        <div className="flex items-center gap-2 bg-red-500/[0.06] -mx-3 px-3 py-1 border-l-2 border-red-500/40">
          <span className="text-neutral-700 w-5 text-right select-none">15</span>
          <span className="text-neutral-400">  if (!user) return</span>
          <span className="text-red-400"> null</span>
          <span className="text-neutral-500">;</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neutral-700 w-5 text-right select-none">16</span>
          <span className="text-orange-300">  return </span>
          <span className="text-neutral-400">await getProfile();</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neutral-700 w-5 text-right select-none">17</span>
          <span className="text-neutral-500">{"}"}</span>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mx-3 mb-3 p-3 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <SearchCheck className="w-3 h-3 text-emerald-400" />
          <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">Agent suggestion</span>
        </div>
        <p className="text-[10px] text-neutral-400 leading-relaxed">
          Possible null reference at line 15. Consider adding a guard clause with proper error propagation.
        </p>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[10px] text-emerald-400 font-medium cursor-pointer hover:text-emerald-300 transition-colors">Apply fix →</span>
          <span className="text-[10px] text-neutral-600 cursor-pointer hover:text-neutral-500 transition-colors">Dismiss</span>
        </div>
      </motion.div>
    </div>
  </div>
);

const ProductivityLayerUI = () => (
  <div className="w-full h-full flex items-center justify-center px-8 py-6">
    <div className="w-full max-w-2xl">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
          <div className="w-full h-full bg-gradient-to-r from-blue-500/10 via-blue-500/30 to-blue-500/10" />
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/4 h-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
          />
        </div>

        {[
          { icon: Code2, label: "Code Push", status: "complete", color: "emerald" },
          { icon: SearchCheck, label: "AI Review", status: "complete", color: "emerald" },
          { icon: AlertTriangle, label: "Issue Scan", status: "active", color: "blue" },
          { icon: Zap, label: "Auto Test", status: "queued", color: "neutral" },
          { icon: Activity, label: "Deploy", status: "queued", color: "neutral" },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
            className="relative z-10 flex flex-col items-center gap-2.5"
          >
            <div className={cn(
              "w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center border transition-all",
              step.status === "active"
                ? "bg-blue-500/15 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                : step.status === "complete"
                ? "bg-emerald-500/10 border-emerald-500/30"
                : "bg-white/[0.03] border-white/[0.06]"
            )}>
              <step.icon className={cn(
                "w-5 h-5",
                step.status === "active" ? "text-blue-400"
                  : step.status === "complete" ? "text-emerald-400"
                  : "text-neutral-600"
              )} />
            </div>
            <span className="text-[10px] text-neutral-400 font-medium">{step.label}</span>
            <span className={cn(
              "text-[8px] uppercase tracking-wider font-bold",
              step.status === "active" ? "text-blue-400"
                : step.status === "complete" ? "text-emerald-400/60"
                : "text-neutral-700"
            )}>
              {step.status === "complete" ? "✓ Done" : step.status === "active" ? "● Running" : "Queued"}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const NewSection4 = () => {
  return (
    <section className="relative w-full bg-black py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-20 md:mb-28 max-w-3xl">
          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-[13px] text-neutral-400 font-medium mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Why teams choose WeKraft
          </motion.div>

          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-[2.5rem] md:text-[3.25rem] font-semibold tracking-[-0.03em] text-white leading-[1.1] mb-5"
          >
            Built for developers who
            <br />
            <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
              demand excellence
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-lg text-neutral-500 leading-relaxed max-w-xl"
          >
            Three pillars that make WeKraft the platform of choice for 
            high-performance engineering teams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-neutral-900/80 to-neutral-950"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 p-8 pb-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400/70 mb-4 block">Skill Matching</span>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-3 leading-tight">
                Right person, right task, every time
              </h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed max-w-md">
                Our expertise graph analyzes developer strengths and project requirements to optimize every assignment.
              </p>
            </div>
            <div className="h-[320px]">
              <SkillMatchingUI />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-neutral-900/80 to-neutral-950"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 p-8 pb-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400/70 mb-4 block">Agentic Defense</span>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-3 leading-tight">
                Issues don&apos;t survive in your codebase
              </h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed max-w-md">
                Autonomous agents detect patterns that lead to tech debt — from architecture anti-patterns to subtle bugs.
              </p>
            </div>
            <div className="h-[320px]">
              <AgenticDefenseUI />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-neutral-900/80 to-neutral-950"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 p-8 md:p-10 pb-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-violet-400/70 mb-4 block">Orchestration</span>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3 leading-tight">
                Intelligent layers that remove cognitive overhead
              </h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed max-w-2xl">
                From code push to production — WeKraft orchestrates every step. Developers focus on logic while the platform handles context sync, task routing, and automation.
              </p>
            </div>
            <div className="h-[240px]">
              <ProductivityLayerUI />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewSection4;

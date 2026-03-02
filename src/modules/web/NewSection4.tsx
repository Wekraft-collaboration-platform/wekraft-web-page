"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  SearchCheck,
  Zap,
  Code2,
  BrainCircuit,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureCard = ({
  tag,
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
  isLarge = false,
  children,
}: {
  tag: string;
  title: string;
  description: string;
  icon: any;
  className?: string;
  delay?: number;
  isLarge?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/5 bg-linear-to-b from-gray-900 to-gray-950 p-6 transition-colors hover:border-sky-500/30",
        className,
      )}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400/80">
            {tag}
          </span>
        </div>

        <h3
          className={cn(
            "mb-4 font-medium tracking-tight text-white",
            isLarge ? "text-3xl" : "text-2xl",
          )}
        >
          {title}
        </h3>

        <p className="mb-5 text-neutral-400 leading-relaxed md:max-w-[80%]">
          {description}
        </p>

        {/* ELEMETS HERE */}
        <div className="mt-8 relative overflow-hidden">
          <div
            className={cn(
              "flex items-center justify-center rounded-2xl border-white/5 bg-white/2 border backdrop-blur-sm overflow-hidden",
              isLarge ? "h-70" : "h-64",
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillMatchingUI = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6 select-none">
    <div className="flex items-center gap-12 relative">
      {/* Task Card */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-32 rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col gap-2 relative z-10"
      >
        <div className="h-1.5 w-12 rounded-full bg-sky-400/40" />
        <div className="h-1.5 w-20 rounded-full bg-white/10" />
        <div className="mt-auto flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-6 w-6 rounded-full border border-gray-900 bg-gray-800 flex items-center justify-center text-[8px] text-white"
            >
              {String.fromCharCode(64 + i)}
            </div>
          ))}
        </div>
      </motion.div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-px">
          <div className="w-full h-full bg-linear-to-r from-sky-500/0 via-sky-500/50 to-sky-500/0" />
          <motion.div
            animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
          />
        </div>

      {/* Dev Profile */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="w-40 h-40 rounded-xl border border-sky-500/30 bg-sky-500/5 p-4 flex flex-col gap-3 relative z-10 backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-linear-to-br from-sky-400/20 to-blue-500/20 flex items-center justify-center border border-sky-400/30">
            <Users className="h-5 w-5 text-sky-400" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="h-2 w-16 rounded-full bg-white" />
            <div className="h-1.5 w-10 rounded-full bg-white/30" />
          </div>
        </div>
        <div className="h-px w-full bg-white/10" />
        <div className="flex flex-wrap gap-1.5">
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-sky-400/10 text-sky-400 border border-sky-400/20">
            React
          </span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-blue-400/10 text-blue-400 border border-blue-400/20">
            Node.js
          </span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/5 text-white/50 border border-white/10">
            Tailwind
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="text-[10px] font-bold text-sky-400">98% Match</div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-sky-400"
          />
        </div>
      </motion.div>
    </div>
  </div>
);

const AgenticDefenseUI = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="w-full max-w-[280px] rounded-xl border border-white/10 bg-gray-950 shadow-2xl overflow-hidden font-mono text-[10px]">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/5">
        <div className="h-2 w-2 rounded-full bg-red-500/50" />
        <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
        <div className="h-2 w-2 rounded-full bg-green-500/50" />
        <span className="ml-2 text-white/40 text-[9px]">auth_service.ts</span>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <span className="text-white/20">14</span>
          <span className="text-sky-300">
            export <span className="text-purple-400">const</span> validateSession
            = () {"=>"} {"{"}
          </span>
        </div>
        <div className="flex gap-2 bg-red-400/5 p-1 rounded">
          <span className="text-white/20">15</span>
          <span className="text-white/80 relative">
            {"  "}if (!user) return null;
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-1 left-0 h-px bg-red-400/50"
            />
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-white/20">16</span>
          <span className="text-sky-300">
            {"  "}
            <span className="text-orange-300">return</span> await getProfile();
          </span>
        </div>

        {/* Agent Intervention */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-2 ml-4 p-2 rounded-lg bg-green-500/10 border border-green-500/20 flex flex-col gap-1"
        >
          <div className="flex items-center gap-2">
            <SearchCheck className="h-3 w-3 text-green-400" />
            <span className="text-green-400 font-bold uppercase text-[8px] tracking-wider">
              Agent Guardrail Triggered
            </span>
          </div>
          <p className="text-white/60 text-[9px] leading-tight">
            Potential null reference detected. Code refactored to include
            graceful error handling and audit logs.
          </p>
          <div className="mt-1 flex gap-2">
            <span className="text-[8px] text-green-400/80 underline cursor-default">
              Apply Fix
            </span>
            <span className="text-[8px] text-white/40 cursor-default">
              Ignore
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const ProductivityLayerUI = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8">
    <div className="w-full max-w-4xl grid grid-cols-4 gap-4 relative">
      {/* Background connectors */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-20" preserveAspectRatio="none">
        <motion.path
          d="M 12.5% 50% Q 50% 50% 87.5% 50%"
          fill="transparent"
          stroke="url(#grad-line)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient id="grad-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      {[
        { icon: Code2, label: "Context Sync", status: "Done" },
        { icon: Zap, label: "Prioritization", status: "Active" },
        { icon: BrainCircuit, label: "Automation", status: "Queued" },
        { icon: Activity, label: "Heatmap", status: "Waiting" },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * idx }}
          className="flex flex-col items-center gap-3 relative z-10"
        >
          <div
            className={cn(
              "h-16 w-16 rounded-2xl flex items-center justify-center border transition-all duration-500",
              idx === 1
                ? "bg-sky-500/20 border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                : "bg-white/5 border-white/10",
            )}
          >
            <item.icon
              className={cn(
                "h-6 w-6",
                idx === 1 ? "text-sky-400" : "text-white/40",
              )}
            />
          </div>
          <div className="text-center">
            <div className="text-[10px] text-white font-medium">
              {item.label}
            </div>
            <div
              className={cn(
                "text-[8px] uppercase tracking-tighter",
                idx === 1 ? "text-sky-400 font-bold" : "text-white/20",
              )}
            >
              {item.status}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Floating Badge */}
      <motion.div
        animate={{
          y: [-2, 2, -2],
          x: [-2, 2, -2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-500/10 backdrop-blur-md flex items-center gap-2"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
        <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">
          Orchestration Layer Active
        </span>
      </motion.div>
    </div>
  </div>
);

const NewSection4 = () => {
  return (
    <section className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.15] mask-[radial-gradient(ellipse_at_center,black_70%,transparent_100%)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5 text-xs font-medium text-sky-400"
          >
            <Sparkles className="h-3 w-3" />
            <span>Why Teams Believe in Wekraft</span>
          </motion.div>

          <h2 className="mx-auto max-w-3xl text-4xl md:text-5xl font-light tracking-tight text-white">
            Built for developers who <br />
            <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text font-medium text-transparent">
              demand excellence
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Box 1 */}
          <FeatureCard
            tag="Skill Matching"
            title="Right skill matching for real collaboration"
            description="Our platform analyzes project requirements and aligns them with individual developer strengths, ensuring that every contribution is impactful and every pair is powerful."
            icon={Users}
            delay={0.1}
          >
            <SkillMatchingUI />
          </FeatureCard>

          {/* Box 2 */}
          <FeatureCard
            tag="Agentic Defense"
            title="Issues don't stay permanent in your codebase"
            description="Autonomous agents detect patterns that lead to technical debt. From architectural inconsistencies to subtle bugs, our guardrails ensure your code quality stays elite."
            icon={SearchCheck}
            delay={0.2}
          >
            <AgenticDefenseUI />
          </FeatureCard>

          {/* Box 3 - Large full width */}
          <FeatureCard
            tag="Productivity Layer"
            title="Intelligent layers over productivity to allow teams to work better"
            description="We've built an orchestration layer that removes cognitive overhead. Developers focus on logic while Wekraft handles the context synchronization, task prioritization, and workflow automation."
            icon={BrainCircuit}
            className="md:col-span-2"
            isLarge={true}
            delay={0.3}
          >
            <ProductivityLayerUI />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default NewSection4;


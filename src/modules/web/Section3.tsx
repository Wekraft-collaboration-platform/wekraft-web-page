"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BarChart3,
  Layers,
  Settings2,
  Zap,
  Shield,
  Search,
  ArrowRight,
  Terminal,
  GitBranch,
  Workflow,
  Code2,
  LayoutGrid,
  ScanEye,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

const features = [
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    desc: "AI-driven forecasting models anticipate bottlenecks before they impact your sprint velocity.",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    desc: "Scale linearly from a team of 3 to 300. Every component is designed for composability.",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Settings2,
    title: "Adaptive Workflows",
    desc: "The platform learns from your patterns to auto-optimize CI/CD pipelines and review processes.",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Zap,
    title: "Instant Execution",
    desc: "Sub-50ms deployments across our global edge network. Zero cold starts, zero wait times.",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    desc: "Every request authenticated, every action audited. SOC 2 Type II certified out of the box.",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: ScanEye,
    title: "Deep Code Understanding",
    desc: "Intelligent analysis cross-references your codebase, docs, and PRs for contextual insights.",
    gradient: "from-blue-600 to-blue-400",
  },
];

const Section3 = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yShift = useTransform(scrollYProgress, [0, 0.4], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.section
      ref={containerRef}
      style={{ y: yShift, opacity }}
      className="relative w-full bg-[#fafafa] z-20 py-32 md:py-40 px-6 md:px-12 lg:px-20 rounded-t-[3rem] shadow-[0_-40px_80px_rgba(0,0,0,0.15)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-[13px] text-neutral-500 font-medium mb-8 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Platform capabilities
          </motion.div>

          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-[2.5rem] md:text-[3.25rem] font-semibold tracking-[-0.03em] text-neutral-900 leading-[1.1] mb-5 max-w-3xl"
          >
            Everything you need to
            <br />
            <span className="text-neutral-400">ship world-class software</span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-lg text-neutral-500 max-w-xl leading-relaxed"
          >
            WeKraft gives engineering teams the tools, insights, and automation
            to build faster without sacrificing quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.05 * idx, duration: 0.5, ease: "easeOut" }}
              className="group relative p-7 rounded-2xl bg-white border border-neutral-200/60 hover:border-neutral-300 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/50"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-neutral-50/0 to-neutral-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  <feature.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>

                <h3 className="text-[17px] font-semibold text-neutral-900 mb-2.5 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-[15px] text-neutral-500 leading-relaxed">
                  {feature.desc}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-neutral-400 group-hover:text-blue-600 transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-neutral-200 shadow-sm">
            <span className="text-sm text-neutral-600">
              Explore the full platform capabilities
            </span>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors">
              <span>View docs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section3;

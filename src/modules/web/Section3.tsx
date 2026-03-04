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
      className="relative w-full bg-neutral-100 z-20 py-32  px-6 md:px-12 lg:px-20 rounded-t-[3rem] shadow-[0_-40px_80px_rgba(0,0,0,0.15)]"
    >
     

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

      
      </div>
    </motion.section>
  );
};

export default Section3;

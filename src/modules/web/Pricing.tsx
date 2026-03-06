"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Minus,
  ChevronDown,
  Sparkles,
  Zap,
  Shield,
  GitBranch,
  BrainCircuit,
  Users,
  Activity,
  Lock,
  BarChart3,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// ─── Types ────────────────────────────────────────────────────────────────────

type PlanKey = "hobby" | "team" | "studio";

interface Plan {
  key: PlanKey;
  name: string;
  badge?: string;
  price: { monthly: number | null; annual: number | null };
  description: string;
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  icon: React.ReactNode;
}

interface FeatureRow {
  label: string;
  hobby: string | boolean;
  team: string | boolean;
  studio: string | boolean;
  category?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const plans: Plan[] = [
  {
    key: "hobby",
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "Get started, explore WeKraft, and build with a small team — completely free.",
    cta: "Join Waitlist",
    ctaHref: "/web/reach-us",
    highlighted: false,
    icon: <GitBranch className="h-5 w-5" />,
  },
  {
    key: "team",
    name: "Pro",
    badge: "Most popular",
    price: { monthly: null, annual: null },
    description:
      "For serious builders who want AI-powered project management, reviews, and team analytics.",
    cta: "Join Waitlist",
    ctaHref: "/web/reach-us",
    highlighted: true,
    icon: <Users2 className="h-5 w-5" />,
  },
  {
    key: "studio",
    name: "Studio",
    price: { monthly: null, annual: null },
    description:
      "For larger teams and product studios that need advanced control, analytics, and dedicated support.",
    cta: "Talk to us",
    ctaHref: "/web/reach-us",
    highlighted: false,
    icon: <Shield className="h-5 w-5" />,
  },
];

const featureCategories: {
  title: string;
  icon: React.ReactNode;
  rows: FeatureRow[];
}[] = [
  {
    title: "Projects & Teams",
    icon: <Users className="h-4 w-4" />,
    rows: [
      { label: "Project creation", hobby: "2", team: "5", studio: "Unlimited" },
      { label: "Project joining", hobby: "2", team: "5", studio: "Unlimited" },
      { label: "Skill-based matching", hobby: true, team: true, studio: true },
      { label: "Community access", hobby: true, team: true, studio: true },
      { label: "User stats & profile", hobby: true, team: true, studio: true },
      { label: "Advanced team analytics", hobby: false, team: true, studio: true },
    ],
  },
  {
    title: "AI & Automation",
    icon: <BrainCircuit className="h-4 w-4" />,
    rows: [
      { label: "AI code reviews", hobby: "Limited", team: "Higher limits", studio: "Unlimited" },
      { label: "PM Agent", hobby: "Limited", team: true, studio: true },
      { label: "Auto-assign issues", hobby: false, team: true, studio: true },
      { label: "Issue resolution agent", hobby: false, team: true, studio: true },
    ],
  },
  {
    title: "Insights & Tracking",
    icon: <BarChart3 className="h-4 w-4" />,
    rows: [
      { label: "Todo & task management", hobby: true, team: true, studio: true },
      { label: "Timeline tracker", hobby: false, team: true, studio: true },
      { label: "Graphs & visualizations", hobby: false, team: true, studio: true },
      { label: "Repo heatmap", hobby: false, team: true, studio: true },
      { label: "Advanced dashboards", hobby: false, team: false, studio: true },
    ],
  },
  {
    title: "Support",
    icon: <Lock className="h-4 w-4" />,
    rows: [
      { label: "Help & support", hobby: "Limited", team: "Priority email", studio: "Dedicated" },
      { label: "Onboarding session", hobby: false, team: false, studio: true },
      { label: "SLA guarantee", hobby: false, team: false, studio: true },
    ],
  },
];

const faqs = [
  {
    q: "When will pricing be revealed?",
    a: "We're in early launch mode and pricing hasn't been disclosed yet. Join the waitlist and you'll be the first to know — early users will get exclusive founding member rates.",
  },
  {
    q: "What's included in the Free tier?",
    a: "The Free tier lets you create up to 2 projects, join up to 2 projects, access community features, limited AI reviews, and a limited PM agent experience — no credit card required.",
  },
  {
    q: "What does Pro add over Free?",
    a: "Pro unlocks 5 project creations, 5 joinings, higher limits on AI reviews, the full PM Agent, advanced team analytics, and repo heatmaps — everything a serious team needs to ship.",
  },
  {
    q: "What is Studio meant for?",
    a: "Studio is designed for larger, more advanced teams that need dedicated support, deeper analytics, and custom arrangements. Reach out and we'll build the right plan together.",
  },
  {
    q: "What features are coming to WeKraft?",
    a: "We're building: Todo & task management, timeline tracker, graphs & visualizations, PM agent, issue resolution, AI reviews, repo heatmap, community, user stats, and more. It's just getting started.",
  },
  {
    q: "How do I get early access?",
    a: "Head to our Reach Us page and join the waitlist. Early members will get priority access, founding pricing, and a direct line to shape the product.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const FeatureValue = ({ value }: { value: string | boolean }) => {
  if (value === true)
    return (
      <span className="flex justify-center">
        <Check className="h-4 w-4 text-blue-400" />
      </span>
    );
  if (value === false)
    return (
      <span className="flex justify-center">
        <Minus className="h-3.5 w-3.5 text-white/20" />
      </span>
    );
  return (
    <span className="text-xs text-white/70 text-center block">{value}</span>
  );
};

const FaqItem = ({ q, a, idx }: { q: string; a: string; idx: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * idx }}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors pr-8">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-white/30 group-hover:text-white/60 transition-colors"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/50 leading-relaxed pb-5 pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const Pricing = () => {
  return (
    <div className="bg-black min-h-screen w-full selection:bg-blue-500/20">
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 px-4">
        {/* Background grid */}
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-widest"
          >
            <Sparkles className="h-3 w-3" />
            Pricing Plans
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6 leading-[1.1]"
          >
            Simple tiers.{" "}
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text font-medium text-transparent">
              Pricing
            </span>{" "}
            revealed
            <br />
            when we launch.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto mb-10"
          >
            We&apos;re just getting started. Join the waitlist and be the first
            to know — with founding member perks.
          </motion.p>

          {/* Launch badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 rounded-full border border-amber-500/20 bg-amber-500/8 px-6 py-2 backdrop-blur-md"
          >
            <span className="text-sm text-amber-300/80 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Pricing will be disclosed at launch — early members get founding rates
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, idx) => {
            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className={cn(
                  "relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1",
                  plan.highlighted
                    ? "bg-linear-to-b from-blue-950 to-gray-950 border-blue-500/40 shadow-[0_0_60px_rgba(37,99,235,0.1)] "
                    : "bg-linear-to-b from-gray-900 to-gray-950 border-white/5 hover:border-white/10",
                )}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-blue-600 border border-blue-400/50 rounded-full px-4 py-1.5 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-white text-lg">
                    {plan.name}
                  </span>
                  <div
                    className={cn(
                      "h-9 w-9 rounded-xl flex items-center justify-center border",
                      plan.highlighted
                        ? "bg-blue-500/20 border-blue-400/30 text-blue-400"
                        : "bg-white/5 border-white/10 text-white/40",
                    )}
                  >
                    {plan.icon}
                  </div>
                </div>

                <p className="text-sm text-white/40 leading-relaxed mb-8">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8 overflow-hidden">
                  {plan.key === "hobby" ? (
                    <div className="text-5xl font-bold text-white">Free</div>
                  ) : plan.key === "studio" ? (
                    <div className="flex flex-col gap-1">
                      <div className="text-4xl font-bold text-white">Custom</div>
                      <p className="text-blue-400/80 text-xs font-semibold uppercase tracking-wider">
                        Talk to us
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1">
                      <div className="text-4xl font-bold text-white">TBA</div>
                      <p className="text-blue-400/80 text-xs font-semibold uppercase tracking-wider">
                        Pricing revealed at launch
                      </p>
                    </div>
                  )}
                  {plan.key === "hobby" && (
                    <p className="text-xs text-white/30 mt-1">No credit card required</p>
                  )}
                </div>

                {/* CTA */}
                <Link href={plan.ctaHref} className="mb-8 z-10">
                  <Button
                    className={cn(
                      "w-full rounded-xl h-11 text-sm font-semibold transition-all duration-300",
                      plan.highlighted
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                        : "bg-white/8 hover:bg-white/15 text-white border border-white/10",
                    )}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                {/* Divider */}
                <div className="h-px w-full bg-white/5 mb-6" />

                {/* Feature highlights */}
                <ul className="flex flex-col gap-3">
                  {(plan.key === "hobby"
                    ? [
                        "2 project creations",
                        "2 project joinings",
                        "Limited AI reviews",
                        "Limited PM Agent",
                        "Community access",
                        "Basic help support",
                      ]
                    : plan.key === "team"
                      ? [
                          "5 project creations",
                          "5 project joinings",
                          "Higher limits on AI reviews",
                          "Full PM Agent",
                          "Advanced team analytics",
                          "Repo heatmaps",
                          "Timeline tracker",
                          "Priority support",
                        ]
                      : [
                          "Everything in Pro",
                          "Unlimited projects & teams",
                          "Custom arrangements",
                          "Dedicated onboarding",
                          "SLA guarantee",
                          "Dedicated support channel",
                        ]
                  ).map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-white/60"
                    >
                      <Check
                        className={cn(
                          "h-4 w-4 shrink-0 mt-0.5",
                          plan.highlighted ? "text-blue-400" : "text-white/30",
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Feature Table ── */}
      <section className="max-w-6xl mx-auto px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400/80 mb-4">
            Compare Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
            Everything, side by side
          </h2>
        </motion.div>

        <div className="rounded-3xl border border-white/5 overflow-hidden bg-linear-to-b from-gray-900 to-gray-950">
          {/* Table header */}
          <div className="grid grid-cols-4 border-b border-white/5 bg-white/2">
            <div className="p-5 text-xs font-bold uppercase tracking-widest text-white/30">
              Feature
            </div>
            {plans.map((p) => (
              <div
                key={p.key}
                className={cn(
                  "p-5 text-center text-sm font-semibold",
                  p.highlighted ? "text-blue-400" : "text-white/60",
                )}
              >
                {p.name}
              </div>
            ))}
          </div>

          {/* Table body */}
          {featureCategories.map((cat, catIdx) => (
            <div key={catIdx}>
              {/* Category header */}
              <div className="grid grid-cols-4 border-b border-white/5">
                <div className="col-span-4 px-5 py-3.5 flex items-center gap-2 bg-white/1.5">
                  <span className="text-blue-400/70">{cat.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/30">
                    {cat.title}
                  </span>
                </div>
              </div>

              {cat.rows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className="grid grid-cols-4 border-b border-white/4 last:border-0 hover:bg-white/1.5 transition-colors"
                >
                  <div className="flex items-center px-5 py-4 text-sm text-white/50">
                    {row.label}
                  </div>
                  <div className="flex items-center justify-center px-4 py-4 border-l border-white/4">
                    <FeatureValue value={row.hobby} />
                  </div>
                  <div className="flex items-center justify-center px-4 py-4 border-l border-white/4 bg-blue-500/3">
                    <FeatureValue value={row.team} />
                  </div>
                  <div className="flex items-center justify-center px-4 py-4 border-l border-white/4">
                    <FeatureValue value={row.studio} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400/80 mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
            Common questions
          </h2>
          <p className="text-white/40 text-sm">
            Can&apos;t find your answer?{" "}
            <a
              href="mailto:contact@wekraft.com"
              className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2"
            >
              Ask us directly.
            </a>
          </p>
        </motion.div>

        <div className="rounded-3xl border border-white/5 bg-linear-to-b from-gray-900 to-gray-950 px-8 divide-y divide-white/0">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} q={faq.q} a={faq.a} idx={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;

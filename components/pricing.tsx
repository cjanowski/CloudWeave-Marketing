"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Switch from "@radix-ui/react-switch";
import { Check, Zap, Sparkles, Crown, Star, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    id: "starter",
    icon: Zap,
    href: "https://app.cloudweave.io/signup?plan=starter",
    priceMonthly: 29,
    priceYearly: 290,
    description: "Perfect for small projects and individual developers",
    gradient: "from-primary-400 to-primary-600",
    features: [
      "Up to 5 projects",
      "2 team members",
      "5GB storage",
      "Basic monitoring",
      "Community support",
      "SSL certificates",
    ],
    featured: false,
  },
  {
    name: "Professional",
    id: "professional",
    icon: Sparkles,
    href: "https://app.cloudweave.io/signup?plan=professional",
    priceMonthly: 99,
    priceYearly: 990,
    description: "Ideal for growing teams and production workloads",
    gradient: "from-secondary-400 to-secondary-600",
    features: [
      "Unlimited projects",
      "10 team members",
      "100GB storage",
      "Advanced monitoring & alerts",
      "Priority support",
      "Custom domains",
      "Auto-scaling",
      "99.9% SLA",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    icon: Crown,
    href: "https://app.cloudweave.io/contact-sales",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    description: "For large organizations with custom requirements",
    gradient: "from-accent-400 to-accent-600",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom SLA",
      "SSO/SAML",
      "Advanced security features",
      "On-premise deployment option",
      "Custom integrations",
    ],
    featured: false,
  },
];

function PricingCard({ tier, index, isYearly }: { tier: typeof tiers[0]; index: number; isYearly: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      viewport={{ once: true }}
      className={cn(
        "group relative h-full",
        tier.featured && "scale-105"
      )}
    >
      {/* Popular badge */}
      {tier.featured && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="glass rounded-full px-4 py-2 text-sm font-semibold text-white border border-white/20">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-accent-400 fill-current" />
              <span>Most Popular</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${tier.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className={cn(
        "relative glass-strong rounded-3xl p-8 xl:p-10 border h-full flex flex-col",
        tier.featured
          ? "border-white/30 bg-gradient-to-br from-white/10 to-white/5"
          : "border-white/10 hover:border-white/20"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${tier.gradient} shadow-lg`}>
              <tier.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {tier.name}
              </h3>
            </div>
          </div>
          
          {tier.featured && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-accent-400" />
            </motion.div>
          )}
        </div>

        <p className="text-white/70 mb-8 leading-relaxed">
          {tier.description}
        </p>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline">
            <AnimatePresence mode="wait">
              <motion.span
                key={isYearly ? "yearly" : "monthly"}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="text-5xl font-bold gradient-text"
              >
                {typeof tier.priceMonthly === "string"
                  ? tier.priceMonthly
                  : `$${isYearly ? tier.priceYearly : tier.priceMonthly}`}
              </motion.span>
            </AnimatePresence>
            {typeof tier.priceMonthly !== "string" && (
              <span className="text-white/60 text-lg font-medium ml-2">
                /{isYearly ? "year" : "month"}
              </span>
            )}
          </div>
          {isYearly && typeof tier.priceMonthly === "number" && typeof tier.priceYearly === "number" && (
            <div className="mt-2 text-accent-400 text-sm font-medium">
              Save ${(tier.priceMonthly * 12) - tier.priceYearly} per year
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Link
          href={tier.href}
          className={cn(
            "group/btn relative overflow-hidden rounded-xl px-6 py-4 text-center font-semibold transition-all duration-300 mb-8",
            tier.featured
              ? "btn-primary"
              : "btn-secondary hover:scale-105"
          )}
        >
          <div className="relative flex items-center justify-center space-x-2">
            <span>{tier.id === "enterprise" ? "Contact Sales" : "Get Started"}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </div>
        </Link>

        {/* Features */}
        <div className="flex-1">
          <ul className="space-y-4">
            {tier.features.map((feature, idx) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <div className={`flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-gradient-to-r ${tier.gradient} flex items-center justify-center`}>
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-white/80 leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={false}
        />
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 text-sm font-medium text-white/80 mb-8"
          >
            <Shield className="h-4 w-4 text-accent-400" />
            <span>Simple, transparent pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block">Choose Your</span>
            <span className="block gradient-text">Perfect Plan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-xl leading-8 text-white/70 max-w-2xl mx-auto"
          >
            Start free, scale as you grow. No hidden fees, no surprises.
            Just powerful cloud infrastructure at transparent prices.
          </motion.p>
        </div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="glass rounded-2xl p-2">
            <div className="flex items-center space-x-4 px-4 py-2">
              <span className={cn(
                "text-sm font-medium transition-colors",
                !isYearly ? "text-white" : "text-white/60"
              )}>
                Monthly
              </span>
              <Switch.Root
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary-500 data-[state=checked]:to-secondary-500"
              >
                <Switch.Thumb className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1 shadow-lg" />
              </Switch.Root>
              <span className={cn(
                "text-sm font-medium transition-colors flex items-center space-x-2",
                isYearly ? "text-white" : "text-white/60"
              )}>
                <span>Yearly</span>
                <span className="glass rounded-full px-2 py-1 text-xs font-medium text-accent-400 border border-accent-400/20">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {tiers.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              index={index}
              isYearly={isYearly}
            />
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Check, text: "30-day money-back guarantee" },
                { icon: Shield, text: "Enterprise-grade security" },
                { icon: Sparkles, text: "Cancel anytime, no questions asked" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-white/80"
                >
                  <item.icon className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

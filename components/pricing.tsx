"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Switch from "@radix-ui/react-switch";
import { Check, Zap, Sparkles, Crown } from "lucide-react";
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

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400"
          >
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
          >
            Choose the perfect plan for your needs
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Start free. Upgrade anytime. No hidden fees.
          </motion.p>
        </div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center space-x-4">
            <span className={cn(
              "text-sm font-medium transition-colors",
              !isYearly ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
            )}>
              Monthly
            </span>
            <Switch.Root
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors data-[state=checked]:bg-blue-600 dark:bg-gray-700"
            >
              <Switch.Thumb className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1" />
            </Switch.Root>
            <span className={cn(
              "text-sm font-medium transition-colors",
              isYearly ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
            )}>
              Yearly
              <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + tierIdx * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative rounded-3xl p-8 xl:p-10",
                tier.featured
                  ? "bg-gray-900 ring-2 ring-blue-600 dark:bg-gray-800"
                  : "bg-white ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-700"
              )}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between gap-x-4">
                <h3
                  className={cn(
                    "text-lg font-semibold leading-8",
                    tier.featured ? "text-white" : "text-gray-900 dark:text-white"
                  )}
                >
                  {tier.name}
                </h3>
                <tier.icon
                  className={cn(
                    "h-6 w-6",
                    tier.featured ? "text-blue-400" : "text-blue-600 dark:text-blue-400"
                  )}
                />
              </div>

              <p
                className={cn(
                  "mt-4 text-sm leading-6",
                  tier.featured ? "text-gray-300" : "text-gray-600 dark:text-gray-300"
                )}
              >
                {tier.description}
              </p>

              <p className="mt-6 flex items-baseline gap-x-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isYearly ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "text-4xl font-bold tracking-tight",
                      tier.featured ? "text-white" : "text-gray-900 dark:text-white"
                    )}
                  >
                    {typeof tier.priceMonthly === "string"
                      ? tier.priceMonthly
                      : `$${isYearly ? tier.priceYearly : tier.priceMonthly}`}
                  </motion.span>
                </AnimatePresence>
                {typeof tier.priceMonthly !== "string" && (
                  <span
                    className={cn(
                      "text-sm font-semibold leading-6",
                      tier.featured ? "text-gray-300" : "text-gray-600 dark:text-gray-300"
                    )}
                  >
                    /{isYearly ? "year" : "month"}
                  </span>
                )}
              </p>

              <Link
                href={tier.href}
                className={cn(
                  "mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all hover:scale-105",
                  tier.featured
                    ? "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600"
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900"
                )}
              >
                {tier.id === "enterprise" ? "Contact sales" : "Get started"}
              </Link>

              <ul
                role="list"
                className={cn(
                  "mt-8 space-y-3 text-sm leading-6",
                  tier.featured ? "text-gray-300" : "text-gray-600 dark:text-gray-300"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={cn(
                        "h-6 w-5 flex-none",
                        tier.featured ? "text-blue-400" : "text-blue-600 dark:text-blue-400"
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

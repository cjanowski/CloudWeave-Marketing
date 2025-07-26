"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Cloud, Users, Zap, TrendingUp } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Active Deployments",
    value: 50000,
    suffix: "+",
    icon: Cloud,
    description: "Applications deployed globally",
  },
  {
    id: 2,
    name: "Developer Teams",
    value: 10000,
    suffix: "+",
    icon: Users,
    description: "Teams building on CloudWeave",
  },
  {
    id: 3,
    name: "API Requests",
    value: 2.5,
    suffix: "B+",
    decimals: 1,
    icon: Zap,
    description: "Processed monthly",
  },
  {
    id: 4,
    name: "Uptime SLA",
    value: 99.99,
    suffix: "%",
    decimals: 2,
    icon: TrendingUp,
    description: "Guaranteed availability",
  },
];

function Counter({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, value, motionValue]);

  const rounded = useTransform(motionValue, (latest) => {
    return latest.toFixed(decimals);
  });

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Trusted by thousands of developers
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              CloudWeave powers infrastructure for companies of all sizes
            </p>
          </motion.div>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="text-base leading-7 text-gray-600 dark:text-gray-300">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <stat.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  {stat.name}
                </dt>
                <dd className="mt-2 flex flex-col text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                  <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  <span className="mt-2 text-sm font-normal text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </span>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

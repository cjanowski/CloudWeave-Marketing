"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    name: "Connect Your Cloud",
    description: "Link your AWS, Azure, or Google Cloud accounts in seconds with secure OAuth integration.",
    number: "01",
  },
  {
    name: "Deploy Your App",
    description: "Push your code and let CloudWeave handle the deployment pipeline automatically.",
    number: "02",
  },
  {
    name: "Monitor & Scale",
    description: "Track performance in real-time and scale resources with a single click.",
    number: "03",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400"
          >
            Simple process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          >
            Get started in minutes
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            CloudWeave simplifies cloud deployment into three easy steps.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-x-1/2 bg-gray-200 dark:bg-gray-700 lg:block">
                    <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-1/2 rotate-45 border-r-2 border-t-2 border-gray-200 dark:border-gray-700"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="rounded-2xl bg-gray-50 px-6 py-8 dark:bg-gray-900 sm:px-10 lg:flex lg:items-center lg:gap-x-8 lg:px-12">
            <div className="lg:flex-auto">
              <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                Ready to transform your infrastructure?
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                Join thousands of developers who are already using CloudWeave.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-shrink-0">
              <a
                href="https://app.cloudweave.io/signup"
                className="flex items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Start free trial
                <CheckCircle2 className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

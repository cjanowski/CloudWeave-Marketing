"use client";

import { motion } from "framer-motion";
import { 
  Cloud, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Code2
} from "lucide-react";

const features = [
  {
    name: "Multi-Cloud Support",
    description: "Deploy seamlessly across AWS, Azure, Google Cloud, and more from a single dashboard.",
    icon: Cloud,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Instant Scaling",
    description: "Auto-scale your infrastructure based on demand with intelligent load balancing.",
    icon: Zap,
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance certifications.",
    icon: Shield,
    color: "from-green-400 to-green-600",
  },
  {
    name: "Real-time Analytics",
    description: "Monitor performance, costs, and usage with comprehensive dashboards.",
    icon: BarChart3,
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "Global CDN",
    description: "Deliver content faster with our worldwide content delivery network.",
    icon: Globe,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Infrastructure as Code",
    description: "Define and manage your infrastructure using familiar programming languages.",
    icon: Code2,
    color: "from-pink-400 to-pink-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400"
          >
            Everything you need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          >
            Powerful features for modern infrastructure
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            CloudWeave provides all the tools you need to deploy, manage, and scale your cloud infrastructure efficiently.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

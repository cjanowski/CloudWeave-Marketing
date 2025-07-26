"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3,
  Code2,
  Globe,
  Terminal,
  Lock,
  Rocket,
  Users,
  GitBranch,
  Activity
} from "lucide-react";

const features = [
  {
    id: "infrastructure",
    name: "Infrastructure Management",
    description: "Powerful tools to manage your cloud infrastructure with ease",
    icon: Cloud,
    image: "/features/infrastructure.png",
    details: [
      {
        title: "Multi-Cloud Dashboard",
        description: "Manage AWS, Azure, GCP, and more from a single interface",
        icon: Globe,
      },
      {
        title: "Infrastructure as Code",
        description: "Define infrastructure using Terraform, CloudFormation, or our SDK",
        icon: Code2,
      },
      {
        title: "One-Click Deployments",
        description: "Deploy complex applications with pre-configured templates",
        icon: Rocket,
      },
    ],
  },
  {
    id: "monitoring",
    name: "Monitoring & Analytics",
    description: "Real-time insights into your infrastructure performance",
    icon: BarChart3,
    image: "/features/monitoring.png",
    details: [
      {
        title: "Real-time Metrics",
        description: "Monitor CPU, memory, network, and custom metrics in real-time",
        icon: Activity,
      },
      {
        title: "Smart Alerts",
        description: "AI-powered anomaly detection and intelligent alert routing",
        icon: Zap,
      },
      {
        title: "Cost Analytics",
        description: "Track and optimize your cloud spending across all providers",
        icon: BarChart3,
      },
    ],
  },
  {
    id: "security",
    name: "Security & Compliance",
    description: "Enterprise-grade security for your applications and data",
    icon: Shield,
    image: "/features/security.png",
    details: [
      {
        title: "Zero-Trust Security",
        description: "Built-in security with encryption at rest and in transit",
        icon: Lock,
      },
      {
        title: "Compliance Ready",
        description: "SOC 2, HIPAA, GDPR, and PCI DSS compliant infrastructure",
        icon: Shield,
      },
      {
        title: "Access Control",
        description: "Fine-grained RBAC and SSO integration with major providers",
        icon: Users,
      },
    ],
  },
  {
    id: "developer",
    name: "Developer Experience",
    description: "Tools that developers love, from CLI to API",
    icon: Terminal,
    image: "/features/developer.png",
    details: [
      {
        title: "Powerful CLI",
        description: "Full-featured command-line interface for all operations",
        icon: Terminal,
      },
      {
        title: "REST & GraphQL APIs",
        description: "Comprehensive APIs with SDKs for all major languages",
        icon: Code2,
      },
      {
        title: "CI/CD Integration",
        description: "Native integration with GitHub, GitLab, and Bitbucket",
        icon: GitBranch,
      },
    ],
  },
];

export default function FeaturesAdvanced() {
  const [activeTab, setActiveTab] = useState("infrastructure");

  return (
    <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400"
          >
            Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          >
            Everything you need to succeed
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Powerful features designed for modern cloud infrastructure teams
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
            <Tabs.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
              {features.map((feature) => (
                <Tabs.Trigger
                  key={feature.id}
                  value={feature.id}
                  className="flex-1 rounded-lg px-3 py-2.5 text-sm font-medium leading-5 transition-all data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900 dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-blue-400 dark:data-[state=inactive]:text-gray-400 dark:data-[state=inactive]:hover:text-white"
                >
                  <feature.icon className="mr-2 inline-block h-4 w-4" />
                  <span className="hidden sm:inline">{feature.name}</span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="mt-8">
              <AnimatePresence mode="wait">
                {features.map((feature) => (
                  <Tabs.Content
                    key={feature.id}
                    value={feature.id}
                    forceMount
                    className="data-[state=inactive]:hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
                    >
                      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {feature.name}
                          </h3>
                          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            {feature.description}
                          </p>

                          <div className="mt-8 space-y-6">
                            {feature.details.map((detail, index) => (
                              <motion.div
                                key={detail.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex gap-4"
                              >
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950">
                                  <detail.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 dark:text-white">
                                    {detail.title}
                                  </h4>
                                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                                    {detail.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="relative">
                          <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                            {/* Placeholder for feature screenshot/demo */}
                            <div className="flex h-full items-center justify-center">
                              <feature.icon className="h-24 w-24 text-blue-600/20 dark:text-blue-400/20" />
                            </div>
                          </div>
                          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-blue-600/20 blur-2xl"></div>
                          <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-purple-600/20 blur-2xl"></div>
                        </div>
                      </div>
                    </motion.div>
                  </Tabs.Content>
                ))}
              </AnimatePresence>
            </div>
          </Tabs.Root>
        </motion.div>
      </div>
    </section>
  );
}

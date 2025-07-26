"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import {
  Cloud,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Code2,
  ArrowRight,
  Sparkles
} from "lucide-react";

const features = [
  {
    name: "Multi-Cloud Support",
    description: "Deploy seamlessly across AWS, Azure, Google Cloud, and more from a single dashboard.",
    icon: Cloud,
    gradient: "from-primary-400 via-primary-500 to-primary-600",
    glowColor: "primary-500",
    details: ["AWS Integration", "Azure Support", "Google Cloud", "Unified Dashboard"],
  },
  {
    name: "Instant Scaling",
    description: "Auto-scale your infrastructure based on demand with intelligent load balancing.",
    icon: Zap,
    gradient: "from-secondary-400 via-secondary-500 to-secondary-600",
    glowColor: "secondary-500",
    details: ["Auto-scaling", "Load Balancing", "Performance Monitoring", "Cost Optimization"],
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance certifications.",
    icon: Shield,
    gradient: "from-accent-400 via-accent-500 to-accent-600",
    glowColor: "accent-500",
    details: ["End-to-end Encryption", "SOC 2 Compliance", "GDPR Ready", "Zero Trust Architecture"],
  },
  {
    name: "Real-time Analytics",
    description: "Monitor performance, costs, and usage with comprehensive dashboards.",
    icon: BarChart3,
    gradient: "from-orange-400 via-orange-500 to-orange-600",
    glowColor: "orange-500",
    details: ["Live Metrics", "Cost Analytics", "Performance Insights", "Custom Dashboards"],
  },
  {
    name: "Global CDN",
    description: "Deliver content faster with our worldwide content delivery network.",
    icon: Globe,
    gradient: "from-cyan-400 via-cyan-500 to-cyan-600",
    glowColor: "cyan-500",
    details: ["Edge Locations", "Smart Routing", "Cache Optimization", "DDoS Protection"],
  },
  {
    name: "Infrastructure as Code",
    description: "Define and manage your infrastructure using familiar programming languages.",
    icon: Code2,
    gradient: "from-pink-400 via-pink-500 to-pink-600",
    glowColor: "pink-500",
    details: ["Terraform Support", "Version Control", "GitOps Workflow", "Template Library"],
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="relative h-full"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Glow effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
        
        {/* Card */}
        <div className="relative glass-strong rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-500">
          {/* Icon */}
          <motion.div
            className="relative mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl blur-md opacity-50`} />
            <div className={`relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg`}>
              <feature.icon className="h-7 w-7 text-white" />
            </div>
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-white/60" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
              {feature.name}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {feature.description}
            </p>

            {/* Feature details */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isHovered ? "auto" : 0,
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 gap-2">
                  {feature.details.map((detail, idx) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                      transition={{ duration: 0.2, delay: idx * 0.05 }}
                      className="flex items-center space-x-2 text-sm text-white/60"
                    >
                      <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                      <span>{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Learn more button */}
            <motion.button
              className="flex items-center space-x-2 text-sm font-medium text-white/60 hover:text-white transition-colors group/btn"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
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
            <Sparkles className="h-4 w-4 text-accent-400" />
            <span>Everything you need</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block">Powerful Features for</span>
            <span className="block gradient-text">Modern Infrastructure</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-xl leading-8 text-white/70 max-w-2xl mx-auto"
          >
            CloudWeave provides all the tools you need to deploy, manage, and scale
            your cloud infrastructure with unprecedented ease and efficiency.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.name} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-4 glass rounded-2xl px-8 py-4">
            <span className="text-white/80">Ready to experience the future of cloud infrastructure?</span>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

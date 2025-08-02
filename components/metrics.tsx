"use client";

import { motion } from "framer-motion";
import { Cloud, Users, Zap, TrendingUp, Sparkles, Star } from "lucide-react";

const trustPoints = [
  {
    id: 1,
    name: "Professional Engineers",
    description: "Trusted by experienced software engineers",
    icon: Users,
    gradient: "from-primary-400 to-primary-600",
  },
  {
    id: 2,
    name: "Platform Engineers", 
    description: "Built for modern platform engineering teams",
    icon: Cloud,
    gradient: "from-secondary-400 to-secondary-600",
  },
  {
    id: 3,
    name: "Enterprise Ready",
    description: "Designed for production workloads",
    icon: TrendingUp,
    gradient: "from-accent-400 to-accent-600",
  },
  {
    id: 4,
    name: "Modern Architecture",
    description: "Built with latest cloud-native technologies",
    icon: Zap,
    gradient: "from-orange-400 to-orange-600",
  },
];


function TrustCard({ trustPoint, index }: { trustPoint: typeof trustPoints[0]; index: number }) {
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
      className="group relative"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${trustPoint.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative glass-strong rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Icon */}
        <motion.div
          className="relative mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${trustPoint.gradient} rounded-xl blur-md opacity-50`} />
          <div className={`relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${trustPoint.gradient} shadow-lg`}>
            <trustPoint.icon className="h-8 w-8 text-white" />
          </div>
          
          {/* Sparkle effect */}
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Sparkles className="h-5 w-5 text-white/60" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors">
            {trustPoint.name}
          </h3>
          
          <p className="text-white/60 text-sm leading-relaxed">
            {trustPoint.description}
          </p>

          {/* Progress bar */}
          <div className="relative">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${trustPoint.gradient} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </div>
    </motion.div>
  );
}

export default function Metrics() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-neutral-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

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
            <Star className="h-4 w-4 text-accent-400" />
            <span>Trusted worldwide</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block">Trusted by</span>
            <span className="block gradient-text">Professional Engineers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-xl leading-8 text-white/70 max-w-2xl mx-auto"
          >
            Built for experienced software engineers and platform engineering teams
            who demand reliable, modern cloud infrastructure solutions.
          </motion.p>
        </div>

        {/* Trust points grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((trustPoint, index) => (
            <TrustCard key={trustPoint.id} trustPoint={trustPoint} index={index} />
          ))}
        </div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-white/80">
              Designed by engineers, for engineers. CloudWeave provides the 
              reliability and performance that professional teams expect.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

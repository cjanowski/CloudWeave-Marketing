"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Star, Rocket } from "lucide-react";

const floatingElements = [
  { icon: Zap, delay: 0, x: "15%", y: "20%" },
  { icon: Star, delay: 1, x: "85%", y: "25%" },
  { icon: Rocket, delay: 2, x: "10%", y: "75%" },
  { icon: Sparkles, delay: 1.5, x: "90%", y: "80%" },
];

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 mesh-gradient opacity-40"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: element.x, top: element.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut"
              }}
            >
              <div className="glass rounded-2xl p-4">
                <Icon className="h-6 w-6 text-white/60" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 text-sm font-medium text-white/80 mb-8"
          >
            <Rocket className="h-4 w-4 text-accent-400" />
            <span>Ready to launch?</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block">Transform Your</span>
            <span className="block gradient-text">Cloud Infrastructure</span>
            <span className="block">Today</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-white/70"
          >
            Join thousands of developers who are already using CloudWeave to simplify
            their cloud deployments and scale their applications effortlessly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="https://app.cloudweave.io/signup"
              className="group relative overflow-hidden btn-primary text-lg px-8 py-4"
            >
              <div className="relative flex items-center space-x-3">
                <Sparkles className="h-5 w-5" />
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            
            <Link
              href="/contact"
              className="group flex items-center space-x-2 text-lg font-semibold text-white/80 hover:text-white transition-colors"
            >
              <span>Contact Sales</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">10,000+</div>
                  <div className="text-white/60 text-sm">Active Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">99.99%</div>
                  <div className="text-white/60 text-sm">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-white/60 text-sm">Expert Support</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-white/80 italic mb-4">
                "CloudWeave reduced our deployment time from hours to minutes.
                It's simply the best cloud platform we've ever used."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400" />
                <div className="text-left">
                  <div className="font-semibold text-white">Alex Rodriguez</div>
                  <div className="text-sm text-white/60">Lead DevOps Engineer, TechFlow</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
    </section>
  );
}

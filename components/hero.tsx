"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          className="absolute inset-0 mesh-gradient opacity-60"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center space-x-3 glass rounded-full px-4 py-2 text-sm font-medium text-white">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="font-semibold">New</span>
                </div>
                <div className="h-4 w-px bg-white/20" />
                <span>CloudWeave v3.0 is here</span>
                <Sparkles className="h-4 w-4 text-blue-400" />
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              <span className="block">Cloud Infrastructure</span>
              <span className="block gradient-text">Reimagined</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-xl leading-8 text-white/80 max-w-2xl"
            >
              Deploy, scale, and monitor your applications with unprecedented ease.
              Our next-generation platform transforms complex cloud operations into simple,
              intuitive experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://app.cloudweave.io/signup"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center space-x-2"
              >
                <span>Start Building</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <button className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center space-x-3">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center space-x-8"
            >
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 ring-2 ring-white/20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    />
                  ))}
                </div>
                <div className="text-white/80">
                  <div className="font-semibold text-white">10,000+</div>
                  <div className="text-sm">developers worldwide</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-white/80">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 rating</span>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative mt-16 sm:mt-24 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              {/* Main dashboard mockup */}
              <div className="relative">
                {/* Glow effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                
                {/* Dashboard container */}
                <div className="relative glass-strong rounded-2xl p-1">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-400" />
                          <div className="h-3 w-3 rounded-full bg-yellow-400" />
                          <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        <span className="text-white/60 text-sm font-medium">CloudWeave Dashboard</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400 text-xs font-medium">Live</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Stats cards */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "Active Deployments", value: "24", trend: "+12%" },
                          { label: "Response Time", value: "45ms", trend: "-8%" },
                        ].map((stat, index) => (
                          <motion.div
                            key={index}
                            className="glass rounded-xl p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                          >
                            <div className="text-white/60 text-xs font-medium">{stat.label}</div>
                            <div className="text-white text-2xl font-bold mt-1">{stat.value}</div>
                            <div className="text-blue-400 text-xs font-medium mt-1">{stat.trend}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Chart area */}
                      <motion.div
                        className="glass rounded-xl p-4 h-32"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        <div className="flex items-end justify-between h-full space-x-2">
                          {[40, 65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                            <motion.div
                              key={index}
                              className="bg-gradient-to-t from-blue-600 to-purple-400 rounded-sm flex-1"
                              style={{ height: `${height}%` }}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

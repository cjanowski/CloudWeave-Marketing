"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Enhanced background with animated gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 rounded-full bg-blue-50 px-3 py-1 text-sm leading-6 text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-950 dark:text-blue-300 dark:ring-blue-300/20">
              <span className="font-semibold">New</span>
              <span className="h-4 w-px bg-blue-700/20 dark:bg-blue-300/20"></span>
              <span>Just shipped v2.0</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white"
          >
            Cloud Infrastructure Made Simple
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Deploy, monitor, and scale your applications with CloudWeave. 
            Our platform simplifies cloud infrastructure management, letting you focus on building great products.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <Link
              href="https://app.cloudweave.io/signup"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Get started for free
              <ArrowRight className="ml-2 -mr-1 inline h-4 w-4" />
            </Link>
            <button className="group flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400">
              <Play className="mr-2 h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors dark:text-gray-500 dark:group-hover:text-blue-400" />
              Watch demo
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 ring-2 ring-white dark:ring-gray-950"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">1,000+</span> developers trust CloudWeave
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative">
              <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-white/5 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <div className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-white/10">
                  <div className="p-8 sm:p-10">
                    <div className="space-y-4">
                      <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                      <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
                      <div className="mt-8 grid grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="space-y-2">
                            <div className="h-20 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"></div>
                            <div className="h-2 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-20 blur-2xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

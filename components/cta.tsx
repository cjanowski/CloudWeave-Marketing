"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Ready to transform your
            <br />
            cloud infrastructure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
          >
            Join thousands of developers who are already using CloudWeave to simplify their cloud deployments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="https://app.cloudweave.io/signup"
              className="group relative inline-flex items-center rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:scale-105"
            >
              <span className="absolute -inset-0.5 -z-10 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur transition-opacity group-hover:opacity-100" />
              <Sparkles className="mr-2 h-4 w-4" />
              Start free trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
            >
              Contact sales <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#3B82F6" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
}

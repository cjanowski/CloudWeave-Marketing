"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    content: "CloudWeave has transformed how we manage our infrastructure. What used to take hours now takes minutes.",
    author: "Sarah Chen",
    role: "CTO at TechStart",
    rating: 5,
  },
  {
    content: "The best cloud management platform I've used. The UI is intuitive and the performance is outstanding.",
    author: "Michael Rodriguez",
    role: "DevOps Lead at Scale.io",
    rating: 5,
  },
  {
    content: "We've reduced our cloud costs by 40% while improving performance. CloudWeave is a game-changer.",
    author: "Emily Watson",
    role: "VP Engineering at DataFlow",
    rating: 5,
  },
];

export default function Testimonials() {
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
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          >
            Loved by developers worldwide
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
            >
              <div>
                <div className="flex gap-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 flex-none text-yellow-400 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

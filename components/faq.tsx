"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does CloudWeave pricing work?",
    answer: "CloudWeave offers a flexible pay-as-you-go model with no hidden fees. You only pay for the resources you use, and we provide detailed cost analytics to help you optimize your spending.",
  },
  {
    question: "Which cloud providers does CloudWeave support?",
    answer: "We support all major cloud providers including AWS, Google Cloud Platform, Microsoft Azure, DigitalOcean, and Linode. We're constantly adding support for more providers.",
  },
  {
    question: "How secure is CloudWeave?",
    answer: "Security is our top priority. We use industry-standard encryption for all data in transit and at rest. We're SOC 2 Type II certified and comply with GDPR, HIPAA, and other major compliance standards.",
  },
  {
    question: "Can I migrate my existing infrastructure to CloudWeave?",
    answer: "Yes! CloudWeave provides seamless migration tools that can import your existing infrastructure configurations. Our support team is also available to help with complex migrations.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 support via chat and email for all plans. Enterprise customers also get access to dedicated support engineers and phone support.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
              FAQ
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Frequently asked questions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Everything you need to know about CloudWeave
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Accordion.Root type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg border border-gray-200 bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-800"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between text-left">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

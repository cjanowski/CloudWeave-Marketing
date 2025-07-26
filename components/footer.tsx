"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Github, Twitter, Linkedin, Mail, MapPin, Phone, ArrowRight, Heart } from "lucide-react";

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Community", href: "/community" },
    { name: "Partners", href: "/partners" },
    { name: "Status", href: "https://status.cloudweave.io" },
    { name: "Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Security", href: "/security" },
  ],
};

const social = [
  {
    name: "GitHub",
    href: "https://github.com/cloudweave",
    icon: Github,
    gradient: "from-gray-400 to-gray-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/cloudweave",
    icon: Twitter,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/cloudweave",
    icon: Linkedin,
    gradient: "from-blue-500 to-blue-700",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@cloudweave.io",
    href: "mailto:hello@cloudweave.io",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "San Francisco, CA",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        {/* Main footer content */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          {/* Brand section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-xl">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-bold gradient-text">
                  CloudWeave
                </span>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/70 leading-relaxed max-w-md"
            >
              Transforming cloud infrastructure with cutting-edge technology.
              Making deployment simple, scalable, and secure for developers worldwide.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {contactInfo.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors group"
                >
                  <item.icon className="h-4 w-4 text-primary-400 group-hover:text-primary-300 transition-colors" />
                  <span className="text-sm">{item.value}</span>
                </Link>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {social.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 glass rounded-xl hover:scale-110 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <item.icon className="relative h-5 w-5 text-white/60 group-hover:text-white transition-colors" />
                  <span className="sr-only">{item.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Navigation links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold leading-6 text-white mb-6">Product</h3>
                <ul role="list" className="space-y-4">
                  {navigation.product.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-sm text-white/60 hover:text-white transition-colors"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-10 md:mt-0"
              >
                <h3 className="text-sm font-semibold leading-6 text-white mb-6">Company</h3>
                <ul role="list" className="space-y-4">
                  {navigation.company.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-sm text-white/60 hover:text-white transition-colors"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold leading-6 text-white mb-6">Resources</h3>
                <ul role="list" className="space-y-4">
                  {navigation.resources.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-sm text-white/60 hover:text-white transition-colors"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="mt-10 md:mt-0"
              >
                <h3 className="text-sm font-semibold leading-6 text-white mb-6">Legal</h3>
                <ul role="list" className="space-y-4">
                  {navigation.legal.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-sm text-white/60 hover:text-white transition-colors"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8 border border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Stay Updated with CloudWeave
            </h3>
            <p className="text-white/70 mb-6">
              Get the latest updates, tutorials, and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} CloudWeave, Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>for developers worldwide</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

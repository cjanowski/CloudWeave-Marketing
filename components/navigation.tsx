"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Sparkles, Rocket, Shield, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Features",
    href: "#features",
    icon: Zap,
    description: "Powerful cloud tools"
  },
  {
    name: "How it Works",
    href: "#how-it-works",
    icon: Rocket,
    description: "Simple deployment process"
  },
  {
    name: "Pricing",
    href: "#pricing",
    icon: Shield,
    description: "Transparent pricing"
  },
  {
    name: "About",
    href: "/about",
    icon: Globe,
    description: "Our story & mission"
  },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "glass-strong border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <motion.div
            className="flex lg:flex-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold gradient-text">
                CloudWeave
              </span>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <motion.button
              type="button"
              className="glass rounded-xl p-2.5 text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors rounded-xl hover:bg-white/10"
              >
                Log in
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="http://cloudweave-alb-319481151.us-east-1.elb.amazonaws.com/"
                className="group relative overflow-hidden btn-primary"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Launch App</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm glass-strong border-l border-white/10 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex h-full flex-col">
                {/* Mobile header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <Link href="/" className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-xl">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-bold gradient-text">
                      CloudWeave
                    </span>
                  </Link>
                  <motion.button
                    type="button"
                    className="glass rounded-xl p-2.5 text-white/80 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>

                {/* Mobile navigation */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-2">
                    {navigation.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="group flex items-center space-x-4 rounded-xl p-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="flex-shrink-0">
                              <Icon className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold">{item.name}</div>
                              <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Mobile CTA buttons */}
                  <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <Link
                        href="/login"
                        className="block w-full rounded-xl bg-white/10 px-4 py-3 text-center font-semibold text-white hover:bg-white/20 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Log in
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <Link
                        href="https://app.cloudweave.io"
                        className="block w-full btn-primary text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <Sparkles className="h-4 w-4" />
                          <span>Launch App</span>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

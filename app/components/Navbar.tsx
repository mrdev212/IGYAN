
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-[9999]">
      {/* Top Announcement Bar */}
      <div className="w-full text-white h-10 md:h-12 flex items-center justify-center px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md">
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>India&apos;s AI-Native Operating System for Schools &amp; Colleges</span>
          <Link href="https://calendar.app.google/kzsNUC6w3tvkjLTs7" target="_blank" rel="noopener noreferrer" className="underline ml-2 hover:text-indigo-200 transition-colors">
            Book a Free Demo &rarr;
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
          className="w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50 shadow-[0_2px_20px_-10px_rgba(0,71,171,0.05)] transition-colors duration-300">
          <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
              <Link className="flex items-center gap-stack-md hover:opacity-90 transition-opacity" href="/">
                  <div className="relative bg-slate-200 dark:bg-slate-800 animate-pulse rounded-lg w-10 h-10 md:w-12 md:h-12 overflow-hidden flex items-center justify-center shrink-0"
                      id="header-logo-container">
                      <Image
                        alt="IGYAN AI Logo"
                        className="object-contain p-1 transition-opacity duration-300"
                        src="/image.webp"
                        fill
                        priority
                        sizes="48px"
                      />
                  </div>
                  <span
                      className="font-headline-md text-headline-md font-bold text-trust-blue dark:text-white transition-colors">IGYAN AI</span>
              </Link>
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
                <div className="relative group py-2" id="features-menu-container">
                    <Link className="flex items-center gap-0.5 text-trust-blue dark:text-[#8b5cf6] font-bold font-body-md text-body-md focus:outline-none"
                        href="/#features">
                        <span>Features</span>
                        <span
                            className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180"
                            >expand_more</span>
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <div
                        className="absolute left-1/2 -translate-x-[25%] mt-3 w-[760px] bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/40 dark:border-slate-800/80 shadow-[0_20px_50px_rgba(0,71,171,0.15)] rounded-3xl overflow-hidden invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 z-50 transition-all duration-300">
                        <div className="p-8 grid grid-cols-2 gap-x-12 gap-y-8 text-left">
                            {/* Category 1: For Students */}
                            <div className="flex gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-trust-blue dark:text-indigo-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">person</span>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-headline-md text-body-md font-bold text-trust-blue dark:text-white leading-tight">For Students</h4>
                                        <p className="font-body-md text-label-sm text-slate-500 dark:text-slate-400">
                                            Personalized learning & growth</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Link href="/features/students/paths"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Personalized Paths</Link>
                                        <Link href="/features/students/paths#career-mapping"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Career Mapping</Link>
                                        <Link href="/features/students/paths#venture-ready"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Venture Ready</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Category 2: For Teachers */}
                            <div className="flex gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-trust-blue dark:text-indigo-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">school</span>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-headline-md text-body-md font-bold text-trust-blue dark:text-white leading-tight">For Teachers</h4>
                                        <p className="font-body-md text-label-sm text-slate-500 dark:text-slate-400">
                                            Automation & mentoring tools</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Link href="/features/teachers/lessons"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Lesson Planning</Link>
                                        <Link href="/features/teachers/lessons#admin-automation"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Admin Automation</Link>
                                        <Link href="/features/teachers/lessons#mentor-bots"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Mentor Bots</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Category 3: For Parents */}
                            <div className="flex gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-trust-blue dark:text-indigo-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">supervised_user_circle</span>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-headline-md text-body-md font-bold text-trust-blue dark:text-white leading-tight">For Parents</h4>
                                        <p className="font-body-md text-label-sm text-slate-500 dark:text-slate-400">
                                            Real-time progress insights</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Link href="/features/parents/insights"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Progress Insights</Link>
                                        <Link href="/features/parents/insights#growth-tracking"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Growth Tracking</Link>
                                        <Link href="/features/parents/insights#communication"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Communication</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Category 4: For Institutions */}
                            <div className="flex gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-trust-blue dark:text-indigo-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">account_balance</span>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-headline-md text-body-md font-bold text-trust-blue dark:text-white leading-tight">For Institutions</h4>
                                        <p className="font-body-md text-label-sm text-slate-500 dark:text-slate-400">
                                            Data-driven management</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Link href="/features/institutions/campus"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Campus Management</Link>
                                        <Link href="/features/institutions/campus#global-collaboration"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Global Collaboration</Link>
                                        <Link href="/features/institutions/campus#resource-optimization"
                                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400 transition-colors">Resource Optimization</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div
                            className="bg-slate-50/50 dark:bg-slate-950/40 px-8 py-5 flex justify-between items-center border-t border-white/20 dark:border-slate-800/80">
                            <span className="font-body-md text-label-md text-slate-500 dark:text-slate-400">Explore the full
                                potential of AI-native education.</span>
                            <div className="flex items-center gap-4">
                                <a href="https://wa.me/917004201514" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-label-md text-label-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-95"
                                    aria-label="Chat with IGYAN AI on WhatsApp">
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    WhatsApp
                                </a>
                                <Link href="/#features"
                                    className="font-label-md text-label-md font-bold text-trust-blue dark:text-indigo-400 hover:text-opacity-80 transition-all flex items-center gap-1.5 group/btn">
                                    <span>View all features</span>
                                    <span
                                        className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white transition-colors font-body-md text-body-md"
                    href="/about">About Us</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white transition-colors font-body-md text-body-md"
                    href="/insights">Insights</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white transition-colors font-body-md text-body-md"
                    href="/contact">Contact</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white transition-colors font-body-md text-body-md"
                    href="/ai-shark">AI Shark</Link>
            </div>
            <div className="flex items-center gap-stack-md">
                {/* Theme Controller Selector removed */}                <Link className="hidden md:block text-trust-blue dark:text-indigo-400 font-label-md text-label-md px-6 py-2 rounded-full hover:bg-surface-container-low dark:hover:bg-slate-900 transition-all"
                    href="/login">Log in</Link>
                <Link className="bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 px-5 py-2 md:px-6 md:py-2.5 rounded-full font-label-md text-label-md shadow-sm active:scale-95 hover:bg-opacity-95 transition-all"
                    href="https://calendar.app.google/kzsNUC6w3tvkjLTs7" target="_blank" rel="noopener noreferrer">Book Demo</Link>

                {/* Mobile Menu Toggle Button */}
                <button id="mobile-menu-btn" type="button"
                    onClick={() => setMobileMenuOpen((open) => !open)}
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant/40 dark:border-slate-800 text-on-surface dark:text-slate-200 hover:bg-surface-container-low dark:hover:bg-slate-900 transition-colors focus:outline-none"
                    aria-expanded={mobileMenuOpen}
                    aria-label="Toggle Menu">
                    <span className="material-symbols-outlined text-[24px]" id="mobile-menu-icon">{mobileMenuOpen ? "close" : "menu"}</span>
                </button>
            </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div id="mobile-menu-drawer"
            className={`${mobileMenuOpen ? "block" : "hidden"} absolute inset-x-0 top-20 bg-surface-white dark:bg-slate-950 border-b border-outline-variant/30 dark:border-slate-900 shadow-xl z-40 md:hidden transition-all duration-300`}>
            <div className="px-margin-desktop py-6 flex flex-col gap-6 text-left">
                {/* Features Category */}
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => setMobileFeaturesOpen((open) => !open)}
                        className="flex justify-between items-center w-full font-bold text-trust-blue dark:text-[#8b5cf6] font-body-md text-body-md py-1 border-b border-slate-100 dark:border-slate-900">
                        <span>Features</span>
                        <span className="material-symbols-outlined text-[18px]"
                            id="mobile-features-chevron">{mobileFeaturesOpen ? "expand_less" : "expand_more"}</span>
                    </button>
                    <div id="mobile-features-links"
                        className={`${mobileFeaturesOpen ? "flex" : "hidden"} pl-4 flex-col gap-3 mt-2 border-l border-slate-100 dark:border-slate-900`}>
                        <Link href="/#features" 
                            className="font-body-md text-body-md text-slate-700 dark:text-slate-300 hover:text-trust-blue dark:hover:text-indigo-400">Core
                            Features</Link>
                        <Link href="/features/students/paths"
                            className="font-body-md text-body-md text-slate-600 dark:text-slate-400">For Students</Link>
                        <Link href="/features/teachers/lessons"
                            className="font-body-md text-body-md text-slate-600 dark:text-slate-400">For Teachers</Link>
                        <Link href="/features/parents/insights"
                            className="font-body-md text-body-md text-slate-600 dark:text-slate-400">For Parents</Link>
                        <Link href="/features/institutions/campus"
                            className="font-body-md text-body-md text-slate-600 dark:text-slate-400">For Institutions</Link>
                        <a href="https://wa.me/917004201514" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 pt-1 font-bold text-[#128C3E] dark:text-green-400">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

                <Link className="text-slate-600 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white font-bold font-body-md text-body-md py-1 border-b border-slate-100 dark:border-slate-900"
                    href="/about">About Us</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white transition-colors font-body-md text-body-md py-1 border-b border-slate-100 dark:border-slate-900"
                    href="/insights">Insights</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white transition-colors font-body-md text-body-md py-1 border-b border-slate-100 dark:border-slate-900"
                    href="/contact">Contact</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white transition-colors font-body-md text-body-md py-1 border-b border-slate-100 dark:border-slate-900"
                    href="/ai-shark">AI Shark</Link>
                <div className="flex flex-col gap-3 pt-4">
                    <Link className="text-center text-trust-blue dark:text-indigo-400 font-label-md text-label-md py-3 rounded-full border border-outline-variant/40 dark:border-slate-800 hover:bg-surface-container-low dark:hover:bg-slate-900 transition-all"
                        href="/login">Log in</Link>
                    <Link className="text-center bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 py-3 rounded-full font-label-md text-label-md font-bold shadow-sm active:scale-95 hover:bg-opacity-95 transition-all"
                        href="https://calendar.app.google/kzsNUC6w3tvkjLTs7" target="_blank" rel="noopener noreferrer">Book Demo</Link>
                </div>
            </div>
        </div>
      </nav>
    </div>
  );
}

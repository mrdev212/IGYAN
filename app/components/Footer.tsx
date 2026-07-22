import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer
        className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 w-full pt-section-padding pb-stack-lg transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
            {/* Brand Column */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="relative bg-slate-200 dark:bg-slate-800 animate-pulse rounded-lg w-10 h-10 overflow-hidden flex items-center justify-center shrink-0"
                        id="footer-logo-container">
                        <Image
                          alt="IGYAN AI Logo"
                          className="object-contain p-1 transition-opacity duration-300"
                          src="/image.webp"
                          fill
                          sizes="40px"
                        />
                    </div>
                    <span
                        className="font-headline-md text-headline-md font-bold text-trust-blue dark:text-white transition-colors">IGYAN AI</span>
                </div>
                <p className="font-body-md text-body-md text-slate-500 dark:text-slate-400">
                    The AI-native operating system for schools, empowering every student&apos;s growth.
                </p>
            </div>
            {/* Explore Links */}
            <div>
                <h4
                    className="font-label-sm text-label-sm uppercase tracking-widest text-[#3B1595] dark:text-indigo-400 mb-6">
                    Explore</h4>
                <ul className="space-y-3">
                    <li><Link className="text-slate-600 dark:text-slate-400 font-semibold font-body-md text-body-md hover:text-[#3B1595] dark:hover:text-white transition-all"
                            href="/#features">Features</Link></li>
                    <li><Link className="text-slate-600 dark:text-slate-400 font-body-md text-body-md hover:text-[#3B1595] dark:hover:text-white transition-all"
                            href="/about">About Us</Link></li>
                    <li><Link className="text-slate-600 dark:text-slate-400 font-body-md text-body-md hover:text-[#3B1595] dark:hover:text-white transition-all"
                            href="/insights">Insights</Link></li>
                    <li><Link className="text-slate-600 dark:text-slate-400 font-body-md text-body-md hover:text-[#3B1595] dark:hover:text-white transition-all"
                            href="/contact">Contact</Link></li>
                </ul>
            </div>
            {/* Platform Links */}
            <div>
                <h4
                    className="font-label-sm text-label-sm uppercase tracking-widest text-[#3B1595] dark:text-indigo-400 mb-6">
                    Platform</h4>
                <ul className="space-y-3">
                    <li><Link className="text-slate-600 dark:text-slate-400 font-body-md text-body-md hover:text-[#3B1595] dark:hover:text-white transition-all"
                            href="/login">Log in</Link></li>
                    <li><Link className="text-slate-600 dark:text-slate-400 font-body-md text-body-md hover:text-[#3B1595] dark:hover:text-white transition-all"
                            href="https://calendar.app.google/kzsNUC6w3tvkjLTs7" target="_blank" rel="noopener noreferrer">Book Demo</Link></li>
                    <li><Link className="text-slate-600 dark:text-slate-400 font-body-md text-body-md hover:text-[#3B1595] dark:hover:text-white transition-all"
                            href="/contact">Partner with us</Link></li>
                </ul>
            </div>
        </div>
        <div
            className="max-w-container-max mx-auto px-margin-desktop mt-section-padding pt-stack-lg border-t border-outline-variant/30 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body-md text-body-md text-slate-500 dark:text-slate-400 text-sm">© 2026 IGYAN AI. All rights
                reserved.</p>
            <div className="flex gap-6">
                <Link className="text-slate-500 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white text-sm transition-colors"
                    href="/terms">Terms</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white text-sm transition-colors"
                    href="/privacy">Privacy</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white text-sm transition-colors"
                    href="/security">Security</Link>
            </div>
        </div>
    </footer>
  );
}

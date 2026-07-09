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
                    Talent in Motion. The AI-native operating system for schools empowering students.
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
                            href="/contact">Book Demo</Link></li>
                    <li><Link className="text-slate-600 dark:text-slate-400 font-body-md text-body-md hover:text-[#3B1595] dark:hover:text-white transition-all"
                            href="/contact">Partner with us</Link></li>
                </ul>
            </div>
            {/* Newsletter */}
            <div>
                <h4
                    className="font-label-sm text-label-sm uppercase tracking-widest text-[#3B1595] dark:text-indigo-400 mb-6">
                    Updates</h4>
                <p className="font-body-md text-body-md text-slate-500 dark:text-slate-400 mb-4">
                    Join our newsletter to hear about new Sudarshan Ai copilots and curriculum launches.
                </p>
                <form action="/contact" className="flex gap-2">
                    <input
                        className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-electric-cyan focus:border-transparent outline-none dark:text-white"
                        placeholder="Email" type="email" name="email" />
                    <button
                        className="bg-[#3B1595] dark:bg-indigo-600 text-white px-4 py-2 rounded-full font-label-md text-label-md hover:bg-opacity-90 transition-all">Join</button>
                </form>
            </div>
        </div>
        <div
            className="max-w-container-max mx-auto px-margin-desktop mt-section-padding pt-stack-lg border-t border-outline-variant/30 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body-md text-body-md text-slate-500 dark:text-slate-400 text-sm">© 2024 IGYAN AI. All rights
                reserved.</p>
            <div className="flex gap-6">
                <Link className="text-slate-500 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white text-sm transition-colors"
                    href="/contact">Terms</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white text-sm transition-colors"
                    href="/contact">Privacy</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-trust-blue dark:hover:text-white text-sm transition-colors"
                    href="/contact">Security</Link>
            </div>
        </div>
    </footer>
  );
}

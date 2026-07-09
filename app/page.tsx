import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Link from 'next/link';
import FeatureTabs from './components/FeatureTabs';
import ImageWithSkeleton from './components/ImageWithSkeleton';

export default function Home() {
  return (
    <>
      
    {/* TopNavBar */}
    <Navbar />

    <main className="pt-28 md:pt-32">
        {/* Hero Section Redesign (Inspired by MagicSchool.ai) */}
        <section
            className="relative overflow-hidden bg-gradient-to-b from-[#FFF5EC] via-[#ECE5FF] to-[#3B1595] dark:from-[#0E0F1E] dark:via-[#191535] dark:to-[#0A051C] pt-16 md:pt-24 pb-16 transition-colors duration-300">
            {/* Background Sparks/Star Decor (Floating animation) */}
            <div
                className="absolute left-6 md:left-12 top-1/4 hidden sm:block animate-float opacity-75 text-amber-500 dark:text-amber-400">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
            </div>
            <div
                className="absolute left-10 md:left-24 bottom-1/4 hidden lg:block animate-float-slow opacity-60 text-indigo-700 dark:text-indigo-400">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
            </div>
            <div
                className="absolute right-6 md:right-16 top-1/3 hidden sm:block animate-float-slow opacity-80 text-indigo-500 dark:text-indigo-400">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
            </div>
            <div
                className="absolute right-12 md:right-28 bottom-1/3 hidden lg:block animate-float opacity-70 text-violet-500 dark:text-violet-300">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
            </div>

            <div className="max-w-container-max mx-auto px-margin-desktop text-center relative z-10">
                <div className="scroll-reveal flex flex-col items-center">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-slate-800/80 text-indigo-600 dark:text-indigo-300 px-4 py-1.5 rounded-full mb-6 shadow-sm border border-indigo-100 dark:border-slate-700">
                        <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">AI-Native Education
                            OS</span>
                    </div>
                    {/* Central Bold Typography */}
                    <h1
                        className="font-headline-xl text-headline-xl md:text-[56px] text-[#1E1B4B] dark:text-white mb-6 leading-[1.1] max-w-4xl font-extrabold tracking-tight">
                        Find your <span
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">"wow!"</span>
                        this school year with IGYAN AI
                    </h1>
                    {/* Subheadline */}
                    <p
                        className="font-body-lg text-body-lg text-slate-700 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
                        The AI-native operating system for schools, empowering students with personalized learning,
                        career pathways, and entrepreneurship readiness.
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
                        <a href="/contact"
                            className="bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 px-8 py-4 rounded-full font-label-md text-label-md font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 group transform hover:-translate-y-0.5">
                            Partner With Us
                            <span
                                className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        <a href="#features"
                            className="border-2 border-trust-blue/20 dark:border-white/20 hover:border-trust-blue dark:hover:border-white text-trust-blue dark:text-white px-8 py-4 rounded-full font-label-md text-label-md font-semibold transition-all backdrop-blur-sm hover:-translate-y-0.5 transform">
                            Explore Platform
                        </a>
                    </div>
                </div>

                {/* Collage Style Cutout Frame Image */}
                <div className="relative max-w-4xl mx-auto z-20 px-4 md:px-0 scroll-reveal" >
                    <div
                        className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl p-4 rounded-[2rem] shadow-[0_30px_65px_-15px_rgba(0,71,171,0.18)] border border-white/50 dark:border-slate-800/60 transform hover:scale-[1.01] transition-all duration-500">
                        <ImageWithSkeleton
                            src="/student_engagement_hd.png"
                            alt="IGYAN AI AI Classroom Showcase"
                            wrapperClassName="relative w-full overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800 aspect-[1024/1024]"
                            className="w-full h-auto rounded-2xl shadow-inner"
                        />

                        {/* Mini Interactive Overlay Badge */}
                        <div
                            className="absolute -bottom-6 -left-6 md:-left-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/60 dark:border-slate-800 p-4 rounded-2xl shadow-2xl max-w-[240px] text-left animate-float">
                            <div className="flex items-center gap-3 mb-1.5">
                                <div
                                    className="bg-indigo-100 dark:bg-indigo-950/40 p-2 rounded-lg text-indigo-600 dark:text-indigo-400">
                                    <span className="material-symbols-outlined text-[20px]">trending_up</span>
                                </div>
                                <span
                                    className="font-label-md text-label-md text-[#1E1B4B] dark:text-white font-bold">Student
                                    Success</span>
                            </div>
                            <p className="font-label-sm text-label-sm text-slate-500 dark:text-slate-400 leading-snug">
                                Real-time engagement tracking powered by Sudarshan AI.</p>
                        </div>
                    </div>
                </div>

                {/* Credentials / Trust Ribbon */}
                <div className="mt-16 border-t border-slate-200/50 dark:border-slate-800/60 pt-8 max-w-5xl mx-auto">
                    <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">
                        Recognized Credential Integrations &amp; Partnerships
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                        <div className="flex items-center gap-2.5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 dark:border-slate-800 shadow-sm hover:scale-[1.03] transition-all">
                            <span className="material-symbols-outlined text-trust-blue dark:text-indigo-400">rocket_launch</span>
                            <div className="text-left">
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider leading-none">Recognized By</p>
                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">DPIIT Startup India</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 dark:border-slate-800 shadow-sm hover:scale-[1.03] transition-all">
                            <span className="material-symbols-outlined text-trust-blue dark:text-indigo-400">lock_person</span>
                            <div className="text-left">
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider leading-none">Government Sync</p>
                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">DigiLocker Integrated</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 dark:border-slate-800 shadow-sm hover:scale-[1.03] transition-all">
                            <span className="material-symbols-outlined text-trust-blue dark:text-indigo-400">school</span>
                            <div className="text-left">
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider leading-none">Verified Partner</p>
                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Google for Education</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 dark:border-slate-800 shadow-sm hover:scale-[1.03] transition-all">
                            <span className="material-symbols-outlined text-trust-blue dark:text-indigo-400">verified</span>
                            <div className="text-left">
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider leading-none">Scale &amp; Trust</p>
                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">500+ Campuses Live</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Core Pillars Section (Bento Grid) */}
        <section id="features"
            className="bg-surface-container-low dark:bg-slate-900/40 py-section-padding transition-colors duration-300">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="text-center mb-stack-lg scroll-reveal">
                    <h2 className="font-headline-lg text-headline-lg text-trust-blue dark:text-white mb-4">Core Pillars of
                        Excellence</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-slate-400 max-w-2xl mx-auto mb-10">
                        We build more than software; we provide a foundation for the next generation of leaders through
                        three fundamental pillars.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {/* Pillar 1 */}
                    <div
                        className="glass-card p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 scroll-reveal">
                        <div
                            className="w-16 h-16 bg-white dark:bg-slate-900 shadow-sm rounded-xl flex items-center justify-center mb-6 border border-outline-variant/30 dark:border-slate-800 text-trust-blue dark:text-indigo-400 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-4xl" data-weight="fill">school</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-trust-blue dark:text-white mb-4">Personalized
                            Learning</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant dark:text-slate-400 mb-6">
                            Tailored curricula that adapt to every student's pace, interests, and learning style using
                            advanced diagnostic AI.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-label-md text-on-surface dark:text-slate-300">
                                <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                                Adaptive Knowledge Maps
                            </li>
                            <li className="flex items-center gap-2 text-label-md text-on-surface dark:text-slate-300">
                                <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                                Personalized Feedback loops
                            </li>
                        </ul>
                    </div>
                    {/* Pillar 2 (Normal Theme) */}
                    <div className="glass-card p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 scroll-reveal"
                        >
                        <div
                            className="w-16 h-16 bg-white dark:bg-slate-900 shadow-sm rounded-xl flex items-center justify-center mb-6 border border-outline-variant/30 dark:border-slate-800 text-trust-blue dark:text-indigo-400 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-4xl" data-weight="fill">route</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-trust-blue dark:text-white mb-4">Career
                            Pathways</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant dark:text-slate-400 mb-6">
                            Bridging the gap between education and industry with AI-driven career mapping and
                            professional development.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-label-md text-on-surface dark:text-slate-300">
                                <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                                Skills-to-Market Mapping
                            </li>
                            <li className="flex items-center gap-2 text-label-md text-on-surface dark:text-slate-300">
                                <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                                Industry Internship Matching
                            </li>
                        </ul>
                    </div>
                    {/* Pillar 3 */}
                    <div className="glass-card p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 scroll-reveal"
                        >
                        <div
                            className="w-16 h-16 bg-white dark:bg-slate-900 shadow-sm rounded-xl flex items-center justify-center mb-6 border border-outline-variant/30 dark:border-slate-800 text-trust-blue dark:text-indigo-400 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-4xl" data-weight="fill">rocket_launch</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-trust-blue dark:text-white mb-4">
                            Entrepreneurship Readiness</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant dark:text-slate-400 mb-6">
                            Fostering an innovation mindset with hands-on labs and Sudarshan AI-powered business
                            simulation tools.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-label-md text-on-surface dark:text-slate-300">
                                <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                                Venture Launchpad Access
                            </li>
                            <li className="flex items-center gap-2 text-label-md text-on-surface dark:text-slate-300">
                                <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                                Financial Literacy Modules
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Sudarshan AI Feature Deep Dive */}
        <section className="py-section-padding bg-surface-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 scroll-reveal">
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_55px_-12px_rgba(0,71,171,0.15)] border border-white/55 dark:border-slate-800/80 bg-white/20 dark:bg-slate-900/35 backdrop-blur-xl p-2.5 aspect-[16/10]"
                            id="sudarshan-dashboard-container">
                            <ImageWithSkeleton
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVJzfp-VDjUE3IqLOVIQWbG8LkC1-5eagRne71KDjqHFYqYZx35zZIPiqvgZAcFZrGlDj8SnF2kDYeyze-fGYaPjpkGDbzbEX8PULNluJSWVPor37nJFiHNafKjECzkHwm9Hn-cQodJOP-eG7kmQDkxifKU2CKkSfLsXEHNFN8bD1PmFk4iRLdtlVH5u9XPQuYtuk9-mIf8jOax0DD22zTm0IFWc0Vq6HzLwYVmUK5eVd-HuM6LBxide7jwOL_CL8CJ2bxWrUloEY"
                                alt="Sudarshan AI Dashboard UI"
                                wrapperClassName="relative w-full overflow-hidden rounded-[1.25rem] bg-slate-200 dark:bg-slate-800 aspect-[16/10]"
                                className="w-full h-auto rounded-[1.25rem] shadow-md"
                            />
                            <div
                                className="absolute inset-2.5 rounded-[1.25rem] bg-gradient-to-t from-trust-blue/15 dark:from-slate-950/40 to-transparent pointer-events-none z-10">
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 scroll-reveal">
                        <div className="flex items-center gap-3 mb-6">
                            <span
                                className="material-symbols-outlined text-[#3B1595] dark:text-indigo-400 text-3xl">auto_awesome</span>
                            <h2 className="font-headline-lg text-headline-lg text-[#1E1B4B] dark:text-white">Meet Sudarshan
                                AI</h2>
                        </div>
                        <p className="font-body-lg text-body-lg text-slate-600 dark:text-slate-300 mb-8">
                            Our proprietary Sudarshan AI Copilot is the heart of the IGYAN AI OS. It acts as a 24/7
                            personal tutor for students and an administrative assistant for educators, ensuring no
                            talent goes untapped.
                        </p>
                        <div className="space-y-8">
                            {/* Feature 1 */}
                            <div className="flex gap-4 group">
                                <div
                                    className="shrink-0 w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 text-[#3B1595] dark:text-indigo-400 flex items-center justify-center transition-colors group-hover:bg-[#3B1595] group-hover:text-white dark:group-hover:bg-indigo-600">
                                    <span className="material-symbols-outlined">psychology</span>
                                </div>
                                <div>
                                    <h4
                                        className="font-headline-md text-[20px] text-[#1E1B4B] dark:text-white mb-1 transition-colors">
                                        Intelligent Lesson Planning</h4>
                                    <p className="font-body-md text-body-md text-slate-500 dark:text-slate-400">Sudarshan
                                        generates context-aware lesson plans that align with global standards while
                                        meeting local classroom needs.</p>
                                </div>
                            </div>
                            {/* Feature 2 */}
                            <div className="flex gap-4 group">
                                <div
                                    className="shrink-0 w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 text-[#3B1595] dark:text-indigo-400 flex items-center justify-center transition-colors group-hover:bg-[#3B1595] group-hover:text-white dark:group-hover:bg-indigo-600">
                                    <span className="material-symbols-outlined">forum</span>
                                </div>
                                <div>
                                    <h4
                                        className="font-headline-md text-[20px] text-[#1E1B4B] dark:text-white mb-1 transition-colors">
                                        Student Mentor Bot</h4>
                                    <p className="font-body-md text-body-md text-slate-500 dark:text-slate-400">Real-time
                                        academic support, concept explanation, and career guidance tailored to each
                                        student's unique profile.</p>
                                </div>
                            </div>
                            {/* Feature 3 */}
                            <div className="flex gap-4 group">
                                <div
                                    className="shrink-0 w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 text-[#3B1595] dark:text-indigo-400 flex items-center justify-center transition-colors group-hover:bg-[#3B1595] group-hover:text-white dark:group-hover:bg-indigo-600">
                                    <span className="material-symbols-outlined">monitoring</span>
                                </div>
                                <div>
                                    <h4
                                        className="font-headline-md text-[20px] text-[#1E1B4B] dark:text-white mb-1 transition-colors">
                                        Predictive Analytics</h4>
                                    <p className="font-body-md text-body-md text-slate-500 dark:text-slate-400">Identify
                                        at-risk students before grades drop and recommend high-impact interventions
                                        automatically.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Feature Tabs Extracted From IGYANAI */}
        <section className="py-section-padding bg-surface-container-low dark:bg-slate-900/40 transition-colors duration-300">
            <div className="max-w-container-max mx-auto px-margin-desktop scroll-reveal">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-[#3B1595] dark:text-indigo-400 font-label-sm text-label-sm mb-4 border border-indigo-200 dark:border-indigo-800">
                        <span className="material-symbols-outlined text-[14px]">category</span>
                        <span className="font-semibold tracking-wide">Platform Capabilities</span>
                    </div>
                    <h2 className="font-headline-xl text-headline-xl text-[#1E1B4B] dark:text-white font-extrabold tracking-tight">
                        Built for Every Journey
                    </h2>
                </div>
                <FeatureTabs />
            </div>
        </section>

        {/* Latest Insights Section */}
        <section
            className="py-section-padding bg-surface dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-container-max mx-auto px-margin-desktop scroll-reveal">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/80 text-trust-blue dark:text-sky-400 font-label-sm text-label-sm mb-4 border border-slate-200 dark:border-slate-800">
                            <span className="material-symbols-outlined text-[14px]">article</span>
                            <span className="font-semibold tracking-wide">Knowledge Hub</span>
                        </div>
                        <h2
                            className="font-headline-xl text-4xl md:text-5xl text-slate-900 dark:text-white font-extrabold tracking-tight">
                            Latest Insights</h2>
                    </div>
                    <a href="/insights"
                        className="inline-flex items-center gap-2 font-bold text-trust-blue dark:text-sky-400 hover:text-opacity-80 transition-opacity group">
                        View All Articles <span
                            className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog 1 */}
                    <div className="group flex flex-col glass-card overflow-hidden cursor-pointer"
                        >
                        <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Rural Education AI"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                            <div
                                className="absolute top-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md">
                                Indian Education</div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div
                                className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                                <span>Oct 12, 2025</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                <span>5 min read</span>
                            </div>
                            <h3
                                className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#00A3FF] transition-colors line-clamp-2 leading-tight">
                                How AI is Reshaping Rural Education in India</h3>
                            <p
                                className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                                Bridging the digital divide with adaptive learning technologies that operate effectively
                                in low-bandwidth environments.</p>
                            <div className="flex items-center gap-2 text-[#00A3FF] font-semibold text-sm">
                                Read Article <span
                                    className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="group flex flex-col glass-card overflow-hidden cursor-pointer"
                        >
                        <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="EdTech Trends"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                            <div
                                className="absolute top-4 left-4 bg-[#00A3FF] text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md">
                                EdTech Trends</div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div
                                className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                                <span>Sep 28, 2025</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                <span>7 min read</span>
                            </div>
                            <h3
                                className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#00A3FF] transition-colors line-clamp-2 leading-tight">
                                Top 5 EdTech Trends to Watch in 2026</h3>
                            <p
                                className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                                From generative AI assistants for teachers to predictive analytics for student
                                retention.</p>
                            <div className="flex items-center gap-2 text-[#00A3FF] font-semibold text-sm">
                                Read Article <span
                                    className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </div>

                    {/* Blog 3 */}
                    <div className="group flex flex-col glass-card overflow-hidden cursor-pointer"
                        >
                        <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="NEP 2020"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                             <div
                                className="absolute top-4 left-4 bg-trust-blue text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md">
                                NEP 2020</div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div
                                className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                                <span>Sep 15, 2025</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                <span>6 min read</span>
                            </div>
                            <h3
                                className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#00A3FF] transition-colors line-clamp-2 leading-tight">
                                Aligning AI with the National Education Policy 2020</h3>
                            <p
                                className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                                How institutions can leverage intelligent systems to meet the holistic assessment and
                                multi-disciplinary goals.</p>
                            <div className="flex items-center gap-2 text-[#00A3FF] font-semibold text-sm">
                                Read Article <span
                                    className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section
            className="py-section-padding bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-950 dark:from-slate-950 dark:via-[#191535] dark:to-slate-950 relative overflow-hidden transition-all duration-300">
            <div className="max-w-container-max mx-auto px-margin-desktop text-center relative z-10 scroll-reveal">
                <h2 className="font-headline-xl text-headline-xl text-white mb-stack-md">Ready to Transform Your School?
                </h2>
                <p
                    className="font-body-lg text-body-lg text-indigo-200 dark:text-slate-300 mb-stack-lg max-w-2xl mx-auto opacity-90">
                    Join forward-thinking institutions worldwide in deploying the first AI-native operating system for
                    modern talent.
                </p>
                <div className="flex flex-col sm:flex-row gap-gutter justify-center items-center">
                    <a href="/contact"
                        className="bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 px-10 py-4 rounded-full font-headline-md text-[20px] shadow-lg hover:scale-105 active:scale-95 transition-all">
                        Partner with us
                    </a>
                    <a href="/contact"
                        className="text-white border border-white/20 px-10 py-4 rounded-full font-headline-md text-[20px] hover:bg-white/10 transition-all backdrop-blur-sm">
                        Request a Demo
                    </a>
                </div>
            </div>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                >
            </div>
        </section>
    </main>

    {/* Footer */}
    <Footer />

    

    {/* Floating Contact Buttons */}
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="mailto:igyan.ai.team@gmail.com" className="w-14 h-14 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all border border-outline-variant/30 dark:border-slate-700" title="Email Us">
            <span className="material-symbols-outlined text-[28px]">mail</span>
        </a>
        <a href="https://wa.me/" target="_blank" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all" title="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
        </a>
    </div>
    

    </>
  );
}

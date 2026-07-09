'use client';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'igyan' | 'industry'>('igyan');
  const [igyanFilter, setIgyanFilter] = useState('All Updates');
  const [industryFilter, setIndustryFilter] = useState('All');

  return (
    <>
      
    {/* TopNavBar */}
    <Navbar />

    <main className="relative pt-20">
        {/* Background Atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none opacity-40 overflow-hidden">
            <div className="absolute top-[-100px] left-[-20%] w-[60%] h-[600px] bg-primary-fixed rounded-full blur-[120px] dark:bg-indigo-950/40"></div>
            <div className="absolute top-[100px] right-[-20%] w-[60%] h-[600px] bg-tertiary-fixed rounded-full blur-[120px] dark:bg-purple-950/30"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-gutter max-w-container-max mx-auto text-center scroll-reveal">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trust-blue/10 text-trust-blue font-label-sm text-label-sm mb-6 border border-trust-blue/20 dark:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-900/50 backdrop-blur-sm">
                <span className="material-symbols-outlined text-[14px]">pause</span>
                <span className="font-semibold tracking-wide">Insights & Knowledge Hub</span>
            </div>
            
            {/* Title */}
            <h1 className="font-headline-xl text-[48px] md:text-[64px] text-on-surface dark:text-white mb-4 mx-auto tracking-tight font-extrabold leading-tight">
                Insights
            </h1>
            
            {/* Subtitle */}
            <p className="font-body-lg text-body-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
                Stay updated with the latest from I-GYAN AI and the education technology industry.
            </p>
            
            <div className="inline-flex bg-white dark:bg-surface dark:bg-slate-950-container-low border border-slate-200 dark:border-slate-800/80 rounded-xl p-1 mb-14 shadow-xl">
                <button 
                    onClick={() => setActiveTab('igyan')}
                    className={`px-6 py-2.5 rounded-lg font-label-md text-[14px] font-semibold transition-colors ${activeTab === 'igyan' ? 'bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:text-indigo-400 dark:hover:text-white'}`}>
                    I-GYAN AI Blogs
                </button>
                <button 
                    onClick={() => setActiveTab('industry')}
                    className={`px-6 py-2.5 rounded-lg font-label-md text-[14px] font-semibold transition-all ${activeTab === 'industry' ? 'bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:text-indigo-400 dark:hover:text-white'}`}>
                    Industry Insights
                </button>
            </div>
            
            {/* I-GYAN AI Blogs Content */}
            <div id="igyan-blogs-content" className={activeTab === 'igyan' ? "w-full" : "hidden"}>
                {/* I-GYAN AI Blogs Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto">
                    {['All Updates', 'Product Updates', 'Company News', 'Success Stories', 'Events & Webinars'].map(filter => (
                        <button 
                            key={filter}
                            onClick={() => setIgyanFilter(filter)}
                            className={`px-5 py-2 rounded-full font-label-sm text-[13px] transition-all ${igyanFilter === filter ? 'bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 font-semibold shadow-md' : 'bg-white dark:bg-surface dark:bg-slate-950-container-low border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:text-indigo-400 dark:hover:text-white hover:border-sky-200 dark:hover:border-slate-600'}`}>
                            {filter}
                        </button>
                    ))}
                </div>
                {/* Blog Grid for I-GYAN AI Blogs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                    {/* Blog 1 */}
                    {(igyanFilter === 'All Updates' || igyanFilter === 'Product Updates') && (
                    <div className="group flex flex-col glass-card overflow-hidden cursor-pointer">
                        <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative flex items-center justify-center p-6">
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Product Update" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md z-10">Product Update</div>
                            <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                <span className="material-symbols-outlined text-white text-3xl">rocket_launch</span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                                <span>Nov 02, 2025</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                <span>3 min read</span>
                            </div>
                            <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:text-indigo-400 transition-colors line-clamp-2 leading-tight">Introducing I-GYAN Core 2.0: The Next Generation</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">Our biggest platform update yet brings enhanced AI capabilities, a completely redesigned teacher dashboard, and deep analytics integrations.</p>
                            <div className="flex items-center gap-2 text-primary dark:text-indigo-400 font-semibold text-sm">
                                Read Announcement <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                    )}

                    {/* Blog 2 */}
                    {(igyanFilter === 'All Updates' || igyanFilter === 'Success Stories') && (
                    <div className="group flex flex-col glass-card overflow-hidden cursor-pointer">
                        <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative flex items-center justify-center p-6">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Success Story" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md z-10">Success Story</div>
                            <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                <span className="material-symbols-outlined text-white text-3xl">workspace_premium</span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                                <span>Oct 18, 2025</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                <span>5 min read</span>
                            </div>
                            <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:text-indigo-400 transition-colors line-clamp-2 leading-tight">How Delhi Public School Increased Engagement by 40%</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">A deep dive into how one of India's premier networks utilized I-GYAN AI's personalized learning paths to dramatically boost student performance.</p>
                            <div className="flex items-center gap-2 text-primary dark:text-indigo-400 font-semibold text-sm">
                                Read Case Study <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                    )}

                    {/* Blog 3 */}
                    {(igyanFilter === 'All Updates' || igyanFilter === 'Events & Webinars') && (
                    <div className="group flex flex-col glass-card overflow-hidden cursor-pointer">
                        <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative flex items-center justify-center p-6">
                            <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Webinar" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md z-10">Webinar</div>
                            <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                <span className="material-symbols-outlined text-white text-3xl">cast</span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                                <span>Sep 25, 2025</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                <span>Watch Replay</span>
                            </div>
                            <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:text-indigo-400 transition-colors line-clamp-2 leading-tight">Masterclass: Optimizing Lesson Planning with AI</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">Watch our recorded session with leading educators on how to leverage I-GYAN AI tools to generate comprehensive, NEP-aligned lesson plans in minutes.</p>
                            <div className="flex items-center gap-2 text-primary dark:text-indigo-400 font-semibold text-sm">
                                Watch Video <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>

            <div id="industry-insights-content" className={activeTab === 'industry' ? "w-full" : "hidden"}>
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto">
                {['All', 'AI', 'Indian Education', 'Report', 'EdTech Trends', 'Teacher AI', 'EdTech Market', 'Industry Analysis', 'AI Ethics', 'Funding', 'Investment', 'Startups', 'NEP 2020', 'Education Policy', 'Implementation', 'India'].map(filter => (
                    <button 
                        key={filter}
                        onClick={() => setIndustryFilter(filter)}
                        className={`px-5 py-2 rounded-full font-label-sm text-[13px] transition-all ${industryFilter === filter ? 'bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 font-semibold shadow-md' : 'bg-white dark:bg-surface dark:bg-slate-950-container-low border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:text-indigo-400 dark:hover:text-white hover:border-sky-200 dark:hover:border-slate-600'}`}>
                        {filter}
                    </button>
                ))}
            </div>
            
            {/* Blog Grid (Mock Data) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                {/* Blog 1 */}
                {(industryFilter === 'All' || industryFilter === 'Indian Education' || industryFilter === 'India') && (
                <div className="group flex flex-col glass-card overflow-hidden cursor-pointer">
                    <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Indian Education" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                        <div className="absolute top-4 left-4 bg-secondary dark:bg-purple-600 text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md">Indian Education</div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                            <span>Oct 12, 2025</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                            <span>5 min read</span>
                        </div>
                        <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:text-indigo-400 transition-colors line-clamp-2 leading-tight">How AI is Reshaping Rural Education in India</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">Bridging the digital divide with adaptive learning technologies that operate effectively in low-bandwidth environments, bringing quality education to the last mile.</p>
                        <div className="flex items-center gap-2 text-primary dark:text-indigo-400 font-semibold text-sm">
                            Read Article <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </div>
                )}

                {/* Blog 2 */}
                {(industryFilter === 'All' || industryFilter === 'EdTech Trends') && (
                <div className="group flex flex-col glass-card overflow-hidden cursor-pointer">
                    <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="EdTech Trends" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                        <div className="absolute top-4 left-4 bg-primary dark:bg-indigo-600 text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md">EdTech Trends</div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                            <span>Sep 28, 2025</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                            <span>7 min read</span>
                        </div>
                        <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:text-indigo-400 transition-colors line-clamp-2 leading-tight">Top 5 EdTech Trends to Watch in 2026</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">From generative AI assistants for teachers to predictive analytics for student retention, explore the technological shifts dominating the global education sector.</p>
                        <div className="flex items-center gap-2 text-primary dark:text-indigo-400 font-semibold text-sm">
                            Read Article <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </div>
                )}

                {/* Blog 3 */}
                {(industryFilter === 'All' || industryFilter === 'NEP 2020' || industryFilter === 'Education Policy') && (
                <div className="group flex flex-col glass-card overflow-hidden cursor-pointer">
                    <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="NEP 2020" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md">NEP 2020</div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                            <span>Sep 15, 2025</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                            <span>6 min read</span>
                        </div>
                        <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:text-indigo-400 transition-colors line-clamp-2 leading-tight">Aligning AI with the National Education Policy 2020</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">How institutions can leverage intelligent systems to meet the holistic assessment and multi-disciplinary goals laid out in India's visionary NEP 2020.</p>
                        <div className="flex items-center gap-2 text-primary dark:text-indigo-400 font-semibold text-sm">
                            Read Article <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </div>
                )}
                
                {/* Blog 4 */}
                {(industryFilter === 'All' || industryFilter === 'Teacher AI' || industryFilter === 'AI') && (
                <div className="group flex flex-col glass-card overflow-hidden cursor-pointer">
                    <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Teacher AI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                        <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md">Teacher AI</div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                            <span>Aug 22, 2025</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                            <span>4 min read</span>
                        </div>
                        <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:text-indigo-400 transition-colors line-clamp-2 leading-tight">Empowering Educators: Copilots in the Classroom</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">Discover how AI copilots are acting as force multipliers, saving teachers up to 15 hours a week on administrative tasks, lesson planning, and grading.</p>
                        <div className="flex items-center gap-2 text-primary dark:text-indigo-400 font-semibold text-sm">
                            Read Article <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </div>
                )}

                {/* Blog 5 */}
                {(industryFilter === 'All' || industryFilter === 'Funding' || industryFilter === 'Investment' || industryFilter === 'Startups') && (
                <div className="group flex flex-col glass-card overflow-hidden cursor-pointer">
                    <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                        <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Funding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                        <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md">Funding</div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                            <span>Jul 10, 2025</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                            <span>8 min read</span>
                        </div>
                        <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:text-indigo-400 transition-colors line-clamp-2 leading-tight">Venture Capital Outlook for Indian EdTech Startups</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">An in-depth analysis of where smart money is moving within the B2B SaaS education market this quarter, focusing on AI-native infrastructure.</p>
                        <div className="flex items-center gap-2 text-primary dark:text-indigo-400 font-semibold text-sm">
                            Read Article <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </div>
                )}

                {/* Blog 6 */}
                {(industryFilter === 'All' || industryFilter === 'AI Ethics' || industryFilter === 'AI') && (
                <div className="group flex flex-col glass-card overflow-hidden cursor-pointer">
                    <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="AI Ethics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                        <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md">AI Ethics</div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                            <span>Jun 05, 2025</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                            <span>6 min read</span>
                        </div>
                        <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:text-indigo-400 transition-colors line-clamp-2 leading-tight">Navigating AI Ethics and Data Privacy in Schools</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">Establishing ethical guardrails for student data privacy while simultaneously leveraging the predictive power of machine learning models for early intervention.</p>
                        <div className="flex items-center gap-2 text-primary dark:text-indigo-400 font-semibold text-sm">
                            Read Article <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </div>
                )}
            </div>
            

            </div>
        </section>

        {/* Bento Stats Grid (Quick Insights) */}
        <section className="px-gutter max-w-container-max mx-auto py-stack-lg scroll-reveal" >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stat 1 */}
                <div className="glass-panel rounded-3xl p-8 vibe-glow-cyan border-primary/10 dark:border-slate-800">
                    <div className="flex justify-between items-start mb-6">
                        <span className="material-symbols-outlined text-primary dark:text-indigo-400 text-4xl">trending_up</span>
                        <span className="text-primary dark:text-indigo-400 font-label-xs text-label-xs bg-primary/10 dark:bg-indigo-950/40 px-2 py-1 rounded-md">+14.2%</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface dark:text-white mb-2">Institutional ROI</h3>
                    <p className="text-on-surface-variant dark:text-slate-400">Average increase in operational efficiency across partner schools in Q3 2024.</p>
                </div>
                {/* Stat 2 (Wide) */}
                <div className="glass-panel rounded-3xl p-8 md:col-span-2 relative overflow-hidden vibe-glow-violet border-primary/10 dark:border-slate-800">
                    <div className="absolute inset-0 data-grid opacity-50"></div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <h3 className="font-headline-md text-headline-md text-on-surface dark:text-white mb-2">Market Sentiment Index</h3>
                            <p className="text-on-surface-variant dark:text-slate-400 max-w-md">Real-time tracking of AI adoption readiness in the K-12 sector globally.</p>
                        </div>
                        <div className="mt-8 h-32 flex items-end gap-1">
                            <div className="w-full bg-primary/20 dark:bg-indigo-600/20 border border-primary/10 dark:border-indigo-500/20 rounded-t-lg transition-all hover:bg-primary/40 dark:hover:bg-indigo-500/40" ></div>
                            <div className="w-full bg-primary/20 dark:bg-indigo-600/20 border border-primary/10 dark:border-indigo-500/20 rounded-t-lg transition-all hover:bg-primary/40 dark:hover:bg-indigo-500/40" ></div>
                            <div className="w-full bg-primary/20 dark:bg-indigo-600/20 border border-primary/10 dark:border-indigo-500/20 rounded-t-lg transition-all hover:bg-primary/40 dark:hover:bg-indigo-500/40" ></div>
                            <div className="w-full bg-primary/20 dark:bg-indigo-600/20 border border-primary/10 dark:border-indigo-500/20 rounded-t-lg transition-all hover:bg-primary/40 dark:hover:bg-indigo-500/40" ></div>
                            <div className="w-full bg-primary/20 dark:bg-indigo-600/20 border border-primary/10 dark:border-indigo-500/20 rounded-t-lg transition-all hover:bg-primary/40 dark:hover:bg-indigo-500/40" ></div>
                            <div className="w-full bg-primary/20 dark:bg-indigo-600/20 border border-primary/10 dark:border-indigo-500/20 rounded-t-lg transition-all hover:bg-primary/40 dark:hover:bg-indigo-500/40" ></div>
                            <div className="w-full bg-primary/20 dark:bg-indigo-600/20 border border-primary/10 dark:border-indigo-500/20 rounded-t-lg transition-all hover:bg-primary/40 dark:hover:bg-indigo-500/40" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* White Papers & Market Reports Section */}
        <section className="bg-surface-container-low dark:bg-slate-900/30 py-stack-lg border-y border-outline-variant/20 dark:border-slate-800/60 scroll-reveal">
            <div className="px-gutter max-w-container-max mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-white mb-4">Strategic Intelligence</h2>
                        <p className="text-on-surface-variant dark:text-slate-400 max-w-2xl">Download our peer-reviewed research and implementation guides designed for CIOs and Board Directors.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Resource Card 1 */}
                    <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-outline-variant/30 dark:border-slate-800 hover:border-primary/50 dark:hover:border-indigo-500/50 hover:shadow-xl transition-all">
                        <div className="h-48 overflow-hidden bg-surface-container-highest dark:bg-slate-950 relative">
                            <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Modern boardroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3YPvPHyDG3E8H8xrh-Ui6Sfyi2q4G_i3Bm0vALFZPH0_AtwGlRQCq-d6D2-9so7eTV6ZODYcJwu-hWzT1ScIC4z4689tKpfqsTSeWDrDHHPUTYZci_yQGwYtHLTXZYM4pftsPYTZd2sTDE3vWH8qGgGjZk1qVYvMIBj2IUdZOq-OQrFwF7JTEz0v8DNUySU2V8ABw7EfACEO4BUmrfiv81NmDhXAicLygHCQSMURjS9ifA7dxHlIOZB5ii-it8_aCq1DzWZGNrFE" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-primary/90 dark:bg-indigo-600/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-label-xs font-label-xs">WHITE PAPER</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h4 className="font-headline-md text-body-md font-bold text-on-surface dark:text-white mb-4 leading-snug">The AI Integration Lifecycle: 2024 Framework</h4>
                            <p className="text-on-surface-variant dark:text-slate-400 mb-6 text-sm">A 45-page comprehensive study on moving from pilot programs to full institutional scale.</p>
                            <a className="inline-flex items-center gap-2 text-primary dark:text-indigo-400 font-bold hover:gap-3 transition-all" href="/contact">
                                Download PDF
                                <span className="material-symbols-outlined text-sm">download</span>
                            </a>
                        </div>
                    </div>
                    {/* Resource Card 2 */}
                    <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-outline-variant/30 dark:border-slate-800 hover:border-tertiary/50 dark:hover:border-purple-500/50 hover:shadow-xl transition-all">
                        <div className="h-48 overflow-hidden bg-surface-container-highest dark:bg-slate-950 relative">
                            <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Global map data visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAumNoPB2-EVRAmCctg-CS7cDCDqnBU4C9QOKusXshWWzPT-zRuqFd5bKyasO5buIVwg0LvKWHIiXc5DhrzlkHaty2Y568UE8N81rZ0cLuR1aW2y6xHATs9FuDXKOKLDUIWj8rMAd1gbsBkAHA80BAv60tJG7pUfEeSRFpYxW91Z8iruOm0Gnj_yKNZLKpEX7RF2W-Ge62I3ggXhlThTVNPg7HXi0bZ2BkUq4YVjBCePVc3kHAJj8L3Yu0R9QVzhheGmj0ut5QZ6zM" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-tertiary/90 dark:bg-purple-600/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-label-xs font-label-xs">MARKET REPORT</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h4 className="font-headline-md text-body-md font-bold text-on-surface dark:text-white mb-4 leading-snug">Global EdTech Spend & Adoption Trends</h4>
                            <p className="text-on-surface-variant dark:text-slate-400 mb-6 text-sm">Analyzing current investment patterns in adaptive learning platforms across 12 markets.</p>
                            <a className="inline-flex items-center gap-2 text-tertiary dark:text-purple-400 font-bold hover:gap-3 transition-all" href="/contact">
                                View Interactive Report
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>
                    {/* Resource Card 3 */}
                    <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-outline-variant/30 dark:border-slate-800 hover:border-primary/50 dark:hover:border-indigo-500/50 hover:shadow-xl transition-all">
                        <div className="h-48 overflow-hidden bg-surface-container-highest dark:bg-slate-950 relative">
                            <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Futuristic staircase" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB--ZivkSU5NRNrgBiLsPY6ZIHW-6Pd2YfuXMkJU00jirZugYBz5ufGeYCn07bBF56MEMVNOjbeOCRtV0UVQicV6wFkDAnrJdTq_-SYWS4vDhcC3c13NOXsd35Pz6m8MpfHXjza8X-0fQJtbqc7lko1543TOpn1bc4EYZh-MXx_9vO5MQ2Z0xMu7RIf_FkqxIODEzHttir8akfiGPFSo8vT9DPhc5IiC5jOCvi2FbU8P20H6U_RcUd1Cwr7KEFhxBJOI0Jmtpy6S6s" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-primary/90 dark:bg-indigo-600/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-label-xs font-label-xs">STRATEGIC FRAMEWORK</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h4 className="font-headline-md text-body-md font-bold text-on-surface dark:text-white mb-4 leading-snug">Sustainable Digital Infrastructure 3.0</h4>
                            <p className="text-on-surface-variant dark:text-slate-400 mb-6 text-sm">Guidelines for future-proofing your campus technology stack for next-gen pedagogical shifts.</p>
                            <a className="inline-flex items-center gap-2 text-primary dark:text-indigo-400 font-bold hover:gap-3 transition-all" href="/contact">
                                Request Access
                                <span className="material-symbols-outlined text-sm">lock</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Sudarshan AI Intelligence Report Section */}
        <section className="py-stack-lg px-gutter max-w-container-max mx-auto overflow-hidden scroll-reveal">
            <div className="relative bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-16 border border-outline-variant/30 dark:border-slate-800 vibe-glow-violet">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-tertiary dark:bg-purple-600 flex items-center justify-center shadow-md">
                                <span className="material-symbols-outlined text-white">analytics</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-tertiary dark:text-purple-400">Sudarshan AI Intelligence</h3>
                        </div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-white mb-6">Predictive ROI Analysis</h2>
                        <p className="text-on-surface-variant dark:text-slate-400 text-body-lg mb-8">
                            Our proprietary Sudarshan AI engine processes over 140 variables to predict the financial and academic ROI of technological transitions within individual school systems.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-primary dark:text-indigo-400 mt-1">check_circle</span>
                                <div>
                                    <h4 className="font-bold text-on-surface dark:text-white">Predictive Enrollment Models</h4>
                                    <p className="text-sm text-on-surface-variant dark:text-slate-400">Forecast student retention and new enrollments based on AI curriculum deployment.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-primary dark:text-indigo-400 mt-1">check_circle</span>
                                <div>
                                    <h4 className="font-bold text-on-surface dark:text-white">Resource Optimization Data</h4>
                                    <p className="text-sm text-on-surface-variant dark:text-slate-400">Identify underutilized assets and automate administrative overhead reduction.</p>
                                </div>
                            </div>
                        </div>
                        <a href="/contact" className="mt-12 px-8 py-4 bg-tertiary dark:bg-purple-600 text-white rounded-full font-bold inline-flex items-center gap-2 hover:shadow-[0_10px_20px_rgba(82,117,172,0.3)] transition-all">
                            Request Custom ROI Audit
                        </a>
                    </div>
                    {/* Visual Data Preview */}
                    <div className="bg-surface-container-low dark:bg-slate-950 rounded-3xl p-8 border border-outline-variant/30 dark:border-slate-800">
                        <div className="flex justify-between items-center mb-8">
                            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant dark:text-slate-400">Projection Model v4.2</h4>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary dark:bg-indigo-400"></div>
                                <div className="w-2 h-2 rounded-full bg-tertiary dark:bg-purple-400"></div>
                                <div className="w-2 h-2 rounded-full bg-outline-variant dark:bg-slate-700"></div>
                            </div>
                        </div>
                        {/* Chart Mockup */}
                        <div className="w-full h-64 relative mb-6">
                            <svg className="w-full h-full" viewBox="0 0 400 200">
                                <line stroke="rgba(0,0,0,0.05)" className="dark:stroke-slate-800" strokeWidth="1" x1="0" x2="400" y1="180" y2="180"></line>
                                <line stroke="rgba(0,0,0,0.03)" className="dark:stroke-slate-800/50" strokeWidth="1" x1="0" x2="400" y1="120" y2="120"></line>
                                <line stroke="rgba(0,0,0,0.03)" className="dark:stroke-slate-800/50" strokeWidth="1" x1="0" x2="400" y1="60" y2="60"></line>
                                <path className="line-chart-path" d="M 0 160 Q 50 140, 100 150 T 200 80 T 300 40 T 400 20" fill="none" stroke="#0059bb" strokeWidth="3"></path>
                                <path d="M 0 170 Q 50 165, 100 170 T 200 140 T 300 130 T 400 110" fill="none" stroke="#5275ac" strokeDasharray="6,4" strokeWidth="3"></path>
                            </svg>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-outline-variant/20 dark:border-slate-800/60 shadow-sm">
                                <p className="text-xs text-on-surface-variant dark:text-slate-400 mb-1">Projected Savings</p>
                                <p className="text-2xl font-bold text-primary dark:text-indigo-400">$240k<span className="text-sm font-normal ml-1">/yr</span></p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-outline-variant/20 dark:border-slate-800/60 shadow-sm">
                                <p className="text-xs text-on-surface-variant dark:text-slate-400 mb-1">Efficiency Delta</p>
                                <p className="text-2xl font-bold text-tertiary dark:text-purple-400">+32%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-stack-lg text-center px-gutter scroll-reveal">
            <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-white mb-8">Ready to evolve your institution?</h2>
            <a href="/contact" className="inline-flex bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 px-8 py-4 rounded-full font-bold whitespace-nowrap shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-all">Join Insights Network</a>
            <p className="mt-6 text-sm text-on-surface-variant dark:text-slate-400">Used by 150+ institutional leaders worldwide.</p>
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

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      
    {/* TopNavBar */}
    <Navbar />

    <main className="pt-28 md:pt-32">
        {/* Section 1: Hero */}
        <section className="relative min-h-[640px] flex items-center overflow-hidden bg-gradient-to-b from-[#3B1595] via-[#2F1078] to-[#0A051C] dark:from-[#0E0F1E] dark:via-[#191535] dark:to-[#0A051C] text-white py-16 transition-colors duration-300">
            {/* Background Sparks/Star Decor (Floating animation) */}
            <div className="absolute left-6 md:left-12 top-1/4 hidden sm:block animate-float opacity-40 text-amber-500 dark:text-amber-400">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
            </div>
            <div className="absolute right-6 md:right-16 top-1/3 hidden sm:block animate-float-slow opacity-50 text-indigo-400 dark:text-indigo-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
            </div>

            {/* Background Image Overlay with Skeleton */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900" id="hero-bg-container">
                <img alt="Futuristic university campus at dawn" className="w-full h-full object-cover opacity-20 mix-blend-overlay transition-opacity duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB2kzjFT4zdXIyIQzYIaQoip9frhxdMXIuJ08_72bpDije92JwFc0piLPxQUl_jRkfEtw8i2twBOt0R2xpNQxTUllWT4vMAyK5fkvW8F3wIL8ZGKcdsSDBpSLJTfYMl4Yx6gufpUaWVsI21j_0HXBLS5LDNSHR9LU-yAtWfMryRwaq-lY4T98df5S3AcB51DFdggnm-5CnAUTkncFM1J_ccGzjEzEEDYMjiNKVLX3QQPBnSz9h088c90SWcH0lEmYNMwBftTjXTWA"
                     />
            </div>

            <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
                <div className="max-w-3xl scroll-reveal">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-indigo-500/10 dark:bg-slate-800/80 text-indigo-300 px-4 py-1.5 rounded-full mb-6 shadow-sm border border-indigo-100/10">
                        <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Our Mission</span>
                    </div>
                    {/* Central Bold Typography */}
                    <h1 className="font-headline-xl text-headline-xl md:text-[56px] text-white mb-6 leading-[1.1] font-extrabold tracking-tight">
                        Empowering the Next Generation of Talent
                    </h1>
                    {/* Subheadline */}
                    <p className="font-body-lg text-body-lg text-indigo-100 dark:text-slate-300 mb-10 leading-relaxed">
                        We are building the world's first AI-native operating system for schools. IGYAN AI bridges the gap between traditional institutions and the rapidly evolving demands of the global workforce, ensuring every student has a personalized path to success.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#story" className="bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 px-8 py-4 rounded-full font-label-md text-label-md font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5">
                            Learn More <span className="material-symbols-outlined animate-bounce">arrow_downward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 2: Our Story */}
        <section id="story" className="py-section-padding bg-surface-white dark:bg-slate-950 transition-colors duration-300">
            <div className="px-margin-desktop max-w-container-max mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="scroll-reveal">
                        <h2 className="font-headline-lg text-headline-lg text-trust-blue dark:text-white mb-8">Our Story: From Idea to Intelligence</h2>
                        <div className="space-y-6 font-body-md text-body-md text-on-surface-variant dark:text-slate-400 leading-relaxed">
                            <p>
                                IGYAN AI began with a simple but profound observation: while the world was being transformed by technology, the foundational systems of education remained largely unchanged. We saw students graduating into an AI-driven economy with tools from a pre-digital era.
                            </p>
                            <p>
                                Our journey led to the development of <span className="text-trust-blue dark:text-indigo-400 font-semibold">Sudarshan AI</span>, a sophisticated copilot ecosystem designed specifically for the educational landscape. Named after the symbolic wheel of wisdom and protection, Sudarshan AI isn't just an assistant—it's a lifelong learning companion that evolves with the user.
                            </p>
                            <p>
                                Today, IGYAN AI serves as the operating system for forward-thinking institutions, turning classrooms into incubators for entrepreneurship, creativity, and technical mastery.
                            </p>
                        </div>
                        
                        {/* Founder Team Avatars */}
                        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <div className="flex -space-x-3">
                                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800 overflow-hidden relative" id="founder1-container">
                                    <img alt="Female tech founder" className="w-full h-full object-cover transition-opacity duration-300" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuApYcAsz920iT3ZLiNwbpcASGTlRl7ZXig2GfYdv90jt85zQ5blh34nZA5U6izjkuvzpR7r2K_wN6nG9eNI6gBxpOZijLKkXnUES02D2WF1E3DZeaNwbZ-BqycXWvz7M8qW0IcZI4dlot2S5HhyNdiv5b5XEqVvEcAObDhu9WVfAht5Ev0IF42Ncdq5cNNhywM7HU4wrZb8IkXs1tQSyZdNMunT05jBPzOAQFivJbtbmaKYE5_-i3psVvsjYajn-d_ODe8WCcCMN7Q"
                                         />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800 overflow-hidden relative" id="founder2-container">
                                    <img alt="Male data scientist founder" className="w-full h-full object-cover transition-opacity duration-300" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg4VwGlMwTPAR82Fdh6cXxVIisO6etFjtz8_4kSqfOW6oHSWTigRlXxcm8Sf-RVDUbYqIoRGtLwsMo-2_DGVHN1dXsUwvT0iYW-wf9tYaLdDwVUtL_wFdvAzhvMwfJbaKpOtxhOMnN72uYBGj8ZV5siyRsAfxZwdZMVlw1D41x1K5fpmnt85kbtEocnqhRToQdO9QlcK-NNnElTl4s3N66-V7TH_WE-wb8u5S5lk6h0Jb9AieaHJbKNRHsJRjUkoY-IO4wCPCJNOU"
                                         />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800 overflow-hidden relative" id="founder3-container">
                                    <img alt="Young entrepreneur founder" className="w-full h-full object-cover transition-opacity duration-300" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnGwYKK1HQ4uZscfoJnmybWAFySfeIze5PcGw_3tILsd87A9HBDGzWTvxGk_1XIfUyvKcupMh2tg0alfo7qSw8itxidO5D9hFvnaEQGspx_VIJikWVKA-IVECRcHz3uCPEBQ1ZNsGSW_2Fy6piZmUcPoJX8b-w7ZxIZYxdSWlzbm8LpOIvqHgpBGvz72PbNB26zP4BtKBACiR9bgFH354ltJj-zRw_vV-cN9DQGBAa-zwHHLT_45FVMVQAQQ10pbnwPLlcRxFoHtc"
                                         />
                                </div>
                            </div>
                            <p className="font-label-sm text-label-sm text-slate-500 dark:text-slate-400">Founded by a team of educators, engineers, and visionaries.</p>
                        </div>
                    </div>
                    
                    {/* Ethereal AI Art Card */}
                    <div className="relative scroll-reveal" >
                        <div className="ai-border p-4 rounded-3xl shadow-2xl dark:shadow-[0_0_50px_-12px_rgba(99,102,241,0.25)]">
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900" id="sphere-img-container">
                                <img alt="Glowing Ethereal Blue Sphere representing Sudarshan AI" className="w-full h-full object-cover transition-opacity duration-500" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvk5CnG4TVjAFG8KIzWx6e6PICTeCVXZLpZSe_RneWmTIisGpSXAWT36ncNgAprslYWKOkDt3vAU8S6ej_tKDbEPYuO3PNCOnXBFcoVC-kdj6JlXDssoNePsnC4n_wjLROEE2tyFmnPmzxhFZuAat8qWdtzSPPdjRBugfz-lZYxhxc03v53dEHEzzeun_yEkoDpGeHhUnoJHQgIgfro9bgA2VSavalMiK_7Ynygyh6kj5fXap4Pu2vD6gLFAREa1MAm0GLlCkY8r8"
                                     />
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-container/20 rounded-full blur-3xl -z-10 animate-float-slow"></div>
                        <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl -z-10 animate-float"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 3: Core Values */}
        <section className="py-section-padding bg-surface-container-low dark:bg-slate-900/40 transition-colors duration-300">
            <div className="px-margin-desktop max-w-container-max mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
                    <h2 className="font-headline-lg text-headline-lg text-trust-blue dark:text-white mb-4">Guided by Our Core Values</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-slate-400">
                        Our principles are the foundation of every line of code we write and every partnership we form.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {/* Value 1: Trust */}
                    <div className="glass-card p-10 rounded-3xl group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 scroll-reveal">
                        <div className="w-16 h-16 bg-white dark:bg-slate-900 shadow-sm rounded-xl flex items-center justify-center mb-8 border border-outline-variant/30 dark:border-slate-800 text-trust-blue dark:text-indigo-400 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl" >verified_user</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-trust-blue dark:text-white mb-4">Trust</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant dark:text-slate-400 leading-relaxed">
                            We prioritize data privacy and ethical AI. Trust is the currency of education, and we ensure our platform is a safe harbor for student growth and institutional integrity.
                        </p>
                    </div>
                    {/* Value 2: Innovation */}
                    <div className="glass-card p-10 rounded-3xl group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 scroll-reveal" >
                        <div className="w-16 h-16 bg-white dark:bg-slate-900 shadow-sm rounded-xl flex items-center justify-center mb-8 border border-outline-variant/30 dark:border-slate-800 text-electric-cyan dark:text-indigo-400 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl" >lightbulb</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-trust-blue dark:text-white mb-4">Innovation</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant dark:text-slate-400 leading-relaxed">
                            We don't just follow trends; we set them. By integrating cutting-edge AI directly into the learning workflow, we create new possibilities for personalized education.
                        </p>
                    </div>
                    {/* Value 3: Impact */}
                    <div className="glass-card p-10 rounded-3xl group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 scroll-reveal" >
                        <div className="w-16 h-16 bg-white dark:bg-slate-900 shadow-sm rounded-xl flex items-center justify-center mb-8 border border-outline-variant/30 dark:border-slate-800 text-trust-blue dark:text-indigo-400 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl" >auto_graph</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-trust-blue dark:text-white mb-4">Impact</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant dark:text-slate-400 leading-relaxed">
                            Success is measured by student outcomes. We are dedicated to creating tangible pathways to careers, entrepreneurship, and lifelong achievement for every learner.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 4: Our Vision */}
        <section className="py-section-padding bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-950 dark:from-slate-950 dark:via-[#191535] dark:to-slate-950 relative overflow-hidden transition-all duration-300">
            <div className="px-margin-desktop max-w-container-max mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 scroll-reveal">
                        <h2 className="font-headline-xl text-headline-xl text-white mb-8">The Future of Talent is Motion</h2>
                        <p className="font-body-lg text-body-lg text-indigo-100 dark:text-slate-300 mb-12 leading-relaxed">
                            Our vision extends beyond the classroom. We imagine a world where the friction between learning and earning is eliminated. A world where an AI-native OS manages the complexities of curriculum, assessment, and career matching, allowing humans to focus on what they do best: creating, leading, and innovating.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="border-l-2 border-electric-cyan pl-6">
                                <div className="text-[36px] md:text-[40px] font-bold text-white mb-1 leading-none">1M+</div>
                                <div className="text-label-md text-indigo-200 dark:text-slate-400">Students Empowered by 2026</div>
                            </div>
                            <div className="border-l-2 border-electric-cyan pl-6">
                                <div className="text-[36px] md:text-[40px] font-bold text-white mb-1 leading-none">500+</div>
                                <div className="text-label-md text-indigo-200 dark:text-slate-400">Partner Institutions Globally</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 scroll-reveal" >
                        <div className="glass-card p-2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                            <div className="w-full aspect-[4/5] bg-slate-900 rounded-2xl overflow-hidden relative" id="vision-img-container">
                                <img alt="Student wearing AR learning headset looking at holographic map of career pathways" className="w-full h-full object-cover transition-opacity duration-700" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWEzflw_QdfcFXDAg5s3FM6M_9esE1QKbHa9KitDwkHsGbFm1sOYKnYx5_rs8WBTu1Ra4dak3SBOw4AsdL-ynFG65b4YR1BDTE5y9nWlvixsSgtrAyDP83iOc1Ar0Mpnm7XI6dNsmBkLPDe60TM7wwvr734EB0ENL498AO6pkm8BXeuU9GwFf7PUSsCpyZ6xyQ1OdXFBJzPODN4NdVze1tus2tT-6lBRAZSXBWqXi1ZCWIjEvkGnaWC8xeswx4407dxbmQ1z_szD4"
                                     />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                >
            </div>
        </section>

        {/* Section 5: CTA */}
        <section className="py-section-padding bg-surface-white dark:bg-slate-950 transition-colors duration-300">
            <div className="px-margin-desktop max-w-container-max mx-auto text-center scroll-reveal">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-secondary-container/10 text-secondary dark:text-indigo-400 border border-secondary-container/20">
                    <span className="material-symbols-outlined text-[18px]" >bolt</span>
                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Join the Revolution</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-trust-blue dark:text-white mb-6">Join Our Mission</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-slate-400 max-w-2xl mx-auto mb-10">
                    Whether you are a school leader looking to modernize your campus or a partner interested in the future of education, we want to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="/contact" className="w-full sm:w-auto bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 px-10 py-4 rounded-full font-label-md text-label-md font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-md">
                        Partner with Us
                    </a>
                    <a href="/contact" className="w-full sm:w-auto border-2 border-outline-variant/60 dark:border-slate-800 text-trust-blue dark:text-white px-10 py-4 rounded-full font-label-md text-label-md font-bold hover:bg-slate-100 dark:hover:bg-slate-900 transition-all active:scale-95">
                        Contact Team
                    </a>
                </div>
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

"use client";

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useState } from 'react';
import { sendContactEmail } from './actions';

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('first_name') as string,
      lastName: formData.get('last_name') as string,
      email: formData.get('email') as string,
      institution: formData.get('institution') as string,
      message: formData.get('message') as string,
    };
    const result = await sendContactEmail(data);
    
    if (result.success) {
      setIsSuccess(true);
    } else {
      setErrorMsg(result.error || "Failed to send message.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      
    {/* TopNavBar */}
    <Navbar />

    <main className="pt-28 md:pt-32">
        {/* Hero Intro Section */}
        <section className="relative bg-gradient-to-b from-[#3B1595] via-[#2F1078] to-[#0A051C] dark:from-[#0E0F1E] dark:via-[#191535] dark:to-[#0A051C] text-white py-20 overflow-hidden transition-colors duration-300">
            {/* Sparks/Stars */}
            <div className="absolute left-6 md:left-12 top-1/4 hidden sm:block animate-float opacity-40 text-amber-500">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
            </div>
            <div className="absolute right-6 md:right-16 top-1/3 hidden sm:block animate-float-slow opacity-50 text-orange-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
            </div>

            <div className="max-w-container-max mx-auto px-margin-desktop text-center relative z-10 scroll-reveal">
                <div className="inline-flex items-center gap-2 bg-[#FEEADB]/10 text-orange-300 px-4 py-1.5 rounded-full mb-6 border border-orange-100/10">
                    <span className="material-symbols-outlined text-[18px]">contact_support</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Connect With Us</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl md:text-[56px] text-white mb-6 font-extrabold tracking-tight">
                    Let's Build the Future of Learning
                </h1>
                <p className="font-body-lg text-body-lg text-indigo-100 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Have questions about our AI OS, institutional licensing, or partnership opportunities? Reach out, and our team will get in touch with you shortly.
                </p>
            </div>
        </section>

        {/* Main Form & Content */}
        <section className="py-section-padding bg-surface-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left: Support Channels & Details */}
                    <div className="lg:col-span-5 space-y-8 scroll-reveal">
                        <div>
                            <h2 className="font-headline-lg text-headline-lg text-trust-blue dark:text-white mb-4">Contact Information</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant dark:text-slate-400">
                                Connect with our global support and sales team for personalized advice and integration support.
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            {/* Card 1: Sales & Partnerships */}
                            <div className="glass-card p-6 rounded-3xl flex gap-4 hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-900 rounded-xl flex items-center justify-center text-trust-blue dark:text-indigo-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">handshake</span>
                                </div>
                                <div>
                                    <h4 className="font-headline-md text-body-md font-bold text-trust-blue dark:text-white">Partnerships</h4>
                                    <p className="font-body-md text-label-sm text-slate-500 dark:text-slate-400 mb-1">For schools, colleges, and enterprise licensing.</p>
                                    <a href="mailto:igyan.ai.team@gmail.com" className="font-label-md text-label-md text-trust-blue dark:text-indigo-400 hover:underline">igyan.ai.team@gmail.com</a>
                                </div>
                            </div>

                            {/* Card 2: Technical Support */}
                            <div className="glass-card p-6 rounded-3xl flex gap-4 hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-900 rounded-xl flex items-center justify-center text-trust-blue dark:text-indigo-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">support_agent</span>
                                </div>
                                <div>
                                    <h4 className="font-headline-md text-body-md font-bold text-trust-blue dark:text-white">Technical Help</h4>
                                    <p className="font-body-md text-label-sm text-slate-500 dark:text-slate-400 mb-1">For help with Sudarshan AI or student accounts.</p>
                                    <a href="mailto:igyan.ai.team@gmail.com" className="font-label-md text-label-md text-trust-blue dark:text-indigo-400 hover:underline">igyan.ai.team@gmail.com</a>
                                </div>
                            </div>

                            {/* Card 3: HQ Address */}
                            <div className="glass-card p-6 rounded-3xl flex gap-4 hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-900 rounded-xl flex items-center justify-center text-trust-blue dark:text-indigo-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">location_on</span>
                                </div>
                                <div>
                                    <h4 className="font-headline-md text-body-md font-bold text-trust-blue dark:text-white">Headquarters</h4>
                                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-slate-400 mt-1 leading-snug">
                                        IGYAN AI Innovation Lab<br/>
                                        Tech Park, Suite 402<br/>
                                        San Francisco, CA 94107
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right: Modern Breathtaking Contact Form */}
                    <div className="lg:col-span-7 scroll-reveal" >
                        <div className="ai-border p-8 md:p-10 rounded-3xl shadow-2xl dark:shadow-[0_0_50px_-12px_rgba(99,102,241,0.25)]">
                            <h3 className="font-headline-md text-headline-md text-trust-blue dark:text-white mb-6">Send us a Message</h3>
                            
                            {isSuccess ? (
                              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center animate-[fadeIn_0.5s_ease-out]">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-4">
                                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                                </div>
                                <h4 className="font-headline-md text-2xl text-slate-800 dark:text-white mb-2">Message Sent!</h4>
                                <p className="text-slate-600 dark:text-slate-300 mb-6">Thank you for reaching out. We will get back to you shortly.</p>
                                <button onClick={() => setIsSuccess(false)} className="px-6 py-2 bg-slate-200 dark:bg-slate-800 rounded-full font-label-sm hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">Send Another Message</button>
                              </div>
                            ) : (
                            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                                {errorMsg && (
                                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
                                    {errorMsg}
                                  </div>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* First Name */}
                                    <div className="space-y-2">
                                        <label htmlFor="first_name" className="font-label-md text-label-md text-on-surface-variant dark:text-slate-300">First Name <span className="text-red-500 ml-1">*</span></label>
                                        <input type="text" id="first_name" name="first_name" required
                                            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-electric-cyan focus:border-transparent outline-none dark:text-white transition-all text-body-md"
                                            placeholder="John" />
                                    </div>
                                    {/* Last Name */}
                                    <div className="space-y-2">
                                        <label htmlFor="last_name" className="font-label-md text-label-md text-on-surface-variant dark:text-slate-300">Last Name <span className="text-red-500 ml-1">*</span></label>
                                        <input type="text" id="last_name" name="last_name" required
                                            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-electric-cyan focus:border-transparent outline-none dark:text-white transition-all text-body-md"
                                            placeholder="Doe" />
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="font-label-md text-label-md text-on-surface-variant dark:text-slate-300">Email Address <span className="text-red-500 ml-1">*</span></label>
                                    <input type="email" id="email" name="email" required
                                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-electric-cyan focus:border-transparent outline-none dark:text-white transition-all text-body-md"
                                        placeholder="johndoe@example.com" />
                                </div>

                                {/* Institution / Company */}
                                <div className="space-y-2">
                                    <label htmlFor="institution" className="font-label-md text-label-md text-on-surface-variant dark:text-slate-300">Institution / School Name</label>
                                    <input type="text" id="institution" name="institution"
                                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-electric-cyan focus:border-transparent outline-none dark:text-white transition-all text-body-md"
                                        placeholder="IGYAN AI Academy" />
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="font-label-md text-label-md text-on-surface-variant dark:text-slate-300">Message <span className="text-red-500 ml-1">*</span></label>
                                    <textarea id="message" name="message" rows={5} required
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-outline-variant/40 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-trust-blue dark:focus:border-indigo-400 focus:ring-1 focus:ring-trust-blue dark:focus:ring-indigo-400 text-on-surface dark:text-slate-200 transition-colors"
                        placeholder="How can we help your school or organization?"></textarea>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" disabled={isSubmitting}
                                    className="w-full bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 py-4 rounded-full font-label-md text-label-md font-bold shadow-md hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                                    <span className="material-symbols-outlined text-[18px]">{isSubmitting ? 'hourglass_empty' : 'send'}</span>
                                </button>
                            </form>
                            )}
                        </div>
                    </div>

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

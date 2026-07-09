"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const sharkImage = "/ai-shark-fit.png";

const cyberSharkIcon =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDAN0ZDkjmzLNSHyyXMGNyAUABQHPXMBlNcV2cpgApFI88jequ3Y4oDz2nXyy33SicRG1rrpDVhlsi-DvyjETVXn_dnNxk9lpHxBxIvEY8A9Lgg_2VGtGDG47XmJS6keDQgitGzwErlHYs_L7rxjQ310je7DJYcDeGGARjhzSj0XL14jGkey8Z2yIF-wEPuRrp9Sj2e9SWjhawERRjfizco6pyo9Epg5a6TmT2_Ce7Ew8W3W5FJq4n3";

export default function AiSharkPage() {
  const [score, setScore] = useState(77);
  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/login?error=login_required";
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setScore(Math.floor(Math.random() * (85 - 72 + 1) + 72));
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  const dashOffset = 502 - (502 * score) / 100;

  return (
    <>
      <Navbar />

      <main className="pt-28 md:pt-32 max-w-[1120px] mx-auto px-margin-desktop">
        <section className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="flex flex-col gap-6">
            <div className="mb-2 animate-bounce duration-1000">
              <img
                src={cyberSharkIcon}
                alt="Cyber Shark Icon"
                className="w-32 h-32 object-contain drop-shadow-xl"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface dark:bg-slate-800 rounded-full w-fit border border-outline-variant dark:border-slate-700">
              <span className="material-symbols-outlined text-[18px] text-primary">
                rocket_launch
              </span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                The Future of Venture Coaching
              </span>
            </div>

            <h1 className="font-headline-xl text-headline-xl md:text-[48px] dark:text-white leading-tight">
              Pitch to the Shark. <br />
              <span className="text-primary">Launch Your Legacy.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-slate-300 max-w-lg">
              The Sudarshan AI Shark is your 24/7 venture mentor. Get instant
              feedback on your business model, market fit, and capital
              readiness.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="/login"
                onClick={handleLoginClick}
                className="bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 px-8 py-4 rounded-full font-label-md text-label-md shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
              >
                Start Your Pitch{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a
                href="/success-stories"
                className="border border-outline dark:border-slate-700 text-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-surface-container-low dark:hover:bg-slate-900 transition-all"
              >
                View Success Stories
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-all" />
            <img
              className="relative rounded-3xl w-full h-[420px] md:h-[540px] object-contain shark-glow border-4 border-surface-container-lowest"
              alt="A great white shark representing the AI venture mentor"
              src={sharkImage}
            />
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-headline-lg dark:text-white mb-4">
              Precision Mentorship
            </h2>
            <p className="text-on-surface-variant dark:text-slate-300 font-body-md max-w-2xl mx-auto">
              Leveraging deep-learning models trained on thousands of successful
              institutional pitches to give you an unfair advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <FeatureCard
              icon="mic"
              iconClassName="text-primary"
              title="Real-Time Pitch Feedback"
              body="The AI analyzes your voice tone, pacing, and vocabulary to provide immediate coaching as you deliver your pitch live."
              footer={
                <div className="flex items-center gap-2 text-primary font-label-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    check_circle
                  </span>
                  Sentiment Analysis Active
                </div>
              }
            />
            <FeatureCard
              icon="monitoring"
              iconClassName="text-tertiary"
              title="Capital Readiness Score"
              body="A data-driven score that evaluates your business model against institutional funding benchmarks and investor expectations."
              footer={
                <>
                  <div className="w-full bg-surface-container dark:bg-slate-800 rounded-full h-2">
                    <div className="bg-tertiary h-2 rounded-full w-[85%]" />
                  </div>
                  <p className="font-label-sm text-[10px] mt-2 text-on-surface-variant dark:text-slate-300 uppercase tracking-widest">
                    Institutional Average: 82/100
                  </p>
                </>
              }
            />
            <FeatureCard
              icon="hub"
              iconClassName="text-secondary"
              title="Venture Studio Integration"
              body="Your pitch results automatically populate your Venture Studio dashboard, triggering recommended next steps for your startup."
              footer={
                <div className="flex -space-x-2">
                  {["VS", "AI", "IR"].map((label, index) => (
                    <div
                      key={label}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-surface ${
                        index === 0
                          ? "bg-primary-fixed"
                          : index === 1
                            ? "bg-secondary-fixed"
                            : "bg-tertiary-fixed"
                      }`}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              }
            />
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="bg-surface-container-low dark:bg-slate-900 rounded-[2rem] p-6 md:p-10 border border-outline-variant dark:border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
              <div className="flex-1 space-y-6">
                <h2 className="font-headline-lg text-headline-lg dark:text-white">
                  Experience the <br />
                  <span className="text-primary">Shark Interface</span>
                </h2>
                <p className="text-on-surface-variant dark:text-slate-300 text-body-lg">
                  Our multimodal engine hears every nuance. It does not just
                  listen; it understands the &quot;why&quot; behind your business
                  decisions.
                </p>
                <ul className="space-y-4">
                  {[
                    "Dynamic tone calibration",
                    "Competitive landscape mapping",
                    "Real-time objection handling drills",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">
                        done_all
                      </span>
                      <span className="font-label-md">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:w-[480px] bg-surface-container-lowest dark:bg-slate-900 rounded-2xl p-6 shadow-2xl border border-outline-variant dark:border-slate-700 flex flex-col gap-6">
                <div className="flex justify-between items-center px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error animate-pulse" />
                    <span className="font-label-sm text-on-surface-variant dark:text-slate-300">
                      SESSION LIVE: 02:14
                    </span>
                  </div>
                  <div className="px-2 py-1 bg-surface-container-highest dark:bg-slate-800 rounded text-[10px] font-bold text-on-surface-variant dark:text-slate-300">
                    v2.4 ENGINE
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 py-4">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        className="text-surface-container"
                        cx="96"
                        cy="96"
                        fill="transparent"
                        r="80"
                        stroke="currentColor"
                        strokeWidth="12"
                      />
                      <circle
                        className="text-primary transition-all duration-1000"
                        cx="96"
                        cy="96"
                        fill="transparent"
                        r="80"
                        stroke="currentColor"
                        strokeDasharray="502"
                        strokeDashoffset={dashOffset}
                        strokeWidth="12"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="font-headline-xl text-headline-xl dark:text-white text-primary">
                        {score}
                      </span>
                      <span className="font-label-sm text-on-surface-variant dark:text-slate-300 uppercase">
                        Sentiment
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center bg-surface-container dark:bg-slate-800 px-4 py-2 rounded-full">
                    <span className="text-primary font-bold text-label-md">
                      Shark Mood:
                    </span>
                    <span className="text-on-surface dark:text-slate-100 text-label-md">
                      Highly Interested
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container-low dark:bg-slate-900 p-4 rounded-xl border border-outline-variant dark:border-slate-700">
                  <p className="font-label-sm text-primary mb-1">TRANSCRIPT</p>
                  <p className="text-body-md text-on-surface-variant dark:text-slate-300 leading-relaxed">
                    &quot;...so we are solving the logistics gap for Tier-2 cities by
                    using a hub-and-spoke model powered by local retail
                    partners...&quot;
                  </p>
                </div>

                <div className="flex items-center justify-center relative py-4">
                  <div className="absolute w-20 h-20 bg-primary/20 rounded-full animate-pulse-ring" />
                  <a
                    href="/login"
                    onClick={handleLoginClick}
                    className="relative w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                    aria-label="Start microphone pitch session"
                  >
                    <span className="material-symbols-outlined text-[32px]">
                      mic
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 mb-16">
          <div className="relative rounded-[2.5rem] bg-inverse-surface p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:40px_40px]" />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="font-headline-lg text-headline-lg dark:text-white text-inverse-on-surface">
                Bring AI Shark to Your Campus
              </h2>
              <p className="text-inverse-on-surface opacity-80 max-w-2xl text-body-lg">
                Empower your students with the world&apos;s most advanced venture
                coaching tool. Join 50+ institutions fostering the next
                generation of founders.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a
                  href="/contact"
                  className="bg-trust-blue hover:bg-[#003da1] text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 px-10 py-5 rounded-full font-headline-md shadow-xl hover:brightness-110 transition-all"
                >
                  Institutional Inquiry
                </a>
                <a
                  href="/contact"
                  className="bg-transparent border border-outline dark:border-slate-700 text-inverse-on-surface px-10 py-5 rounded-full font-headline-md hover:bg-white/10 transition-all"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactButtons />
    </>
  );
}

function FeatureCard({
  icon,
  iconClassName,
  title,
  body,
  footer,
}: {
  icon: string;
  iconClassName: string;
  title: string;
  body: string;
  footer: React.ReactNode;
}) {
  return (
    <div className="azure-glass p-6 rounded-3xl flex flex-col gap-4 shark-glow transition-transform hover:-translate-y-2">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
        <span className={`material-symbols-outlined ${iconClassName} text-[28px]`}>
          {icon}
        </span>
      </div>
      <div>
        <h3 className="font-headline-md text-headline-md dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-on-surface-variant dark:text-slate-300 font-body-md">
          {body}
        </p>
      </div>
      <div className="mt-auto pt-4 border-t border-outline-variant dark:border-slate-700">
        {footer}
      </div>
    </div>
  );
}

function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="mailto:igyan.ai.team@gmail.com"
        className="w-14 h-14 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all border border-outline-variant/30 dark:border-slate-700"
        title="Email Us"
      >
        <span className="material-symbols-outlined text-[28px]">mail</span>
      </a>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

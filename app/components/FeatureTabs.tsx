"use client";

import { useState } from "react";

const featureData = {
  institutions: {
    title: "Institutions & Leaders",
    description: "Transforming campuses into intelligent learning ecosystems with comprehensive AI management.",
    features: [
      { name: "Principal Sudarshan AI", desc: "Forecast admissions, manage compliance, and orchestrate school-wide OKRs." },
      { name: "Institutional Innovation Hub", desc: "Virtual incubation for campus-wide innovation." },
      { name: "Smart Scheduler", desc: "AI Timetable & Smart Substitution scheduling." },
      { name: "Insights Dashboard", desc: "Executive dashboards for real-time telemetry." }
    ]
  },
  teachers: {
    title: "Teachers & Faculty",
    description: "Empower educators with intelligent tools to generate content and manage classrooms.",
    features: [
      { name: "Faculty Sudarshan AI", desc: "Generate lesson plans, formative assessments, and differentiated content." },
      { name: "Teachers Tool Kit", desc: "Content generator and multiple AI productivity tools." },
      { name: "AI Assessment Suite", desc: "Voice-based evaluation and automated grading." },
      { name: "AI Homework Management", desc: "Automate task distribution and tracking." }
    ]
  },
  students: {
    title: "Students & Learners",
    description: "Personalized AI copilots guiding daily learning goals and career exploration.",
    features: [
      { name: "Student Sudarshan AI", desc: "Your 24/7 personal chat-based mentor and co-pilot." },
      { name: "AI Shark Simulation", desc: "Real-time pitch feedback for student founders." },
      { name: "Creator Suite", desc: "Multiple AI tools for creative projects." },
      { name: "AI VivaVerse", desc: "Immersive AI conversations and learning." }
    ]
  },
  parents: {
    title: "Parents & Families",
    description: "Real-time insights and life direction tools to support your child's journey.",
    features: [
      { name: "Gyani Sage", desc: "Life direction sessions and holistic guidance." },
      { name: "Growth Tracking", desc: "Real-time insights into student progress." },
      { name: "Events Dashboard", desc: "Global events and competition hub." },
      { name: "Family Co-pilot", desc: "Collaborative tools for parents to support learning." }
    ]
  }
};

type TabKey = keyof typeof featureData;

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("institutions");

  const tabs: { key: TabKey; label: string; icon: string }[] = [
    { key: "institutions", label: "Institutions", icon: "account_balance" },
    { key: "teachers", label: "Teachers", icon: "school" },
    { key: "students", label: "Students", icon: "person" },
    { key: "parents", label: "Parents", icon: "family_restroom" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-12">
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 rounded-full font-label-md text-label-md flex items-center gap-2 transition-all duration-300 ${
              activeTab === tab.key
                ? "bg-[#3B1595] dark:bg-indigo-600 text-white shadow-lg scale-105"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
            }`}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800 transition-all min-h-[400px]">
        <div className="mb-10 text-center animate-fade-in">
          <h3 className="font-headline-lg text-headline-lg text-[#1E1B4B] dark:text-white mb-4">
            {featureData[activeTab].title}
          </h3>
          <p className="font-body-lg text-body-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {featureData[activeTab].description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
          {featureData[activeTab].features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-[#3B1595]/50 dark:hover:border-indigo-500/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#3B1595]/10 dark:bg-indigo-900/30 text-[#3B1595] dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-label-lg font-bold text-[#1E1B4B] dark:text-white mb-2">
                    {feature.name}
                  </h4>
                  <p className="font-body-md text-body-md text-slate-600 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

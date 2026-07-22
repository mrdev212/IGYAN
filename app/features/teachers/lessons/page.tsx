import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function TeachersFeaturePage() {
  return (
    <>
      <Navbar />
      {/* TopNavBar */}
    
    <main className="pt-xl">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface dark:bg-slate-950-container-lowest py-xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">

            </div>
            <div className="max-w-7xl mx-auto px-margin-desktop grid lg:grid-cols-2 gap-xl items-center relative z-10">
                <div className="space-y-md">
                    <span
                        className="bg-primary dark:bg-indigo-600-fixed text-on-primary dark:text-white-fixed-variant px-sm py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">Faculty
                        Empowerment Suite</span>
                    <h1 className="text-display font-display text-on-background leading-tight">
                        Elevate Your Impact with <span className="text-primary dark:text-indigo-400">Intelligent Automation</span>
                    </h1>
                    <p className="text-body-lg font-body-lg text-on-surface dark:text-slate-100-variant max-w-xl">
                        iGyanAI provides teachers with a high-performance workspace to automate administration, generate
                        personalized curriculum, and deploy dedicated mentor bots for every student.
                    </p>
                    <div className="flex flex-wrap gap-sm pt-sm">
                        <a href="/contact"
                            className="bg-primary dark:bg-indigo-600-container text-on-primary dark:text-white-container px-lg py-md rounded-full font-bold flex items-center gap-xs azure-shadow hover:brightness-105 transition-all">
                            Explore Automation Tools
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                        <a href="/contact"
                            className="border border-outline dark:border-slate-600 px-lg py-md rounded-full font-bold hover:bg-surface dark:bg-slate-950-container transition-all">
                            Watch Demo
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-outline dark:border-slate-600-variant/30 aspect-[4/3]">
                        <img className="w-full h-full object-cover"
                            alt="A professional female educator in a modern, brightly lit collaborative classroom environment. She is using a large transparent glass tablet that displays glowing azure-colored holographic data visualizations of student progress. The setting is clean and high-tech, emphasizing a trustworthy and efficient educational atmosphere with soft blue and white tones."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr1buYAL-83OtjG0PWcUkT2hsFddoJX9UvAqqNCxHTlgsvgfckYBFEIfnaT_MPRTswqKaeraB_ySI8SDOfzfj1xT0vFA6a8j8eraMhk-HMI5xvezVe0YRYmwpf0G0TWGD3hqhau57ZzBHRngfZFbFeZaVzHWfsE6tWQ_0Vr6qmGLxwMe1eJ4XXmqFTt0vA4TVaQKADLbcK9TeTXq1OxAlRkjyccU5soD-fOuWVBxJ_bxBGyZWLfype" />
                    </div>
                    {/* Floating Stat Card */}
                    <div className="absolute -bottom-xs -left-xs glass-card p-md rounded-2xl azure-shadow max-w-[240px]">
                        <div className="flex items-center gap-sm mb-xs">
                            <div className="bg-primary dark:bg-indigo-600-fixed p-xs rounded-lg">
                                <span className="material-symbols-outlined text-primary dark:text-indigo-400">timer</span>
                            </div>
                            <span className="text-label-md font-label-md text-on-surface dark:text-slate-100">Time Saved</span>
                        </div>
                        <div className="text-headline-md font-headline-md text-primary dark:text-indigo-400">12+ Hours/Week</div>
                        <p className="text-label-sm font-label-sm text-on-surface dark:text-slate-100-variant mt-1">Automated grading &amp;
                            planning</p>
                    </div>
                </div>
            </div>
        </section>
        <div id="lesson-planning" />
        {/* Comprehensive Faculty Portal Features */}
        <section className="py-xl bg-background">
            <div className="max-w-7xl mx-auto px-margin-desktop">
                <div className="text-center max-w-3xl mx-auto mb-xl">
                    <span className="text-primary dark:text-indigo-400 font-bold text-label-md uppercase tracking-tighter mb-xs block">Unified Faculty Portal</span>
                    <h2 className="text-headline-lg font-headline-lg mb-sm text-slate-900 dark:text-white">Everything you need to teach, assess, and manage.</h2>
                    <p className="text-body-md font-body-md text-on-surface dark:text-slate-100-variant">Access a comprehensive suite of AI-powered tools designed specifically for modern educators. From live classroom monitoring to gamified homework, it's all in one place.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Homework & Assessment */}
                    <div className="bg-surface dark:bg-slate-900 border border-outline dark:border-slate-600-variant/30 dark:border-slate-800 rounded-3xl p-8 hover:shadow-lg transition-all shadow-sm">
                        <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-3xl">assignment</span>
                        </div>
                        <h3 className="text-title-lg font-bold mb-4 text-slate-900 dark:text-white">Homework & Assessment</h3>
                        <p className="text-body-md text-slate-600 dark:text-slate-400 mb-6">Automate grading and create engaging evaluation formats effortlessly.</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-purple-500 text-sm">check_circle</span> AI Viva Evaluator & Lab
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-purple-500 text-sm">check_circle</span> Gamified Assignments & Homework
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-purple-500 text-sm">check_circle</span> Question Paper Generator
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-purple-500 text-sm">check_circle</span> AI Report Cards & Results
                            </li>
                        </ul>
                    </div>

                    {/* Academic Operations */}
                    <div className="bg-surface dark:bg-slate-900 border border-outline dark:border-slate-600-variant/30 dark:border-slate-800 rounded-3xl p-8 hover:shadow-lg transition-all shadow-sm">
                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-3xl">school</span>
                        </div>
                        <h3 className="text-title-lg font-bold mb-4 text-slate-900 dark:text-white">Academic Operations</h3>
                        <p className="text-body-md text-slate-600 dark:text-slate-400 mb-6">Streamline daily tasks, from attendance to comprehensive performance tracking.</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-blue-500 text-sm">check_circle</span> Skill Tracks & Courses
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-blue-500 text-sm">check_circle</span> Automated Attendance & Timetable
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-blue-500 text-sm">check_circle</span> Reports, Analytics & Performance
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-blue-500 text-sm">check_circle</span> AI Content Generator
                            </li>
                        </ul>
                    </div>

                    {/* Core Faculty Tools */}
                    <div className="bg-surface dark:bg-slate-900 border border-outline dark:border-slate-600-variant/30 dark:border-slate-800 rounded-3xl p-8 hover:shadow-lg transition-all shadow-sm">
                        <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-3xl">group</span>
                        </div>
                        <h3 className="text-title-lg font-bold mb-4 text-slate-900 dark:text-white">Core Faculty Tools</h3>
                        <p className="text-body-md text-slate-600 dark:text-slate-400 mb-6">Access intelligent assistants and stay connected with parents and peers.</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-indigo-500 text-sm">check_circle</span> Buddy AI & Co-pilot
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-indigo-500 text-sm">check_circle</span> Omni Sight (Live Classroom)
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-indigo-500 text-sm">check_circle</span> Smart Substitution
                            </li>
                            <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-indigo-500 text-sm">check_circle</span> Parent Connect & Campus Events
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        {/* CTA Section */}
        <section className="py-xl">
            <div className="max-w-7xl mx-auto px-margin-desktop">
                <div
                    className="bg-surface dark:bg-slate-950-container-highest rounded-[40px] p-lg md:p-xl flex flex-col items-center text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-xl opacity-20 hidden md:block">
                        <span className="material-symbols-outlined text-[120px] text-primary dark:text-indigo-400">school</span>
                    </div>
                    <h2 className="text-headline-lg font-headline-lg text-on-surface dark:text-slate-100 mb-md max-w-2xl">Ready to reclaim your
                        time and focus on teaching?</h2>
                    <p className="text-body-lg font-body-lg text-on-surface dark:text-slate-100-variant max-w-xl mb-lg">Join 15,000+ educators
                        using iGyanAI to automate the mundane and amplify the extraordinary.</p>
                    <div className="flex flex-col sm:flex-row gap-md">
                        <a href="/contact"
                            className="bg-primary dark:bg-indigo-600 text-on-primary dark:text-white px-xl py-md rounded-full font-bold text-lg hover:scale-105 transition-transform">Request
                            Faculty Access</a>
                        <a href="/contact"
                            className="bg-white dark:bg-slate-900 border border-outline dark:border-slate-600-variant text-on-surface dark:text-slate-100 px-xl py-md rounded-full font-bold text-lg hover:bg-surface dark:bg-slate-950-container transition-colors">Speak
                            to an AI Expert</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    {/* Footer */}
      <Footer />
      <FloatingContactButtons />
    </>
  );
}


function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a href="/contact" className="w-14 h-14 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all border border-outline dark:border-slate-600-variant/30 dark:border-slate-700" title="Contact Us">
        <span className="material-symbols-outlined text-[28px]">mail</span>
      </a>
      <a href="https://wa.me/917004201514" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all" title="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

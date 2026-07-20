import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function ParentsFeaturePage() {
  return (
    <>
      <Navbar />
      {/* TopNavBar Shell */}
    
    <main className="pt-xl">
        {/* Hero Section: Azure Clarity & High-Trust */}
        <section className="relative min-h-[819px] flex items-center overflow-hidden">

            <div
                className="max-w-7xl mx-auto px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-2 gap-xl relative z-10 py-xl">
                <div className="flex flex-col justify-center gap-md">
                    <div
                        className="inline-flex items-center gap-xs px-sm py-1 bg-primary/10 text-primary dark:text-indigo-400 rounded-full w-fit border border-primary/20">
                        <span className="material-symbols-outlined text-[18px]">verified_user</span>
                        <span className="font-label-md text-label-md uppercase tracking-wider">Parent-Student Portal</span>
                    </div>
                    <h1 className="font-display text-display leading-tight text-on-surface dark:text-slate-100">Your Child&apos;s Journey,
                        <br /><span className="text-primary dark:text-indigo-400">Perfectly Visible.</span></h1>
                    <p className="font-body-lg text-body-lg text-on-surface dark:text-slate-100-variant max-w-lg">
                        Empower your parenting with real-time AI-driven insights. From academic excellence to emotional
                        well-being, stay connected to every step of their holistic growth.
                    </p>
                    <div className="flex flex-wrap gap-sm pt-sm">
                        <a href="/contact"
                            className="px-lg py-md bg-primary dark:bg-indigo-600 text-white rounded-full font-label-md shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">View
                            Dashboard Demo</a>
                        <a href="/contact"
                            className="px-lg py-md border border-outline dark:border-slate-600 text-on-surface dark:text-slate-100 rounded-full font-label-md hover:bg-surface dark:bg-slate-950-container-low transition-all">Schedule
                            Consultation</a>
                    </div>
                </div>
                {/* Hero Visual - Bento Style Info Graphics */}
                <div className="relative hidden lg:grid grid-cols-6 grid-rows-6 gap-sm h-[600px]">
                    <div
                        className="col-span-4 row-span-4 rounded-3xl overflow-hidden shadow-2xl relative border border-white/40">
                        <img className="w-full h-full object-cover"
                            alt="A warm, professional photograph of a diverse mother and her young daughter sitting at a bright, sunlit kitchen table. They are looking at a tablet together with smiles, expressing joy and connection. The lighting is soft and airy, characteristic of a high-end educational brand. The color palette features soft blues and warm wooden tones."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCogjaxXlrP5MJMF7T424ItwGz8gbimqlc_r7UEH5JW6BWNae1TYSp2poet8_0AlZyKgfAyY-RjDRYDq09xmGYYM1feE50RqZiNbrrKbhxhh1daes8erCQ9-fuktRn_nTcVFkeQuEoJtamsnNa0zkwdi508GLxSStvlCquiB629MdeARNTKGL-HNH9PuGZwMfQLBQ83-zwy57oOUpV1qvcxfxWqc6e8usk_jY179CO2P6FjLZhC6r4E" />
                        <div className="absolute bottom-md left-md right-md glass-card p-sm rounded-xl">
                            <div className="flex items-center gap-sm">
                                <div
                                    className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <span className="material-symbols-outlined">trending_up</span>
                                </div>
                                <div>
                                    <p className="text-label-sm text-on-surface dark:text-slate-100-variant">Weekly Progress</p>
                                    <p className="text-title-lg text-on-surface dark:text-slate-100">+12% in Analytical Thinking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-span-2 row-span-3 glass-card rounded-3xl p-md flex flex-col justify-center border-outline dark:border-slate-600-variant/30">
                        <span className="material-symbols-outlined text-primary dark:text-indigo-400 text-[40px] mb-sm">psychology</span>
                        <h4 className="font-title-lg text-title-lg mb-xs">Aptitude</h4>
                        <div className="h-2 w-full bg-surface dark:bg-slate-950-container rounded-full overflow-hidden">
                            <div className="h-full bg-primary dark:bg-indigo-600 w-4/5"></div>
                        </div>
                        <p className="mt-sm text-label-md text-on-surface dark:text-slate-100-variant">Cognitive Score: 92%</p>
                    </div>
                    <div
                        className="col-span-3 row-span-2 bg-surface dark:bg-slate-950-container-highest rounded-3xl p-md border border-outline dark:border-slate-600-variant/20">
                        <div className="flex justify-between items-end h-full">
                            <div className="chart-bar w-xs bg-primary/40 rounded-t-sm h-[30%]"></div>
                            <div className="chart-bar w-xs bg-primary/60 rounded-t-sm h-[50%]"></div>
                            <div className="chart-bar w-xs bg-primary/80 rounded-t-sm h-[80%]"></div>
                            <div className="chart-bar w-xs bg-primary dark:bg-indigo-600 rounded-t-sm h-[100%]"></div>
                            <div className="chart-bar w-xs bg-primary/70 rounded-t-sm h-[60%]"></div>
                        </div>
                    </div>
                    <div className="col-span-3 row-span-2 bg-primary dark:bg-indigo-600-container rounded-3xl p-md flex items-center gap-sm">
                        <div className="p-xs bg-white dark:bg-slate-900/20 rounded-lg">
                            <span className="material-symbols-outlined text-white">chat_bubble</span>
                        </div>
                        <div className="text-white">
                            <p className="text-label-sm opacity-80">New Message</p>
                            <p className="font-label-md">Prof. Sarah Menton</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="progress-insights" />
        {/* Feature: Progress Insights (Visual Performance Data) */}
        <section className="py-xl bg-white dark:bg-slate-900 border-y border-outline dark:border-slate-600-variant/10">
            <div className="max-w-7xl mx-auto px-margin-desktop">
                <div className="text-center max-w-2xl mx-auto mb-lg">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-slate-100 mb-sm">Real-time Progress Insights</h2>
                    <p className="text-on-surface dark:text-slate-100-variant">Experience data-driven parenting. Our AI analyzes millions of
                        data points to give you a clear picture of academic performance.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {/* Academic Performance */}
                    <div
                        className="glass-card p-md rounded-2xl group hover:shadow-xl hover:shadow-primary/5 transition-all">
                        <div
                            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary dark:text-indigo-400 mb-md group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined"
                                style={{ fontVariationSettings: "\'FILL\' 1" }}>analytics</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md mb-sm">Academic Mastery</h3>
                        <p className="text-on-surface dark:text-slate-100-variant mb-md">Granular breakdown of subject performance, highlighting
                            strengths and identifying areas for targeted support.</p>
                        <div className="space-y-sm">
                            <div className="flex justify-between text-label-md"><span>Mathematics</span><span>88%</span>
                            </div>
                            <div className="w-full bg-surface dark:bg-slate-950-container rounded-full h-1.5">
                                <div className="bg-primary dark:bg-indigo-600 w-[88%] h-full rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-label-md pt-xs"><span>Science</span><span>94%</span>
                            </div>
                            <div className="w-full bg-surface dark:bg-slate-950-container rounded-full h-1.5">
                                <div className="bg-primary dark:bg-indigo-600 w-[94%] h-full rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/* Skill Acquisition */}
                    <div
                        className="glass-card p-md rounded-2xl group hover:shadow-xl hover:shadow-primary/5 transition-all">
                        <div
                            className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary dark:text-purple-400 mb-md group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined"
                                style={{ fontVariationSettings: "\'FILL\' 1" }}>model_training</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md mb-sm">21st Century Skills</h3>
                        <p className="text-on-surface dark:text-slate-100-variant mb-md">Track development in critical thinking, creativity, and
                            collaboration through project-based learning logs.</p>
                        <div className="flex gap-xs flex-wrap">
                            <span
                                className="px-sm py-1 bg-green-50 text-green-700 text-label-sm rounded-full border border-green-100">Collaboration:
                                Expert</span>
                            <span
                                className="px-sm py-1 bg-blue-50 text-blue-700 text-label-sm rounded-full border border-blue-100">Critical
                                Thinking: Growing</span>
                            <span
                                className="px-sm py-1 bg-amber-50 text-amber-700 text-label-sm rounded-full border border-amber-100">Creativity:
                                Advanced</span>
                        </div>
                    </div>
                    {/* Engagement Levels */}
                    <div
                        className="glass-card p-md rounded-2xl group hover:shadow-xl hover:shadow-primary/5 transition-all">
                        <div
                            className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary dark:text-sky-400 mb-md group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined"
                                style={{ fontVariationSettings: "\'FILL\' 1" }}>query_stats</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md mb-sm">Classroom Presence</h3>
                        <p className="text-on-surface dark:text-slate-100-variant mb-md">Monitor engagement metrics and participation rates to
                            ensure your child remains motivated and active.</p>
                        <div className="flex items-center justify-center py-sm">
                            <div className="relative w-24 h-24">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle className="text-surface dark:text-slate-950-container" cx="48" cy="48" fill="transparent" r="40"
                                        stroke="currentColor" strokeWidth="8"></circle>
                                    <circle className="text-primary dark:text-indigo-400" cx="48" cy="48" fill="transparent" r="40"
                                        stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="50.24"
                                        strokeWidth="8"></circle>
                                </svg>
                                <div
                                    className="absolute inset-0 flex items-center justify-center font-headline-md text-primary dark:text-indigo-400">
                                    80%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="growth-tracking" />
        {/* Feature: Growth Tracking (Holistic Development) */}
        <section className="py-xl bg-surface dark:bg-slate-950-container-low">
            <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
                <div className="order-2 lg:order-1">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-tertiary/10 rounded-full blur-3xl"></div>
                        <div className="relative grid grid-cols-2 gap-md">
                            <div className="space-y-md">
                                <div
                                    className="glass-card p-md rounded-2xl shadow-sm transform hover:-translate-y-1 transition-all">
                                    <p className="text-label-sm text-primary dark:text-indigo-400 font-bold mb-xs">Emotional Health</p>
                                    <p className="text-body-md">Reflective and calm this week. Improved social interaction.
                                    </p>
                                </div>
                                <img className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                                    alt="A candid, warm photo of a father and son laughing while building a complex robotic arm in a brightly lit modern study room. High-trust professional lighting, shallow depth of field, azure accents in the background decor. Focus on the collaborative and joyful experience of learning together."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ0zeiFr6ID0B9N9GW-uIGTveI89i8NBGDxwqzWZzz36c8QxJi9WEuQLGHg5leAOp1MLDYls42_l6ylEb5EpRKohxkf9tPJsXxUijaPitPWJEMvU9BvpzfkvK05MtZMlIMdIGq8jSqCTGma0ZHpT1eDXoIB3T8N-LZFOaE5ufgxMOd7D46HS0IIxw7G5_g4GxNLXqwzSn29TI4m-VOe816OSe7ygLV7ys7eIvL-MwndbVFISA5p_-r" />
                            </div>
                            <div className="pt-xl space-y-md">
                                <img className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg"
                                    alt="Close up of a teenager's hands confidently presenting a digital project on a futuristic screen to a group of engaged adults. The aesthetic is clean, technological, and professional. The mood is one of achievement and clarity. Light-mode UI elements are visible on the screens."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClvtyLuj6vJDfUw6eOjeQnKckM1hw3W2VBfs1_02d2OrDzIO3U8LRTxpuM_aQ4n5KWRmmu8yehdRffZL_f4W9f_JVjRYK4t4RowvedmIuyP5lS7bcP10ZZ2yTKDgQrNwGIBJ3izuDvalQy5ka01t4e_tCe72USp3T7IZow8kHjFyRzPQOcWtaZgX3W9xml2k-jzCYvVP6Fnn1m2ATS6tyyEo8P4r37BBMk9GQsOgdbvrh4q406K6z5" />
                                <div
                                    className="glass-card p-md rounded-2xl shadow-sm transform hover:-translate-y-1 transition-all">
                                    <p className="text-label-sm text-tertiary dark:text-purple-400 font-bold mb-xs">Physical Growth</p>
                                    <p className="text-body-md">Active participation in 4 sports sessions this week.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-slate-100 mb-md">Beyond the Report Card: <span
                            className="text-primary dark:text-indigo-400">Holistic Tracking.</span></h2>
                    <p className="font-body-lg text-on-surface dark:text-slate-100-variant mb-lg">iGyanAI doesn&apos;t just track grades; it tracks
                        growth. We focus on the whole child, from emotional intelligence to physical activity and hobby
                        development.</p>
                    <ul className="space-y-md">
                        <li className="flex gap-md items-start">
                            <div
                                className="mt-1 w-6 h-6 rounded-full bg-primary dark:bg-indigo-600 flex items-center justify-center text-white shrink-0">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                            </div>
                            <div>
                                <h4 className="font-title-lg text-title-lg">EQ &amp; Social Sentiment</h4>
                                <p className="text-on-surface dark:text-slate-100-variant">Understand your child&apos;s emotional peaks and troughs
                                    through peer-interaction analysis and mood tracking.</p>
                            </div>
                        </li>
                        <li className="flex gap-md items-start">
                            <div
                                className="mt-1 w-6 h-6 rounded-full bg-primary dark:bg-indigo-600 flex items-center justify-center text-white shrink-0">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                            </div>
                            <div>
                                <h4 className="font-title-lg text-title-lg">Extracurricular Log</h4>
                                <p className="text-on-surface dark:text-slate-100-variant">A unified timeline of sports, arts, and community
                                    service, celebrating every milestone outside the classroom.</p>
                            </div>
                        </li>
                        <li className="flex gap-md items-start">
                            <div
                                className="mt-1 w-6 h-6 rounded-full bg-primary dark:bg-indigo-600 flex items-center justify-center text-white shrink-0">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                            </div>
                            <div>
                                <h4 className="font-title-lg text-title-lg">Career &amp; Passion Discovery</h4>
                                <p className="text-on-surface dark:text-slate-100-variant">AI-generated personality maps help you discover
                                    latent talents and potential career paths early.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div id="parent-portal" />
        {/* Feature: Parent Portal Dashboard */}
        <section className="py-xl bg-surface dark:bg-slate-950-container-lowest">
            <div className="max-w-7xl mx-auto px-margin-desktop">
                <div className="text-center max-w-3xl mx-auto mb-xl">
                    <span className="text-primary dark:text-indigo-400 font-bold text-label-md uppercase tracking-tighter mb-xs block">Unified Experience</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-slate-100 mb-sm">The All-In-One Parent Portal</h2>
                    <p className="text-body-lg text-on-surface dark:text-slate-100-variant">Stay connected to your child's educational journey with our comprehensive dashboard. Track attendance, connect with teachers, and explore school events in one unified interface.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Dashboard Overview */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-outline dark:border-slate-600-variant/30 shadow-sm hover:shadow-lg transition-all flex flex-col">
                        <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-3xl">dashboard</span>
                        </div>
                        <h3 className="font-title-lg text-title-lg font-bold mb-3 text-on-surface dark:text-slate-100">Intelligent Dashboard</h3>
                        <p className="text-body-md text-on-surface dark:text-slate-100-variant mb-6 flex-grow">Get a bird's-eye view of your child's week. Track real-time attendance momentum, monitor active school notices, and receive AI-driven personalized parent tips.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Attendance Tracking
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Daily Summaries
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Quick Launchpad
                            </li>
                        </ul>
                    </div>

                    {/* Class Teacher Connect */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-outline dark:border-slate-600-variant/30 shadow-sm hover:shadow-lg transition-all flex flex-col">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-3xl">forum</span>
                        </div>
                        <h3 className="font-title-lg text-title-lg font-bold mb-3 text-on-surface dark:text-slate-100">Class Teacher Connect</h3>
                        <p className="text-body-md text-on-surface dark:text-slate-100-variant mb-6 flex-grow">Direct and organized communication. Send tagged messages (Homework, Urgent, Complaint) and arrange callbacks seamlessly with class teachers.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Tagged Direct Messages
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Call & Callback Requests
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Dedicated Homework Queries
                            </li>
                        </ul>
                    </div>

                    {/* School Events */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-outline dark:border-slate-600-variant/30 shadow-sm hover:shadow-lg transition-all flex flex-col">
                        <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-3xl">event_upcoming</span>
                        </div>
                        <h3 className="font-title-lg text-title-lg font-bold mb-3 text-on-surface dark:text-slate-100">School & Public Events</h3>
                        <p className="text-body-md text-on-surface dark:text-slate-100-variant mb-6 flex-grow">Discover and explore cultural fests, workshops, and innovation days. Filter by event type and securely register your participation instantly.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Event Discovery & Filtering
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Instant Registration
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Network-wide Events
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


        {/* Final CTA: Trust & Onboarding */}
        <section className="py-xl bg-surface dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-margin-desktop text-center">
                <div className="inline-block p-2 bg-primary/5 rounded-2xl mb-md">
                    <div className="flex -space-x-4">
                        <img className="w-12 h-12 rounded-full border-2 border-white object-cover"
                            alt="Close up face of a friendly professional female teacher smiling. Soft lighting, high key, professional photography style."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfKlftVQf4fL6fK50XzSKDo6FNyxjSSy-anXVP_2u-sYINHctlaXMHrK1_BJlS7wLGNGQBotPzV-IW6udnAasSBySatySM0456wyYnAFyZPTqstEFccd6w8D5V1e0iJ7qm1BNQ3d6CREj3xMj07EAgB1auS3kxBmx786s5xeQWCWqjnPqhU3u7e8lbzh-PSsCsBerlTCs1jPh9eQZsFLngGDAskYVmdjSHGKB5iM7rEGGibsu7H--e" />
                        <img className="w-12 h-12 rounded-full border-2 border-white object-cover"
                            alt="Close up face of a smiling middle-aged father in professional casual attire. Soft lighting, high key, professional photography style."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuHlxIb8Vl5lqDfpwPkrLg_yHeTwFEMGlSIXNkN3-AEuWdcvlSkEwkTFcMlHTi-VX4n1V28zj8O223e8xpVCT0oJ_lqvpYd4NH2pRIHsQLiWHWRrjKojZGmSeFsw-hGsU7oHLt58FvB0XEf2nW7ePZqnhdhMxjFTR4iOEIRyxROkYa8Y11Ksx82viPxl724syVd3TMiqjsLHDCXPzGScco48hkUhx2ZsNsNahA6_8ksVyLxuDUgFRf" />
                        <img className="w-12 h-12 rounded-full border-2 border-white object-cover"
                            alt="Close up face of a diverse young mother smiling warmly. Soft lighting, high key, professional photography style."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcBu891fAfqajJanffdBYy_YwVw8tvWorHbCCHJASTcdu8ndHLSwpIWyO5U2w3-yfEFGCLYSSq1EVHG5eCwDreTDn05mV1FvvUCDRqsR7w42QKHSDUQhux2U0AurnwoqJgwxk4nXHrYvnGKHa6qvEWF0WYFbepOF0gNxqxNSRc_CfyJFKa5E8VmFPY_CuX2JG6uC7Olp3F8bhrdQ7WamsCd7svajZBoVOrUqMzibZfws5c7cpAyfty" />
                        <div
                            className="w-12 h-12 rounded-full bg-primary dark:bg-indigo-600-container text-white flex items-center justify-center border-2 border-white text-label-sm font-bold">
                            +2k</div>
                    </div>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-slate-100 mb-sm">Ready to lead your child towards
                    excellence?</h2>
                <p className="text-on-surface dark:text-slate-100-variant max-w-xl mx-auto mb-lg">Join thousands of proactive parents who are
                    already using iGyanAI to shape their children&apos;s future with clarity and confidence.</p>
                <div className="flex flex-col sm:flex-row gap-sm justify-center">
                    <a href="/contact"
                        className="px-xl py-md bg-primary dark:bg-indigo-600 text-white rounded-full font-headline-md shadow-lg shadow-primary/30 hover:opacity-90 active:scale-95 transition-all">Join
                        the iGyanAI Community</a>
                </div>
                <p className="mt-md text-label-sm text-outline flex items-center justify-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">shield</span>
                    ISO 27001 Certified Data Privacy &amp; Protection
                </p>
            </div>
        </section>
    </main>
    {/* Footer Shell */}
      <Footer />
      <FloatingContactButtons />
    </>
  );
}


function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a href="mailto:igyan.ai.team@gmail.com" className="w-14 h-14 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all border border-outline dark:border-slate-600-variant/30 dark:border-slate-700" title="Email Us">
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

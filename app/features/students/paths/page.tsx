import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function StudentsFeaturePage() {
  return (
    <>
      <Navbar />
      {/* Top Navigation Bar */}
    
    {/* Hero Section */}
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

        <div className="max-w-7xl mx-auto px-margin-desktop grid md:grid-cols-2 gap-xl items-center">
            <div className="z-10">
                <span
                    className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm mb-md uppercase tracking-wider">Student
                    Portal Experience</span>
                <h1 className="font-display text-display text-on-surface dark:text-slate-100 mb-md">A smarter student dashboard for <span
                        className="text-primary dark:text-indigo-400">learning, practice, and growth.</span></h1>
                <p className="font-body-lg text-body-lg text-on-surface dark:text-slate-100-variant mb-lg max-w-xl">
                    iGyanAI brings Co-pilot, Buddy AI, AI Shark, assignments, performance insights, skill tracks, and
                    student tools into one calm workspace so every learner knows what to do next.
                </p>
                <div className="flex flex-wrap gap-md">
                    <a href="/contact"
                        className="bg-primary dark:bg-indigo-600 text-on-primary dark:text-white px-8 py-4 rounded-full font-label-md flex items-center gap-2 shadow-lg hover:shadow-primary/20 transition-all">
                        Explore Student Portal <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                    <a href="/contact"
                        className="border border-outline dark:border-slate-600 px-8 py-4 rounded-full font-label-md hover:bg-surface dark:bg-slate-950-container-low transition-all">
                        Request School Demo
                    </a>
                </div>
                <div className="mt-xl flex items-center gap-md grayscale opacity-60">
                    <span className="text-label-sm font-label-sm text-outline uppercase tracking-widest">Student workspace
                        includes:</span>
                    <div className="flex gap-md">
                        <span className="font-bold text-title-lg">Co-pilot</span>
                        <span className="font-bold text-title-lg">Buddy AI</span>
                        <span className="font-bold text-title-lg">AI Shark</span>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="relative z-10 glass-card rounded-[2rem] p-4 shadow-2xl">
                    <img className="rounded-[1.5rem] w-full h-[500px] object-cover shadow-inner"
                        alt="A cinematic, high-quality photograph of a diverse group of college students in a bright, modern university lounge. They are engaged with digital tablets showing complex AI-generated learning dashboards with bright azure accents. The lighting is soft and natural, emphasizing a professional yet forward-looking educational environment. The overall aesthetic is clean, academic, and highly professional."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW_4jLRSDq1GLqYcrXfj1S9QnSbUhty8SvTTloyMgPeHhYj6CFufiJOoDGboBPukPV6rYhgO79xjGc3Z4h9ZVEVORPcOZDFJFGjl5x8BqBry6s_KxdhDm41tNGJIuvhE9tlBl9Ja0yMuTCsTJVtv6O_AdrNe5U5xQ1Tp2vxU_oK5BE_F9Ei_8qm4xQjlCd7WKglHa0pTHa4VA-saqIY0vwk6LrW7135XJZs9wIBRh8k-OyEqtOUC73" />
                </div>
                {/* Floating UI Element */}
                <div
                    className="absolute -bottom-10 -left-10 z-20 glass-card p-6 rounded-2xl shadow-xl w-64 hidden lg:block hover-lift">
                    <div className="flex items-center gap-3 mb-4">
                        <div
                            className="w-10 h-10 rounded-full bg-primary dark:bg-indigo-600-container flex items-center justify-center text-on-primary dark:text-white">
                            <span className="material-symbols-outlined">trending_up</span>
                        </div>
                        <div>
                            <p className="text-label-sm text-outline">Student Growth</p>
                            <p className="text-title-lg font-bold">92%</p>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-secondary-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary dark:bg-indigo-600 w-[92%]"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div id="personalized-paths" />
    {/* Personalized Paths Section (Bento Grid) */}
    <section className="py-xl bg-surface dark:bg-slate-950-container-lowest">
        <div className="max-w-7xl mx-auto px-margin-desktop">
            <div className="text-center mb-xl">
                <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-slate-100 mb-4">Everything a Student Needs in One Portal</h2>
                <p className="font-body-md text-body-md text-on-surface dark:text-slate-100-variant max-w-2xl mx-auto">The student side is built
                    around daily academic work: ask for help, complete homework, review performance, practice viva, and
                    prepare projects without jumping across disconnected tools.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Main Feature Card */}
                <div
                    className="md:col-span-2 glass-card rounded-3xl p-md flex flex-col md:flex-row gap-lg hover-lift h-full">
                    <div className="flex-1 space-y-md">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary dark:text-indigo-400">
                            <span className="material-symbols-outlined"
                                style={{ fontVariationSettings: "\'FILL\' 1" }}>psychology</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md">Co-pilot for Daily Learning</h3>
                        <p className="text-on-surface dark:text-slate-100-variant">Students can open a focused AI workspace, choose a learning
                            mode, ask questions, generate notes, and get guided support for classwork, assignments, and
                            revision.</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-label-md"><span
                                    className="material-symbols-outlined text-primary dark:text-indigo-400 text-sm">check_circle</span> Select
                                study, revision, doubt-solving, or guidance modes</li>
                            <li className="flex items-center gap-2 text-label-md"><span
                                    className="material-symbols-outlined text-primary dark:text-indigo-400 text-sm">check_circle</span> Keep chats,
                                sessions, memory, profile, and notes organized</li>
                            <li className="flex items-center gap-2 text-label-md"><span
                                    className="material-symbols-outlined text-primary dark:text-indigo-400 text-sm">check_circle</span> Search
                                courses, assignments, and learning resources quickly</li>
                        </ul>
                    </div>
                    <div className="flex-1 bg-surface dark:bg-slate-950-container rounded-2xl p-4 overflow-hidden relative min-h-[240px]">
                        <img className="absolute top-0 left-0 w-full h-full object-cover rounded-xl border border-outline dark:border-slate-600-variant/30"
                            alt="A clean, minimalist UI dashboard preview showing a personalized learning path. It features a sleek node-based graph connecting different subjects like Quantum Computing and Data Ethics. The interface uses a crisp white background with primary blue accents and soft azure shadows, consistent with an institutional and modern educational tool."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeC1BdsNN5n3yRIuE3T-fy86U6WZHj9mIfODdIYyJ7zGI1EzybOwVLECw5WfXBj_K0-g1vgXZFC6DjaVJtdl4zMz3VzBt-_zL6d2ZZXzlSMuIZnJiDJ_Nb1RsAcjaqXWJgqH_lyOrzmD-ynogobyVlZam31X7-GB5G65DCuAm31YMtw4CS1yqa3xg9JJB0c-MEjNzWoss38-F482Oyb2ROU5hcmsKGTCM-h-w7Sel7sxVu1fHsrdEa" />
                    </div>
                </div>
                {/* Secondary Feature Card */}
                <div className="glass-card rounded-3xl p-md flex flex-col justify-between hover-lift">
                    <div>
                        <div
                            className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center text-tertiary dark:text-purple-400 mb-md">
                            <span className="material-symbols-outlined">auto_awesome</span>
                        </div>
                        <h3 className="font-title-lg text-title-lg mb-4">Buddy AI Counsellor</h3>
                        <p className="text-on-surface dark:text-slate-100-variant text-body-md">Give students a friendly space for life
                            counselling, career roadmap planning, academic growth, and personal development prompts.</p>
                    </div>
                    <div className="mt-lg pt-lg border-t border-outline dark:border-slate-600-variant/20 flex justify-between items-center">
                        <span className="text-label-md font-bold text-primary dark:text-indigo-400">Learn More</span>
                        <span className="material-symbols-outlined text-primary dark:text-indigo-400">north_east</span>
                    </div>
                </div>
                {/* Tertiary Card (Full height in column) */}
                <div className="glass-card rounded-3xl p-md hover-lift">
                    <div
                        className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-secondary dark:text-sky-400 mb-md">
                        <span className="material-symbols-outlined">group</span>
                    </div>
                    <h3 className="font-title-lg text-title-lg mb-4">Performance Snapshot</h3>
                    <p className="text-on-surface dark:text-slate-100-variant text-body-md mb-md">Students can track skill progress, assignment
                        completion, viva results, and report-card signals from the same academic operations area.</p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-outline-variant"></div>
                            <div className="flex-1 h-2 bg-surface dark:bg-slate-950-container-high rounded-full overflow-hidden">
                                <div className="w-4/5 h-full bg-primary dark:bg-indigo-600"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-outline-variant"></div>
                            <div className="flex-1 h-2 bg-surface dark:bg-slate-950-container-high rounded-full overflow-hidden">
                                <div className="w-3/5 h-full bg-secondary"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="career-mapping" />
                {/* Student Tools Card */}
                <div
                    className="md:col-span-2 glass-card rounded-3xl p-md flex flex-col md:flex-row-reverse gap-lg hover-lift">
                    <div className="flex-1 space-y-md">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary dark:text-indigo-400">
                            <span className="material-symbols-outlined"
                                style={{ fontVariationSettings: "\'FILL\' 1" }}>map</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md">Skill Tracks and Student Tools</h3>
                        <p className="text-on-surface dark:text-slate-100-variant">Skill Tracks / Courses, AI Ground, Content Generator,
                            Smart Notes, Quiz Me, Code Tutor, Study Planner, and Project-Based Learning help students move
                            from class concepts to practical output.</p>
                        <a href="/contact" className="text-primary dark:text-indigo-400 font-bold hover:underline flex items-center gap-2">See Student
                            Tools in Action <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                    </div>
                    <div className="flex-1 bg-surface dark:bg-slate-950-container rounded-2xl p-4 min-h-[240px]">
                        <div className="w-full h-full border border-outline dark:border-slate-600-variant/30 rounded-xl bg-white dark:bg-slate-900 p-4">
                            <div className="flex justify-between items-center mb-4">
                                    <span className="font-bold">Academic Operations</span>
                                <span className="text-xs text-primary dark:text-indigo-400 px-2 py-1 bg-primary/10 rounded">Live</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-2 bg-surface dark:bg-slate-950-container-low rounded-lg">
                                    <span className="text-label-sm">Skill Tracks / Courses</span>
                                    <span className="text-label-sm font-bold">Active</span>
                                </div>
                                <div
                                    className="flex items-center justify-between p-2 bg-surface dark:bg-slate-950-container-low rounded-lg opacity-70">
                                    <span className="text-label-sm">Assignments</span>
                                    <span className="text-label-sm font-bold">Due Soon</span>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-surface dark:bg-slate-950-container-low rounded-lg">
                                    <span className="text-label-sm">Performance</span>
                                    <span className="text-label-sm font-bold">Improving</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div id="venture-ready" />
    {/* AI Shark Section */}
    <section className="py-xl relative overflow-hidden bg-surface dark:bg-slate-950-bright">
        <div className="max-w-7xl mx-auto px-margin-desktop">
            <div className="flex flex-col md:flex-row items-center gap-xl">
                <div className="flex-1">
                    <div className="relative">
                        <img className="rounded-[2.5rem] shadow-2xl w-full h-[540px] object-cover"
                            alt="A focused group of young entrepreneurs in a collaborative startup incubator environment. They are standing around a large touch-screen table showing business models and financial projections. The office is minimalist with industrial-chic elements, high ceilings, and lots of natural light. The mood is energized, productive, and modern. Visual style is professional and academic with tech-forward accents."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPIUjYN4dkajpnpQ2WVkSXCwW78_Be0R6pxxyPIuATY6vPnm-2fIJ_GKAxv8SmM3IBPPch-OVFZJdcCf5ySVZpptGhz8E8mGDeQsmGP0Y7w7NqDO1aimkP8tCcuXaeV6gRK040NxQ3n5tf394AOnO4DTVWcMRTciMPANptpUH11qFuV3dAEDbvrA4stAgbvbb7bONdINGDg3ubivyDzikOnkunt6yTaqKRJ0S0yKPJ_3eAPQQ6MzWE" />
                        {/* Floating Achievement */}
                        <div
                            className="absolute top-10 -right-8 glass-card p-4 rounded-xl shadow-lg border-l-4 border-primary">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary dark:text-indigo-400"
                                    style={{ fontVariationSettings: "\'FILL\' 1" }}>rocket_launch</span>
                                <span className="font-bold text-label-md">Venture Incubated</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="font-display text-headline-lg text-on-surface dark:text-slate-100 mb-md">AI Shark: Practice Ideas Before
                        the Big Moment</h2>
                    <p className="font-body-lg text-on-surface dark:text-slate-100-variant mb-lg">
                        Students can upload a document or deck, practice their pitch, and receive structured AI feedback
                        before presenting ideas in class, innovation cells, or incubation programs.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mb-lg">
                        <div className="p-md bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-outline dark:border-slate-600-variant/20">
                            <span className="material-symbols-outlined text-primary dark:text-indigo-400 mb-2">payments</span>
                            <h4 className="font-bold mb-1">Pitch Practice</h4>
                            <p className="text-label-sm text-on-surface dark:text-slate-100-variant">Prepare business decks, project ideas, and
                                classroom presentations with guided prompts.</p>
                        </div>
                        <div className="p-md bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-outline dark:border-slate-600-variant/20">
                            <span className="material-symbols-outlined text-primary dark:text-indigo-400 mb-2">person_pin</span>
                            <h4 className="font-bold mb-1">Document Upload</h4>
                            <p className="text-label-sm text-on-surface dark:text-slate-100-variant">Upload PDF, PPT, DOCX, or text files so
                                feedback starts from the student&apos;s real material.</p>
                        </div>
                        <div className="p-md bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-outline dark:border-slate-600-variant/20">
                            <span className="material-symbols-outlined text-primary dark:text-indigo-400 mb-2">gavel</span>
                            <h4 className="font-bold mb-1">Language Choice</h4>
                            <p className="text-label-sm text-on-surface dark:text-slate-100-variant">Support multilingual learners with English
                                and Hindi presentation support.</p>
                        </div>
                        <div className="p-md bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-outline dark:border-slate-600-variant/20">
                            <span className="material-symbols-outlined text-primary dark:text-indigo-400 mb-2">hub</span>
                            <h4 className="font-bold mb-1">Innovation Cell</h4>
                            <p className="text-label-sm text-on-surface dark:text-slate-100-variant">Connect pitch craft, idea spark, and
                                incubation workflows into one student innovation flow.</p>
                        </div>
                    </div>
                    <a href="/contact"
                        className="bg-on-surface dark:bg-slate-200 text-surface dark:text-slate-950 px-8 py-4 rounded-full font-label-md hover:bg-on-surface dark:bg-slate-200-variant transition-all">
                        See AI Shark Workflow
                    </a>
                </div>
            </div>
        </div>
    </section>
    {/* Testimonials / Quote Section */}
    <section className="py-xl bg-primary dark:bg-indigo-600 text-on-primary dark:text-white">
        <div className="max-w-4xl mx-auto px-margin-desktop text-center">
            <span className="material-symbols-outlined text-5xl mb-md opacity-50">format_quote</span>
            <blockquote className="font-display text-headline-md md:text-headline-lg italic mb-lg">
                &quot;iGyanAI feels like one student workspace instead of ten separate tools. I can ask doubts, check
                assignments, plan my skills, and prepare presentations without losing focus.&quot;
            </blockquote>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-on-primary/30 p-1 mb-4">
                    <img className="w-full h-full rounded-full object-cover"
                        alt="Portrait of a confident female engineering student smiling warmly at the camera in a modern campus setting. She represents a high-achieving, professional academic identity. Lighting is professional and bright."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqKMUKWsa33Kulx3z3eb0MKzfBtXl6qKK_xPDeKAsuK8wuaE0lA6JvFnD-SAM0U6JY-QIdjAzvbV2zhTpLvcU4zmmC-9PuhVn38JgdG3HL2Q2hlyMLG23LRFwDN7rpZ9MiuxtNMBkIukTn78HXaLjDB0dvugi0BybLT4bcwTokd851ZN_qK-MS8SjBNgEFo-EwugkzOfxrTi8noACN1qZUWMqNbt-4JI18bb94JRzRF0Lv3jN2nnWu" />
                </div>
                <p className="font-bold text-title-lg">Harshi</p>
                <p className="text-label-md opacity-80 uppercase tracking-widest">Student Portal User • Litera Valley</p>
            </div>
        </div>
    </section>
    {/* Call to Action */}
    <section className="py-xl">
        <div className="max-w-7xl mx-auto px-margin-desktop">
            <div
                className="bg-surface dark:bg-slate-950-container rounded-[3rem] p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-xl relative overflow-hidden">
                <div className="z-10 max-w-xl">
                    <h2 className="font-display text-headline-lg text-on-surface dark:text-slate-100 mb-md">Ready to launch the student portal?
                    </h2>
                    <p className="font-body-lg text-on-surface dark:text-slate-100-variant mb-lg">Bring Co-pilot, Buddy AI, AI Shark, tools,
                        assignments, and performance tracking into one learner-first experience for your campus.</p>
                    <div className="flex gap-md">
                        <a href="/contact"
                            className="bg-primary dark:bg-indigo-600 text-on-primary dark:text-white px-10 py-4 rounded-full font-label-md hover:shadow-lg hover:shadow-primary/30 transition-all">Contact
                            Team</a>
                    </div>
                </div>
                <div className="z-10 relative">
                    <div
                        className="w-72 h-72 rounded-full border-[12px] border-primary/10 flex items-center justify-center">
                        <div
                            className="w-48 h-48 rounded-full bg-primary dark:bg-indigo-600 flex items-center justify-center text-on-primary dark:text-white shadow-2xl">
                            <span className="material-symbols-outlined text-6xl">rocket</span>
                        </div>
                    </div>
                </div>
                {/* Abstract Background Shapes */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary dark:bg-indigo-600-container/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary-container/20 rounded-full blur-3xl">
                </div>
            </div>
        </div>
    </section>
    {/* Footer */}
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
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all" title="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

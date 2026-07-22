import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function InstitutionsFeaturePage() {
  return (
    <>
      <Navbar />
      {/* TopNavBar */}
    
    {/* Hero Section */}
    <header className="relative pt-xl pb-24 overflow-hidden min-h-[870px] flex items-center">

        <div className="max-w-7xl mx-auto px-margin-desktop relative z-10 grid lg:grid-cols-2 gap-xl items-center">
            <div>
                <span
                    className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-md text-label-sm mb-md uppercase tracking-widest">Global
                    Orchestration</span>
                <h1 className="font-display text-display text-on-surface dark:text-slate-100 mb-md leading-tight">
                    Institutional Excellence <br /> <span className="text-primary dark:text-indigo-400">Through Azure Intelligence.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface dark:text-slate-100-variant mb-lg max-w-xl">
                    Unified data management for the world&apos;s leading educational institutions. Orchestrate global campus
                    networks with the power of Azure-backed predictive modeling.
                </p>
                <div className="flex flex-wrap gap-md">
                    <a href="/contact"
                        className="bg-primary dark:bg-indigo-600-container text-on-primary dark:text-white-container px-8 py-4 rounded-full font-headline-md text-label-md shadow-lg flex items-center gap-xs hover:brightness-110 transition-all">
                        Request Strategy Briefing
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                    <a href="/contact"
                        className="border border-outline dark:border-slate-600 text-on-surface dark:text-slate-100 px-8 py-4 rounded-full font-headline-md text-label-md hover:bg-surface dark:bg-slate-950-container-low transition-all">
                        View Network Map
                    </a>
                </div>
            </div>
            <div className="relative group">
                <div
                    className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl group-hover:bg-primary/10 transition-all duration-500">
                </div>
                <div
                    className="relative aspect-[4/3] rounded-[2rem] border border-outline dark:border-slate-600-variant overflow-hidden shadow-2xl">
                    <img className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        alt="A high-angle, wide cinematic shot of a stunning modern university campus featuring glass-and-steel architecture nestled in a lush green valley during the golden hour. The building's reflective surfaces mirror the orange and blue sky, evoking a sense of Azure-driven technology integrated with institutional tradition. The lighting is crisp, professional, and high-contrast, characteristic of an authoritative leadership visual."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvOl_Bztp3ZP-45HI1VGELSHwG5Bt3gRJmoyTU-bcuuzb6q2LkC9gK-GWDxlfIytqRbzN0uCMAjdW4xmfp8dsgvtLkQlKbdti9g1fKqFh6Nu8QMeB9_JN_8g-Ze4XsHwJYWiQLh-oeDnNN5QfQBnLLqgc1kr_tK4VTb8i0H2cBn3gB0GP1fw2-UgnkMVMvc7RB7XfbPkH14DUv-PJ-NLTBMSBX48rfiScd8WB60aVkugb02k0SObwS" />
                </div>
                {/* Float Card */}
                <div
                    className="absolute -bottom-10 -left-10 glass-panel p-md rounded-xl shadow-xl border border-outline dark:border-slate-600-variant/30 hidden md:block">
                    <div className="flex items-center gap-sm">
                        <div className="w-12 h-12 bg-primary dark:bg-indigo-600 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">analytics</span>
                        </div>
                        <div>
                            <p className="text-label-sm text-on-surface dark:text-slate-100-variant">Efficiency Gain</p>
                            <p className="text-title-lg font-bold text-primary dark:text-indigo-400">+34% YoY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* Stats Ticker */}
    <section className="bg-surface dark:bg-slate-950-container-low py-lg border-y border-outline dark:border-slate-600-variant/20">
        <div className="max-w-7xl mx-auto px-margin-desktop flex flex-wrap justify-between gap-xl">
            <div className="flex flex-col">
                <span className="text-display font-display text-primary dark:text-indigo-400">500+</span>
                <span className="text-label-md font-medium text-on-surface dark:text-slate-100-variant uppercase tracking-wider">Global
                    Institutions</span>
            </div>
            <div className="flex flex-col border-l border-outline dark:border-slate-600-variant/50 pl-lg">
                <span className="text-display font-display text-primary dark:text-indigo-400">2.4M</span>
                <span className="text-label-md font-medium text-on-surface dark:text-slate-100-variant uppercase tracking-wider">Students
                    Orchestrated</span>
            </div>
            <div className="flex flex-col border-l border-outline dark:border-slate-600-variant/50 pl-lg">
                <span className="text-display font-display text-primary dark:text-indigo-400">99.9%</span>
                <span className="text-label-md font-medium text-on-surface dark:text-slate-100-variant uppercase tracking-wider">Operational
                    Uptime</span>
            </div>
            <div className="flex flex-col border-l border-outline dark:border-slate-600-variant/50 pl-lg">
                <span className="text-display font-display text-primary dark:text-indigo-400">62%</span>
                <span className="text-label-md font-medium text-on-surface dark:text-slate-100-variant uppercase tracking-wider">Resource
                    Savings</span>
            </div>
        </div>
    </section>
    <div id="campus-management" />
    {/* Unified Operations: Bento Grid */}
    <section className="py-xl bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-margin-desktop">
            <div className="flex flex-col items-center text-center mb-xl">
                <span className="text-primary dark:text-indigo-400 font-bold text-label-md uppercase tracking-tighter mb-xs">Management
                    Protocol</span>
                <h2 className="text-headline-lg font-headline-lg text-on-surface dark:text-slate-100">Campus Management &amp; Unified Operations
                </h2>
                <p className="text-body-md text-on-surface dark:text-slate-100-variant max-w-2xl mt-md">Eliminate silos with a singular command
                    interface for finance, facility, and curriculum orchestration.</p>
            </div>
            <div className="bento-grid min-h-[600px]">
                {/* Main Feature */}
                <div
                    className="col-span-12 md:col-span-8 bg-surface dark:bg-slate-950-container rounded-3xl overflow-hidden grid lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] group hover:shadow-xl transition-all border border-outline dark:border-slate-600-variant/30">
                    <div className="p-lg relative z-10 flex flex-col h-full min-h-[320px] justify-between min-w-0">
                        <div>
                            <span
                                className="material-symbols-outlined text-[48px] text-primary dark:text-indigo-400 mb-md">dashboard_customize</span>
                            <h3 className="text-headline-md font-headline-md mb-sm">The Strategic Dashboard</h3>
                            <p className="text-body-md text-on-surface dark:text-slate-100-variant max-w-sm">Real-time telemetry across all
                                campus nodes, providing executive-level clarity for proactive decision-making.</p>
                        </div>
                        <div className="mt-xl flex flex-wrap gap-xs">
                            <span
                                className="bg-white dark:bg-slate-900/50 px-3 py-1 rounded-full text-label-sm border border-outline dark:border-slate-600-variant">Live
                                Sync</span>
                            <span
                                className="bg-white dark:bg-slate-900/50 px-3 py-1 rounded-full text-label-sm border border-outline dark:border-slate-600-variant">Azure
                                Secure</span>
                        </div>
                    </div>
                    <div className="relative min-h-[300px] lg:min-h-full overflow-hidden">
                        <img className="w-full h-full object-cover lg:translate-y-10 group-hover:lg:translate-y-6 transition-transform duration-500"
                            alt="A sophisticated digital command center UI mockup displayed on a large high-resolution screen in a dimly lit, futuristic boardroom. The interface shows complex data visualizations, blue-tinted graphs, and global maps representing campus locations. The aesthetic is clean, professional, and corporate, emphasizing Azure's clarity and institutional authority."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXSbhnun4wOlA1xAVej8QnkW3UhKtWr0P9kw9kxVP97p9Y6oisnWV1Vq7ib4ye-3V2tRkQk2fW05eXp0L0IhLc1KpSMYWiyjXmdlQ44uqu-D7mB-AoBFuB8OQc2oCgrzlJjVJQJp3RTvVXRLMuHCpgG4ssOBTGv2XBKYAEC45F5raHT4QW4n8Lp9wfUXp8paso46Bl5uonIMQfAlAL9srdc8BVzeY6e6_5ruUhmk22XGbBRScF61S2" />
                    </div>
                </div>
                {/* Side Feature 1 */}
                <div
                    className="col-span-12 md:col-span-4 bg-primary dark:bg-indigo-600 text-white rounded-3xl p-lg flex flex-col justify-between hover:scale-[1.02] transition-transform shadow-lg">
                    <span className="material-symbols-outlined text-[40px] mb-md">account_balance</span>
                    <div>
                        <h3 className="text-title-lg font-bold mb-xs">Fiscal Sovereignty</h3>
                        <p className="text-label-md opacity-80">AI-driven financial modeling for endowment and tuition
                            optimization.</p>
                    </div>
                    <div className="mt-md pt-md border-t border-white/20">
                        <a href="/contact" className="text-label-md font-bold flex items-center gap-xs">Launch Protocol <span
                                className="material-symbols-outlined text-sm">north_east</span></a>
                    </div>
                </div>
                {/* Side Feature 2 */}
                <div
                    className="col-span-12 md:col-span-4 glass-panel rounded-3xl p-lg hover-lift border border-outline dark:border-slate-600-variant/30">
                    <span className="material-symbols-outlined text-primary dark:text-indigo-400 text-[40px] mb-md">verified_user</span>
                    <h3 className="text-title-lg font-bold mb-xs">Access Control</h3>
                    <p className="text-body-md text-on-surface dark:text-slate-100-variant">Biometric and digital identity management across
                        every facility portal.</p>
                </div>
                {/* Side Feature 3 */}
                <div
                    className="col-span-12 md:col-span-8 bg-surface dark:bg-slate-950-container-high rounded-3xl p-lg flex flex-col md:flex-row gap-lg items-center hover-lift overflow-hidden border border-outline dark:border-slate-600-variant/30">
                    <div className="flex-1">
                        <h3 className="text-headline-md font-headline-md mb-sm">Facility Lifecycle</h3>
                        <p className="text-body-md text-on-surface dark:text-slate-100-variant">Maintenance forecasting using IoT sensor
                            integration and Azure Digital Twins.</p>
                    </div>
                    <div className="w-full md:w-64 h-40 bg-white dark:bg-slate-900 rounded-xl shadow-inner relative">

                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* AI Tools Suite Section */}
    <section className="py-xl bg-surface dark:bg-slate-950-container-low">
        <div className="max-w-7xl mx-auto px-margin-desktop">
            <div className="flex flex-col items-center text-center mb-xl">
                <span className="text-tertiary dark:text-purple-400 font-bold text-label-md uppercase tracking-tighter mb-xs">Intelligent Productivity</span>
                <h2 className="text-headline-lg font-headline-lg text-on-surface dark:text-slate-100">Data-Driven AI Tools Suite</h2>
                <p className="text-body-md text-on-surface dark:text-slate-100-variant max-w-2xl mt-md">Empower your educators and students with a comprehensive suite of AI assistants, designed to supercharge productivity and learning outcomes through data-driven management.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Tool 1 */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-outline dark:border-slate-600-variant/30 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400">co_present</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full uppercase tracking-wider mb-3 inline-block">New</span>
                    <h3 className="text-title-lg font-bold mb-2 text-on-surface dark:text-white">Presentation Builder</h3>
                    <p className="text-body-sm text-on-surface dark:text-slate-100-variant dark:text-slate-400 mb-4">Convert ideas into stunning PowerPoint, PDF, or Shark PPT presentations with AI-generated content and professional templates.</p>
                    
                </div>

                {/* Tool 2 */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-outline dark:border-slate-600-variant/30 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">lightbulb</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full uppercase tracking-wider mb-3 inline-block">Popular</span>
                    <h3 className="text-title-lg font-bold mb-2 text-on-surface dark:text-white">Startup Idea Generator</h3>
                    <p className="text-body-sm text-on-surface dark:text-slate-100-variant dark:text-slate-400 mb-4">Generate innovative startup ideas based on your interests, market trends, and problem domains using intelligent data analysis.</p>
                    
                </div>

                {/* Tool 3 */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-outline dark:border-slate-600-variant/30 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-purple-600 dark:text-purple-400">edit_note</span>
                    </div>
                    <h3 className="text-title-lg font-bold mb-2 text-on-surface dark:text-white">Smart Notes Generator</h3>
                    <p className="text-body-sm text-on-surface dark:text-slate-100-variant dark:text-slate-400 mb-4">Transform any topic, lecture, or document into comprehensive, well-structured study notes with AI assistance to boost retention.</p>
                    
                </div>

                {/* Tool 4 */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-outline dark:border-slate-600-variant/30 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-teal-600 dark:text-teal-400">quiz</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full uppercase tracking-wider mb-3 inline-block">New</span>
                    <h3 className="text-title-lg font-bold mb-2 text-on-surface dark:text-white">Quiz Me</h3>
                    <p className="text-body-sm text-on-surface dark:text-slate-100-variant dark:text-slate-400 mb-4">Test your knowledge with AI-generated quizzes. Get instant feedback with detailed explanations for each question to improve institutional outcomes.</p>
                    
                </div>

                {/* Tool 5 */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-outline dark:border-slate-600-variant/30 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-orange-600 dark:text-orange-400">code</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full uppercase tracking-wider mb-3 inline-block">New</span>
                    <h3 className="text-title-lg font-bold mb-2 text-on-surface dark:text-white">Code Tutor</h3>
                    <p className="text-body-sm text-on-surface dark:text-slate-100-variant dark:text-slate-400 mb-4">Interactive AI coding assistant that teaches programming in 14+ languages with syntax highlighting and real-time explanations.</p>
                    
                </div>

                {/* Tool 6 */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-outline dark:border-slate-600-variant/30 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-xl flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-rose-600 dark:text-rose-400">summarize</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full uppercase tracking-wider mb-3 inline-block">New</span>
                    <h3 className="text-title-lg font-bold mb-2 text-on-surface dark:text-white">Text Summarizer</h3>
                    <p className="text-body-sm text-on-surface dark:text-slate-100-variant dark:text-slate-400 mb-4">Instantly condense long articles, research papers, or documents into clear, concise summaries while preserving key insights.</p>
                    
                </div>
            </div>
            
            <div className="mt-12 bg-primary/5 dark:bg-slate-900/50 border border-primary/20 dark:border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 bg-primary dark:bg-indigo-600 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <span className="material-symbols-outlined text-white text-3xl">auto_awesome</span>
                </div>
                <div>
                    <h4 className="text-title-lg font-bold text-on-surface dark:text-white mb-2">AI-Powered Excellence for Institutions</h4>
                    <p className="text-body-md text-on-surface dark:text-slate-100-variant dark:text-slate-400">Our tools leverage cutting-edge AI technology to provide intelligent, personalized assistance. Perfect for educators and administrators looking to maximize productivity through data-driven content generation.</p>
                </div>
            </div>
        </div>
    </section>

    <div id="global-collaboration" />
    {/* Global Collaboration */}
    <section className="py-xl bg-surface dark:bg-slate-950-container-low overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-margin-desktop grid lg:grid-cols-2 gap-xl items-center">
            <div className="order-2 lg:order-1">
                <div className="relative">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="grid grid-cols-2 gap-md">
                        <div className="space-y-md">
                            <div className="h-64 rounded-2xl overflow-hidden shadow-lg transform translate-y-12">
                                <img className="w-full h-full object-cover"
                                    alt="A portrait of an institutional leader in a professional, minimalist glass-walled office in Singapore, looking at a digital tablet with a calm, strategic expression. The background shows a soft-focus metropolitan skyline in the daylight. The lighting is natural and bright, conveying a sense of global connectivity and calm, capable leadership."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGzKxMUbp6C33AJO2qzxcssMNrfEnN3jNp8OJL2TFhVMC-NiaAhlqAPprJGS8m1nY0puVB-RhFPM1hpVSMaZDK4cTqZTwSkLXY-25_kHSGxDISBRaQxbVVab0d6fgsUwGR72BeYKwBX7s9t66fT_8_sVWrKKI2JFWUErL3aaV5ajrZcyvcgNHTsNpb66UZPLJt59pcnY2PN-Ub6iVUMqkBkczUBj6OHTGD2jj3i4LIjdd3fVwjFdIn" />
                            </div>
                            <div className="h-48 bg-primary dark:bg-indigo-600 rounded-2xl p-md text-white flex flex-col justify-end">
                                <p className="text-label-md font-bold">Network Resilience</p>
                                <p className="text-label-sm opacity-70">Cross-border redundancy.</p>
                            </div>
                        </div>
                        <div className="space-y-md">
                            <div
                                className="h-48 bg-white dark:bg-slate-900 border border-outline dark:border-slate-600-variant p-md rounded-2xl flex flex-col justify-between">
                                <span className="material-symbols-outlined text-primary dark:text-indigo-400 text-[32px]">public</span>
                                <p className="text-label-md font-bold text-on-surface dark:text-slate-100">142 Countries</p>
                            </div>
                            <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                                <img className="w-full h-full object-cover"
                                    alt="An architectural detail of a high-tech research library with floating light fixtures and clean white geometric bookshelves. The image is captured with a shallow depth of field, highlighting the precision and cleanliness of the space. The color palette is composed of cool blues and greys, reflecting the Azure institutional aesthetic."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT2Z-R_LZtXpW9W1ty1O94ryOibEEONNgO7wgdmMpBCYhzXL6ojgcutz85rbo_z4vv5VK_Zsj48553_A2SkOhCRFgGkj215FzpTxbx3t0Nz7ONbZEziTCk8ESNLh_g40gMmnzbCGcTCXkNxYTmsyJBOnjglRfXNrcMkQhqbrCPPjH0c6u0ZgoIX16K1TIBZ1w7aQVPdH0lK9F55t2drFbu0cYOaNm6WKC2jJpwx_wLGq49Wn9ymyvo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2 space-y-md">
                <span className="text-primary dark:text-indigo-400 font-bold text-label-md uppercase tracking-tighter">Collaborative
                    Ecosystems</span>
                <h2 className="text-headline-lg font-headline-lg text-on-surface dark:text-slate-100">Global Institutional Networks</h2>
                <p className="text-body-lg text-on-surface dark:text-slate-100-variant">Connect your institution to a global consortium of
                    peers. Securely share curriculum innovation, research datasets, and operational benchmarks without
                    compromising data sovereignty.</p>
                <ul className="space-y-sm">
                    <li className="flex items-center gap-sm">
                        <div
                            className="w-6 h-6 bg-primary dark:bg-indigo-600-fixed text-primary dark:text-indigo-400 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px]">check</span>
                        </div>
                        <span className="text-body-md text-on-surface dark:text-slate-100">Decentralized Governance Models</span>
                    </li>
                    <li className="flex items-center gap-sm">
                        <div
                            className="w-6 h-6 bg-primary dark:bg-indigo-600-fixed text-primary dark:text-indigo-400 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px]">check</span>
                        </div>
                        <span className="text-body-md text-on-surface dark:text-slate-100">Federated Research Protocols</span>
                    </li>
                    <li className="flex items-center gap-sm">
                        <div
                            className="w-6 h-6 bg-primary dark:bg-indigo-600-fixed text-primary dark:text-indigo-400 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px]">check</span>
                        </div>
                        <span className="text-body-md text-on-surface dark:text-slate-100">Cross-Institutional Credit Liquidity</span>
                    </li>
                </ul>
                <div className="pt-md">
                    <a href="/contact"
                        className="bg-white dark:bg-slate-900 border-2 border-primary text-primary dark:text-indigo-400 px-8 py-3 rounded-full font-bold hover:bg-primary dark:bg-indigo-600 hover:text-white transition-all">Explore
                        the Global Map</a>
                </div>
            </div>
        </div>
    </section>
    <div id="resource-optimization" />
    {/* Resource Optimization: Modern Cockpit UI */}
    <section className="py-xl bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-desktop">
            <div className="glass-panel rounded-[2.5rem] p-lg md:p-xl shadow-2xl overflow-hidden relative border-none">
                {/* Background visual */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent"></div>

                </div>
                <div className="relative z-10 grid lg:grid-cols-12 gap-xl">
                    <div className="lg:col-span-5 space-y-md">
                        <h2 className="text-display font-display text-on-surface dark:text-slate-100 leading-tight">Asset Efficiency <br />&amp;
                            AI Modeling.</h2>
                        <p className="text-body-lg text-on-surface dark:text-slate-100-variant">Utilize predictive resource optimization to
                            reduce carbon footprint, optimize facility scheduling, and ensure maximum ROI for every
                            square meter of your campus.</p>
                        <div className="space-y-md pt-md">
                            <div
                                className="bg-surface dark:bg-slate-950-container p-md rounded-2xl flex items-center justify-between border border-outline dark:border-slate-600-variant/50">
                                <div>
                                    <p className="text-label-sm text-on-surface dark:text-slate-100-variant">Asset Utilization</p>
                                    <p className="text-headline-md font-bold text-primary dark:text-indigo-400">94.2%</p>
                                </div>
                                <div className="w-24 h-1 bg-outline-variant rounded-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary dark:bg-indigo-600 w-[94.2%]"></div>
                                </div>
                            </div>
                            <div
                                className="bg-surface dark:bg-slate-950-container p-md rounded-2xl flex items-center justify-between border border-outline dark:border-slate-600-variant/50">
                                <div>
                                    <p className="text-label-sm text-on-surface dark:text-slate-100-variant">Energy Efficiency</p>
                                    <p className="text-headline-md font-bold text-primary dark:text-indigo-400">+22%</p>
                                </div>
                                <span className="material-symbols-outlined text-primary dark:text-indigo-400 text-[32px]">bolt</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div
                            className="relative rounded-3xl overflow-hidden border border-outline dark:border-slate-600-variant shadow-2xl h-full min-h-[400px]">
                            <img className="w-full h-full object-cover"
                                alt="A first-person perspective shot from a high-tech management cockpit or control room looking out over a wide, sunlit atrium of a modern university building. In the foreground, glowing holographic data overlays show performance metrics of the building's climate control and occupancy levels. The style is hyper-realistic and futuristic, showcasing the iGyanAI strategic control platform."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1RV2wia7cK961UOlRAySnDarMBNw--YKztP9uUzOTVi1sfOxwn_EXWkzpgJYi6Viu7lXRPt9CcNLmDru6I4mgD9a0jxOuGRwnsKtL34m_FqzH5pztA7LR1ldzpK383oeVwXgmO0OPLEu4PI6rsVJ0FFWRvFSrxRNo2j_lWETtvOslARH20SYj7AQibfwNXq0JwzrGB6phNqcnx_1hgMUrnriosvL6V0QBUaYBXDP0iql5JY3wnExT" />
                            <div
                                className="absolute top-4 right-4 bg-white dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm border border-outline dark:border-slate-600-variant flex items-center gap-xs">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-label-sm font-bold">Optimization Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Call to Action */}
    <section className="py-xl bg-primary dark:bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">

        </div>
        <div className="max-w-3xl mx-auto px-margin-desktop text-center relative z-10">
            <h2 className="text-display font-display text-white mb-md">Future-Proof Your Legacy.</h2>
            <p className="text-body-lg text-white/80 mb-lg">Join the world&apos;s leading institutions in the transition to
                data-driven global orchestration. Secure, scalable, and built for the next century of education.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-md">
                <a href="/contact"
                    className="bg-white dark:bg-slate-900 text-primary dark:text-indigo-400 px-10 py-5 rounded-full font-display text-title-lg shadow-2xl hover:scale-105 transition-transform">Schedule
                    Consultation</a>
                <a href="/contact"
                    className="bg-primary dark:bg-indigo-600-container text-white px-10 py-5 rounded-full font-display text-title-lg border border-white/30 hover:bg-white dark:bg-slate-900/10 transition-all">Download
                    Prospectus</a>
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

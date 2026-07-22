import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ImageWithSkeleton from "../../../components/ImageWithSkeleton";

export const metadata: Metadata = {
  title: "Student Paths",
  description:
    "Explore the IGYAN AI student experience with personalized learning, AI support, skill tracks, performance visibility, and pitch practice.",
};

const journeyCards = [
  {
    icon: "psychology",
    title: "Learn With Confidence",
    description:
      "Students can ask doubts, revise concepts, generate notes, and move through guided study flows without losing momentum.",
    points: [
      "Study, revision, and doubt-solving modes",
      "Structured notes and memory-based sessions",
      "Faster access to courses and assignments",
    ],
  },
  {
    icon: "group",
    title: "Grow With Guidance",
    description:
      "Buddy AI creates a calmer student experience with coaching for academics, mindset, life choices, and career direction.",
    points: [
      "Friendly counselling prompts",
      "Career mapping and goal planning",
      "Personal development nudges",
    ],
  },
  {
    icon: "analytics",
    title: "Track Real Progress",
    description:
      "Performance becomes easier to understand through assignment status, skill progress, and clear academic signals.",
    points: [
      "Performance snapshot in one space",
      "Assignment and viva visibility",
      "Progress trends students can act on",
    ],
  },
];

const tools = [
  "Skill Tracks and courses",
  "AI Ground and Code Tutor",
  "Smart Notes and Quiz Me",
  "Study Planner and project workflows",
];

const sharkFeatures = [
  {
    icon: "record_voice_over",
    title: "Pitch Practice",
    description:
      "Students rehearse ideas before the real presentation and improve with guided feedback.",
  },
  {
    icon: "upload_file",
    title: "Real Material Uploads",
    description:
      "PDF, PPT, DOCX, and text uploads let the AI review actual student work instead of generic prompts.",
  },
  {
    icon: "translate",
    title: "Language Support",
    description:
      "English and Hindi support make practice more inclusive for multilingual learners.",
  },
  {
    icon: "rocket_launch",
    title: "Innovation Ready",
    description:
      "Link school presentations, startup ideas, and incubation exercises into one guided student flow.",
  },
];

function BlueButton({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        secondary
          ? "inline-flex items-center justify-center rounded-full border border-primary/20 bg-white px-6 py-3.5 font-semibold text-primary shadow-sm transition-all hover:border-primary/40 hover:bg-blue-50 hover:shadow-md dark:border-indigo-400/30 dark:bg-slate-900 dark:text-indigo-300 dark:hover:bg-slate-800"
          : "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-[0_14px_30px_-12px_rgba(0,71,171,0.55)] transition-all hover:-translate-y-0.5 hover:bg-[#0057d1] hover:shadow-[0_18px_36px_-12px_rgba(0,71,171,0.6)] dark:bg-indigo-600 dark:hover:bg-indigo-500"
      }
    >
      {children}
    </Link>
  );
}

function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="/contact"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/10 bg-white text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        title="Contact Us"
      >
        <span className="material-symbols-outlined text-[28px]">mail</span>
      </a>
      <a
        href="https://wa.me/917004201514"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
        title="Chat on WhatsApp"
        aria-label="Chat with IGYAN AI on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

export default function StudentsFeaturePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pt-28 md:pt-32">
        <section className="relative bg-[radial-gradient(circle_at_top_left,_rgba(0,174,239,0.22),_transparent_34%),linear-gradient(180deg,#f8fbff_0%,#eef5ff_42%,#ffffff_100%)] py-16 md:py-24 dark:bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_32%),linear-gradient(180deg,#0f172a_0%,#111827_55%,#020617_100%)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-[8%] top-16 h-28 w-28 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="absolute right-[10%] top-28 h-36 w-36 rounded-full bg-indigo-300/20 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-margin-desktop lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-primary shadow-sm dark:border-indigo-400/20 dark:bg-slate-900/70 dark:text-indigo-300">
                <span className="material-symbols-outlined text-base">school</span>
                Student Portal Experience
              </div>

              <h1 className="max-w-3xl font-headline-xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl dark:text-white">
                A cleaner student workspace for learning, progress, and career growth.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                IGYAN AI brings Co-pilot, Buddy AI, assignments, skill tracks, and AI Shark into one focused experience so students always know what to learn next and what action to take.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <BlueButton href="/contact">
                  Explore Student Portal
                  <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
                </BlueButton>
                <BlueButton href="/contact" secondary>
                  Request School Demo
                </BlueButton>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Daily Focus
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                    Co-pilot
                  </p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Life Guidance
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                    Buddy AI
                  </p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Pitch Practice
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                    AI Shark
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/70 p-3 shadow-[0_32px_70px_-24px_rgba(0,71,171,0.32)] dark:border-slate-800">
                <ImageWithSkeleton
                  src="/learning_path_dashboard.webp"
                  alt="IGYAN AI student dashboard with learning progress, performance overview, and AI support"
                  wrapperClassName="relative aspect-[4/4.1] w-full overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_#f8fbff,_#dbeafe_58%,_#cbd5e1_100%)] p-4"
                  className="object-contain rounded-[1.25rem] drop-shadow-[0_24px_34px_rgba(15,23,42,0.22)] contrast-[1.04] saturate-110"
                  priority
                  sizes="(max-width: 1024px) 100vw, 640px"
                />

                <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/70 bg-white/88 p-5 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/85">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        Student Growth
                      </p>
                      <p className="mt-1 text-3xl font-extrabold text-slate-900 dark:text-white">
                        92%
                      </p>
                    </div>
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary dark:bg-indigo-500/20 dark:text-indigo-300">
                      <span className="material-symbols-outlined text-3xl">trending_up</span>
                    </div>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="personalized-paths"
          className="bg-white py-16 md:py-24 dark:bg-slate-950"
        >
          <div className="mx-auto max-w-7xl px-margin-desktop">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-primary dark:bg-indigo-500/10 dark:text-indigo-300">
                <span className="material-symbols-outlined text-base">dashboard_customize</span>
                Built Around Real Student Behavior
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                Everything students need in one clear academic flow
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                The experience is redesigned around what students actually do every day: ask for help, finish work, revise concepts, build skills, and prepare for opportunities.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {journeyCards.map((card) => (
                <article
                  key={card.title}
                  className="glass-card rounded-[2rem] p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-indigo-500/15 dark:text-indigo-300">
                    <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                    {card.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200"
                      >
                        <span className="material-symbols-outlined mt-0.5 text-base text-primary dark:text-indigo-300">
                          check_circle
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="glass-panel rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-indigo-500/15 dark:text-indigo-300">
                      <span className="material-symbols-outlined text-3xl">map</span>
                    </div>
                    <h3 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white">
                      Skill tracks that turn classroom effort into real outcomes
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                      Students can move from learning to application with structured courses, smart tools, assignment support, and guided project work in one place.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-primary/10 bg-blue-50 px-4 py-2 text-sm font-medium text-primary dark:border-indigo-400/20 dark:bg-indigo-500/10 dark:text-indigo-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8">
                      <BlueButton href="/contact">See Student Tools in Action</BlueButton>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="rounded-[1.25rem] bg-slate-50 p-4 dark:bg-slate-950">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                            Academic Operations
                          </p>
                          <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                            Student command center
                          </p>
                        </div>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary dark:bg-indigo-500/15 dark:text-indigo-300">
                          Live
                        </span>
                      </div>

                      <div className="mt-6 space-y-3">
                        {[
                          ["Skill Tracks / Courses", "Active"],
                          ["Assignments", "Due Soon"],
                          ["Performance", "Improving"],
                          ["Mentor Session", "Scheduled"],
                        ].map(([label, status]) => (
                          <div
                            key={label}
                            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900"
                          >
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                              {label}
                            </span>
                            <span className="text-sm font-bold text-primary dark:text-indigo-300">
                              {status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-primary/10 bg-gradient-to-br from-blue-600 via-primary to-indigo-700 p-7 text-white shadow-[0_28px_65px_-28px_rgba(0,71,171,0.7)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <span className="material-symbols-outlined text-3xl">insights</span>
                </div>
                <h3 className="mt-6 text-3xl font-bold">
                  Performance snapshots that students can actually understand
                </h3>
                <p className="mt-4 text-base leading-7 text-blue-50">
                  Instead of scattered dashboards, the portal shows what is complete, what needs attention, and where the learner is improving.
                </p>

                <div className="mt-8 space-y-5 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                      <span>Assignments</span>
                      <span>80%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-4/5 rounded-full bg-cyan-300" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                      <span>Skill Growth</span>
                      <span>64%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-[64%] rounded-full bg-emerald-300" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                      <span>Presentation Readiness</span>
                      <span>91%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-[91%] rounded-full bg-amber-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="career-mapping"
          className="bg-slate-50 py-16 md:py-24 dark:bg-slate-900/40"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-margin-desktop lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative">
              <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/70 p-3 shadow-[0_30px_60px_-25px_rgba(0,71,171,0.35)] dark:border-slate-800">
                <ImageWithSkeleton
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPIUjYN4dkajpnpQ2WVkSXCwW78_Be0R6pxxyPIuATY6vPnm-2fIJ_GKAxv8SmM3IBPPch-OVFZJdcCf5ySVZpptGhz8E8mGDeQsmGP0Y7w7NqDO1aimkP8tCcuXaeV6gRK040NxQ3n5tf394AOnO4DTVWcMRTciMPANptpUH11qFuV3dAEDbvrA4stAgbvbb7bONdINGDg3ubivyDzikOnkunt6yTaqKRJ0S0yKPJ_3eAPQQ6MzWE"
                  alt="Students preparing startup and presentation ideas with AI Shark"
                  wrapperClassName="relative aspect-[4/4.3] w-full overflow-hidden rounded-[1.5rem] bg-slate-200"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>

              <div className="absolute -right-3 top-8 rounded-2xl border border-primary/10 bg-white/92 px-4 py-3 text-sm font-bold text-primary shadow-lg backdrop-blur dark:border-indigo-400/20 dark:bg-slate-900/92 dark:text-indigo-300">
                Venture Ready
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-primary dark:bg-indigo-500/10 dark:text-indigo-300">
                <span className="material-symbols-outlined text-base">rocket_launch</span>
                AI Shark Experience
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                Practice ideas before the big moment
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Students can upload decks or documents, rehearse their pitch, and get structured AI feedback before innovation cells, school showcases, or classroom presentations.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {sharkFeatures.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-indigo-500/15 dark:text-indigo-300">
                      <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <BlueButton href="/contact">See AI Shark Workflow</BlueButton>
              </div>
            </div>
          </div>
        </section>

        <section
          id="venture-ready"
          className="bg-primary py-16 text-white dark:bg-indigo-600"
        >
          <div className="mx-auto max-w-4xl px-margin-desktop text-center">
            <span className="material-symbols-outlined text-5xl opacity-50">
              format_quote
            </span>
            <blockquote className="mt-5 text-2xl font-medium italic leading-10 md:text-4xl md:leading-[1.45]">
              &quot;IGYAN AI feels like one student workspace instead of ten separate tools. I can ask doubts, check assignments, plan my skills, and prepare presentations without losing focus.&quot;
            </blockquote>

            <div className="mt-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-white/30 p-1">
                <ImageWithSkeleton
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqKMUKWsa33Kulx3z3eb0MKzfBtXl6qKK_xPDeKAsuK8wuaE0lA6JvFnD-SAM0U6JY-QIdjAzvbV2zhTpLvcU4zmmC-9PuhVn38JgdG3HL2Q2hlyMLG23LRFwDN7rpZ9MiuxtNMBkIukTn78HXaLjDB0dvugi0BybLT4bcwTokd851ZN_qK-MS8SjBNgEFo-EwugkzOfxrTi8noACN1qZUWMqNbt-4JI18bb94JRzRF0Lv3jN2nnWu"
                  alt="Portrait of a student portal user"
                  wrapperClassName="relative h-full w-full overflow-hidden rounded-full bg-blue-200"
                  className="object-cover rounded-full"
                  sizes="64px"
                />
              </div>
              <p className="mt-4 text-xl font-bold">Harshi</p>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-100">
                Student Portal User • Litera Valley
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-margin-desktop">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#e8f3ff_0%,#ffffff_45%,#e9edff_100%)] p-8 shadow-[0_25px_65px_-28px_rgba(0,71,171,0.42)] md:p-12 dark:bg-[linear-gradient(135deg,#0f172a_0%,#111827_50%,#1e1b4b_100%)]">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-300/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-indigo-300/20 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                    Ready to launch a better student portal?
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                    Bring Co-pilot, Buddy AI, AI Shark, tools, assignments, and performance tracking into one learner-first experience for your campus.
                  </p>
                  <div className="mt-8">
                    <BlueButton href="/contact">Contact Team</BlueButton>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="flex h-72 w-72 items-center justify-center rounded-full border-[12px] border-primary/10 bg-white/70 shadow-inner dark:border-indigo-400/10 dark:bg-slate-900/60">
                    <div className="flex h-44 w-44 items-center justify-center rounded-full bg-primary text-white shadow-2xl dark:bg-indigo-600">
                      <span className="material-symbols-outlined text-6xl">rocket</span>
                    </div>
                  </div>
                </div>
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

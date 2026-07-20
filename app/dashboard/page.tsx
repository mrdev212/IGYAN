import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { signOut } from './actions'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login?error=login_required')
  }

  const firstName = typeof user.user_metadata.first_name === 'string'
    ? user.user_metadata.first_name
    : user.email?.split('@')[0] ?? 'there'
  const role = typeof user.user_metadata.role === 'string' ? user.user_metadata.role : 'member'

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-wrap items-center justify-between gap-6 border-b border-slate-200 pb-8 dark:border-slate-800">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-trust-blue dark:text-indigo-400">IGYAN AI</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Welcome back, {firstName}.</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Your {role.replace(/-/g, ' ')} dashboard is ready.</p>
          </div>
          <form action={signOut}>
            <button className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900">
              Sign out
            </button>
          </form>
        </header>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ['Personalized paths', 'Continue building your learning journey.'],
            ['AI tools', 'Explore the tools tailored to your role.'],
            ['Progress insights', 'See the next actions that matter most.'],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}

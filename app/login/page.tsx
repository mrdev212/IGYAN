import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { login } from './actions';

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const error = params?.error;
  return (
    <div className="bg-surface dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex selection:bg-indigo-100 dark:selection:bg-indigo-900/50 selection:text-trust-blue dark:selection:text-indigo-300 transition-colors duration-300">
      
      {/* Left Section: Visuals (Hidden on small screens) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-indigo-950 overflow-hidden items-center justify-center p-12">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0047AB]/40 via-indigo-900 to-purple-900 opacity-90 z-10"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00AEEF] rounded-full blur-[120px] opacity-40 mix-blend-screen z-0 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-30 mix-blend-screen z-0"></div>
        
        {/* Floating Sparks/Stars */}
        <div className="absolute left-12 top-1/4 animate-float opacity-40 text-amber-300 z-10">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
          </svg>
        </div>
        <div className="absolute right-16 bottom-1/4 animate-float-slow opacity-30 text-indigo-300 z-10">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
          </svg>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 z-10 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-between h-full w-full max-w-lg">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity w-fit">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 hover:border-white/40 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
              <img alt="IGYAN AI Logo" className="h-8 w-auto filter drop-shadow-md" src="/image.png" />
            </div>
            <span className="font-headline-md text-2xl font-bold tracking-tight">IGYAN AI</span>
          </Link>

          {/* Center Message */}
          <div className="mt-16 mb-auto">
            <h1 className="font-headline-xl text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Empowering the<br/>future of learning.
            </h1>
            <p className="text-indigo-200 text-lg leading-relaxed max-w-md font-body-md">
              Join the AI-native operating system designed to map personalized pathways, automate workflows, and ignite student success.
            </p>
            
            <div className="mt-12 flex gap-4">
              {/* Glass feature pills */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-2 px-4 flex items-center gap-2 text-sm text-white font-medium">
                <span className="material-symbols-outlined text-[16px] text-[#00AEEF]">timeline</span> Predictive Paths
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-2 px-4 flex items-center gap-2 text-sm text-white font-medium">
                <span className="material-symbols-outlined text-[16px] text-purple-300">smart_toy</span> AI Mentors
              </div>
            </div>
          </div>

          {/* Footer Testimonial */}
          <div className="mt-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 relative">
            <div className="absolute -top-4 -left-2 text-4xl text-[#00AEEF] opacity-50">&quot;</div>
            <p className="text-white text-sm leading-relaxed mb-4 relative z-10 font-medium">
              IGYAN AI has completely transformed how we track student progress and intervene exactly when they need help. It&apos;s not just software; it&apos;s our digital co-pilot.
            </p>
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Sarah J." className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
              <div>
                <div className="text-white font-bold text-sm">Dr. Sarah Jenkins</div>
                <div className="text-indigo-200 text-xs">Director of Academics, Future Prep</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 xl:p-24 relative bg-surface dark:bg-slate-950">
        {/* Back Button Mobile */}
        <Link href="/" className="absolute top-6 left-6 lg:hidden flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors font-label-md">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span> Home
        </Link>

        <div className="w-full max-w-[420px] mx-auto animate-[fadeIn_0.5s_ease-out]">
          <div className="text-center lg:text-left mb-10">
            <h2 className="font-headline-xl text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Welcome back</h2>
            <p className="text-slate-500 dark:text-slate-400 font-body-md">Please enter your details to sign in.</p>
            {error === 'login_required' && (
              <p className="text-red-500 font-label-md mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                You need to login first to access this feature.
              </p>
            )}
          </div>

          {/* Social Logins */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all text-slate-700 dark:text-slate-200 font-label-md shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </Link>

          </div>

          <div className="relative flex py-2 items-center mb-8">
            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 dark:text-slate-500 text-xs uppercase tracking-wider font-semibold">Or continue with email</span>
            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
          </div>

          {/* Login Form */}
          <form action={login} className="space-y-5">
            
            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Email address
              </label>
              <input type="email" id="email" name="email" required placeholder="Enter your email" 
                className="w-full bg-transparent border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-trust-blue/20 dark:focus:ring-indigo-500/20 focus:border-trust-blue dark:focus:border-indigo-400 transition-all font-body-md shadow-sm" />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Password
              </label>
              <input type="password" id="password" name="password" required placeholder="Enter your password" 
                className="w-full bg-transparent border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-trust-blue/20 dark:focus:ring-indigo-500/20 focus:border-trust-blue dark:focus:border-indigo-400 transition-all font-body-md shadow-sm" />
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-trust-blue dark:text-indigo-500 focus:ring-trust-blue dark:focus:ring-indigo-500 border-slate-300 dark:border-slate-700 rounded bg-transparent transition-colors cursor-pointer" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/contact" className="font-semibold text-trust-blue dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button type="submit" 
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-full shadow-sm font-label-md text-[16px] font-bold text-white bg-trust-blue hover:bg-[#003da1] dark:bg-indigo-600 dark:hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue dark:focus:ring-offset-slate-950 transition-all hover:-translate-y-0.5 mt-6">
              Sign in to your account
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="font-bold text-trust-blue dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
              Sign up now
            </Link>
          </p>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="mailto:igyan.ai.team@gmail.com" className="w-14 h-14 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all border border-outline-variant/30 dark:border-slate-700" title="Email Us">
          <span className="material-symbols-outlined text-[28px]">mail</span>
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all" title="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
      
    </div>
  );
}

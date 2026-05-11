'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_28%),linear-gradient(135deg,#1c1917_0%,#292524_45%,#0c0a09_100%)] px-6 py-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

        <section className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-amber-200/15 bg-stone-900/75 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="flex flex-col items-center justify-center p-8 sm:p-12">
            <div className="w-full max-w-md space-y-6 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-amber-400/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-white">
                  Reset link sent
                </h1>
                <p className="text-sm leading-6 text-stone-400">
                  We've sent a password reset link to <span className="font-medium text-amber-300">{email}</span>. 
                  Check your inbox and follow the instructions to reset your password.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-sm text-stone-500">
                  Didn't receive the email? Check your spam folder or 
                  <button className="text-amber-300 hover:text-amber-200 ml-1">
                    try again
                  </button>
                </p>
                
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center w-full rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-base font-semibold text-amber-100 transition hover:bg-amber-300/20"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_28%),linear-gradient(135deg,#1c1917_0%,#292524_45%,#0c0a09_100%)] px-6 py-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-amber-200/15 bg-stone-900/75 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-between gap-10 bg-[linear-gradient(180deg,rgba(245,158,11,0.22),rgba(120,53,15,0.08))] p-8 sm:p-10">
          <div className="space-y-5">
            <span className="inline-flex w-fit rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-amber-100">
              Ayyanar Restaurant
            </span>
            <div className="space-y-4">
              <h1 className="max-w-md text-4xl font-semibold tracking-tight text-amber-50 sm:text-5xl">
                Forgot your password?
              </h1>
              <p className="max-w-lg text-sm leading-7 text-stone-200/80 sm:text-base">
                No worries! Enter your email address and we'll send you a link to 
                reset your password. You'll be back to managing the dining floor in no time.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-100">Secure Reset</p>
                  <p className="text-xs text-stone-300">Password reset links expire in 15 minutes</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-100">Quick Recovery</p>
                  <p className="text-xs text-stone-300">Instant email delivery for fast access</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md rounded-[1.75rem] border border-white/10 bg-stone-950/80 p-7 shadow-2xl">
            <div className="mb-6 space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
                Password Recovery
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Reset your password
              </h2>
              <p className="text-sm leading-6 text-stone-400">
                Enter the email address associated with your account and we'll 
                send you instructions to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-stone-200"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="manager@ayyanar.com"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-300/60 focus:bg-white/8"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-amber-400 px-4 py-3 text-base font-semibold text-stone-950 transition hover:bg-amber-300"
              >
                Send Reset Link
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Login
              </Link>
            </div>

            <p className="mt-5 text-center text-sm text-stone-400">
              Need help? Contact your restaurant administrator
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_28%),linear-gradient(135deg,#1c1917_0%,#292524_45%,#0c0a09_100%)] px-6 py-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-amber-200/15 bg-stone-900/75 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-between gap-10 bg-[linear-gradient(180deg,rgba(245,158,11,0.22),rgba(120,53,15,0.08))] p-8 sm:p-10">
          <div className="space-y-5">
            <span className="inline-flex w-fit rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1 text-xs font-semibold tracking-[0.35em] text-amber-100 uppercase">
              Ayyanar Restaurant
            </span>
            <div className="space-y-4">
              <h1 className="max-w-md text-4xl font-semibold tracking-tight text-amber-50 sm:text-5xl">
                Welcome back to your dining floor dashboard.
              </h1>
              <p className="max-w-lg text-sm leading-7 text-stone-200/80 sm:text-base">
                Sign in to manage reservations, track kitchen updates, and keep
                service moving smoothly. This is a dummy login form for the
                restaurant portal.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-amber-100">124</p>
              <p className="mt-1 text-sm text-stone-300">Tables served today</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-amber-100">18</p>
              <p className="mt-1 text-sm text-stone-300">Live reservations</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-amber-100">4.9</p>
              <p className="mt-1 text-sm text-stone-300">Guest rating</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md rounded-[1.75rem] border border-white/10 bg-stone-950/80 p-7 shadow-2xl">
            <div className="mb-6 space-y-2">
              <p className="text-sm tracking-[0.3em] text-amber-300/80 uppercase">
                Staff Login
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Sign in to continue
              </h2>
              <p className="text-sm leading-6 text-stone-400">
                Use any dummy credentials for now. Backend authentication is not
                connected yet.
              </p>
            </div>

            <form className="space-y-4">
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
                  placeholder="manager@ayyanar.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition outline-none focus:border-amber-300/60 focus:bg-white/8"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-stone-200"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-amber-300 hover:text-amber-200"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition outline-none focus:border-amber-300/60 focus:bg-white/8"
                />
              </div>

              <div className="flex items-center justify-between text-sm text-stone-300">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/20"
                  />
                  Keep me signed in
                </label>
                <span>Shift starts at 6:30 PM</span>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-amber-400 px-4 py-3 text-base font-semibold text-stone-950 transition hover:bg-amber-300"
              >
                Login to Dashboard
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-stone-400">
              Demo access for chefs, cashiers, and floor managers
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

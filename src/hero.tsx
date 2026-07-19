export default function Hero() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 pb-10">
      <div className="flex flex-col items-center gap-8 overflow-hidden rounded-4xl border border-orange-200/70 bg-white/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl md:flex-row md:justify-between md:p-10">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
            Wellness made simple
          </div>
          <h3 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Health</h3>
          <p className="mt-3 text-lg text-slate-700 sm:text-xl">is wealth</p>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
            Train smarter, eat better, and keep your wellness routine simple enough to stick with every day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="/workout" className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
              Start Workout
            </a>
            <a href="/nutrition" className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-orange-400 hover:text-orange-600">
              View Nutrition
            </a>
            <a href="/life" className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-orange-400 hover:text-orange-600"> Life
              View Life
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-linear-to-br from-orange-200 via-orange-100 to-amber-50 p-2 shadow-xl">
            <img
              src="body.jpg"
              alt="Hero Image"
              className="h-full w-full rounded-[1.25rem] object-cover sm:h-72 md:h-80"
            />
          </div>
        </div>
      </div>

      <section className="rounded-3xl border border-orange-100 bg-linear-to-r from-orange-50 to-amber-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Thoughtful note</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-900">Every rep, every meal, and every choice matters.</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          For gym-goers, strength is built one consistent day at a time. Stay disciplined, recover well, and remember that progress is not always loud, but it is always real.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Why this website</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Your health and fitness guide in one place</h2>
            <p className="mt-4 text-slate-600">
              From nutrition guidance to life habits and workout routines, this website helps you access the tools and knowledge you need to stay focused on your health journey.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">Nutrition</h3>
              <p className="mt-2 text-sm text-slate-600">Learn about healthy foods, nutrients, and useful meal tips.</p>
              <a href="/nutrition" className="mt-3 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700">Explore nutrition</a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">Workout</h3>
              <p className="mt-2 text-sm text-slate-600">Find routines and guidance to build strength and stay active.</p>
              <a href="/workout" className="mt-3 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700">Check workout plans</a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">Life</h3>
              <p className="mt-2 text-sm text-slate-600">Track healthy lifestyle choices and build better daily habits.</p>
              <a href="/life" className="mt-3 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700">Visit wellness tools</a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">Fitness Focus</h3>
              <p className="mt-2 text-sm text-slate-600">Stay informed with balanced advice for your body, mind, and routine.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="rounded-4xl border border-slate-800 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 px-8 py-10 text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:px-10 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-300">
              Fitness • Nutrition • Lifestyle
            </div>
            <h3 className="mt-4 text-3xl font-black tracking-tight">Arisavo</h3>
            <p className="mt-3 text-lg leading-8 text-slate-300">
              Arisavo is a professional fitness website created to guide your nutrition, workouts, and healthy lifestyle choices with clarity and confidence.
            </p>
            <p className="mt-5 text-sm font-medium text-slate-400">Made by Ojha</p>
          </div>

          <div className="w-full max-w-sm">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Quick Links</h4>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
              <a href="/" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-orange-400 hover:text-orange-300">Home</a>
              <a href="/nutrition" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-orange-400 hover:text-orange-300">Nutrition</a>
              <a href="/workout" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-orange-400 hover:text-orange-300">Workout</a>
              <a href="/life" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-orange-400 hover:text-orange-300">Life</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-4 text-sm text-slate-500">
          © 2026 Arisavo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

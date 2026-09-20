"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f9fc] text-slate-900">

      {/* HEADER */}

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
              Q
            </div>

            <div>
              <p className="text-lg font-extrabold tracking-tight">
                QueueLess
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                Smart Hospital Queue
              </p>
            </div>

          </Link>

          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              How it works
            </a>

            <a
              href="#features"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Features
            </a>

            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">

              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-xs font-semibold text-emerald-600">
                System Online
              </span>

            </div>

          </nav>

        </div>

      </header>


      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 sm:pt-28">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

                <span className="h-2 w-2 rounded-full bg-blue-600" />

                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Intelligent Patient Flow
                </span>

              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Spend less time
                <span className="block text-blue-600">
                  in the queue.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                QueueLess helps patients get a digital token,
                track their position in real time, and understand
                their estimated waiting time without standing in
                a crowded hospital queue.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                {/* IMPORTANT:
                    Mobile verification happens first.
                */}

                <Link
                  href="/verify"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-xl"
                >
                  Get My Token
                  <span className="ml-2">
                    →
                  </span>
                </Link>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  See how it works
                </a>

              </div>

              <div className="mt-8 flex items-center gap-6 text-xs text-slate-400">

                <div className="flex items-center gap-2">
                  <span className="text-base">✓</span>
                  No physical queue
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-base">✓</span>
                  Live status
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                  <span className="text-base">✓</span>
                  Smart estimates
                </div>

              </div>

            </div>


            {/* QUEUE PREVIEW */}

            <div className="relative">

              <div className="absolute -inset-4 rounded-[32px] bg-blue-100/60 blur-2xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">

                {/* TOP */}

                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Live Queue
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-900">
                      Cardiology
                    </p>

                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">

                    <span className="h-2 w-2 rounded-full bg-emerald-500" />

                    <span className="text-xs font-bold text-emerald-600">
                      LIVE
                    </span>

                  </div>

                </div>


                {/* QUEUE INFO */}

                <div className="grid grid-cols-2 gap-4 p-6">

                  <div className="rounded-2xl bg-slate-50 p-5">

                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Now Serving
                    </p>

                    <p className="mt-2 text-3xl font-black text-slate-900">
                      A119
                    </p>

                  </div>

                  <div className="rounded-2xl bg-blue-50 p-5">

                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                      Your Token
                    </p>

                    <p className="mt-2 text-3xl font-black text-blue-600">
                      A127
                    </p>

                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">

                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Patients Ahead
                    </p>

                    <p className="mt-2 text-3xl font-black text-slate-900">
                      8
                    </p>

                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-5">

                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                      Estimated Wait
                    </p>

                    <p className="mt-2 text-3xl font-black text-emerald-600">
                      34 min
                    </p>

                  </div>

                </div>


                {/* PROGRESS */}

                <div className="px-6 pb-6">

                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-xs font-semibold text-slate-400">
                      Queue Progress
                    </span>

                    <span className="text-xs font-bold text-slate-600">
                      68%
                    </span>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                    <div className="h-full w-[68%] rounded-full bg-blue-600" />

                  </div>

                </div>


                {/* STATUS */}

                <div className="border-t border-slate-100 bg-slate-50 px-6 py-5">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                        ✓
                      </div>

                      <div>

                        <p className="text-sm font-bold text-slate-900">
                          Doctor Available
                        </p>

                        <p className="text-xs text-slate-400">
                          Queue is moving smoothly
                        </p>

                      </div>

                    </div>

                    <span className="text-xs font-bold text-emerald-600">
                      ACTIVE
                    </span>

                  </div>

                </div>

              </div>


              {/* FLOATING NOTIFICATION */}

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    🔔
                  </div>

                  <div>

                    <p className="text-xs font-bold text-slate-900">
                      Queue Update
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-400">
                      2 patients served
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* QUICK BENEFITS */}

      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl gap-px bg-slate-200 sm:grid-cols-3">

          <div className="bg-white px-6 py-8 sm:px-10">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              🎫
            </div>

            <h3 className="font-bold text-slate-900">
              Digital Token
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Get your queue token digitally without standing
              at a registration counter.
            </p>

          </div>


          <div className="bg-white px-6 py-8 sm:px-10">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              📍
            </div>

            <h3 className="font-bold text-slate-900">
              Live Tracking
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Know your position and current serving token
              while you wait.
            </p>

          </div>


          <div className="bg-white px-6 py-8 sm:px-10">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              ⏱
            </div>

            <h3 className="font-bold text-slate-900">
              Wait Prediction
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Get an estimated waiting time based on the
              current queue.
            </p>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="max-w-2xl">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Simple Process
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            How QueueLess works
          </h2>

          <p className="mt-4 leading-7 text-slate-500">
            A simple digital flow that reduces unnecessary
            waiting while giving hospitals better visibility
            into patient queues.
          </p>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* STEP 1 */}

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <div className="flex items-center justify-between">

              <span className="text-4xl font-black text-blue-100">
                01
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                📱
              </div>

            </div>

            <h3 className="mt-8 text-xl font-bold text-slate-900">
              Verify your mobile
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Verify your mobile number using an OTP before
              starting your hospital registration.
            </p>

          </div>


          {/* STEP 2 */}

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <div className="flex items-center justify-between">

              <span className="text-4xl font-black text-blue-100">
                02
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                🎫
              </div>

            </div>

            <h3 className="mt-8 text-xl font-bold text-slate-900">
              Get your token
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Enter your patient details and receive a digital
              queue token for the selected department.
            </p>

          </div>


          {/* STEP 3 */}

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <div className="flex items-center justify-between">

              <span className="text-4xl font-black text-blue-100">
                03
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                📊
              </div>

            </div>

            <h3 className="mt-8 text-xl font-bold text-slate-900">
              Track your queue
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Monitor your current position, patients ahead,
              and estimated waiting time.
            </p>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section
        id="features"
        className="border-y border-slate-200 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Built for Better Patient Flow
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              More than a digital token
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              QueueLess is designed to give patients and
              hospital teams better visibility into the queue.
            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <FeatureCard
              icon="🎫"
              title="Digital Tokens"
              description="Generate and manage patient queue tokens digitally."
            />

            <FeatureCard
              icon="📡"
              title="Live Queue"
              description="Track queue movement and currently serving patients."
            />

            <FeatureCard
              icon="⏱"
              title="Wait Prediction"
              description="Estimate waiting time using current queue conditions."
            />

            <FeatureCard
              icon="⚡"
              title="Priority Handling"
              description="Support configurable hospital queue priority rules."
            />

            <FeatureCard
              icon="📈"
              title="Hospital Analytics"
              description="Help hospital teams understand queue loads and bottlenecks."
            />

            <FeatureCard
              icon="🔮"
              title="Smart Simulation"
              description="Explore how resource changes could affect patient flow."
            />

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="overflow-hidden rounded-[32px] bg-blue-600 px-6 py-14 text-center shadow-xl shadow-blue-200 sm:px-12">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
            Ready to skip the physical queue?
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
            Start with your mobile number.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
            Verify your mobile, register your visit, and get
            your digital hospital token.
          </p>

          <Link
            href="/verify"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
          >
            Get My Token
            <span className="ml-2">
              →
            </span>
          </Link>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <div>

            <p className="font-bold text-slate-900">
              QueueLess
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Intelligent Hospital Queue & Patient Flow System
            </p>

          </div>

          <p className="text-xs text-slate-400">
            Built for smarter patient flow.
          </p>

        </div>

      </footer>

    </main>
  );
}


/* --------------------------------------------------
   FEATURE CARD
-------------------------------------------------- */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
        {icon}
      </div>

      <h3 className="mt-5 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

    </div>
  );
}
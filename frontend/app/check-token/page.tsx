"use client";

import Link from "next/link";

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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* ------------------------------------------------ */}
      {/* HEADER */}
      {/* ------------------------------------------------ */}

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-200">
              Q
            </div>

            <div>
              <p className="text-lg font-extrabold tracking-tight">
                QueueLess
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                Smart Hospital Flow
              </p>
            </div>

          </Link>


          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
            >
              How it works
            </a>

            <a
              href="#features"
              className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
            >
              Features
            </a>

            <Link
              href="/check-token"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Check My Token
            </Link>

          </nav>


          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-xs font-bold text-emerald-600">
                System Online
              </span>
            </div>

            <Link
              href="/verify"
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              Get My Token
            </Link>

          </div>

        </div>

      </header>


      {/* ------------------------------------------------ */}
      {/* HERO */}
      {/* ------------------------------------------------ */}

      <section className="relative overflow-hidden">

        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="absolute -right-32 top-32 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />


        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-blue-600" />

              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Smarter Patient Flow
              </span>

            </div>


            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">

              Spend less time
              <span className="block text-blue-600">
                in the queue.
              </span>

            </h1>


            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
              QueueLess helps patients get digital tokens, track
              their live queue, and understand their estimated
              waiting time without standing in a hospital queue.
            </p>


            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/verify"
                className="rounded-xl bg-blue-600 px-6 py-4 text-center text-sm font-bold text-white shadow-xl shadow-blue-200 transition hover:bg-blue-700"
              >
                Get My Token →
              </Link>

              <Link
                href="/check-token"
                className="rounded-xl border border-slate-200 bg-white px-6 py-4 text-center text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                Check My Token
              </Link>

            </div>


            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">

              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                Digital token
              </div>

              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                Live queue tracking
              </div>

              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                Wait prediction
              </div>

            </div>

          </div>


          {/* Queue Preview */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[40px] bg-blue-100/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">

              <div className="border-b border-slate-100 px-6 py-5">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Live Queue
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-slate-900">
                      Cardiology
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />

                    <span className="text-xs font-bold text-emerald-600">
                      Live
                    </span>
                  </div>

                </div>

              </div>


              <div className="p-6">

                <div className="rounded-2xl bg-blue-600 p-6 text-white">

                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">
                    Now Serving
                  </p>

                  <div className="mt-2 flex items-end justify-between">

                    <p className="text-5xl font-black">
                      A119
                    </p>

                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                      Doctor Available
                    </span>

                  </div>

                </div>


                <div className="mt-5 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-slate-50 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Your Token
                    </p>

                    <p className="mt-2 text-3xl font-black text-slate-900">
                      A127
                    </p>

                  </div>


                  <div className="rounded-2xl bg-slate-50 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Patients Ahead
                    </p>

                    <p className="mt-2 text-3xl font-black text-slate-900">
                      8
                    </p>

                  </div>

                </div>


                <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                        Estimated Wait
                      </p>

                      <p className="mt-1 text-2xl font-black text-emerald-600">
                        34 min
                      </p>

                    </div>

                    <div className="text-right">

                      <p className="text-xs font-semibold text-slate-400">
                        Queue status
                      </p>

                      <p className="mt-1 text-sm font-bold text-emerald-600">
                        Moving smoothly
                      </p>

                    </div>

                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-emerald-100">

                    <div className="h-full w-[68%] rounded-full bg-emerald-500" />

                  </div>

                </div>


                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    🔔
                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-900">
                      Queue update
                    </p>

                    <p className="text-xs text-slate-500">
                      Your turn is getting closer.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ------------------------------------------------ */}
      {/* HOW IT WORKS */}
      {/* ------------------------------------------------ */}

      <section
        id="how-it-works"
        className="border-y border-slate-200 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              How QueueLess works
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              From mobile verification to your live queue.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              A simple digital journey designed to reduce unnecessary
              waiting inside hospitals.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-7">

              <span className="text-sm font-black text-blue-600">
                01
              </span>

              <div className="mt-5 text-3xl">
                📱
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Verify your mobile
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Verify your mobile number with an OTP before
                starting the registration process.
              </p>

            </div>


            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-7">

              <span className="text-sm font-black text-blue-600">
                02
              </span>

              <div className="mt-5 text-3xl">
                🎟️
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Get your token
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Complete your registration and receive a digital
                token for your selected department.
              </p>

            </div>


            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-7">

              <span className="text-sm font-black text-blue-600">
                03
              </span>

              <div className="mt-5 text-3xl">
                📊
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Track your queue
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                See your position, patients ahead, current token,
                and estimated waiting time.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ------------------------------------------------ */}
      {/* FEATURES */}
      {/* ------------------------------------------------ */}

      <section id="features">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Built for smarter hospitals
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              More than a digital token.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              QueueLess combines patient convenience with hospital
              operations intelligence.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <FeatureCard
              icon="🎟️"
              title="Digital Tokens"
              description="Generate a department-specific token without standing in a physical queue."
            />

            <FeatureCard
              icon="📍"
              title="Live Queue Tracking"
              description="Patients can monitor their queue position and current serving token."
            />

            <FeatureCard
              icon="⏱️"
              title="Wait Prediction"
              description="Estimate waiting time using queue information and consultation patterns."
            />

            <FeatureCard
              icon="⚡"
              title="Priority Scheduling"
              description="Support hospital-defined priority workflows for different patient categories."
            />

            <FeatureCard
              icon="📈"
              title="Hospital Analytics"
              description="Identify busy periods, department bottlenecks, and resource utilization."
            />

            <FeatureCard
              icon="🤖"
              title="Smart Optimization"
              description="Use operational data to support better patient and resource flow decisions."
            />

          </div>

        </div>

      </section>


      {/* ------------------------------------------------ */}
      {/* CHECK TOKEN CTA */}
      {/* ------------------------------------------------ */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-950 px-7 py-12 text-white sm:px-12 sm:py-14">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
                Already registered?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Check your token anytime.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Use your registered mobile number to find your token
                and return directly to your live queue.
              </p>

            </div>


            <Link
              href="/check-token"
              className="shrink-0 rounded-xl bg-white px-6 py-4 text-center text-sm font-bold text-slate-950 transition hover:bg-slate-100"
            >
              Check My Token →
            </Link>

          </div>

        </div>

      </section>


      {/* ------------------------------------------------ */}
      {/* FINAL CTA */}
      {/* ------------------------------------------------ */}

      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white shadow-xl shadow-blue-200">
            Q
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Your time matters.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-500">
            Get your digital token and spend less time waiting
            inside the hospital.
          </p>


          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/verify"
              className="rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-200 transition hover:bg-blue-700"
            >
              Get My Token →
            </Link>

            <Link
              href="/check-token"
              className="rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
            >
              Check Existing Token
            </Link>

          </div>

        </div>

      </section>


      {/* ------------------------------------------------ */}
      {/* FOOTER */}
      {/* ------------------------------------------------ */}

      <footer className="border-t border-slate-200 bg-slate-50">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="font-bold text-slate-900">
              QueueLess
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Intelligent Hospital Queue & Patient Flow System
            </p>

          </div>


          <div className="flex items-center gap-5 text-xs text-slate-400">

            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/check-token"
              className="transition hover:text-blue-600"
            >
              Check Token
            </Link>

            <span>
              Prototype
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}
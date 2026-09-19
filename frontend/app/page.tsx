"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f9fc] text-slate-900">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/20">
              Q
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">
                QueueLess
              </h1>

              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                Smart Hospital Queue
              </p>
            </div>
          </div>


          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              How it works
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Features
            </button>

            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

              <span className="text-xs font-semibold text-emerald-700">
                System Online
              </span>
            </div>

          </div>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-indigo-200/40 blur-3xl" />


        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">

          {/* ========== LEFT SIDE ========== */}
          <div>

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">
                ✦
              </span>

              <span className="text-xs font-bold tracking-widest text-blue-700">
                SMART PATIENT FLOW
              </span>

            </div>


            {/* Heading */}
            <h2 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[68px]">

              Spend less time

              <span className="block">
                in the <span className="text-blue-600">queue.</span>
              </span>

            </h2>


            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              QueueLess helps patients get a digital token, monitor
              their position, and know their estimated waiting time
              before they reach the consultation room.
            </p>


            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-3">

              {/* Get Token */}
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/register";
                }}
                className="group rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Get My Token

                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </button>


              {/* See Features */}
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
              >
                See how it works
              </button>

            </div>


            {/* Benefits */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  ✓
                </span>
                Digital Token
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  ✓
                </span>
                Live Tracking
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  ✓
                </span>
                Wait Prediction
              </div>

            </div>

          </div>


          {/* ========== RIGHT SIDE ========== */}
          <div className="relative">

            {/* Main Queue Card */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_-20px_rgba(15,23,42,0.25)]">

              {/* Top strip */}
              <div className="absolute left-0 right-0 top-0 h-1.5 bg-blue-600" />


              {/* Card Header */}
              <div className="flex items-start justify-between pt-2">

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Live Queue
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-950">
                    Cardiology
                  </h3>
                </div>


                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                  <span className="text-xs font-bold text-emerald-700">
                    LIVE
                  </span>

                </div>

              </div>


              {/* Now Serving */}
              <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-400">
                      Now serving
                    </p>

                    <p className="mt-1 text-5xl font-black tracking-tight">
                      A119
                    </p>
                  </div>


                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    🎫
                  </div>

                </div>

              </div>


              {/* Token + Wait */}
              <div className="mt-4 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    Your Token
                  </p>

                  <p className="mt-2 text-3xl font-black text-blue-700">
                    A127
                  </p>

                  <p className="mt-1 text-xs text-blue-600">
                    8 patients ahead
                  </p>

                </div>


                <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">

                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    Estimated Wait
                  </p>

                  <p className="mt-2 text-3xl font-black text-indigo-700">
                    34 min
                  </p>

                  <p className="mt-1 text-xs text-indigo-600">
                    Based on live queue
                  </p>

                </div>

              </div>


              {/* Progress */}
              <div className="mt-6">

                <div className="mb-2 flex justify-between text-xs font-medium text-slate-500">
                  <span>Queue progress</span>
                  <span>68%</span>
                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[68%] rounded-full bg-blue-600" />
                </div>

              </div>


              {/* Bottom information */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                <div>
                  <p className="text-xs text-slate-400">
                    Doctor
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-slate-700">
                    Available
                  </p>
                </div>


                <div className="text-right">
                  <p className="text-xs text-slate-400">
                    Queue status
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-emerald-600">
                    Moving smoothly
                  </p>
                </div>

              </div>

            </div>


            {/* Floating notification */}
            <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:block">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                  🔔
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Queue Update
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    2 patients served
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="border-t border-slate-200 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              HOW QUEUELESS WORKS
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A smoother hospital visit
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              From registration to consultation, QueueLess keeps
              patients informed throughout their journey.
            </p>

          </div>


          {/* Steps */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {/* Step 1 */}
            <div className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl">

              <div className="absolute right-6 top-6 text-4xl font-black text-slate-100">
                01
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                🎫
              </div>

              <h4 className="mt-6 text-xl font-bold">
                Get your token
              </h4>

              <p className="mt-3 leading-7 text-slate-500">
                Register your visit and receive a digital queue token
                without standing at the registration counter.
              </p>

            </div>


            {/* Step 2 */}
            <div className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl">

              <div className="absolute right-6 top-6 text-4xl font-black text-slate-100">
                02
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                📍
              </div>

              <h4 className="mt-6 text-xl font-bold">
                Track your position
              </h4>

              <p className="mt-3 leading-7 text-slate-500">
                See the current token, patients ahead of you,
                and real-time queue movement.
              </p>

            </div>


            {/* Step 3 */}
            <div className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl">

              <div className="absolute right-6 top-6 text-4xl font-black text-slate-100">
                03
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                ⏱
              </div>

              <h4 className="mt-6 text-xl font-bold">
                Know your wait
              </h4>

              <p className="mt-3 leading-7 text-slate-500">
                Get an estimated waiting time based on the current
                queue and consultation flow.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="bg-[#f6f9fc]"
      >

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              BUILT FOR BETTER PATIENT FLOW
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              More than just a digital token
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              QueueLess combines queue management, live updates and
              intelligent waiting-time estimation into one platform.
            </p>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* Feature 1 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                🎫
              </div>

              <h4 className="mt-6 text-xl font-bold">
                Digital Tokens
              </h4>

              <p className="mt-3 leading-7 text-slate-500">
                Join a department queue digitally instead of waiting
                at a registration counter.
              </p>

            </div>


            {/* Feature 2 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                📡
              </div>

              <h4 className="mt-6 text-xl font-bold">
                Live Queue Updates
              </h4>

              <p className="mt-3 leading-7 text-slate-500">
                Keep track of queue movement and your position as
                patients are served.
              </p>

            </div>


            {/* Feature 3 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                ⏱
              </div>

              <h4 className="mt-6 text-xl font-bold">
                Wait Prediction
              </h4>

              <p className="mt-3 leading-7 text-slate-500">
                Estimate waiting time using queue and patient-flow
                information.
              </p>

            </div>


            {/* Feature 4 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                🔔
              </div>

              <h4 className="mt-6 text-xl font-bold">
                Smart Notifications
              </h4>

              <p className="mt-3 leading-7 text-slate-500">
                Notify patients as their turn approaches so they can
                manage their time better.
              </p>

            </div>


            {/* Feature 5 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
                👨‍⚕️
              </div>

              <h4 className="mt-6 text-xl font-bold">
                Resource Visibility
              </h4>

              <p className="mt-3 leading-7 text-slate-500">
                Help hospital staff monitor doctors, departments
                and current queue loads.
              </p>

            </div>


            {/* Feature 6 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                📊
              </div>

              <h4 className="mt-6 text-xl font-bold">
                Hospital Analytics
              </h4>

              <p className="mt-3 leading-7 text-slate-500">
                Understand department demand, waiting patterns and
                patient-flow bottlenecks.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="bg-white">

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <div className="rounded-[32px] bg-slate-950 px-8 py-14 text-white shadow-2xl sm:px-14">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              READY WHEN YOU ARE
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Skip the unnecessary waiting.
            </h3>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
              Get your digital token and keep track of your hospital
              queue from wherever you are.
            </p>

            <button
              type="button"
              onClick={() => {
                window.location.href = "/register";
              }}
              className="mt-8 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get My Token →
            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-[#f6f9fc]">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="font-bold text-slate-900">
              QueueLess
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Intelligent Hospital Queue & Patient Flow System
            </p>
          </div>

          <p className="text-xs text-slate-400">
            © 2026 QueueLess. Built for smarter patient flow.
          </p>

        </div>

      </footer>

    </main>
  );
}
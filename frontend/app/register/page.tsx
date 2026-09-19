"use client";

import { useState } from "react";

export default function RegisterPage() {
  // ================= FORM STATE =================

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [priority, setPriority] = useState("regular");
  const [symptoms, setSymptoms] = useState("");

  // ================= VALIDATION + SERVER STATE =================

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Shows loading state while request is being sent
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Stores error coming from frontend/backend connection
  const [serverError, setServerError] = useState("");


  // ================= VALIDATION =================

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Full name is required.";
    }

    // Age validation
    if (!age) {
      newErrors.age = "Age is required.";
    } else if (Number(age) < 1 || Number(age) > 120) {
      newErrors.age = "Please enter an age between 1 and 120.";
    }

    // Phone validation
    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone =
        "Phone number must contain exactly 10 digits.";
    }

    // Department validation
    if (!department) {
      newErrors.department = "Please select a department.";
    }

    // Save validation errors
    setErrors(newErrors);

    // Form is valid if there are no errors
    return Object.keys(newErrors).length === 0;
  };


  // ================= FORM SUBMIT =================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // First validate frontend form
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    // Remove previous backend error
    setServerError("");

    // Start loading
    setIsSubmitting(true);

    try {
      // Send patient data to FastAPI backend
      const response = await fetch(
        "http://127.0.0.1:8000/patients",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: name.trim(),
            age: Number(age),
            phone: phone,
            department: department,
            priority: priority,
            symptoms: symptoms.trim() || null,
          }),
        }
      );

      // Check whether backend returned an error
      if (!response.ok) {
        throw new Error("Failed to create patient.");
      }

      // Convert backend response into JavaScript object
      const data = await response.json();

      // For now, display the backend response in console
      console.log("Patient created successfully:");
      console.log(data);

      /*
        Example response:

        {
          id: 4,
          name: "Tavishi",
          age: 20,
          phone: "9876543210",
          department: "cardiology",
          token_number: 1,
          status: "waiting",
          symptoms: "Chest discomfort",
          priority: "regular"
        }

        Later we will use this token_number
        to create the Queue Tracking page.
      */

      alert(
        `Registration successful! Your token number is ${data.token_number}.`
      );

    } catch (error) {
      console.error("Registration error:", error);

      setServerError(
        "Unable to create your token. Please try again."
      );

    } finally {
      // Stop loading whether request succeeds or fails
      setIsSubmitting(false);
    }
  };


  // ================= PAGE =================

  return (
    <main className="relative min-h-screen bg-[#f6f9fc] px-6 py-10 text-slate-900">

      {/* ================= BACK BUTTON ================= */}

      <button
        type="button"
        onClick={() => {
          window.location.href = "/";
        }}
        className="absolute left-6 top-6 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
      >
        ← Back to QueueLess
      </button>


      {/* ================= PAGE CONTENT ================= */}

      <div className="mx-auto max-w-3xl pt-10">

        {/* ================= PAGE HEADER ================= */}

        <div className="mb-8">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            PATIENT REGISTRATION
          </p>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950">
            Get your digital token
          </h1>

          <p className="mt-3 text-slate-500">
            Enter your details below to join the hospital queue.
          </p>

        </div>


        {/* ================= REGISTRATION CARD ================= */}

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">

          {/* ================= CARD HEADER ================= */}

          <div className="mb-8 border-b border-slate-100 pb-6">

            <h2 className="text-xl font-bold text-slate-900">
              Patient Details
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Please provide accurate information for your visit.
            </p>

          </div>


          {/* ================= SERVER ERROR ================= */}

          {serverError && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {serverError}
            </div>
          )}


          {/* ================= FORM ================= */}

          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >

            {/* ================= FULL NAME ================= */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 ${
                  errors.name
                    ? "border-red-400 focus:border-red-500"
                    : "border-slate-300 focus:border-blue-500"
                }`}
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name}
                </p>
              )}

            </div>


            {/* ================= AGE + PHONE ================= */}

            <div className="grid gap-6 sm:grid-cols-2">

              {/* AGE */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Age
                </label>

                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 ${
                    errors.age
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-blue-500"
                  }`}
                />

                {errors.age && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.age}
                  </p>
                )}

              </div>


              {/* PHONE */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  inputMode="numeric"
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 ${
                    errors.phone
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-blue-500"
                  }`}
                />

                {errors.phone && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}

              </div>

            </div>


            {/* ================= DEPARTMENT ================= */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Department
              </label>

              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition focus:ring-4 focus:ring-blue-500/10 ${
                  department
                    ? "text-slate-900"
                    : "text-slate-400"
                } ${
                  errors.department
                    ? "border-red-400 focus:border-red-500"
                    : "border-slate-300 focus:border-blue-500"
                }`}
              >

                <option value="" disabled>
                  Select department
                </option>

                <option
                  value="general"
                  className="text-slate-900"
                >
                  General
                </option>

                <option
                  value="cardiology"
                  className="text-slate-900"
                >
                  Cardiology
                </option>

                <option
                  value="dental"
                  className="text-slate-900"
                >
                  Dental
                </option>

                <option
                  value="gastro"
                  className="text-slate-900"
                >
                  Gastroenterology
                </option>

                <option
                  value="orthopedics"
                  className="text-slate-900"
                >
                  Orthopedics
                </option>

                <option
                  value="neurology"
                  className="text-slate-900"
                >
                  Neurology
                </option>

              </select>

              {errors.department && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.department}
                </p>
              )}

            </div>


            {/* ================= PRIORITY ================= */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Visit Priority
              </label>

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              >

                <option value="regular">
                  Regular
                </option>

                <option value="follow_up">
                  Follow-up
                </option>

                <option value="elderly">
                  Elderly
                </option>

                <option value="pregnant">
                  Pregnant
                </option>

                <option value="emergency">
                  Emergency
                </option>

              </select>

              <p className="mt-2 text-xs text-slate-400">
                Priority should follow the hospital&apos;s
                authorized workflow.
              </p>

            </div>


            {/* ================= SYMPTOMS ================= */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">

                Symptoms / Visit Reason

                <span className="ml-1 font-normal text-slate-400">
                  (Optional)
                </span>

              </label>

              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Briefly describe the reason for your visit"
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />

            </div>


            {/* ================= SUBMIT ================= */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting
                ? "Creating your token..."
                : "Get My Digital Token →"}
            </button>

          </form>

        </div>


        {/* ================= SECURITY NOTE ================= */}

        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">

          <span>🔒</span>

          <span>
            Your information is securely handled by QueueLess.
          </span>

        </div>

      </div>

    </main>
  );
}
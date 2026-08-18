import { useState } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-xl border border-slate-200">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <svg
              className="h-8 w-8 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Submission Successful
          </h1>

          <p className="mt-3 text-slate-500">
            Your information has been submitted successfully.
          </p>
        </div>
      </div>
    );
  }
  const steps = [
    {
      number: 1,
      title: "Personal Info",
    },
    {
      number: 2,
      title: "Account Details",
    },
    {
      number: 3,
      title: "Review & Submit",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Registration
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Create your account
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Complete the following steps to create your account.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm sm:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${
                      currentStep >= step.number
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`mt-2 hidden text-xs font-medium sm:block ${
                      currentStep >= step.number
                        ? "text-indigo-600"
                        : "text-slate-400"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`mx-3 h-px flex-1 transition ${
                      currentStep > step.number
                        ? "bg-indigo-600"
                        : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          {currentStep === 1 && (
            <div className="p-6 sm:p-10">
              <div className="mb-8">
                <span className="text-sm font-medium text-indigo-600">
                  Step 1 of 3
                </span>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Personal Information
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Tell us a little about yourself.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Age
                  </label>

                  <input
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => updateFormData("age", e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="p-6 sm:p-10">
              <div className="mb-8">
                <span className="text-sm font-medium text-indigo-600">
                  Step 2 of 3
                </span>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Account Details
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Choose your credentials for the account.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Username
                  </label>

                  <input
                    type="text"
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={(e) => updateFormData("username", e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Create a secure password"
                    value={formData.password}
                    onChange={(e) => updateFormData("password", e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="p-6 sm:p-10">
              <div className="mb-8">
                <span className="text-sm font-medium text-indigo-600">
                  Step 3 of 3
                </span>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Review & Submit
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Review your information before submitting.
                </p>
              </div>

              <div className="divide-y divide-slate-100 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm text-slate-500">Full Name</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {formData.name || "Not provided"}
                  </span>
                </div>

                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm text-slate-500">Email</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {formData.email || "Not provided"}
                  </span>
                </div>

                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm text-slate-500">Age</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {formData.age || "Not provided"}
                  </span>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm text-slate-500">Username</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {formData.username || "Not provided"}
                  </span>
                </div>

                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm text-slate-500">Password</span>
                  <span className="text-sm font-semibold text-slate-900">
                    ••••••••
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-indigo-50 p-4">
                <p className="text-sm leading-6 text-indigo-700">
                  Please make sure all the information above is correct. You can
                  go back and edit any details before submitting.
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-slate-200 px-6 py-5 sm:px-10">
            <button
              onClick={previousStep}
              disabled={currentStep === 1}
              className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Back
            </button>

            {currentStep < 3 ? (
              <button
                onClick={nextStep}
                className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              >
                Submit
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Your information is securely handled and never shared without your
          permission.
        </p>
      </div>
    </div>
  );
};

export default MultiStepForm;

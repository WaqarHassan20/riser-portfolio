'use client';

import { ClipboardList, FileCheck, Plane, Search, UserCheck } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Profile Assessment",
      desc: "We analyze your grades, budget, and career goals to find your best fit.",
    },
    {
      icon: Search,
      title: "University Selection",
      desc: "We shortlist top-tier universities where your acceptance probability is highest.",
    },
    {
      icon: FileCheck,
      title: "Documentation",
      desc: "Our team crafts your SOPs and polishes your application to perfection.",
    },
    {
      icon: UserCheck,
      title: "Visa Interview Prep",
      desc: "Mock interviews with former visa officers to ensure you pass with confidence.",
    },
    {
      icon: Plane,
      title: "Departure",
      desc: "From accommodation to flight bookings, we help you settle in.",
    },
  ];

  const brandText = "The Risers Consultancy";

  return (
    <section id="process" className="relative overflow-hidden">
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-20 md:px-44 relative z-10">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#084B73] mb-6">Your Roadmap to Success</h2>
            <p className="text-lg text-gray-700">
              The study abroad process is complex. We break it down into five predictable, manageable steps.
            </p>
          </div>

          <div className="relative grid md:grid-cols-5 gap-8 mb-16">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#084B73]/20 to-transparent z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-[#084B73] group-hover:shadow-lg transition-all duration-300">
                  <step.icon className="w-10 h-10 text-[#084B73] group-hover:text-[#081F30] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width Brand Ticker Line */}
      <div 
        className="w-full overflow-hidden py-6 border-y border-white/20"
        style={{
          background: 'linear-gradient(135deg, #081F30 0%, #084B73 50%, #081F30 100%)',
        }}
      >
        <div className="flex">
          <div 
            className="flex whitespace-nowrap shrink-0 text-white"
            style={{
              animation: 'marquee 120s linear infinite',
            }}
          >
            {Array(40).fill(brandText).map((text, i) => (
              <span
                key={i}
                className="mx-8 text-2xl md:text-4xl font-extrabold tracking-wide"
              >
                {text}
              </span>
            ))}
          </div>
          <div 
            className="flex whitespace-nowrap shrink-0 text-white"
            style={{
              animation: 'marquee 120s linear infinite',
            }}
            aria-hidden="true"
          >
            {Array(40).fill(brandText).map((text, i) => (
              <span
                key={i}
                className="mx-8 text-2xl md:text-4xl font-extrabold tracking-wide"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

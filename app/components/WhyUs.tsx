'use client';

import { Clock, ShieldCheck, Globe, TrendingUp, Award, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  hasGradient?: boolean;
  colSpan?: string;
}

const FeatureCard = ({ icon: Icon, title, description, hasGradient = false, colSpan = '' }: FeatureCardProps) => {
  return (
    <div className={`group ${hasGradient ? 'bg-linear-to-br from-blue-50 to-[#084B73]/10 border-blue-200' : 'bg-white border-gray-200'} p-6 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${colSpan}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-14 h-14 rounded-xl border ${hasGradient ? 'border-gray-300 bg-white' : 'border-gray-300 bg-gray-50'} flex items-center justify-center shrink-0`}>
          <Icon className="w-7 h-7 text-[#084B73]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#084B73] transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  );
};

export default function WhyUs() {
  const features = [
    {
      icon: Clock,
      title: '48-Hour Shortlisting',
      description: "We don't make you wait. Get your customized university list within 2 days of assessment.",
      hasGradient: false,
      colSpan: ''
    },
    {
      icon: Award,
      title: 'Tailored Approach',
      description: 'No templates. We help you craft a narrative that highlights your unique strengths.',
      hasGradient: false,
      colSpan: ''
    },
    {
      icon: Globe,
      title: '150+ Partner Universities Worldwide',
      description: 'From Ivy League to Russell Group, we have established relationships with top institutions across USA, UK, Canada, Australia, Germany, and beyond.',
      hasGradient: true,
      colSpan: 'md:col-span-2'
    },
    {
      icon: TrendingUp,
      title: '$2M+ in Scholarships',
      description: "We've helped students secure over $2 million in scholarships and funding in the last year alone.",
      hasGradient: false,
      colSpan: ''
    }
  ];

  return (
    <section id="why-us" className="pb-20 px-20 md:px-44 bg-linear-to-b from-gray-50 to-white min-h-screen flex items-center">
      <div className="mx-auto w-full">
        {/* Header - Centered */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#084B73] mb-4">
            Why We Lead
          </h2>
          <div className="w-24 h-1 bg-[#084B73] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A premium, compliance-first process built for outcomes — not promises
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:grid-rows-3 gap-5 h-auto">
          {/* Large Feature Card - 98% Success Rate */}
          <div className="md:col-span-2 md:row-span-2 bg-[#084B73] text-white p-8 md:p-10 rounded-2xl relative overflow-hidden flex flex-col justify-between group shadow-lg transition-all duration-300 hover:shadow-2xl">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute -top-12 -right-12 w-72 h-72 bg-blue-400/20 rounded-full blur-[90px]" />
              <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 mb-5">
                <ShieldCheck className="w-5 h-5 text-blue-200" />
                <span className="text-sm font-semibold text-white/90">Compliance-first review</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold mb-5">98% Visa Success Rate</h3>
              <p className="text-white/80 text-lg max-w-md leading-relaxed">
                We don&apos;t gamble with your future. Our dedicated compliance team reviews every financial document,
                ensuring your case is ironclad before it reaches the embassy.
              </p>
            </div>
            <div className="mt-8 relative z-10">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-blue-300 rounded-full"></div>
              </div>
              <p className="text-right text-xs mt-2 text-white/60">2023-2024 Audit</p>
            </div>
          </div>

          {/* Feature Cards - Mapped */}
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

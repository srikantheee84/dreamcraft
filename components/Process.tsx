
import React from 'react';
import { Phone, FileText, Hammer, Key } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Consultation',
        description: 'We meet to discuss your vision, needs, and budget. We listen carefully to ensure we align with your goals.',
        icon: Phone
    },
    {
        id: 2,
        title: 'Estimation & Planning',
        description: 'We provide a detailed, transparent quote and timeline. Once approved, we handle necessary permits and material sourcing.',
        icon: FileText
    },
    {
        id: 3,
        title: 'Construction',
        description: 'Our skilled team gets to work. We maintain a clean job site and provide weekly updates on progress.',
        icon: Hammer
    },
    {
        id: 4,
        title: 'Final Walkthrough',
        description: 'We tour the finished space with you to ensure every detail meets our high standards before handing over the keys.',
        icon: Key
    }
];

const Process: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-4">How We Work</h2>
                    <p className="text-lg text-brand-textLight">
                        A transparent, four-step process designed to make your renovation experience stress-free.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step) => (
                            <div key={step.id} className="relative bg-white pt-4 md:pt-0 group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:border-brand-yellow transition-colors duration-300 shadow-sm">
                                        <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white">
                                            {step.icon && <step.icon size={28} />}
                                        </div>
                                    </div>
                                    <div className="absolute top-0 md:-top-8 right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 bg-blue-50 text-brand-blue font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center border border-blue-100">
                                        {step.id}
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-brand-textDark mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-brand-textLight text-sm leading-relaxed px-2">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
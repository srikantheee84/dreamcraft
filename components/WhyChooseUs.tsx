
import React from 'react';
import { DIFFERENTIATORS } from '../constants';

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-us" className="py-20 bg-white relative overflow-hidden scroll-mt-40">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-blue"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-4">Why Choose Dreamcraft?</h2>
                    <p className="text-lg text-brand-textLight">
                        Construction is about trust. We build that trust by delivering exceptional results with unwavering integrity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {DIFFERENTIATORS.map((item) => (
                        <div key={item.id} className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20">
                                    {item.icon && <item.icon className="w-6 h-6 text-brand-blue" />}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-heading text-xl font-bold text-brand-textDark mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-brand-textLight leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
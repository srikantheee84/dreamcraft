import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-brand-blue text-white relative">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.id} className="bg-blue-900/50 backdrop-blur-sm border border-blue-700 p-8 rounded-xl relative">
                            <Quote className="absolute top-6 left-6 text-brand-yellow opacity-20 w-12 h-12 transform -scale-x-100" />
                            <p className="relative z-10 text-blue-50 text-lg italic mb-6 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-blue font-bold">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-white">{t.name}</p>
                                    <p className="text-sm text-blue-200">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

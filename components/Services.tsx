
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-white scroll-mt-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-4">Our Expertise</h2>
                    <p className="text-lg text-brand-textLight">
                        From concept to completion, we provide comprehensive construction services tailored to your unique needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES.map((service) => (
                        <div 
                            key={service.id} 
                            className="group p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                                {service.icon && (
                                    <service.icon className="w-7 h-7 text-brand-blue group-hover:text-brand-yellow transition-colors duration-300" />
                                )}
                            </div>
                            <h3 className="font-heading text-xl font-bold text-brand-textDark mb-3 group-hover:text-brand-blue transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-brand-textLight leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
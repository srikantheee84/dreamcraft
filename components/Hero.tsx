
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 144; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="relative bg-brand-grayLight overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                            Licensed & Insured General Contractor
                        </div>
                        
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-blue leading-tight">
                            Building Dreams. <br />
                            <span className="text-brand-blueLight">Crafting Reality.</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-brand-textDark max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Specializing in ground-up construction and high-end interior finish-outs. We deliver precision, transparency, and integrity for your commercial and residential projects.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a 
                                href="#contact" 
                                onClick={(e) => handleScroll(e, '#contact')}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-blue bg-brand-yellow rounded-md shadow-md hover:bg-brand-yellowHover hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a 
                                href="#projects" 
                                onClick={(e) => handleScroll(e, '#projects')}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-blue bg-white border-2 border-brand-blue rounded-md hover:bg-brand-blue hover:text-white transition-all duration-200"
                            >
                                View Our Work
                            </a>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative">
                        {/* Decorative blob */}
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand-yellow opacity-20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-brand-blue opacity-10 rounded-full blur-3xl"></div>
                        
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[400px] md:h-[500px]">
                            <img 
                                src={HERO_IMAGE_URL}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"; // High quality construction fallback
                                    target.onerror = null; // Prevents looping
                                }}
                                alt="Modern construction site" 
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-4 rounded-lg shadow-lg border-l-4 border-brand-yellow max-w-xs">
                                <p className="font-heading font-bold text-brand-blue text-lg">Quality First</p>
                                <p className="text-brand-textLight text-sm">Built with integrity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

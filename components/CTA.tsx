import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';

const CTA: React.FC = () => {
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
        <section className="py-16 bg-brand-yellow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                    Ready to Build Your Vision?
                </h2>
                <p className="text-brand-blue/80 text-xl mb-8 max-w-2xl mx-auto font-medium">
                    Contact us today for a complimentary consultation and comprehensive estimate for your next project.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href="#contact" 
                        onClick={(e) => handleScroll(e, '#contact')}
                        className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-bold rounded-md shadow-lg hover:bg-blue-900 transition-colors"
                    >
                        Request Free Estimate
                    </a>
                    <a 
                        href={`tel:${CONTACT_PHONE.replace(/\D/g,'')}`}
                        className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-brand-blue border-2 border-brand-blue font-bold rounded-md hover:bg-white transition-colors"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Call {CONTACT_PHONE}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
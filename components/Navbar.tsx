import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.querySelector(href);
        if (element) {
            const navHeight = 96; // Adjusted to h-24 (96px)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                    {/* Logo Area */}
                    <div className="flex items-center h-full">
                        <a 
                            href="#" 
                            onClick={(e) => handleScroll(e, '#')}
                            className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity"
                        >
                            <Logo variant="light" className="h-16 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="font-sans text-brand-textDark hover:text-brand-blue font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="#contact"
                            onClick={(e) => handleScroll(e, '#contact')}
                            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-brand-yellow hover:bg-brand-yellowHover text-brand-blue font-heading font-bold rounded-md transition-all shadow-sm"
                        >
                            <Phone size={18} />
                            <span>Request Quote</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-blue hover:text-brand-blueLight p-2 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="block px-3 py-3 text-base font-medium text-brand-textDark hover:text-brand-blue hover:bg-gray-50 rounded-md"
                            >
                                {link.name}
                            </a>
                        ))}
                         <a 
                            href={`tel:${CONTACT_PHONE.replace(/\D/g,'')}`}
                            className="mt-4 flex w-full items-center justify-center gap-2 px-5 py-3 bg-brand-yellow text-brand-blue font-bold rounded-md hover:bg-brand-yellowHover"
                        >
                            <Phone size={18} />
                            <span>{CONTACT_PHONE}</span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

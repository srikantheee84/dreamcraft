import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Loader2, Check, Printer, Share2 } from 'lucide-react';
import { BRAND_NAME, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../constants';
import emailjs from '@emailjs/browser';
import Logo from './Logo';

interface FooterProps {
    onOpenFlyer: () => void;
    onOpenSocialKit: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenFlyer, onOpenSocialKit }) => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (href === '#') return;

        const element = document.querySelector(href);
        if (element) {
            const navHeight = 96; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubStatus('loading');

        if ((EMAILJS_SERVICE_ID as string) === "YOUR_SERVICE_ID") {
            setTimeout(() => {
                setSubStatus('success');
                setEmail('');
                setTimeout(() => setSubStatus('idle'), 5000);
            }, 1500);
            return;
        }

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                { 
                    email: email,
                    projectType: "Newsletter Subscription", 
                    details: "New subscriber from footer." 
                }, 
                EMAILJS_PUBLIC_KEY
            );
            setSubStatus('success');
            setEmail('');
            setTimeout(() => setSubStatus('idle'), 5000);
        } catch (error) {
            console.error("Subscription failed", error);
            setSubStatus('error');
        }
    };

    return (
        <footer className="bg-brand-blue text-white pt-16 pb-8 border-t-4 border-brand-yellow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="mb-4">
                            <Logo variant="dark" className="h-14 w-auto" />
                        </div>
                        <p className="text-blue-200 text-sm leading-relaxed">
                            Building excellence through integrity, transparency, and skilled craftsmanship. Specializing in Ground-Up Construction and Interior Finish-Outs.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" onClick={(e) => handleScroll(e, '#')} className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" onClick={(e) => handleScroll(e, '#')} className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" onClick={(e) => handleScroll(e, '#')} className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-brand-yellow">Services</h4>
                        <ul className="space-y-3 text-blue-100">
                            <li><a href="#" onClick={(e) => handleScroll(e, '#')} className="hover:text-white transition-colors">Ground-Up Construction</a></li>
                            <li><a href="#" onClick={(e) => handleScroll(e, '#')} className="hover:text-white transition-colors">Interior Finish-Outs</a></li>
                            <li><a href="#" onClick={(e) => handleScroll(e, '#')} className="hover:text-white transition-colors">Licensed MEP</a></li>
                            <li><a href="#" onClick={(e) => handleScroll(e, '#')} className="hover:text-white transition-colors">Planning & Permitting</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-brand-yellow">Company</h4>
                        <ul className="space-y-3 text-blue-100">
                            <li><a href="#why-us" onClick={(e) => handleScroll(e, '#why-us')} className="hover:text-white transition-colors">Why Choose Us</a></li>
                            <li><a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="hover:text-white transition-colors">Our Portfolio</a></li>
                            <li><a href="#" onClick={(e) => handleScroll(e, '#')} className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" onClick={(e) => handleScroll(e, '#')} className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li>
                                <button 
                                    onClick={onOpenFlyer}
                                    className="flex items-center gap-2 text-brand-yellow hover:text-white transition-colors font-bold mt-2 group text-left"
                                >
                                    <Printer size={16} className="group-hover:scale-110 transition-transform" />
                                    Printable Flyer
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={onOpenSocialKit}
                                    className="flex items-center gap-2 text-brand-yellow hover:text-white transition-colors font-bold mt-1 group text-left"
                                >
                                    <Share2 size={16} className="group-hover:scale-110 transition-transform" />
                                    Social Media Kit
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-brand-yellow">Newsletter</h4>
                        <p className="text-blue-200 text-sm mb-4">Subscribe for project updates.</p>
                        <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="px-4 py-2 rounded bg-blue-800 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-1 focus:ring-brand-yellow disabled:opacity-50"
                                disabled={subStatus === 'loading' || subStatus === 'success'}
                            />
                            <button 
                                type="submit"
                                disabled={subStatus === 'loading' || subStatus === 'success'}
                                className={`px-4 py-2 font-bold rounded transition-colors flex items-center justify-center ${
                                    subStatus === 'success' 
                                        ? 'bg-green-600 text-white' 
                                        : 'bg-brand-yellow text-brand-blue hover:bg-white'
                                }`}
                            >
                                {subStatus === 'idle' && 'Subscribe'}
                                {subStatus === 'loading' && <Loader2 className="animate-spin w-5 h-5" />}
                                {subStatus === 'success' && <><Check className="w-4 h-4 mr-1"/> Subscribed!</>}
                                {subStatus === 'error' && 'Error'}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-blue-300 text-sm">
                        &copy; {currentYear} {BRAND_NAME}. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-blue-300">
                        <span>Licensed</span>
                        <span>Bonded</span>
                        <span>Insured</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
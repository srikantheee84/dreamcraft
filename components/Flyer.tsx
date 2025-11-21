
import React from 'react';
import { X, Printer, Phone, CheckCircle, MapPin, Globe } from 'lucide-react';
import { BRAND_NAME, CONTACT_PHONE, OFFICE_ADDRESS_STREET, OFFICE_ADDRESS_CITY_STATE, HERO_IMAGE_URL, CONTACT_EMAIL } from '../constants';
import Logo from './Logo';

interface FlyerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Flyer: React.FC<FlyerProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 md:p-8 print:p-0 print:bg-white print:absolute print:inset-0 print:z-50">
            
            {/* Print Styles to hide everything else */}
            <style>{`
                @media print {
                    body > *:not(.flyer-portal) {
                        display: none !important;
                    }
                    .flyer-portal {
                        display: block !important;
                        position: absolute !important;
                        top: 0 !important;
                        left: 0 !important;
                        width: 100% !important;
                        height: 100% !important;
                        background: white !important;
                        z-index: 9999 !important;
                    }
                    .no-print {
                        display: none !important;
                    }
                    /* Force background graphics */
                    * {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    /* Remove scrollbars/margins */
                    @page {
                        margin: 0;
                        size: auto;
                    }
                }
            `}</style>

            {/* Wrapper for scoping print visibility */}
            <div className="flyer-portal w-full max-w-[8.5in] bg-white shadow-2xl relative mx-auto print:shadow-none print:max-w-none">
                
                {/* Toolbar (Hidden on Print) */}
                <div className="absolute top-4 right-4 flex gap-3 no-print z-50">
                    <button 
                        onClick={handlePrint}
                        className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white font-bold rounded-md hover:bg-blue-900 transition-colors shadow-md"
                    >
                        <Printer size={18} />
                        Print Flyer
                    </button>
                    <button 
                        onClick={onClose}
                        className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* --- FLYER CONTENT (8.5 x 11 ratio approx) --- */}
                <div className="flex flex-col min-h-[11in] w-full bg-white text-brand-textDark font-sans">
                    
                    {/* 1. HEADER */}
                    <header className="bg-white px-8 py-6 flex justify-between items-center border-b border-gray-100">
                        <div className="w-48">
                            <Logo variant="light" className="w-full h-auto" />
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-brand-textLight font-medium uppercase tracking-wider mb-1">Call for a Quote</p>
                            <div className="flex items-center justify-end gap-2 text-brand-blue font-heading font-bold text-2xl">
                                <Phone size={24} className="text-brand-yellow" />
                                {CONTACT_PHONE}
                            </div>
                        </div>
                    </header>

                    {/* 2. HERO IMAGE */}
                    <div className="relative h-80 w-full overflow-hidden">
                        <img 
                            src={HERO_IMAGE_URL} 
                            alt="Renovated Interior" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent flex items-end">
                            <div className="px-8 py-8 w-full">
                                <h1 className="text-white font-heading font-extrabold text-5xl tracking-tight drop-shadow-md">
                                    Transforming Spaces.
                                </h1>
                                <p className="text-blue-100 text-xl mt-2 font-light">
                                    Residential Renovations & Commercial Build-Outs
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. BODY */}
                    <div className="flex-grow bg-brand-grayLight px-10 py-10">
                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <h2 className="font-heading font-bold text-2xl text-brand-blue mb-4 border-b-4 border-brand-yellow inline-block pb-1">
                                    Our Services
                                </h2>
                                <p className="text-brand-textLight mb-6 text-lg leading-relaxed">
                                    We provide high-end craftsmanship with transparent project management. From concept to completion, we handle it all.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Full Kitchen & Bath Remodels",
                                        "Custom Home Additions",
                                        "Commercial Tenant Improvements",
                                        "Whole-Home Renovations",
                                        "Structural Modifications"
                                    ].map((service, i) => (
                                        <li key={i} className="flex items-center gap-3 text-lg font-bold text-brand-textDark">
                                            <CheckCircle className="text-brand-yellow w-6 h-6 flex-shrink-0" />
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-center items-center text-center">
                                <h3 className="font-heading font-bold text-xl text-brand-blue mb-4">Why Dreamcraft?</h3>
                                <div className="space-y-4 text-left w-full">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center font-bold">1</span>
                                        <span className="font-medium">Fully Licensed & Insured</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center font-bold">2</span>
                                        <span className="font-medium">Detailed, Transparent Pricing</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center font-bold">3</span>
                                        <span className="font-medium">On-Time Project Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. OFFER BAND */}
                    <div className="bg-brand-yellow px-8 py-6 text-center">
                        <h2 className="font-heading font-black text-brand-blue text-3xl uppercase tracking-wide">

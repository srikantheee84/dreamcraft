import React from 'react';
import { X, Printer, Phone, MapPin, Globe } from 'lucide-react';
import { CONTACT_PHONE, OFFICE_ADDRESS_STREET, OFFICE_ADDRESS_CITY_STATE, HERO_IMAGE_URL, PROJECTS } from '../constants';
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

    const servicesList = [
        "Architectural/Design Planning",
        "Permitting and Approvals",
        "Interior Build-Outs",
        "Licensed MEP",
        "Framing and Millwork",
        "Flooring and Finishes",
        "Reflective Ceiling Solutions",
        "Project Management",
        "Quality Assurance",
        "Construction Support"
    ];

    return (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 md:p-8">
            
            {/* CSS to handle printing visibility */}
            <style>{`
                @media print {
                    /* Hide the main website content */
                    #site-content, .no-print {
                        display: none !important;
                    }

                    /* Ensure the flyer is visible and positioned correctly */
                    body {
                        background-color: white;
                    }

                    /* Reset any potential portal/modal styling issues for print */
                    .flyer-print-container {
                        position: absolute !important;
                        top: 0 !important;
                        left: 0 !important;
                        width: 100% !important;
                        height: auto !important;
                        z-index: 9999 !important;
                        background: white !important;
                        box-shadow: none !important;
                        overflow: visible !important;
                    }

                    /* Ensure backgrounds print */
                    * {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    
                    @page {
                        margin: 0;
                        size: auto;
                    }
                }
            `}</style>

            {/* Flyer Container */}
            <div className="flyer-print-container w-full max-w-[8.5in] bg-white shadow-2xl relative mx-auto flex flex-col min-h-[11in] overflow-hidden">
                
                {/* Floating Toolbar (Hidden when printing via CSS .no-print) */}
                <div className="absolute top-4 right-4 flex gap-3 z-50 no-print">
                    <button 
                        onClick={handlePrint} 
                        className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white font-bold rounded-md hover:bg-blue-900 shadow-md transition-colors border border-white/20"
                    >
                        <Printer size={18} /> Print
                    </button>
                    <button 
                        onClick={onClose} 
                        className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors shadow-md"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* 1. HEADER */}
                <header className="bg-white px-8 py-6 border-b border-gray-100 flex justify-between items-center">
                    <div className="w-64">
                        <Logo variant="light" className="w-full h-auto" />
                    </div>
                    <div className="text-right">
                        <h2 className="font-heading font-bold text-brand-textDark text-lg uppercase tracking-wide">
                            General Contractor
                        </h2>
                        <p className="text-brand-textLight text-sm">Commercial & Ground-Up Construction</p>
                    </div>
                </header>

                {/* 2. IMAGE COLLAGE */}
                <div className="grid grid-cols-2 grid-rows-2 gap-1 h-[480px] w-full bg-gray-100 p-1">
                    {/* Main Large Image (Hero) */}
                    <div className="row-span-2 relative overflow-hidden group">
                        <img 
                            src={HERO_IMAGE_URL} 
                            alt="Main Construction" 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute top-0 left-0 bg-brand-yellow text-brand-blue font-bold px-5 py-2 text-sm uppercase tracking-wider shadow-md">
                            Building Dreams
                        </div>
                    </div>
                    {/* Top Right */}
                    <div className="relative overflow-hidden">
                        <img 
                            src={PROJECTS[0]?.imageUrl || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800"} 
                            alt="Commercial Project" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    {/* Bottom Right */}
                    <div className="relative overflow-hidden">
                        <img 
                            src={PROJECTS[2]?.imageUrl || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800"} 
                            alt="Project Detail" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                </div>

                {/* 3. BLUE CURVED SECTION */}
                <div className="flex-grow relative mt-[-40px] z-10">
                    {/* SVG Curve Separator */}
                    <svg className="w-full h-20 text-brand-blue fill-current" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 80 0 100 100 Z" />
                    </svg>
                    
                    <div className="bg-brand-blue text-white px-12 pb-12 pt-0 h-full flex flex-col justify-between">
                        
                        {/* Services List Card */}
                        <div className="flex justify-center -mt-12 mb-6 relative z-20">
                            <div className="bg-white text-brand-textDark p-8 rounded-xl shadow-xl max-w-3xl w-full text-center border-b-8 border-brand-yellow">
                                <h3 className="font-heading font-bold text-2xl text-brand-blue mb-6 uppercase tracking-wide">
                                    Our Specialties
                                </h3>
                                <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-left text-sm font-bold text-slate-700">
                                    {servicesList.map((service, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-brand-yellow mt-1">●</span> 
                                            <span>{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Contact Info Section */}
                        <div className="flex items-end justify-between mt-auto">
                            {/* Real QR Code pointing to dreamcraftdevelopers.com */}
                            <div className="bg-white p-2 rounded-lg inline-block shadow-lg">
                                <img 
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://dreamcraftdevelopers.com`}
                                    alt="Scan to Visit Website"
                                    className="w-20 h-20"
                                />
                                <p className="text-center text-brand-textDark text-[10px] font-bold mt-1 uppercase">Scan Me</p>
                            </div>

                            {/* Address & Phone */}
                            <div className="text-right space-y-2">
                                <div className="flex items-center justify-end gap-3">
                                    <Phone className="text-brand-yellow w-6 h-6" />
                                    <span className="font-heading font-bold text-3xl">{CONTACT_PHONE}</span>
                                </div>
                                <div className="flex items-center justify-end gap-3 text-blue-200">
                                    <Globe className="w-5 h-5" />
                                    <span className="text-lg">www.dreamcraftdevelopers.com</span>
                                </div>
                                <div className="flex items-center justify-end gap-3 text-blue-200">
                                    <MapPin className="w-5 h-5" />
                                    <span className="text-sm">{OFFICE_ADDRESS_STREET}, {OFFICE_ADDRESS_CITY_STATE}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flyer;
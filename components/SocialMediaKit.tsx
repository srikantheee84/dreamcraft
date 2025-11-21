import React from 'react';
import { X, Download, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import Logo from './Logo';
import { HERO_IMAGE_URL } from '../constants';

interface SocialMediaKitProps {
    isOpen: boolean;
    onClose: () => void;
}

interface SocialCardProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

const SocialCard: React.FC<SocialCardProps> = ({ title, description, children }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col border border-gray-100">
            <div className="p-4 border-b border-gray-50">
                <h3 className="font-bold text-brand-textDark">{title}</h3>
                <p className="text-xs text-brand-textLight mt-1">{description}</p>
            </div>
            <div className="relative group flex-grow flex flex-col">
                {children}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20">
                    <button className="p-3 bg-white rounded-full text-brand-blue hover:scale-110 transition-transform shadow-lg" title="Download Asset">
                        <Download size={20} />
                    </button>
                </div>
            </div>
            <div className="p-3 bg-gray-50 flex justify-between items-center text-gray-400 text-sm px-4 border-t border-gray-100">
                <div className="flex gap-3">
                    <Heart size={16} />
                    <MessageCircle size={16} />
                    <Share2 size={16} />
                </div>
                <Bookmark size={16} />
            </div>
        </div>
    );
};

const SocialMediaKit: React.FC<SocialMediaKitProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl">
                
                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <div>
                        <h2 className="font-heading text-2xl font-bold text-brand-blue">Social Media Brand Kit</h2>
                        <p className="text-brand-textLight">Ready-to-use templates for Instagram and Facebook.</p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 bg-white text-gray-500 hover:text-red-500 rounded-full hover:bg-red-50 transition-all shadow-sm border border-gray-200"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto p-6 md:p-8 bg-gray-100/50 flex-grow">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        
                        {/* 1. Project Reveal */}
                        <SocialCard
                            title="New Project Reveal"
                            description="Carousel layout for showcasing finished projects."
                        >
                            <div className="aspect-square bg-white p-4 relative shadow-sm group overflow-hidden border border-gray-200">
                                <div className="w-full h-full border-8 border-white shadow-inner relative overflow-hidden">
                                    <img 
                                        src={HERO_IMAGE_URL} 
                                        alt="Project" 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                                        <div className="h-5 w-20 overflow-hidden flex items-center">
                                            <Logo variant="light" className="h-12 w-auto -mt-1" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                                        Just Finished
                                    </div>
                                </div>
                            </div>
                        </SocialCard>

                        {/* 2. Testimonial */}
                        <SocialCard
                            title="Client Testimonial"
                            description="High-contrast layout for client reviews."
                        >
                            <div className="aspect-square bg-brand-blue p-8 flex flex-col items-center justify-center text-center relative shadow-sm group">
                                <div className="text-6xl font-serif text-white leading-none mb-4 opacity-50 group-hover:opacity-100 transition-opacity">"</div>
                                <p className="text-white font-heading font-medium text-lg leading-relaxed mb-6 relative z-10">
                                    They managed the entire site prep and build with incredible precision.
                                </p>
                                <div className="w-12 h-1 bg-brand-yellow mb-4"></div>
                                <p className="text-blue-200 font-bold uppercase tracking-widest text-sm">Sarah Jenkins</p>
                            </div>
                        </SocialCard>

                        {/* 3. Tip Tuesday */}
                        <SocialCard
                            title="Tip Tuesday"
                            description="Split-screen educational content."
                        >
                            <div className="aspect-square flex shadow-sm border border-gray-200 overflow-hidden">
                                <div className="w-1/2 bg-gray-200 relative">
                                    <img 
                                        src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80" 
                                        alt="Construction Tool" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-1/2 bg-white p-4 flex flex-col justify-center relative">
                                    <div className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center">
                                            <Logo variant="light" className="h-full w-auto" />
                                    </div>
                                    <h4 className="text-brand-blue font-heading font-bold text-xl mb-2 leading-tight mt-6">Dreamcraft Tip:</h4>
                                    <p className="text-brand-textDark text-xs sm:text-sm leading-snug">
                                        Always check for proper permit documentation before starting any structural work.
                                    </p>
                                    <span className="mt-4 text-brand-yellow font-bold text-xs uppercase tracking-wide">#TipTuesday</span>
                                </div>
                            </div>
                        </SocialCard>

                        {/* 4. Now Booking */}
                        <SocialCard
                            title="Now Booking"
                            description="Seasonal campaign overlay."
                        >
                            <div className="aspect-square relative bg-black shadow-sm overflow-hidden group">
                                <img 
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" 
                                    alt="Interior" 
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <div className="aspect-square w-full max-w-[180px] bg-brand-yellow rounded-full flex flex-col items-center justify-center text-center p-2 shadow-xl border-4 border-white/20">
                                        <span className="text-brand-blue font-bold text-sm uppercase tracking-wider">Now Booking</span>
                                        <span className="text-brand-blue font-heading font-extrabold text-2xl md:text-3xl my-0.5">Fall 2025</span>
                                        <span className="text-brand-blue/80 text-xs font-bold">Projects</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-3 w-full text-center">
                                    <span className="text-white text-xs font-bold tracking-widest uppercase">Link in Bio</span>
                                </div>
                            </div>
                        </SocialCard>

                    </div>
                </div>
                
                <div className="p-4 bg-white border-t border-gray-100 text-center text-sm text-brand-textLight">
                    These templates are designed to maintain brand consistency across all social channels.
                </div>
            </div>
        </div>
    );
};

export default SocialMediaKit;
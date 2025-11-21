
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

    const openLightbox = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset'; // Restore scrolling
    };

    return (
        <>
            <section id="projects" className="py-20 bg-brand-grayLight scroll-mt-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div className="max-w-2xl">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-4">Featured Projects</h2>
                            <p className="text-lg text-brand-textLight">
                                Explore our portfolio of recently completed residential and commercial renovations.
                            </p>
                        </div>
                        <a 
                            href="#contact" 
                            onClick={(e) => handleScroll(e, '#contact')}
                            className="text-brand-blue font-bold hover:text-brand-blueLight hover:underline decoration-2 underline-offset-4 transition-all"
                        >
                            Start your project &rarr;
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((project) => (
                            <div 
                                key={project.id} 
                                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                                onClick={() => openLightbox(project.imageUrl)}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    {/* Overlay with Zoom Icon */}
                                    <div className="absolute inset-0 bg-brand-blue/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                                            <ZoomIn size={24} />
                                        </div>
                                    </div>
                                    
                                    <img 
                                        src={project.imageUrl} 
                                        alt={project.title} 
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"; // Fallback image
                                            target.onerror = null;
                                        }}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wide text-brand-blue rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-heading text-xl font-bold text-brand-textDark mb-2 group-hover:text-brand-blue transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-brand-textLight text-sm">
                                        A showcase of precision craftsmanship and attention to detail in modern construction.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button 
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white hover:text-brand-yellow transition-colors"
                    >
                        <X size={40} />
                    </button>
                    
                    <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
                        <img 
                            src={selectedImage} 
                            alt="Project Full View" 
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop";
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Projects;

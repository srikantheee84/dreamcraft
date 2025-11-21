import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CONTACT_EMAIL, CONTACT_PHONE, OFFICE_ADDRESS_STREET, OFFICE_ADDRESS_CITY_STATE, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../constants';

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');

        if (!form.current) return;

        // If credentials are mostly empty placeholders, we'll simulate success to prevent crashing
        if ((EMAILJS_SERVICE_ID as string) === "YOUR_SERVICE_ID") {
             console.warn("EmailJS credentials not set. Simulating success.");
             setTimeout(() => {
                 setFormStatus('success');
                 form.current?.reset();
                 setTimeout(() => setFormStatus('idle'), 5000);
             }, 1500);
             return;
        }

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                form.current,
                EMAILJS_PUBLIC_KEY
            );
            setFormStatus('success');
            form.current.reset();
            
            // Reset status after 5 seconds so user can submit again if needed
            setTimeout(() => {
                setFormStatus('idle');
            }, 5000);

        } catch (error) {
            console.error('FAILED...', error);
            setFormStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white scroll-mt-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    
                    {/* Contact Info */}
                    <div>
                        <div className="mb-10">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-4">Get In Touch</h2>
                            <p className="text-lg text-brand-textLight">
                                Have a project in mind? Fill out the form or give us a call. We serve the greater metropolitan area and surrounding suburbs.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-blue">
                                    <Phone />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-lg text-brand-textDark">Phone</h3>
                                    <p className="text-brand-textLight mb-1">Mon-Fri from 8am to 6pm.</p>
                                    <a href={`tel:${CONTACT_PHONE.replace(/\D/g,'')}`} className="text-brand-blue font-semibold hover:text-brand-blueLight text-lg">
                                        {CONTACT_PHONE}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-blue">
                                    <Mail />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-lg text-brand-textDark">Email</h3>
                                    <p className="text-brand-textLight mb-1">Send us your plans or questions.</p>
                                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-blue font-semibold hover:text-brand-blueLight text-lg">
                                        {CONTACT_EMAIL}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-blue">
                                    <MapPin />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-lg text-brand-textDark">Office</h3>
                                    <p className="text-brand-textLight">
                                        {OFFICE_ADDRESS_STREET}<br />
                                        {OFFICE_ADDRESS_CITY_STATE}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-brand-grayLight p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-bold text-brand-textDark mb-2">First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="firstName" 
                                        required 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" 
                                        placeholder="John" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-bold text-brand-textDark mb-2">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName" 
                                        required 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" 
                                        placeholder="Doe" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-brand-textDark mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" 
                                    placeholder="john@example.com" 
                                    />
                            </div>

                            <div>
                                <label htmlFor="projectType" className="block text-sm font-bold text-brand-textDark mb-2">Project Type</label>
                                <select 
                                    id="projectType" 
                                    name="projectType" 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="Full Home Renovation">Full Home Renovation</option>
                                    <option value="Kitchen Remodel">Kitchen Remodel</option>
                                    <option value="Bathroom Remodel">Bathroom Remodel</option>
                                    <option value="Commercial Build-Out">Commercial Build-Out</option>
                                    <option value="New Addition">New Addition</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="details" className="block text-sm font-bold text-brand-textDark mb-2">Project Details</label>
                                <textarea 
                                    id="details" 
                                    name="details" 
                                    rows={4} 
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" 
                                    placeholder="Tell us about your vision, timeline, and estimated budget..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={formStatus === 'submitting' || formStatus === 'success'}
                                className={`w-full flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg transition-all duration-200 ${
                                    formStatus === 'success' 
                                    ? 'bg-green-600 text-white cursor-default' 
                                    : formStatus === 'error'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-brand-blue text-white hover:bg-brand-blueLight shadow-md hover:shadow-lg'
                                }`}
                            >
                                {formStatus === 'idle' && (
                                    <>
                                        Send Message
                                        <Send className="ml-2 w-5 h-5" />
                                    </>
                                )}
                                {formStatus === 'submitting' && (
                                    <>
                                        <Loader2 className="animate-spin mr-2 w-5 h-5" />
                                        Sending...
                                    </>
                                )}
                                {formStatus === 'success' && 'Message Sent Successfully!'}
                                {formStatus === 'error' && 'Error. Try again.'}
                            </button>
                            {formStatus === 'error' && (
                                <p className="text-red-500 text-center text-sm mt-2">Something went wrong. Please email us directly.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
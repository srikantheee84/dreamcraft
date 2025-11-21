import { Hammer, Home, Ruler, HardHat, Clock, ShieldCheck, Award, CheckCircle } from 'lucide-react';
import { ServiceItem, ProjectItem, TestimonialItem, DifferentiatorItem } from './types';

export const BRAND_NAME = "Dreamcraft Developers";
export const CONTACT_EMAIL = "info@dreamcraftdevelopers.com";
export const CONTACT_PHONE = "(860) 329-6193";
export const OFFICE_ADDRESS_STREET = "14512 Annie Crossing Dr";
export const OFFICE_ADDRESS_CITY_STATE = "Leander, TX 78641";
// export const HERO_IMAGE_URL = "https://i.ibb.co/W4ZbkZFx/castellacourt-png.jpg?q=80&w=1470&auto=format&fit=crop";
export const HERO_IMAGE_URL = "https://i.ibb.co/4nxZ5yfT/Bldg4-op2-01-Post-jpg.jpg?q=80&w=1470&auto=format&fit=crop";


// --- EMAILJS CONFIGURATION ---
// Sign up at https://www.emailjs.com/ to get these keys.
export const EMAILJS_SERVICE_ID = "service_5iawmdn";
export const EMAILJS_TEMPLATE_ID = "template_vc3xlqb";
export const EMAILJS_PUBLIC_KEY = "4m6YFRmvemcgPBZsX";

export const SERVICES: ServiceItem[] = [
    {
        id: '1',
        title: 'General Contracting',
        description: 'Full-service management from ground-breaking to final walkthrough. We handle permits, subcontractors, and inspections.',
        icon: HardHat
    },
    {
        id: '2',
        title: 'Home Remodeling',
        description: 'Transform your kitchen, bathroom, or basement into a modern living space that adds value to your home.',
        icon: Home
    },
    {
        id: '3',
        title: 'Interior Build-Outs',
        description: 'Commercial tenant improvements designed to optimize workflow and impress your clients.',
        icon: Ruler
    },
    {
        id: '4',
        title: 'Custom Additions',
        description: 'Expand your footprint with seamless room additions that match your existing architecture.',
        icon: Hammer
    }
];

export const PROJECTS: ProjectItem[] = [
    {
        id: '1',
        title: 'Cloud Pivit Technologies',
        category: 'Commercial',
        // Updated to a working image of a modern office. 
        // If using ImgBB, ensure you Right Click > Copy Image Address (must end in .jpg)
        imageUrl: 'https://i.ibb.co/Kdmh7LT/fc6c325a-2e33-4449-8bf8-17eab4f64d65.jpg?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: '2',
        title: 'Castella Court',
        category: 'Residential - Townhomes',
        imageUrl: 'https://i.ibb.co/KjPsJ0Pk/Bldg4-op1-03-Post-jpg.jpg?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: '3',
        title: 'KBK Events',
        category: 'Event Center',
        imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop'
    }
];

export const DIFFERENTIATORS: DifferentiatorItem[] = [
    {
        id: '1',
        title: 'On-Time Delivery',
        description: 'We respect your timeline. Our project management ensures milestones are met without excuses.',
        icon: Clock
    },
    {
        id: '2',
        title: 'Transparent Pricing',
        description: 'Detailed estimates with no hidden fees. You will know exactly where your budget is going.',
        icon: CheckCircle
    },
    {
        id: '3',
        title: 'Licensed & Insured',
        description: 'Fully bonded and insured for your peace of mind and protection during construction.',
        icon: ShieldCheck
    },
    {
        id: '4',
        title: 'Quality Workmanship',
        description: 'We don’t cut corners. Our team of skilled tradesmen takes pride in every detail.',
        icon: Award
    }
];

export const TESTIMONIALS: TestimonialItem[] = [
    {
        id: '1',
        name: 'Sarah Jenkins',
        role: 'Homeowner',
        quote: "Dreamcraft transformed our outdated kitchen into the heart of our home. Professional, clean, and on time!"
    },
    {
        id: '2',
        name: 'Marcus Thorne',
        role: 'Small Business Owner',
        quote: "The best contractor experience I've had. They handled the office build-out seamlessly so I could focus on my business."
    },
    {
        id: '3',
        name: 'Elena Rodriguez',
        role: 'Homeowner',
        quote: "Transparency was key for us. Their weekly updates and clear budgeting made a stressful renovation easy."
    }
];
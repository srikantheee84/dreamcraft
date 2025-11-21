
import { Hammer, Home, Ruler, HardHat, Clock, ShieldCheck, Award, CheckCircle, Settings, PenTool, Truck, DraftingCompass } from 'lucide-react';
import { ServiceItem, ProjectItem, TestimonialItem, DifferentiatorItem } from './types';

export const BRAND_NAME = "Dreamcraft Developers";
export const CONTACT_EMAIL = "info@dreamcraftdevelopers.com";
export const CONTACT_PHONE = "(860) 329-6193";
export const OFFICE_ADDRESS_STREET = "14512 Annie Crossing Dr";
export const OFFICE_ADDRESS_CITY_STATE = "Leander, TX 78641";
export const HERO_IMAGE_URL = "https://i.ibb.co/4nxZ5yfT/Bldg4-op2-01-Post-jpg.jpg?q=80&w=1470&auto=format&fit=crop";


// --- EMAILJS CONFIGURATION ---
export const EMAILJS_SERVICE_ID = "service_5iawmdn";
export const EMAILJS_TEMPLATE_ID = "template_vc3xlqb";
export const EMAILJS_PUBLIC_KEY = "4m6YFRmvemcgPBZsX";

// Updated to match the new focus: Ground-Up & Finish-Outs
export const SERVICES: ServiceItem[] = [
    {
        id: '1',
        title: 'Ground-Up Construction',
        description: 'Complete vertical construction management from site prep to structure. We handle project management, quality assurance, and full construction support.',
        icon: Truck
    },
    {
        id: '2',
        title: 'Interior Finish-Outs',
        description: 'Specializing in commercial and high-end interior build-outs including framing, millwork, flooring, finishes, and reflective ceiling solutions.',
        icon: Ruler
    },
    {
        id: '3',
        title: 'Licensed MEP',
        description: 'Comprehensive coordination of Mechanical, Electrical, and Plumbing systems to ensure your infrastructure is compliant and efficient.',
        icon: Settings
    },
    {
        id: '4',
        title: 'Planning & Permitting',
        description: 'Expert handling of architectural design planning, permitting, and municipal approvals to streamline your project start.',
        icon: DraftingCompass
    }
];

export const PROJECTS: ProjectItem[] = [
    {
        id: '1',
        title: 'Cloud Pivit Technologies',
        category: 'Commercial Finish-Out',
        imageUrl: 'https://i.ibb.co/Kdmh7LT/fc6c325a-2e33-4449-8bf8-17eab4f64d65.jpg?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: '2',
        title: 'Castella Court',
        category: 'Ground-Up Residential',
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
        title: 'Quality Assurance',
        description: 'Rigorous QA processes at every stage, from framing to final finishes.',
        icon: Award
    }
];

export const TESTIMONIALS: TestimonialItem[] = [
    {
        id: '1',
        name: 'Sarah Jenkins',
        role: 'Property Developer',
        quote: "Dreamcraft's ground-up team was exceptional. They managed the entire site prep and build with incredible precision."
    },
    {
        id: '2',
        name: 'Marcus Thorne',
        role: 'Business Owner',
        quote: "The best contractor experience I've had. They handled the complex MEP and interior finish-out seamlessly."
    },
    {
        id: '3',
        name: 'Elena Rodriguez',
        role: 'Investor',
        quote: "Transparency was key. Their planning and permitting support saved us months on our timeline."
    }
];

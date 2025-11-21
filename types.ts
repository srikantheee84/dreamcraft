import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
}

export interface TestimonialItem {
    id: string;
    name: string;
    role: string;
    quote: string;
}

export interface DifferentiatorItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}
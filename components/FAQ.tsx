
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Do you handle permits and inspections?",
        answer: "Yes, absolutely. We handle the entire permitting process with the city or county and schedule all necessary inspections. You don't need to worry about the paperwork."
    },
    {
        question: "Are you licensed and insured?",
        answer: "Yes, Dreamcraft Developers is a fully licensed General Contractor. We carry general liability and workers' compensation insurance to protect both our team and your property."
    },
    {
        question: "How do you handle changes to the budget?",
        answer: "We believe in 'no surprises.' If a change is requested or an unforeseen issue arises (like hidden water damage), we stop, document it, and present a Change Order for your approval before proceeding. You will always know the cost impact upfront."
    },
    {
        question: "Do I need to move out during a renovation?",
        answer: "It depends on the scale. For a kitchen remodel, most clients stay home but set up a temporary kitchenette. For whole-home renovations or major additions, moving out temporarily is often safer and speeds up the timeline."
    },
    {
        question: "What areas do you serve?",
        answer: "We are based in Leander, TX and serve the greater metropolitan area, including Cedar Park, Liberty Hill, Georgetown, and North Austin."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-brand-grayLight">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
                        <HelpCircle className="text-brand-yellow w-6 h-6" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-brand-textLight">
                        Common questions about working with a General Contractor.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`bg-white rounded-xl border transition-all duration-300 ${
                                openIndex === index ? 'border-brand-blue shadow-md' : 'border-gray-200 hover:border-brand-blue/30'
                            }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`font-heading font-bold text-lg ${openIndex === index ? 'text-brand-blue' : 'text-brand-textDark'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-brand-yellow w-5 h-5 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="text-gray-400 w-5 h-5 flex-shrink-0" />
                                )}
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-6 pt-0 text-brand-textLight leading-relaxed border-t border-transparent">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

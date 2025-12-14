import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-slate-800 group-hover:text-primary'}`}>
          {item.question}
        </span>
        <span className="flex-shrink-0 text-primary">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed pl-4 border-l-4 border-slate-200">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
      {items.map((item, index) => (
        <FAQAccordion key={index} item={item} />
      ))}
    </div>
  );
};
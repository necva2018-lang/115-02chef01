import React from 'react';
import { FeatureItem } from '../types';
import { getIcon } from '../constants';

interface FeaturesProps {
  items: FeatureItem[];
}

export const Features: React.FC<FeaturesProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
        >
          <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
            <div className="group-hover:text-white transition-colors duration-300">
               {getIcon(item.icon)}
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
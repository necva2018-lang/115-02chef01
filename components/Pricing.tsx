import React from 'react';
import { PricingPlan } from '../types';
import { Check, Star } from 'lucide-react';
import { Button } from './Button';

interface PricingProps {
  plan: PricingPlan;
}

export const Pricing: React.FC<PricingProps> = ({ plan }) => {
  return (
    <div className="max-w-md mx-auto relative group">
      {/* Decorative gradient blur */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="px-6 py-10 bg-slate-900 text-white text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 border border-primary/30">
            <Star size={12} className="text-yellow-400 fill-yellow-400" /> 最受歡迎方案
          </div>
          <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
          <div className="flex justify-center items-baseline my-4">
             <span className="text-5xl font-extrabold tracking-tight text-white">{plan.price}</span>
          </div>
          <p className="text-slate-400 text-sm font-medium">{plan.note}</p>
        </div>
        
        <div className="px-6 py-10 bg-white">
          <ul className="space-y-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <p className="ml-3 text-base text-slate-600 font-medium">{feature}</p>
              </li>
            ))}
          </ul>
          
          <div className="mt-10">
            <Button 
              fullWidth 
              size="lg" 
              className="text-lg py-4 shadow-orange-500/50"
              onClick={() => window.open('https://docs.google.com/forms', '_blank')}
            >
              立即報名保證班
            </Button>
            <p className="mt-4 text-xs text-center text-slate-400">
              * 100% 考試導向，不浪費時間學不會考的菜
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
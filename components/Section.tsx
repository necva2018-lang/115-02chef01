import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  dark = false
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 md:px-8 ${dark ? 'bg-slate-50' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {subtitle && (
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
                {title}
              </h2>
            )}
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
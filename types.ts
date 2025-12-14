export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  note: string;
}
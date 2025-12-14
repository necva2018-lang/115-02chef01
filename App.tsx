import React from 'react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Button } from './components/Button';
import { HERO_TITLE, HERO_SUBTITLE, HERO_DESC, FEATURES, FAQ_LIST, PRICING, TARGET_AUDIENCE } from './constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Cooking background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
          <div className="md:w-2/3 lg:w-1/2">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full mb-6">
              <span className="text-orange-300 font-bold tracking-wide uppercase text-sm flex items-center gap-2">
                <CheckCircle2 size={16} /> 中餐丙級證照首選
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {HERO_TITLE}
              <span className="block text-primary mt-2">{HERO_SUBTITLE}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              {HERO_DESC}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                查看課程方案 <ArrowRight size={20} />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                了解課程細節
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Section id="features" title="四大考試導向策略" subtitle="為什麼我們能保證通過">
        <Features items={FEATURES} />
      </Section>

      {/* Stats/Highlight Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div className="p-4">
                <div className="text-5xl font-black mb-2">100%</div>
                <div className="text-orange-200 font-medium text-lg">考試導向設計</div>
              </div>
              <div className="p-4 border-l-0 md:border-l border-orange-500/50">
                <div className="text-5xl font-black mb-2">72道</div>
                <div className="text-orange-200 font-medium text-lg">指定菜色全覆蓋</div>
              </div>
              <div className="p-4 border-l-0 md:border-l border-orange-500/50">
                <div className="text-5xl font-black mb-2">2次</div>
                <div className="text-orange-200 font-medium text-lg">全真模擬考試</div>
              </div>
           </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <Section id="audience" title="誰適合這堂課？" subtitle="專為取證設計" dark>
        <div className="space-y-6 max-w-4xl mx-auto">
          {TARGET_AUDIENCE.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100 items-start md:items-center hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {item.number}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Image Breaker */}
      <div className="h-64 md:h-80 w-full relative bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("https://picsum.photos/id/42/1920/600")' }}>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
           <div className="text-center px-4">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">不教考不到的，只教一定會考的</h2>
             <p className="text-slate-300 text-lg">把考試變成一種「可複製的結果」</p>
           </div>
        </div>
      </div>

      {/* FAQ Section */}
      <Section id="faq" title="常見問題解答" subtitle="課程詳細說明">
        <FAQ items={FAQ_LIST} />
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" title="投資您的專業未來" subtitle="一次付費，終身受用" dark>
        <div className="flex justify-center">
          <Pricing plan={PRICING} />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-primary p-1 rounded">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>
                </span>
                中餐烹調丙級證照保證班
              </h3>
              <p className="mb-4 max-w-sm">
                專注於幫助學員通過國家考試的專業訓練機構。我們不只是教做菜，更是教您如何通過考試。
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">快速連結</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-primary transition-colors">核心課程</a></li>
                <li><a href="#audience" className="hover:text-primary transition-colors">適合對象</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">常見問答</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">聯絡資訊</h4>
              <ul className="space-y-2">
                <li>週一至週五 09:00 - 18:00</li>
                <li>台北市中山區烹飪大道101號</li>
                <li>contact@cooking-pass.tw</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-sm text-center">
            &copy; {new Date().getFullYear()} 中餐烹調丙級證照保證班. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
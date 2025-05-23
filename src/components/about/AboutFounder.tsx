import React from 'react';
import Section from '../ui/Section';

const AboutFounder: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            From Chaos to Control: <span className="text-blue-500">Nestor's Journey</span>
          </h2>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Nestor Limas is a professional trader, mentor, and founder of FinTrade Master Academy. After struggling with blowing accounts, hopping between strategies, and working 12+ hour days chasing side hustles — he finally cracked the code to profitable trading by focusing on structure, risk control, and precision execution.
            </p>
            
            <p>
              He's now a 6-figure funded trader, managing capital from prop firms and his own personal, as well as helping others escape the chaos of gambling-style trading. His mission is simple:
            </p>
            
            <p className="font-semibold text-white">
              To help everyday people trade like professionals — without quitting their job, staring at charts all day, or relying on hype and signals.
            </p>
            
            <p>
              Through FinTrade, Nestor has taught over 1,200 traders how to flip their mindset, build a simple system, and finally experience real confidence in the market.
            </p>
            
            <blockquote className="border-l-4 border-blue-500 pl-4 italic">
              "I didn't come from money. I built this so people like me could trade with clarity, not chaos."
            </blockquote>
            
            <p>
              The reason Nestor does this is because he heard a quote when he was younger and has lived by it…. "At the end of your life, you're not measured or valued by the amount of money you made but on the amount of people you have impacted in a positive way"
            </p>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl transform -translate-y-4 opacity-30"></div>
          <div className="relative rounded-xl overflow-hidden border border-gray-800">
            <img 
              src="/assets/nestor.jpg" 
              alt="Nestor Limas" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutFounder;
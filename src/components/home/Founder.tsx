import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const Founder: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built By a Trader Who's Been in the Trenches
          </h2>
          
          <div className="space-y-6 text-gray-300">
            <p>
              <span className="font-bold text-white">Nestor Limas</span> is a professional trader and mentor with over 4 years of trading experience. After mastering the markets, he's passed multiple 6-figure prop firm challenges and now helps others achieve the same success.
            </p>
            
            <p>
              Through FinTrade Master Academy, Nestor has helped over 1,200 traders transform from gambling-style trading to professional execution. His mission is simple: help everyday people stop gambling and start trading like pros.
            </p>
            
            <blockquote className="border-l-4 border-blue-500 pl-4 italic">
              "I didn't come from money. I built this so people like me could trade with clarity, not chaos."
            </blockquote>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-blue-500 mb-2">4+</div>
                <div className="text-sm text-gray-400">Years of Trading Experience</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-blue-500 mb-2">1,200+</div>
                <div className="text-sm text-gray-400">Traders Mentored</div>
              </div>
            </div>
          </div>
          
          <Button href="/about" variant="secondary" className="mt-8">
            Learn more →
          </Button>
        </div>
        
        <div className="relative">
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

export default Founder;
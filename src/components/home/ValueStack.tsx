import React from 'react';
import Section from '../ui/Section';
import { valueStack } from '../../constants/data';
import Button from '../ui/Button';

const ValueStack: React.FC = () => {
  return (
    <Section id="programs" className="bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Path to <span className="text-blue-500">Trading Success</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          We've built a complete ecosystem to take you from struggling trader to consistent professional, no matter where you're starting from.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {valueStack.map((item) => (
          <div 
            key={item.id}
            className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden group"
          >
            {/* Subtle background glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-500 font-bold mr-4">
                  {item.id}
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                {item.description}
              </p>
              
              <Button 
                href={item.id === 2 ? "https://www.skool.com/fintrade-master-academy-5270/about" : "/contact"}
                variant="secondary" 
                className="mt-2"
              >
                {item.ctaText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ValueStack;
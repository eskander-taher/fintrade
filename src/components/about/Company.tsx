import React from 'react';
import Section from '../ui/Section';


const Company: React.FC = () => {
  return (
    <Section id="apply" className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-blue-500">Company</span>
          </h2>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-lg">
              FinTrade Master Academy is a brand owned and operated by Imperium Capital Ventures LLC, a Wyoming-based company. We're committed to transparency, privacy, and doing things the right way — from the markets to your inbox.
            </p>
            
            <p className="text-xl font-semibold text-white">
              We're not a guru brand. We're a professional structured path to mastery.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold mb-4">APPLY NOW</h3>
            <p className="text-gray-300">
              Join our community of serious traders committed to real, sustainable growth.
            </p>
          </div>
          
          {/* Calendar embed */}
          <div className="w-full h-[600px]">
            <iframe 
              src="https://link.kourse.com/widget/booking/mtoNDQaK81z0KpWA6Nsp" 
              style={{ width: '100%', height: '100%', border: 'none' }} 
              id="mtoNDQaK81z0KpWA6Nsp_1747847509133"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Company;
import React, { useEffect } from 'react';
import Section from '../components/ui/Section';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Book a Call | FinTrade Master Academy';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 text-white min-h-screen pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your <span className="text-blue-500">Strategy Call</span>
            </h1>
            <p className="text-xl text-gray-300">
              Take the first step towards becoming a consistently profitable trader.
            </p>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
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
    </main>
  );
};

export default ContactPage;
import React from 'react';
import Section from '../ui/Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Trade <span className="text-blue-500">Like a Pro?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Take the first step towards becoming a consistently profitable trader.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Intake Form */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">APPLY TO LEARN MORE</h3>
              <p className="text-gray-300">
                Fill out this quick form to see if you're a good fit for our program.
              </p>
            </div>
            <div className="w-full h-[600px] overflow-hidden">
              <iframe
                src="https://link.kourse.com/widget/form/KiwwdgMp1b7ZA2ekPFYB"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
                id="inline-KiwwdgMp1b7ZA2ekPFYB" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="A2P General Optin"
                data-height="600"
                data-layout-iframe-id="inline-KiwwdgMp1b7ZA2ekPFYB"
                data-form-id="KiwwdgMp1b7ZA2ekPFYB"
                title="A2P General Optin"
              ></iframe>
            </div>
          </div>

          {/* Booking Calendar */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">BOOK A STRATEGY CALL</h3>
              <p className="text-gray-300">
                Schedule a call with our team to discuss your trading goals.
              </p>
            </div>
            <div className="w-full h-[600px] overflow-hidden">
              <iframe 
                src="https://link.kourse.com/widget/booking/mtoNDQaK81z0KpWA6Nsp" 
                style={{ width: '100%', height: '100%', border: 'none' }} 
                id="mtoNDQaK81z0KpWA6Nsp_1747847509133"
                title="Book a Strategy Call"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
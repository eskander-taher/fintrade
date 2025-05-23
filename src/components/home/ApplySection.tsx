import React from 'react';
import Section from '../ui/Section';

const ApplySection: React.FC = () => {
  return (
    <Section id="apply" className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Ready to Trade <span className="text-blue-500">Like a Pro?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Apply now to learn more about our programs and see if you're a good fit for FinTrade Master Academy.
        </p>
        
        <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">APPLY TO LEARN MORE</h3>
            <p className="text-gray-300">
              Fill out the form below to start your journey to becoming a consistently profitable trader.
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
      </div>
    </Section>
  );
};

export default ApplySection;
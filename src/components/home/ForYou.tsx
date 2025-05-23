import React from 'react';
import Section from '../ui/Section';
import { forYouPoints, notForYouPoints } from '../../constants/data';
import { CheckCircle, XCircle } from 'lucide-react';

const ForYou: React.FC = () => {
  return (
    <Section id="for-you" className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-blue-500">This is for you</span> if...
        </h2>
        
        <div className="space-y-6 mb-16">
          {forYouPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg border border-gray-800 bg-gray-800/50"
            >
              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-200">{point}</p>
            </div>
          ))}
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-red-500">This is NOT for you</span> if...
        </h2>
        
        <div className="space-y-6">
          {notForYouPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg border border-gray-800 bg-gray-800/50"
            >
              <XCircle className="text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-200">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ForYou;
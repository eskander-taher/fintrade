import React from 'react';
import Section from '../ui/Section';
import { coreValues } from '../../constants/data';

const CoreValues: React.FC = () => {
  return (
    <Section className="bg-gray-900 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Core <span className="text-blue-500">Values</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          These are the principles that shape everything we teach, build, and stand for at FinTrade Master Academy:
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreValues.map((value) => (
          <div 
            key={value.id}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 group"
          >
            <div className="mb-4 h-1.5 w-12 bg-blue-500"></div>
            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
            <p className="text-gray-300">{value.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CoreValues;
import React, { useState } from 'react';
import Section from '../ui/Section';
import { faqs } from '../../constants/data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../ui/Button';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <Section id="faq" className="bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Everything you need to know about our trading programs and methodology.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className={`w-full p-6 flex justify-between items-center text-left transition-colors ${
                  openIndex === index ? 'bg-gray-800' : 'bg-gray-900'
                }`}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 text-blue-500" />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-blue-500" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Have more questions? Book a call with our team.
          </p>
          <Button href="/contact">Book a Call</Button>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
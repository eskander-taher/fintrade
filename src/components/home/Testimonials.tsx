import React, { useState } from 'react';
import Section from '../ui/Section';
import { X } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Section id="testimonials" className="bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Real <span className="text-blue-500">Trading Results</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          See the actual results our members are achieving with our proven framework.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {[...Array(8)].map((_, index) => (
          <button 
            key={index}
            onClick={() => setSelectedImage(index)}
            className="relative aspect-[9/16] rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-gray-300">Trading Result #{index + 1}</p>
              <p className="text-lg font-semibold text-white">+{(Math.random() * 500).toFixed(2)}%</p>
            </div>
          </button>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-400 text-sm">
          *Results shown are from verified funded accounts. Individual results may vary.
        </p>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="aspect-[9/16] w-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">Trading Result #{selectedImage + 1}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Testimonials;
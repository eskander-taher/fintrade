import React, { useState } from 'react';
import Section from '../ui/Section';
import { X } from 'lucide-react';

const Results: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleCloseButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeModal();
  };

  const results = [
    { id: 1, image: '/assets/results/result-1.jpg', percentage: '487.32' },
    { id: 2, image: '/assets/results/result-2.jpg', percentage: '293.15' },
    { id: 3, image: '/assets/results/result-3.jpg', percentage: '156.89' },
    { id: 4, image: '/assets/results/result-4.jpg', percentage: '421.67' },
    { id: 5, image: '/assets/results/result-5.jpg', percentage: '378.44' },
    { id: 6, image: '/assets/results/result-6.jpg', percentage: '245.91' },
    { id: 7, image: '/assets/results/result-7.jpg', percentage: '532.18' },
    { id: 8, image: '/assets/results/result-8.jpg', percentage: '189.76' }
  ];

  return (
    <Section id="results" className="bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Real <span className="text-blue-500">Trading Results</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          See the actual results our members are achieving with our proven framework.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {results.map((result) => (
          <button 
            key={result.id}
            onClick={() => setSelectedImage(result.id - 1)}
            className="relative aspect-square rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-full h-full relative">
              <img
                src={result.image}
                alt={`Trading Result ${result.id}`}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full border-2 border-gray-500/30 flex items-center justify-center">
                  <span className="text-gray-400">View</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-gray-300">Trading Result #{result.id}</p>
                <p className="text-lg font-semibold text-white">+{result.percentage}%</p>
              </div>
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
          <div className="relative max-w-[90vw] max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden">
            <button 
              onClick={handleCloseButtonClick}
              className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="relative">
              <img
                src={results[selectedImage].image}
                alt={`Trading Result ${selectedImage + 1}`}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-lg font-semibold text-white">
                  Trading Result #{selectedImage + 1}: +{results[selectedImage].percentage}%
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Results;
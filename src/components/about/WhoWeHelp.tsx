import React from 'react';
import Section from '../ui/Section';
import { avatarTargets } from '../../constants/data';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhoWeHelp: React.FC = () => {
  return (
    <Section className="bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who This Academy Was <span className="text-blue-500">Built For</span>
          </h2>
          
          <div className="space-y-4 mb-8">
            {avatarTargets.map((target, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{target}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-blue-300 font-semibold mb-8">
            We've helped over 1,200 students flip their mindset and build real skill.
          </p>
          
          <Link 
            to="/apply"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors"
          >
            Apply Now
          </Link>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl transform -translate-y-4 opacity-30"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7567432/pexels-photo-7567432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Trader" 
                  className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Trader analyzing charts" 
                  className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Trader working" 
                  className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Successful trader" 
                  className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhoWeHelp;
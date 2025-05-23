import React from 'react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-500">Fin</span>Trade Master
            </h3>
            <p className="text-gray-400 mb-4">
              Helping everyday traders become consistently profitable in just 4 hours a week.
            </p>
            <p className="text-gray-400">
              support@fintrademasteracademy.com
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#value-stack" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#results" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/earnings-disclaimer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Earnings Disclaimer
                </a>
              </li>
              <li>
                <a href="/risk-disclaimer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Risk Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">
              Join our community to get weekly market insights and connect with other serious traders.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Risk Disclaimer</h4>
            <p className="text-sm text-gray-400">
              Trading forex and financial markets involves risk. Past performance does not guarantee future results. All content is for educational purposes only and is not financial advice. You are solely responsible for any decisions made based on this information. Use proper risk management and never trade more than you can afford to lose. FinTrade Master Academy is an educational brand owned by Imperium Capital Ventures LLC.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Earnings Disclaimer</h4>
            <p className="text-sm text-gray-400">
              Any earnings, income examples, or results shown on this site are not guaranteed and are for illustrative purposes only. Your results may vary and depend on many factors including your trading experience, discipline, and market conditions. We make no guarantees of success.
            </p>
          </div>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2">SMS/Email Compliance Disclosure</h4>
            <p className="text-sm text-gray-400">
              By providing your phone number, you consent to receive marketing text messages from Imperium Capital Ventures LLC. Message and data rates may apply. You can unsubscribe at any time by replying STOP. Privacy Policy and Terms apply.
            </p>
          </div>
          
          <p className="text-center text-gray-500 text-sm">
            © 2025 FinTrade Master Academy, a brand owned by Imperium Capital Ventures LLC. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
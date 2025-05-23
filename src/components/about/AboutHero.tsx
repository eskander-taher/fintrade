import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { Link } from "react-router-dom";

const AboutHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
		<section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
			{/* Background with overlay */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black z-10"></div>
				<img
					src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Trading background"
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div
					className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
						isVisible
							? "opacity-100 transform translate-y-0"
							: "opacity-0 transform translate-y-10"
					}`}
				>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
						Our <span className="text-blue-500">Mission</span> &{" "}
						<span className="text-blue-500">Vision</span>
					</h1>

					<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
						FinTrade Master Academy exists to help everyday people become consistently
						profitable traders — even if they've failed before or haven't started yet.
					</p>

					<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
						We believe trading should be clear, simple, and liberating — not
						overwhelming, overhyped, or filled with fake promises.
					</p>

					<Link
						to="/apply"
						className="inline-block bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 px-6 py-2 rounded-full transition-colors"
					>
						See how our framework works →
					</Link>
				</div>
			</div>
		</section>
  );
};

export default AboutHero;
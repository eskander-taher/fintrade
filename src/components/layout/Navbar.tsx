import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from "../ui/Container";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-black/90 backdrop-blur-sm py-4" : "bg-transparent py-6"
			}`}
		>
			<Container>
				<nav className="flex items-center justify-between">
					<Link
						to="/"
						className="text-white font-bold text-xl md:text-2xl flex items-center space-x-2"
					>
						<img
							src="/assets/logo.png"
							alt="FinTrade Master Logo"
							className="w-8 h-8 md:w-10 md:h-10"
						/>
						<span>
							<span className="text-blue-500">Fin</span>Trade Master
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<div className="flex items-center space-x-6">
							<Link
								to="/"
								className="text-white hover:text-blue-400 transition-colors"
							>
								Home
							</Link>
							<Link
								to="/about"
								className="text-white hover:text-blue-400 transition-colors"
							>
								About
							</Link>
							<Link
								to="/book"
								className="text-white hover:text-blue-400 transition-colors"
							>
								Book a Call
							</Link>
						</div>
						<Link
							to="/apply"
							className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors"
						>
							Apply Now
						</Link>
					</div>

					{/* Mobile Navigation Button */}
					<button
						className="md:hidden text-white p-2"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle navigation menu"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>

				{/* Mobile Navigation Menu */}
				{isOpen && (
					<div className="md:hidden py-4">
						<div className="flex flex-col space-y-4">
							<Link
								to="/"
								className="text-white py-2 hover:text-blue-400 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								Home
							</Link>
							<Link
								to="/about"
								className="text-white py-2 hover:text-blue-400 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								About
							</Link>
							<Link
								to="/book"
								className="text-white py-2 hover:text-blue-400 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								Book a Call
							</Link>
							<Link
								to="/apply"
								className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								Apply Now
							</Link>
						</div>
					</div>
				)}
			</Container>
		</header>
  );
};

export default Navbar;
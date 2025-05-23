import React, { useState } from "react";
import Section from "../ui/Section";
import { X } from "lucide-react";

const Certificates: React.FC = () => {
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

	const certificates = [
		{ id: 1, image: "/assets/certificates/1.jpg" },
		{ id: 2, image: "/assets/certificates/2.JPG" },
		{ id: 3, image: "/assets/certificates/3.jpg" },
	];

	return (
		<Section id="certificates" className="bg-black text-white">
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					Professional <span className="text-blue-500">Certifications</span>
				</h2>
				<p className="text-gray-300 max-w-3xl mx-auto">
					Our commitment to excellence is backed by recognized certifications in trading
					and financial markets.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
				{certificates.map((certificate) => (
					<button
						key={certificate.id}
						onClick={() => setSelectedImage(certificate.id - 1)}
						className="relative rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
					>
						<div className="w-full h-full relative">
							<img
								src={certificate.image}
								alt={`Certificate ${certificate.id}`}
								className="w-full h-full object-contain"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
							<div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
								<div className="w-12 h-12 rounded-full border-2 border-gray-500/30 flex items-center justify-center">
									<span className="text-gray-400">View</span>
								</div>
							</div>
						</div>
					</button>
				))}
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
								src={certificates[selectedImage].image}
								alt={`Certificate ${selectedImage + 1}`}
								className="w-full h-auto max-h-[90vh] object-contain"
							/>
						</div>
					</div>
				</div>
			)}
		</Section>
	);
};

export default Certificates;

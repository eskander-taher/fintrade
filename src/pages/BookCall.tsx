import React, { useEffect } from "react";
import Section from "../components/ui/Section";

const BookCall: React.FC = () => {
	useEffect(() => {
		document.title = "Book a Call | FinTrade Master Academy";
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<Section id="apply" className="bg-gradient-to-b from-gray-900 to-black text-white">
				<div className="max-w-4xl mx-auto">
					<div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
						<div className="mb-8 text-center">
							<h3 className="text-2xl font-bold mb-4">Book a Strategy Call</h3>
							<p className="text-gray-300">
								Schedule a one-on-one call to discuss your trading goals.
							</p>
						</div>

						{/* Calendar embed */}
						<div className="w-full h-[1000px]">
							<iframe
								src="https://link.kourse.com/widget/booking/mtoNDQaK81z0KpWA6Nsp"
								style={{ width: "100%", height: "100%", border: "none" }}
								id="mtoNDQaK81z0KpWA6Nsp_1747847509133"
							></iframe>
						</div>
					</div>
				</div>
			</Section>
		</main>
	);
};

export default BookCall;

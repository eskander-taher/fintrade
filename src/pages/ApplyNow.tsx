import React, { useEffect } from "react";
import Section from "../components/ui/Section";

const ApplyNow: React.FC = () => {
	useEffect(() => {
		document.title = "Apply Now | FinTrade Master Academy";
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<Section id="apply" className="bg-gradient-to-b from-gray-900 to-black text-white">
				<div className="max-w-4xl mx-auto">
					<div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
						<div className="mb-8 text-center">
							<h3 className="text-2xl font-bold mb-4">APPLY NOW</h3>
							<p className="text-gray-300">
								Join our community of serious traders committed to real, sustainable
								growth.
							</p>
						</div>

						{/* Calendar embed */}
						<div className="w-full">
							<iframe
								src="https://link.kourse.com/widget/form/KiwwdgMp1b7ZA2ekPFYB"
								style={{
									width: "100%",
									height: "100%",
									border: "none",
									borderRadius: "4px",
								}}
								id="inline-KiwwdgMp1b7ZA2ekPFYB"
								data-layout="{'id':'INLINE'}"
								data-trigger-type="alwaysShow"
								data-trigger-value=""
								data-activation-type="alwaysActivated"
								data-activation-value=""
								data-deactivation-type="neverDeactivate"
								data-deactivation-value=""
								data-form-name="A2P General Optin"
								data-height="600"
								data-layout-iframe-id="inline-KiwwdgMp1b7ZA2ekPFYB"
								data-form-id="KiwwdgMp1b7ZA2ekPFYB"
								title="A2P General Optin"
							/>
						</div>
					</div>
				</div>
			</Section>
		</main>
	);
};

export default ApplyNow;

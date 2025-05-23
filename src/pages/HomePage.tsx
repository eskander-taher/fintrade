import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ValueStack from '../components/home/ValueStack';
import ForYou from '../components/home/ForYou';
import Results from '../components/home/Results';
import Founder from "../components/home/Founder";

const HomePage: React.FC = () => {
	useEffect(() => {
		document.title = "FinTrade Master Academy | Trade Like a Pro";
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<Hero />
			<ValueStack />
			<ForYou />
			<Results />
			<Founder />
		</main>
	);
};

export default HomePage;
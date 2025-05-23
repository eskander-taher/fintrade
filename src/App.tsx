import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ApplyNow from "./pages/ApplyNow";
import BookCall from "./pages/BookCall";
import './App.css';

function App() {
  return (
		<Router>
			<div className="min-h-screen bg-black text-white flex flex-col">
				<Navbar />
				<div className="flex-grow">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/apply" element={<ApplyNow />} />
						<Route path="/book" element={<BookCall />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
  );
}

export default App;
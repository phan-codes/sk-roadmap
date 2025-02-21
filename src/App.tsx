import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Roadmap from "./components/Roadmap";

function App() {
	return (
		<div className="relative z-1 flex flex-col w-full text-gray-300 overflow-x-hidden font-SpaceGrotesk bg-radial from-[#130926] via-[#200940] to-[#270c57]">
			<Hero />
			<Mission />
			<Roadmap />
			<Footer />
		</div>
	);
}

export default App;

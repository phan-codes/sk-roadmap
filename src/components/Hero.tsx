import { ChevronDown } from "lucide-react";
import heroImg from "../assets/heroImg.jpg";
import herobg from "../assets/herobg.mp4";

const Hero = () => {
	return (
		<section className="relative pt-60 h-screen w-full px-5 md:px-10">
			<video
				autoPlay
				loop
				muted
				className="absolute w-full h-full top-[50%] left-[50%] object-cover -translate-x-[50%] -translate-y-[50%] z-0">
				<source src={herobg} type="video/mp4" />
			</video>

			<div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(36,11,77,0.98),rgba(31,10,61,0.9),rgba(36,11,77,0.98))] z-1"></div>

			<div className="relative z-2 flex flex-col gap-y-10 items-center text-center">
				<div className="h-56 min-w-52 relative">
					<div className="absolute z-0 -inset-x-40 inset-y-0 bg-gradient-to-b from-[#15ecfd] to-[#e01df9] blur-3xl opacity-30"></div>
					<img src={heroImg} alt="space krashers" className="min-w-52 h-56 rounded-md animate-bounceSlow" />
				</div>
				<h1 className="font-bold text-5xl leading-16 py-4 bg-gradient-to-r from-[#15ecfd] via-[#dcfdff] to-[#e01df9] bg-clip-text text-transparent md:text-7xl lg:text-8xl">
					SPACE KRASHERS
				</h1>
				<p className="font-semoibold text-xl">A Social Experiment for Global Empowerment</p>
				<ChevronDown className="animate-bounce mt-20" />
			</div>
		</section>
	);
};

export default Hero;

import phases from "../phases/index.ts";
import Reveal from "./Reveal.tsx";

const Roadmap = () => {
	return (
		<section className="my-20 px-5 md:px-10">
			<Reveal>
				<h1 className="font-bold text-3xl leading-12 text-center bg-gradient-to-r from-[#15ecfd] via-[#dcfdff] to-[#e01df9] bg-clip-text text-transparent">
					Project Roadmap: 2025 and Beyond
				</h1>
			</Reveal>
			<div className="relative pl-10 before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:rounded-full before:bg-[#15ecfd] before:shadow-[0px_0px_10px_rgba(21,236,253,0.6)] max-w-[900px] text-center mx-auto md:text-left">
				{phases.map((phase, index) => (
					<Reveal key={index}>
						<div className="flex flex-col py-10 px-5 gap-y-2 rounded-lg my-20 relative bg-[#2e1650]/40 shadow-[0px_0px_3px_rgba(255,255,255,0.2)] md:px-10">
							<div className="rounded-full absolute top-1 -left-[45px] h-3 w-3 bg-[#15ecfd]"></div>
							<h2 className="text-[#15ecfd] font-semibold">{phase.time}</h2>
							<h2 className="bg-gradient-to-r from-[#15ecfd] from-0% to-[#dcfdff] to-60% bg-clip-text text-transparent font-bold text-xl">
								Phase {phase.phase} - {phase.phaseTitle}
							</h2>
							<h3 className="font-bold my-2 text-left">{phase.subtitle}</h3>
							<div className="flex flex-col gap-y-3 text-gray-200/60 text-sm text-left md:pl-5">
								{phase.lists.map(({ list }) => (
									<p> &#8226; {list}</p>
								))}
							</div>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
};

export default Roadmap;

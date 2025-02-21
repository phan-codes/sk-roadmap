import Reveal from "./Reveal";

const missions = [
	{
		mission:
			"Create a self-sustaining ecosystem where individuals can bring original ideas and receive community-driven support.",
	},
	{
		mission:
			"Decentralize access to resources, knowledge, and opportunities, removing traditional barriers to success.",
	},
	{
		mission:
			"Enable people to own their digital identities, aggregate their online presence, and earn fair compensation for their contributions.",
	},
	{
		mission:
			"Foster collaborative, gamified learning and development, making business growth engaging, measurable, and rewarding.",
	},
	{
		mission:
			"Empower individuals and businesses globally, creating a new model for digital entrepreneurship, social interaction, and economic freedom.",
	},
];

const Mission = () => {
	return (
		<section className="my-40 px-5 text-center md:text-left md:mx-auto md:px-10">
			<div className="flex flex-col py-10 px-5 gap-y-5 max-w-[900px] rounded-lg bg-[#2e1650]/40 shadow-[0px_0px_3px_rgba(255,255,255,0.2)] md:px-10">
				<Reveal>
					<h1 className="font-bold text-3xl bg-gradient-to-r from-[#15ecfd] from-0% to-[#dcfdff] to-60% bg-clip-text text-transparent">
						Our Mission
					</h1>
				</Reveal>
				<Reveal>
					<p>
						Space Krashers is not just a platform -- it is a digital ecosystem designed to empower and serve the globe
						through technology, collaboration, and decentralized innovation. This network of interconnected sites,
						tools, and platforms aims to provide people with the resources they need to build, grow, and thrive.
					</p>
				</Reveal>
				<Reveal>
					<div className="flex flex-col gap-y-5 pl-5 text-gray-200/70">
						{missions.map(({ mission }, index) => (
							<div key={index}>&#8226; {mission}</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
};

export default Mission;

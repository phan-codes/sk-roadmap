interface PhasesProps {
	time: string;
	phase: string;
	phaseTitle: string;
	subtitle: string;
	lists: {
		list: string;
	}[];
}

const phases: PhasesProps[] = [
	{
		time: "Q1 - Q2 2025",
		phase: "1",
		phaseTitle: "Foundational Development",
		subtitle:
			"Establish ecosystem architecture, launch SK token (SKC), engage community, and prepare NFT pre-launch phase.",
		lists: [
			{
				list: "Architecture Design with modular, blockchain-based structure",
			},
			{
				list: "SKC Token Implementation",
			},
			{
				list: "Community Forums Launch",
			},
			{
				list: "NFT Pre-Launch Activities",
			},
		],
	},
	{
		time: "Q2 - Q3 2025",
		phase: "1.1",
		phaseTitle: "NFT Launch & Expansion",
		subtitle: "Launch NFT collection enabling digital identity reprensentation and governance participation.",
		lists: [
			{
				list: "NFT Minting Events",
			},
			{
				list: "Digital Identity Intergration",
			},
			{
				list: "Governance Access Implementation",
			},
		],
	},
	{
		time: "Q3 - Q4 2025",
		phase: "2",
		phaseTitle: "Ecosystem Development",
		subtitle: "Launch core platforms including SK Agency, Freelancer Marketplace, and Business Development Platform.",
		lists: [
			{
				list: "SK Agency Launch",
			},
			{
				list: "Freelancer Marketplace Development",
			},
			{
				list: "Business Development Platform Release",
			},
			{
				list: "Decentralized Social Network Integration",
			},
		],
	},
	{
		time: "Q1 - Q3 2026",
		phase: "3",
		phaseTitle: "Feature Expansion",
		subtitle: "Introduce Innovation Incubator, AI tools integration, and SKC governance model.",
		lists: [
			{
				list: "Innovation Incubator Launch",
			},
			{
				list: "AI Tools Integration",
			},
			{
				list: "SKC Governance Framework",
			},
		],
	},
	{
		time: "Q4 2026 - Q2 2027",
		phase: "4",
		phaseTitle: "Global Engagement",
		subtitle: "Execute global marketing, enhance gamification, and host first Space Krashers Summit.",
		lists: [
			{
				list: "Global Marketing Campaign",
			},
			{
				list: "Gamified Learning System",
			},
			{
				list: "Annual Summit Organization",
			},
		],
	},
	{
		time: "Q3 2027+",
		phase: "5",
		phaseTitle: "Future Innovations",
		subtitle:
			"Scale platform through strategic partnerships, real-world application, and emerging technology adoption.",
		lists: [
			{
				list: "Cross-Platform Integration",
			},
			{
				list: "Real-World Use Cases",
			},
			{
				list: "VR/AR Experience Development",
			},
			{
				list: "Continous Platform Evolution",
			},
		],
	},
];

export default phases;

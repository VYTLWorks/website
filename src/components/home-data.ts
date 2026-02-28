import { LeadershipCardProps } from "./leadership-card";
import { FeatureCardProps, StatItemProps, TeamMemberCardProps } from "./types";

export const LEADERSHIP_MEMBERS = [
	{
		name: "Bernard Ennis",
		role: "Co-Founder & CEO",
		expertise:
			"30+ years industrial experience in Automotive, Marine and Electrical sectors",
		imageSrc: "/assets/team/Bernard_C12_0740_head.jpg",
		imageAlt: "Bernard",
	},
	{
		name: "Corentin Coulais",
		role: "Co-Founder & CSO",
		expertise: "Associate Professor, University of Amsterdam",
		imageSrc: "/assets/team/Corentin_C12_0783_profile.jpg",
		imageAlt: "Corentin",
	},
] as const satisfies LeadershipCardProps[];

export const BENEFIT_CARDS = [
	{
		title: "Significant Weight Reduction",
		description:
			"Without compromising crash performance, enabling increased driving range and reduced CO₂ footprint.",
		iconColor: "var(--color-secondary)",
		icon: "fa-solid fa-weight-hanging",
	},
	{
		title: "Tuneable, High-Energy Absorption",
		description:
			"Compact form factor delivers superior protection in minimal space.",
		iconColor: "var(--color-primary)",
		icon: "fa-solid fa-gauge",
	},
	{
		title: "Manufacturing Compatibility",
		description: "Works with industrial manufacturing routes:",
		iconColor: "var(--color-accent)",
		icon: "fa-solid fa-industry",
	},
	{
		title: "Cost-Neutral Integration",
		description:
			"Seamlessly integrates into existing battery‑box designs without premium costs.",
		iconColor: "var(--color-secondary)",
		icon: "fa-solid fa-money-bill-wave",
	},
] as const satisfies FeatureCardProps[];

// MOCK DATA ------------------------------------------------------------------------------------

// demo data
export const STATS = [
	{ number: "10+", label: "Lorem Ipsum" },
	{ number: "500+", label: "Dolor Sit" },
	{ number: "50+", label: "Consectetur" },
	{ number: "99%", label: "Adipiscing" },
] as const satisfies StatItemProps[];

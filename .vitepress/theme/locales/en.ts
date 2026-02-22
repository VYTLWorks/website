import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { readFileSync } from "node:fs";

// team, product, news, about
function nav(): DefaultTheme.NavItem[] {
	const PATH_PREFIX = "/en/";

	const subDirectories = readFileSync("./src/en");

	console.log(subDirectories);

	return [];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			collapsed: false,
			text: "Introduction",
			items: [{ text: "Getting Started", link: "/guide/getting-started" }],
		},
	];
}

function sidebarComponents(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Components",
			link: "/components/index",
			items: [
				{ text: "Avatar", link: "/components/avatar" },
				{ text: "Badge", link: "/components/badge" },
				{ text: "Button", link: "/components/button" },
				{ text: "Button Group", link: "/components/button-group" },
				{ text: "Icon", link: "/components/icon" },
				{ text: "Input", link: "/components/input" },
				{ text: "Navbar", link: "/components/navbar" },
				{ text: "Sidebar", link: "/components/sidebar" },
				{ text: "Loading Pulse", link: "/components/loading-pulse" },
				{ text: "Loading Spinner", link: "/components/loading-spinner" },
				{ text: "Text", link: "/components/text" },
				{ text: "Textarea", link: "/components/textarea" },
				{ text: "Tooltip", link: "/components/tooltip" },
			],
		},
	];
}

export const en: LocaleSpecificConfig<DefaultTheme.Config> = {
	title: "Bamboo",
	description: "Flexible and type-safe component library for Vue 3",

	themeConfig: {
		nav: nav(),
		sidebar: {
			"/en": {
				base: "/en/",
				items: [...sidebarGuide(), ...sidebarComponents()],
			},
		},
		editLink: {
			pattern:
				"https://github.com/mrksbnc/bamboo/edit/main/packages/bamboo-docs/src/en/:path",
			text: "Edit this page on GitHub",
		},
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2024-present Bence Markus",
		},
		docFooter: {
			prev: "Previous page",
			next: "Next page",
		},
		outline: {
			label: "On this page",
		},
		lastUpdated: {
			text: "Last updated",
		},
		langMenuLabel: "Change language",
		returnToTopLabel: "Return to top",
		sidebarMenuLabel: "Menu",
		darkModeSwitchLabel: "Appearance",
		lightModeSwitchTitle: "Switch to light theme",
		darkModeSwitchTitle: "Switch to dark theme",
	},
};

import { Config } from "ziggy-js";

export interface User {
	id: number;
	name: string;
	email: string;
	email_verified_at?: string;
}
export interface PortfolioCreateType {
	title: string;
	summary: string;
	description: string;
	technologies: string[];
	link: string;
	imageUrl: string;
}
export interface Portfolio {
	id: string;
	title: string;
	summary: string;
	description: string;
	technologies: string[];
	link: string;
	imageUrl: string;
}

export interface Responsibility {
	id: string;
	title: string;
	description: string;
	technologies: string[];
}

export interface Experience {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	link: string;
	imageUrl: string;
	responsibilities?: Responsibility[];
}

export interface ExperienceCreateType {
	title: string;
	description: string;
	technologies: string[];
	link: string;
	imageUrl: string;
	responsibilities?: Responsibility[];
}

export type PageProps<
	T extends Record<string, unknown> = Record<string, unknown>
> = T & {
	auth: {
		user: User;
	};
	ziggy: Config & { location: string };
};

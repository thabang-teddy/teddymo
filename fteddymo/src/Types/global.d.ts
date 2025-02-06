
interface LayoutProps {
	header?: string;
	title?: string; // Optional title for the page
	children: React.ReactNode; // Content to render inside the layout
	showNavbar?: boolean; // Show or hide the navbar
}
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

export interface ResponsibilityType {
	id: string;
	title: string;
	description: string;
	technologies: string[];
}

export interface ExperienceType {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	link: string;
	imageUrl: string;
	responsibilities?: ResponsibilityType[];
}

export interface ExperienceCreateType {
	title: string;
	description: string;
	technologies: string[];
	link: string;
	imageUrl: string;
	responsibilities?: Responsibility[];
}

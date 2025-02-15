
interface LayoutProps {
	header?: string;
	title?: string; // Optional title for the page
	children: React.ReactNode; // Content to render inside the layout
	showNavbar?: boolean; // Show or hide the navbar
}
export interface UserType {
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
export interface PortfolioType {
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
	jobtitle: string;
	company: string;
	duration: string;
	description: string;
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

interface ContactType {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    state: string;
    created_at: string;
}

interface SendContactType {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface AlertType {
    id: string;
    text: string;
    alertType: string;
}

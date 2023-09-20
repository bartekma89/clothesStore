import { type Route } from "next";

export interface ProductListType {
	id: string;
	name: string;
	price: number;
	category: string;
	coverImage: {
		src: string;
		alt: string;
	};
	description: string;
}

export interface MenuOptions {
	name: string;
	href: Route<string>;
}

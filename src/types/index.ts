import { type Route } from "next";

export interface ProductListType {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
}

export interface Rating {
	rate: number;
	count: number;
}

export interface MenuOptions {
	name: string;
	href: Route<string>;
}

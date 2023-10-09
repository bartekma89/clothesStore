import { type Route } from "next";

export interface ProductListType {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

export interface MenuOptions {
	name: string;
	href: Route<string>;
}

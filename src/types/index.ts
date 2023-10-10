import { type Route } from "next";

export interface MenuOptions {
	name: string;
	href: Route<string>;
}

import { type ReactNode } from "react";
import { Header } from "@/components/atoms";

export default function ProductsLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}

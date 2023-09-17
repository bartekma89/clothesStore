import { type Metadata } from "next";
import { Rubik } from "next/font/google";

import { Header, Footer } from "@/app/components/atoms/";

import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={rubik.className}>
				<main>
					<section>
						<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
							<Header />
							{children}
							<Footer />
						</div>
					</section>
				</main>
			</body>
		</html>
	);
}

import { type Metadata } from "next";
import { Rubik } from "next/font/google";

import { Footer } from "@/components/atoms";
import { Header } from "@/components/organisms";

import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products Page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={rubik.className}>
				<main>
					<section>
						<Header />
						<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
							{children}
						</div>
						<Footer />
					</section>
				</main>
			</body>
		</html>
	);
}

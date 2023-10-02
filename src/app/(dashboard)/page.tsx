import Link from "next/link";
import React from "react";

export default function DashboardPage() {
	return (
		<div className="grid gap-6 text-center">
			<h1 className=" text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
				An e-commerce skateshop built with everything new in Next.js 13
			</h1>
			<div>
				<Link
					className="inline-block rounded border border-black bg-black px-7 py-2 text-base font-medium text-white hover:opacity-80 focus:outline-none focus:ring"
					href="/products"
				>
					Buy
				</Link>
			</div>
		</div>
	);
}

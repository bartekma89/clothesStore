"use client";

import Link from "next/link";

interface ComponetProps {
	hasPreviousPage?: boolean;
	hasNextPage?: boolean;
	page: number;
}

export function Pagination({ page }: ComponetProps) {
	const pages = Array.from({ length: 4 }, (_, i) => {
		return i + 1;
	});

	const activePage =
		"block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white";

	return (
		<ol
			className="flex justify-center gap-1 text-xs font-medium"
			aria-label="pagination"
		>
			{pages.map((pageNumber) => {
				return (
					<li
						key={pageNumber}
						className={pageNumber === Number(page) ? activePage : ""}
					>
						<Link
							href={`/products/${pageNumber}`}
							className={
								pageNumber !== Number(page)
									? "block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
									: ""
							}
						>
							{pageNumber}
						</Link>
					</li>
				);
			})}
		</ol>
	);
}

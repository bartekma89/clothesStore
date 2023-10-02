"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface ComponetProps {
	hasPrevPage: boolean;
	page: string;
}

export function Pagination({ page, hasPrevPage }: ComponetProps) {
	const router = useRouter();

	const pageNumber = Number(page);
	const pages = Array.from({ length: 6 }, (_, i) => {
		return i - (pageNumber === 1 ? 0 : 1) + pageNumber;
	});

	const activePage =
		"block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white";

	return (
		<ol
			className="flex justify-center gap-1 text-xs font-medium"
			aria-label="pagination"
		>
			<li>
				<button
					disabled={!hasPrevPage}
					onClick={() => router.push(`/products/${pageNumber - 1}`)}
					className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
				>
					<span className="sr-only">Prev Page</span>
					<ChevronLeftIcon />
				</button>
			</li>
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

			<li>
				<button
					onClick={() => router.push(`/products/${pageNumber + 1}`)}
					className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
				>
					<span className="sr-only">Next Page</span>
					<ChevronRightIcon />
				</button>
			</li>
		</ol>
	);
}

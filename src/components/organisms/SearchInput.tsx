"use client";

import { type ChangeEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@uidotdev/usehooks";

export function SearchInput() {
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	const router = useRouter();

	useEffect(() => {
		if (debouncedSearchTerm) {
			router.push(`/search?query=${debouncedSearchTerm}`);
		}
	}, [debouncedSearchTerm, router]);

	const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div className="relative hidden sm:block">
			<label className="sr-only" htmlFor="search">
				{" "}
				Search{" "}
			</label>

			<input
				className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
				id="search"
				type="search"
				placeholder="Search website..."
				value={searchTerm}
				onChange={handleChangeValue}
			/>
		</div>
	);
}

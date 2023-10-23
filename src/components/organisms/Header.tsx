import Link from "next/link";

import { Navbar } from "../molecules";
import { CartButton } from "../atoms";
import { SearchInput } from "./SearchInput";

export function Header() {
	return (
		<header className="bg-white">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
				<Link className="block text-gray-900" href="/">
					<span className="sr-only">Home</span>
					<span>Logo</span>
				</Link>

				<div className="flex flex-1 items-center justify-end md:justify-between">
					<Navbar />
					<SearchInput />
					<CartButton />
				</div>
			</div>
		</header>
	);
}

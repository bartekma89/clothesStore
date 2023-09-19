import { ActiveLink } from "../atoms";

export function Navbar() {
	return (
		<nav aria-label="Global" className="hidden md:block">
			<ul className="flex items-center gap-6 text-sm">
				<li>
					<ActiveLink className="text-gray-500 transition hover:text-gray-500/75" href="/">
						Dashboard
					</ActiveLink>
				</li>

				<li>
					<ActiveLink className="text-gray-500 transition hover:text-gray-500/75" href="/products">
						Products
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
}

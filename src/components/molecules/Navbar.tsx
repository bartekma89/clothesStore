import { ActiveLink } from "../atoms";
import { menuOptions } from "@/config/navbar";

export function Navbar() {
	return (
		<nav aria-label="Global" className="hidden md:block">
			<ul className="flex items-center gap-6 text-sm">
				{menuOptions.map(({ name, href }) => {
					return (
						<li key={name}>
							<ActiveLink
								className="text-gray-500 transition hover:text-gray-500/75"
								activeClassName="underline underline-offset-4"
								href={href}
							>
								{name}
							</ActiveLink>
						</li>
					);
				})}

			</ul>
		</nav>
	);
}

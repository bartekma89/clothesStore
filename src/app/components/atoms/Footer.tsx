import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-white">
			<div className="mx-auto max-w-screen-xl pb-8 pt-16  lg:pt-24">
				<div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
					<ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
						<li>
							{/* TODO: create the terms page */}
							<Link href="#" className="text-gray-500 transition hover:opacity-75">
								Terms & Conditions
							</Link>
						</li>

						<li>
							{/* TODO: create the policy page */}
							<Link href="#" className="text-gray-500 transition hover:opacity-75">
								Privacy Policy
							</Link>
						</li>

						<li>
							{/* TODO: create cookies page */}
							<Link href="#" className="text-gray-500 transition hover:opacity-75">
								Cookies
							</Link>
						</li>
					</ul>
					<p className="mt-8 text-xs text-gray-500 sm:mt-0">&copy; {new Date().getFullYear()}</p>
				</div>
			</div>
		</footer>
	);
}

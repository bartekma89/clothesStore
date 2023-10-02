import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-white">
			<div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
				<div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
					<ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
						<li>
							<Link
								href="/static/terms-and-conditions"
								className="text-gray-500 transition hover:opacity-75"
							>
								Terms & Conditions
							</Link>
						</li>

						<li>
							<Link
								href="/static/privacy-policy"
								className="text-gray-500 transition hover:opacity-75"
							>
								Privacy Policy
							</Link>
						</li>
					</ul>
					<p className="mt-8 text-xs text-gray-500 sm:mt-0">
						&copy; {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</footer>
	);
}

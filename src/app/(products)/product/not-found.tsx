import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h2>Not found </h2>
			<p>Product not found</p>
			<p>
				<Link href="/">Go Back</Link>
			</p>
		</div>
	);
}

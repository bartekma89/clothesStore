import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export function CartButton() {
	return (
		<Link href="/cart" className="flex flex-row">
			<ShoppingCart />
			<span className="ml-3">0</span>
		</Link>
	);
}

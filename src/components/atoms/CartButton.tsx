import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import { getCartByCookies } from "@/lib/api/cart";

export async function CartButton() {
	const cart = await getCartByCookies();

	const count = cart?.orderItems.length || 0;

	return (
		<Link href="/cart" className="flex flex-row">
			<ShoppingCart />
			<span className="ml-3">{count}</span>
		</Link>
	);
}

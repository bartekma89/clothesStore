import { Suspense } from "react";

import { ProductList } from "@/components/organisms/ProductList";
import { getProducts } from "@/lib/api/products";

export const metadata = {
	title: "Products Page",
};

export default async function Home() {
	const products = await getProducts();

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ProductList products={products} />;
		</Suspense>
	);
}

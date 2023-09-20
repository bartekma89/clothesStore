import { Suspense } from "react";

import { ProductList } from "@/components/organisms/ProductList";
import { type ProductListType } from "@/types";

const getProducts = async () => {
	const res = await fetch("http:/localhost:4000/products", {
		next: {
			revalidate: 0,
		},
	});

	return res.json() as Promise<ProductListType[]>;
};

export default async function Home() {
	const products = await getProducts();

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ProductList products={products} />;
		</Suspense>
	);
}

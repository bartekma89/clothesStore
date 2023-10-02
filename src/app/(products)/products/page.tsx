import { Suspense } from "react";
import { redirect } from "next/navigation";

import { ProductList } from "@/components/organisms/ProductList";
import { getProducts } from "@/lib/api/products";
import { Pagination } from "@/components/organisms";
import { getPaginationSettings } from "@/lib/getPaginationSettings";

export const metadata = {
	title: "Products Page",
};

export default async function Home() {
	const { hasPrevPage, perPage, pageNumber } = getPaginationSettings();
	const products = await getProducts(perPage);

	if (Number(pageNumber) < 1) {
		redirect("/products/1");
	}

	return (
		<>
			<Pagination page={pageNumber} hasPrevPage={hasPrevPage} />
			<Suspense fallback={<div>Loading...</div>}>
				<ProductList products={products} />;
			</Suspense>
		</>
	);
}

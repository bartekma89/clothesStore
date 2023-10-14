import { Suspense } from "react";

import { ProductList } from "@/components/organisms/ProductList";
import { getProducts } from "@/lib/api/products";
import { Pagination } from "@/components/organisms";
import { getPagination } from "@/lib/api/pagination";

export const metadata = {
	title: "Products Page",
};

export default async function ProductsPage() {
	const { hasNextPage, hasPreviousPage } = await getPagination(0);

	const products = await getProducts(10, 0);

	return (
		<>
			<Pagination
				page={1}
				hasPreviousPage={hasPreviousPage}
				hasNextPage={hasNextPage}
			/>
			<Suspense fallback={<div>Loading...</div>}>
				<section>
					<ProductList products={products} />
				</section>
			</Suspense>
		</>
	);
}

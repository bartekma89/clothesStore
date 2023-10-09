import { Suspense } from "react";
import { redirect } from "next/navigation";

import { ProductList } from "@/components/organisms/ProductList";
import { getProducts } from "@/lib/api/products";
import { Pagination } from "@/components/organisms";
import { getPagination } from "@/lib/api/pagination";
import { ITEMS_PER_PAGE } from "@/config";

export const metadata = {
	title: "Products Page",
};

export async function generateStaticParams() {
	const products = await getProducts(10, 0);
	const numbersOfPage = Math.ceil(products.length / 10);
	const pages = Array.from({ length: numbersOfPage }, (_, i) => {
		return i;
	});

	return pages.map((page) => ({
		page: page.toString(),
	}));
}

export default async function ProductsPage({
	params,
}: {
	params: { page: string };
}) {
	const pageNumber = Number(params.page);
	const skip =
		pageNumber === 1 ? 0 : pageNumber * ITEMS_PER_PAGE - ITEMS_PER_PAGE;

	if (pageNumber < 1) {
		redirect("/products/1");
	}

	const { hasNextPage, hasPreviousPage } = await getPagination(skip);

	const products = await getProducts(10, skip);

	return (
		<>
			<Pagination
				page={pageNumber}
				hasNextPage={hasNextPage}
				hasPreviousPage={hasPreviousPage}
			/>
			<Suspense fallback={<div>Loading...</div>}>
				<ProductList products={products} />;
			</Suspense>
		</>
	);
}

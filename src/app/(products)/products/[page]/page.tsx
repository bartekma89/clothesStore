import { Suspense } from "react";
import { redirect } from "next/navigation";

import { ProductList } from "@/components/organisms/ProductList";
import { getProducts } from "@/lib/api/products";
import { Pagination } from "@/components/organisms";
import { getPaginationSettings } from "@/lib/getPaginationSettings";

export const metadata = {
	title: "Products Page",
};

export async function generateStaticParams() {
	const products = await getProducts(undefined, "300");
	const numbersOfPage = Math.ceil(products.length / 4);
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
	const { hasPrevPage, offset, perPage, pageNumber } = getPaginationSettings(
		params.page,
	);

	const products = await getProducts(perPage, offset);

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

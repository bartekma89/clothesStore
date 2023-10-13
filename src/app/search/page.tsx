import { Suspense } from "react";

import { ProductList } from "@/components/organisms";
import { getProductByName } from "@/lib/api/products";

type SearchParamsType = {
	searchParams: {
		query: string;
	};
};

export default async function SearchPage({
	searchParams: { query },
}: SearchParamsType) {
	const products = await getProductByName(query);

	if (products.length < 1) {
		return <section className="text-center">No Data!</section>;
	}

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<section>
				<ProductList products={products} />
			</section>
		</Suspense>
	);
}

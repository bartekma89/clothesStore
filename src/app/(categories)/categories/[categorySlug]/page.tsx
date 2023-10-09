import { Suspense } from "react";
import { notFound } from "next/navigation";

import { ProductList } from "@/components/organisms";
import { getProductByCategories } from "@/lib/api/categories";

type ParamsType = {
	params: {
		categorySlug: string;
	};
};

export default async function CategortiesPage({
	params: { categorySlug },
}: ParamsType) {
	const products = await getProductByCategories(categorySlug);

	if (!products) {
		return notFound();
	}

	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<ProductList products={products} />
			</Suspense>
		</div>
	);
}

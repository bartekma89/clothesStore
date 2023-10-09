import { notFound } from "next/navigation";

import { executeGraphql } from "./executeGraphql";
import { ProductsGetByCategoriesDocument } from "@/gql/graphql";

export async function getProductByCategories(slug: string) {
	const { categories } = await executeGraphql(ProductsGetByCategoriesDocument, {
		slug,
	});

	if (!categories) {
		throw notFound();
	}

	const products = categories[0]?.products;

	return products?.map((product) => {
		return {
			title: product.name,
			category: product.categories[0]?.name ?? "",
			description: product.description,
			id: product.id,
			image: product.images[0]?.url ?? "",
			price: product.price,
		};
	});
}

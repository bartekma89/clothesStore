import { notFound } from "next/navigation";

import { executeGraphql } from "./executeGraphql";
import { ProductsGetByCategoriesDocument } from "@/gql/graphql";

export async function getProductByCategories(slug: string) {
	const { categories } = await executeGraphql({
		query: ProductsGetByCategoriesDocument,
		variables: {
			slug,
		},
	});

	if (!categories) {
		throw notFound();
	}

	return categories[0]?.products;
}

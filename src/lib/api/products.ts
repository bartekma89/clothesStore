import { notFound } from "next/navigation";

import { executeGraphql } from "@/lib/executeGraphql";
import { type ProductListType } from "@/types";
import { ProductsGetListDocument, ProductGetByIdDocument } from "@/gql/graphql";

export const getProducts = async (
	take?: number,
	skip?: number,
): Promise<ProductListType[]> => {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		take,
		skip,
	});

	return products.map((product) => ({
		title: product.name,
		category: product.categories[0]?.name ?? "",
		description: product.description,
		id: product.id,
		image: product.images[0]?.url ?? "",
		price: product.price,
	}));
};

export async function getProduct(id: string) {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id,
	});

	if (!product) {
		throw notFound();
	}

	return {
		title: product.name,
		category: product.categories[0]?.name ?? "",
		description: product.description,
		id: product.id,
		image: product.images[0]?.url ?? "",
		price: product.price,
	};
}

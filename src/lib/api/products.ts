import { notFound } from "next/navigation";

import { executeGraphql } from "@/lib/api/executeGraphql";
import { ProductsGetListDocument, ProductGetByIdDocument } from "@/gql/graphql";

export const getProducts = async (take?: number, skip?: number) => {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		take,
		skip,
	});

	return products;
};

export async function getProduct(id: string) {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id,
	});

	if (!product) {
		throw notFound();
	}

	return product;
}

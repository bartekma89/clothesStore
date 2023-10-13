import { notFound } from "next/navigation";

import { executeGraphql } from "@/lib/api/executeGraphql";
import {
	ProductsGetListDocument,
	ProductGetByIdDocument,
	ProductsGetByNameDocument,
} from "@/gql/graphql";

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

export async function getProductByName(name: string) {
	const { products } = await executeGraphql(ProductsGetByNameDocument, {
		query: name,
	});

	return products;
}

import { notFound } from "next/navigation";

import { gql, type TypedDocumentNode } from "@apollo/client";
import { getClient } from "./apolloClient";
import { executeGraphql } from "@/lib/api/executeGraphql";
import {
	ProductsGetListDocument,
	ProductGetByIdDocument,
	type ProductsGetByNameQuery,
} from "@/gql/graphql";

export const getProducts = async (take?: number, skip?: number) => {
	const { products } = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			take,
			skip,
		},
	});

	return products;
};

export async function getProduct(id: string) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id,
		},
	});

	if (!product) {
		throw notFound();
	}

	return product;
}

const PRODUCTS_GET_BY_NAME: TypedDocumentNode<ProductsGetByNameQuery> = gql`
	query ProductsGetByName($query: String!) {
		products(where: { name_contains: $query }) {
			id
			name
			description
			categories(first: 1) {
				id
				name
			}
			images(first: 1) {
				url
				width
				height
			}
			price
		}
	}
`;

export async function getProductByName(name: string) {
	const { data } = await getClient().query({
		query: PRODUCTS_GET_BY_NAME,
		variables: {
			query: name,
		},
	});

	if (!data) {
		throw TypeError("No data");
	}

	return data.products;
}

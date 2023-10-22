"use server";

import {
	CartRemoveItemDocument,
	CartSetProductQuantityDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/lib/api/executeGraphql";

export const changeItemQuantity = (itemId: string, quantity: number) => {
	return executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
		headers: {
			Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
		},
		cache: "no-store",
	});
};

export const removeItem = (productId: string) => {
	return executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			id: productId,
		},
		headers: {
			Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
		},
		cache: "no-store",
	});
};

"use server";

import { CartSetProductQuantityDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/api/executeGraphql";

export const changeItemQuantity = (itemId: string, quantity: number) => {
	console.log(process.env.HYGRAPH_MUTATION_TOKEN);
	return executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
		headers: {
			Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
		},
	});
};

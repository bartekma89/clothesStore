import { PaginationDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/api/executeGraphql";

export const getPagination = async (skip: number, take?: number) => {
	const { productsConnection } = await executeGraphql({
		query: PaginationDocument,
		variables: {
			skip,
			take,
		},
	});

	let hasNextPage = false;

	if (productsConnection.pageInfo.pageSize) {
		hasNextPage = productsConnection.pageInfo.pageSize > 0;
	}

	return {
		...productsConnection.pageInfo,
		hasNextPage,
		pageSize: productsConnection.pageInfo.pageSize ?? 0,
	};
};

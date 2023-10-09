import { PaginationDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getPagination = async (skip: number, take?: number) => {
	const { productsConnection } = await executeGraphql(PaginationDocument, {
		skip,
		take,
	});

	let hasNextPage = false;

	if (productsConnection.pageInfo.pageSize) {
		hasNextPage = productsConnection.pageInfo.pageSize > 0;
	}

	console.log(productsConnection.pageInfo.pageSize);

	return {
		...productsConnection.pageInfo,
		hasNextPage,
		pageSize: productsConnection.pageInfo.pageSize ?? 0,
	};
};

import { type TypedDocumentString } from "@/gql/graphql";
import { type GraphqlResponse } from "@/types/api";

export const executeGraphql = async <TResult, TVariables>({
	query,
	variables,
	cache,
	next,
	headers,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	cache?: RequestCache;
	next?: NextFetchRequestConfig | undefined;
	headers?: HeadersInit;
} & (TVariables extends Record<string, never>
	? { variables?: never }
	: { variables: TVariables })): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined!");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		cache,
		next,
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
	});

	const graphqlResponse = (await res.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		console.log(graphqlResponse.errors);
		throw TypeError("Graphql Errors", {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};

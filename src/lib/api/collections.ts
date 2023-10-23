import { executeGraphql } from "./executeGraphql";

import {
	CollectionGetBySlugDocument,
	CollectionsGetListDocument,
} from "@/gql/graphql";

export async function getCollectionsList() {
	const { collections } = await executeGraphql({
		query: CollectionsGetListDocument,
	});

	return collections;
}

export async function getCollectionBySlug(collectionId: string) {
	const { collections } = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			collectionId,
		},
	});

	return collections;
}

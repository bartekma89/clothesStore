import Link from "next/link";

import { getCollectionsList } from "@/lib/api/collections";

export const CollectionsList = async () => {
	const collections = await getCollectionsList();
	return (
		<section className="body-font text-gray-600">
			<div className="container mx-auto px-5 py-24">
				<h1 className="title-font  mb-4 pb-4 text-2xl font-medium text-gray-900 underline underline-offset-2 sm:text-3xl">
					Trending Collections
				</h1>
				<div className="-m-4 flex flex-wrap text-center">
					{collections.map((collection) => {
						return (
							<div key={collection.id} className="w-1/2 p-4 sm:w-1/3">
								<h2 className="title-font text-3xl font-medium text-gray-900 sm:text-3xl">
									<Link href={`/collections/${collection.slug}`}>
										{collection.name}
									</Link>
								</h2>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

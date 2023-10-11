import { notFound } from "next/navigation";
import NextImage from "next/image";
import Link from "next/link";

import { getCollectionBySlug } from "@/lib/api/collections";
import { formatNumber } from "@/lib/formatNumber";

type ParamsType = {
	params: {
		collectionId: string;
	};
};

export default async function CollectionsPage({
	params: { collectionId },
}: ParamsType) {
	const collection = await getCollectionBySlug(collectionId);

	if (!collection) {
		return notFound();
	}

	console.log(collection);

	return (
		<section>
			<div className="relative h-[350px] sm:h-[450px]">
				{collection[0]?.image && (
					<NextImage
						src={collection[0].image.url ?? ""}
						alt={collection[0].name ?? ""}
						width={collection[0]?.image.width ?? 320}
						height={collection[0]?.image.height ?? 320}
						className="absolute inset-0 h-full w-full object-cover"
					/>
				)}
			</div>

			<div className="mt-3">
				<h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
					{collection[0]?.name}
				</h3>

				<p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
					{collection[0]?.description}
				</p>
			</div>

			<div className="mx-auto max-w-screen-xl py-8  sm:py-12 ">
				<header>
					<h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
						Product Collection
					</h2>

					<p className="mt-4 max-w-md text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
						praesentium cumque iure dicta incidunt est ipsam, officia dolor
						fugit natus?
					</p>
				</header>

				<ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{collection[0]?.products.map((product) => {
						return (
							<li key={product.id}>
								<Link
									href={`/product/${product.id}`}
									className="group block overflow-hidden"
								>
									{product.images && (
										<NextImage
											src={product.images[0]?.url ?? ""}
											alt={product.name}
											width={product.images[0]?.width ?? 320}
											height={product.images[0]?.height ?? 320}
											className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
										/>
									)}

									<div className="relative bg-white pt-3">
										<h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
											{product.name}
										</h3>

										<p className="mt-2">
											<span className="sr-only"> Regular Price </span>

											<span className="tracking-wider text-gray-900">
												{formatNumber(product.price)}
											</span>
										</p>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

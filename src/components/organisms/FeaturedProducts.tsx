import NextImage from "next/image";
import Link from "next/link";

import { getProducts } from "@/lib/api/products";
import { formatNumber } from "@/lib/formatNumber";

export async function FeaturedProducts() {
	const products = await getProducts(4);

	return (
		<section className="body-font text-gray-600" data-testid="related-products">
			<div className="container mx-auto px-5 py-24">
				<h1 className="title-font  mb-4 pb-4 text-2xl font-medium text-gray-900 underline underline-offset-2 sm:text-3xl">
					Featured Products
				</h1>
				<div className="-m-4 flex flex-wrap">
					{products.map((product) => {
						return (
							<div className="p-4 md:w-1/2 xl:w-1/4" key={product.id}>
								<Link href={`/product/${product.id}`}>
									<div className="rounded-lg bg-gray-100 p-6">
										<NextImage
											className="mb-6 h-40 w-full rounded object-cover object-center"
											src={
												product.images[0]?.url ??
												"https://dummyimage.com/720x400"
											}
											alt={product.name}
											width={product.images[0]?.width ?? 320}
											height={product.images[0]?.height ?? 320}
										/>
										<h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
											{product.name}
										</h3>

										<p className="text-base leading-relaxed">
											{formatNumber(product.price)}
										</p>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

import NextImage from "next/image";
import { type Metadata } from "next";

import { getProduct, getProducts } from "@/lib/api/products";
import { formatNumber } from "@/lib/formatNumber";

type ParamsProps = {
	params: {
		productId: string;
	};
};

export async function generateStaticParams() {
	const products = await getProducts(10, 0);

	return products.map(({ id }) => ({
		productId: id,
	}));
}

export async function generateMetadata({
	params,
}: ParamsProps): Promise<Metadata> {
	const product = await getProduct(params.productId);

	return {
		title: product.name,
		description: product.description,
	};
}

export default async function ProductPage({ params }: ParamsProps) {
	const product = await getProduct(params.productId);

	return (
		<section className="body-font overflow-hidden text-gray-600">
			<div className="container mx-auto px-5 py-24">
				<div className="mx-auto flex flex-wrap lg:w-4/5">
					<NextImage
						className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
						src={product.images[0]?.url ?? "https://dummyimage.com/400x400"}
						alt={product.name}
						width={400}
						height={400}
					/>
					<div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
						<h2 className="title-font text-sm tracking-widest text-gray-500">
							{product.name}
						</h2>
						<h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
							{product.name}
						</h1>
						<p className="leading-relaxed">{product.description}</p>
						{/* <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
							<div className="flex">
								<span className="mr-3">Color</span>
								<button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
								<button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
								<button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-indigo-500 focus:outline-none"></button>
							</div>
							<div className="ml-6 flex items-center">
								<span className="mr-3">Size</span>
								<div className="relative">
									<select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
										<option>SM</option>
										<option>M</option>
										<option>L</option>
										<option>XL</option>
									</select>
									<span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="h-4 w-4"
											viewBox="0 0 24 24"
										>
											<path d="M6 9l6 6 6-6"></path>
										</svg>
									</span>
								</div>
							</div>
						</div> */}
						<div className="flex">
							<span className="title-font text-2xl font-medium text-gray-900">
								{formatNumber(product.price)}
							</span>
							<button className="ml-auto flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none">
								Button
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

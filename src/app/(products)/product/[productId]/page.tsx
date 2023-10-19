import NextImage from "next/image";
import { type Metadata } from "next";

import { revalidateTag } from "next/cache";
import { getProduct } from "@/lib/api/products";
import { formatNumber } from "@/lib/formatNumber";
import { AddToCartButton } from "@/components/atoms";
import { addProductToCart, getOrCreatCart } from "@/lib/api/cart";

type ParamsProps = {
	params: {
		productId: string;
	};
};

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

	const addProductToCartAction = async () => {
		"use server";

		const cart = await getOrCreatCart();

		if (!cart) {
			throw new Error("Failed to get cart");
		}

		await addProductToCart(cart.id, product.id);

		revalidateTag("cart");
	};

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
						<div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
							<div className="flex">
								<span className="mr-3">Color</span>
								<button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
								<button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
								<button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-indigo-500 focus:outline-none"></button>
							</div>
						</div>
						<div className="flex justify-between">
							<span className="title-font text-2xl font-medium text-gray-900">
								{formatNumber(product.price)}
							</span>
							<form action={addProductToCartAction}>
								<AddToCartButton />
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

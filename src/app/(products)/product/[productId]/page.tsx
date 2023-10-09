import { type Metadata } from "next";

import { getProduct, getProducts } from "@/lib/api/products";

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
		title: product.title,
		description: product.description,
	};
}

export default async function ProductPage({ params }: ParamsProps) {
	const product = await getProduct(params.productId);

	return (
		<div>
			<div className="relative h-[350px] sm:h-[450px]">
				<img
					src={product.image}
					alt=""
					className="absolute inset-0 h-full w-full object-contain"
				/>
			</div>

			<div className="mt-3">
				<h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
					{product.title}
				</h3>

				<p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
					{product.description}
				</p>
			</div>
		</div>
	);
}

import { type ProductListType } from "@/types";

export const getProducts = async () => {
	const res = await fetch(
		"https://naszsklep-api.vercel.app/api/products?take=20",

		{
			cache: "no-cache",
			next: {
				revalidate: 0,
			},
		},
	);

	return res.json() as Promise<ProductListType[]>;
};

export async function getProduct(id: string) {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	return res.json() as Promise<ProductListType>;
}

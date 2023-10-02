import { type ProductListType } from "@/types";

export const getProducts = async (take?: string, offset?: string) => {
	const url = new URL("https://naszsklep-api.vercel.app/api/products");

	if (take) {
		url.searchParams.set("take", String(take));
	}
	if (offset) {
		url.searchParams.set("offset", String(offset));
	}
	const res = await fetch(
		url.href,

		{
			cache: "no-cache",
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

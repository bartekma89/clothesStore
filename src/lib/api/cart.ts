import { cookies } from "next/headers";

import { executeGraphql } from "./executeGraphql";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export async function getCartByCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphql(CartGetByIdDocument, { id: cartId });

		if (cart) {
			return cart.order;
		}
	}
}

export async function createCart() {
	const { createOrder: newCart } = await executeGraphql(CartCreateDocument);

	return newCart;
}

export async function getOrCreatCart() {
	const existingCart = await getCartByCookies();
	if (existingCart) {
		return existingCart;
	}

	const newCart = await createCart();

	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id, {
		httpOnly: true,
		sameSite: "lax",
	});

	return newCart;
}

export async function addProductToCart(cartId: string, productId: string) {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	});

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql(CartAddItemDocument, {
		cartId,
		productId,
		total: product.price,
	});
}

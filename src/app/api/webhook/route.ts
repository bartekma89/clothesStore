import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();

	if (
		typeof body === "object" &&
		body &&
		"productId" in body &&
		body.productId === "string"
	) {
		console.log(`Revalidate /product/${body.productId}`);
		revalidatePath(`/product/${body.productId}`);
		console.log("Revalidate /products");
		revalidatePath("/products");
		return new Response(null, { status: 201 });
	}

	return new Response(null, { status: 400 });
}

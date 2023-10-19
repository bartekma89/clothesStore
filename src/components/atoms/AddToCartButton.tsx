"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function AddToCartButton() {
	const status = useFormStatus();

	return (
		<button
			disabled={status.pending}
			type="submit"
			className="ml-auto flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none disabled:cursor-wait disabled:bg-slate-600"
		>
			Add to Cart
		</button>
	);
}

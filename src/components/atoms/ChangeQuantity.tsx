"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { Minus, Plus } from "lucide-react";
import { changeItemQuantity } from "@/actions/cart";

type ComponentTypes = {
	quantity: number;
	itemId: string;
};

export function ChangeQuantity({ itemId, quantity }: ComponentTypes) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state: number, newOptimistic: number) => newOptimistic,
	);

	return (
		<form className="flex flex-row">
			<button
				disabled={optimisticQuantity <= 0}
				type="submit"
				className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75 disabled:text-gray-400"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
				}}
			>
				<Minus />
			</button>
			<div className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xl text-gray-600">
				{optimisticQuantity}
			</div>
			<button
				type="submit"
				className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
			>
				<Plus />
			</button>
		</form>
	);
}

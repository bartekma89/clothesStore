"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Trash2 as Trash } from "lucide-react";

import { removeItem } from "@/actions/cart";

type ComponentProps = {
	productId: string;
};

export const RemoveButton = ({ productId }: ComponentProps) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<button
			disabled={isPending}
			className=" text-red-600 disabled:cursor-wait disabled:text-gray-600"
			onClick={() => {
				startTransition(async () => {
					await removeItem(productId);
					router.refresh();
				});
			}}
		>
			<span className="sr-only">Remove item</span>

			<Trash size={24} />
		</button>
	);
};

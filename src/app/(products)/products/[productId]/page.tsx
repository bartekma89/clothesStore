import React from "react";

export default function ProductPage({
	params,
}: {
	params: { productId: string };
	searchParams: Record<string, string | string[]>;
}) {
	return (
		<div>
			<p>{params.productId}</p>
		</div>
	);
}

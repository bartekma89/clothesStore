import { type ProductListItemFragment } from "@/gql/graphql";
import { formatNumber } from "@/lib/formatNumber";

interface ProductListItemDescriptionProps {
	product: ProductListItemFragment;
}

export function ProductListItemDescription({
	product,
}: ProductListItemDescriptionProps) {
	return (
		<div className="relative bg-white pt-3">
			<h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
				{product.name}
			</h3>
			<p>
				<span className="sr-only">Category</span>
				{product.categories[0] && (
					<span className="text-xs text-gray-500">
						{product.categories[0]?.name}
					</span>
				)}
			</p>
			<p className="mt-2">
				<span className="tracking-wider text-gray-900">
					{formatNumber(product.price / 100)}
				</span>
			</p>
		</div>
	);
}

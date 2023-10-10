import Link from "next/link";

import { type ProductListItemFragment } from "@/gql/graphql";
import {
	ProductCoverImage,
	ProductListItemDescription,
} from "@/components/atoms";

interface ProductListItemProps {
	product: ProductListItemFragment;
}

export function ProductsListItem({ product }: ProductListItemProps) {
	return (
		<li>
			<article>
				<Link
					href={`/product/${product.id}`}
					className="group block overflow-hidden"
				>
					{product.images[0] && (
						<ProductCoverImage alt={product.name} src={product.images[0].url} />
					)}
					<ProductListItemDescription product={product} />
				</Link>
			</article>
		</li>
	);
}

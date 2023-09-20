import Link from "next/link";

import { type ProductListType } from "@/types";
import { ProductCoverImage, ProductListItemDescription } from "@/components/atoms";

interface ProductListItemProps {
	product: ProductListType;
}

export function ProductsListItem({ product }: ProductListItemProps) {
	return (
		<li>
			<article>
				<Link href={`/products/${product.id}`} className="group block overflow-hidden">
					<ProductCoverImage {...product.coverImage} />
					<ProductListItemDescription product={product} />
				</Link>
			</article>
		</li>
	);
}

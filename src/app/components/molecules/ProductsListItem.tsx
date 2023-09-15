import Link from "next/link";

import { type ProductListType } from "@/app/types";
import {
  ProductCoverImage,
  ProductListItemDescription,
} from "@/app/components/atoms";

interface ProductListItemProps {
  product: ProductListType;
}

export function ProductsListItem({ product }: ProductListItemProps) {
  return (
    <li>
      <article>
        <Link href="#" className="block overflow-hidden group">
          <ProductCoverImage {...product.coverImage} />
          <ProductListItemDescription product={product} />
        </Link>
      </article>
    </li>
  );
}

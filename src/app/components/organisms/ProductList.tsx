import { type ProductListType } from "@/app/types";
import { ProductsListItem } from "@/app/components/molecules";

interface ProductListProps {
  products: ProductListType[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <ul
      className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4"
      data-testid="products-list">
      {products.map((product) => {
        return <ProductsListItem key={product.id} product={product} />;
      })}
    </ul>
  );
}

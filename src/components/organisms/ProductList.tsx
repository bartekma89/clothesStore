import { ProductsListItem } from "@/components/molecules";
import { type ProductListType } from "@/types";

interface ProductListProps {
	products: ProductListType[];
}

export function ProductList({ products }: ProductListProps) {
	return (
		<ul
			className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => {
				return <ProductsListItem key={product.id} product={product} />;
			})}
		</ul>
	);
}

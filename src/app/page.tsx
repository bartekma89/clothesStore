import { ProductList } from "@/app/components/organisms/ProductList";
import { type ProductListType } from "@/app/types";

const products: ProductListType[] = [
	{
		id: "1",
		name: "T-shirt",
		price: 1234,
		category: "Shirt",
		coverImage: {
			alt: "T-shirt green",
			src: "/pic-1.jpg",
		},
	},
	{
		id: "2",
		name: "Robot",
		price: 143,
		category: "Toy",
		coverImage: {
			alt: "robot toy",
			src: "/pic-2.jpg",
		},
	},
	{
		id: "3",
		name: "Nike",
		price: 112,
		category: "Shoes",
		coverImage: {
			alt: "shoes nike",
			src: "/pic-3.jpg",
		},
	},
	{
		id: "4",
		name: "Headphone",
		price: 133,
		category: "Headphone",
		coverImage: {
			alt: "headphone",
			src: "/pic-4.jpg",
		},
	},
];

export default function Home() {
	return <ProductList products={products} />;
}

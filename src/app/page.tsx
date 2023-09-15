import { ProductList } from "./components/organisms/ProductList";
import { Header } from "./components/atoms/Header";
import { type ProductListType } from "./types";

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
  return (
    <main>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <Header />
          <ProductList products={products} />
        </div>
      </section>
    </main>
  );
}

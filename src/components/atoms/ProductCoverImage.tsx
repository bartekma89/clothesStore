import { type ProductListType } from "@/types";

export function ProductCoverImage({ alt, src }: ProductListType["coverImage"]) {
	return (
		<img
			src={src}
			alt={alt}
			className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
		/>
	);
}

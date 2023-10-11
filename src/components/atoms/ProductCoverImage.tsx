import NextImage from "next/image";

interface ComponentProps {
	alt: string;
	src: string;
}

export function ProductCoverImage({ alt, src }: ComponentProps) {
	return (
		<NextImage
			width={320}
			height={320}
			src={src}
			alt={alt}
			className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
		/>
	);
}

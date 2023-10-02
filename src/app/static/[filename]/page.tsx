import { type ComponentType } from "react";
import { notFound } from "next/navigation";

export default async function StaticPage({
	params,
}: {
	params: { filename: string };
}) {
	const Content = await import(`./${params.filename}.mdx`).then(
		(m: { default: ComponentType }) => m.default,
		() => notFound(),
	);

	return (
		<article className="prose">
			<Content />;
		</article>
	);
}

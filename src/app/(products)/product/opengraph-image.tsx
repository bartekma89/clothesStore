import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "next13 masters sklep";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-8xl"
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#fff",
					fontSize: 32,
					fontWeight: 600,
				}}
			>
				<svg
					width="75"
					viewBox="0 0 75 65"
					fill="#000"
					style={{ margin: "0 75px" }}
				>
					<path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
				</svg>
				<div tw="text-red-200" style={{ marginTop: 40 }}>
					Hello, World
				</div>
			</div>
		),
	);
}

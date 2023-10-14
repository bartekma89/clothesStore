// const withMDX = require("@next/mdx");

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: false,
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				pathname: "/**",
				port: "",
			},
		],
	},
};

// module.exports = withMDX(nextConfig);
module.exports = nextConfig;

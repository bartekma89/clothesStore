import { NextResponse } from "next/server";

export async function GET(_request: Request): Promise<Response> {
	// return new Response(JSON.stringify("hello world"), {
	// 	headers: {
	// 		"Content-type": "application/json",
	// 	},
	// 	status: 200,
	// });

	return NextResponse.json("hello world!");
}

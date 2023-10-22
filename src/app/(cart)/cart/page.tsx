import NextImage from "next/image";
import { redirect } from "next/navigation";

import { getCartByCookies } from "@/lib/api/cart";
import { formatNumber } from "@/lib/formatNumber";
import { ChangeQuantity, RemoveButton } from "@/components/atoms";

export default async function CartPage() {
	const cart = await getCartByCookies();

	if (!cart) {
		redirect("/");
	}

	const total = cart.orderItems.reduce((acc, cur) => {
		if (!cur) {
			return acc;
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return acc + cur.total;
	}, 0);

	console.log(cart.id);

	return (
		<section>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
				<div className="mx-auto max-w-3xl">
					<header className="text-center">
						<h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
							Your Cart
						</h1>
					</header>

					<div className="mt-8">
						<ul className="space-y-4">
							{cart?.orderItems.map((item) => {
								if (!item.product) {
									return null;
								}
								return (
									<li
										className="flex items-center gap-4"
										key={item.product?.id}
									>
										{item.product?.images[0] && (
											<NextImage
												src={item.product?.images[0]?.url}
												alt={item.product?.name}
												width={item.product?.images[0]?.width ?? 320}
												height={item.product?.images[0]?.height ?? 320}
												className="h-16 w-16 rounded object-cover"
											/>
										)}

										<div>
											<h3 className="text-sm text-gray-900">
												{item.product?.name}
											</h3>

											<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
												<div>
													<dt className="inline">Price: </dt>
													<dd className="inline">
														{formatNumber((item.product?.price ?? 0) / 100)}
													</dd>
												</div>
											</dl>
										</div>

										<div className="flex flex-1 items-center justify-end gap-2">
											<div className="sr-only"> Quantity </div>

											<ChangeQuantity
												quantity={item.quantity}
												itemId={item.product.id}
											/>

											<RemoveButton productId={item.id} />
										</div>
									</li>
								);
							})}
						</ul>

						<div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
							<div className="w-screen max-w-lg space-y-4">
								<dl className="space-y-0.5 text-sm text-gray-700">
									<div className="flex justify-between !text-base font-medium">
										<dt>Total</dt>
										<dd>{formatNumber(total / 100)}</dd>
									</div>
								</dl>

								<div className="flex justify-end">
									<a
										href="#"
										className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
									>
										Checkout
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

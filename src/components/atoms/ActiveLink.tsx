"use client";

import { type ReactNode } from "react";
import clsx from "clsx";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ComponentProps extends LinkProps<string> {
	children: ReactNode;
}

export function ActiveLink({ href, children }: ComponentProps) {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			className={clsx("text-gray-500 transition  hover:text-gray-500/75", {
				underline: isActive,
				"underline-offset-4": isActive,
			})}
			href={href}
		>
			{children}
		</Link>
	);
}

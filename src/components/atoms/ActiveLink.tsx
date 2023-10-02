"use client";

import { type ReactNode } from "react";
import { type Route } from "next";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ComponentProps<T extends string> {
	children: ReactNode;
	href: Route<T>;
	className: string;
	activeClassName: string;
	exact?: boolean;
}

export function ActiveLink<T extends string>({
	href,
	children,
	className,
	activeClassName,
	exact = true,
}: ComponentProps<T>) {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href && pathname.startsWith(href)
		: false;

	return (
		<Link className={clsx(className, isActive && activeClassName)} href={href}>
			{children}
		</Link>
	);
}

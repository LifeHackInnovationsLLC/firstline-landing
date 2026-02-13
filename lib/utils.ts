import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Handles hash links in navigation by either keeping them as-is on the target page,
 * or prefixing them with the correct base path when on other pages
 * @param href The href to process (e.g. "#faq", "#pricing")
 * @param currentPath The current page path (e.g. "/", "/about", "/dashboard")
 * @param targetPath The path where the hash link should point to (e.g. "/" for homepage hash links)
 * @returns Processed href that correctly handles hash navigation
 */
export function getHashAwareHref(
	href: string,
	currentPath: string,
	targetPath: string,
): string {
	if (!href.startsWith("#")) {
		return href;
	}
	return currentPath === targetPath ? href : `${targetPath}${href}`;
}

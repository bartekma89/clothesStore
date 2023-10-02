export function getPaginationSettings(page = "1") {
	const perPage = "4";
	const offset = String(Number(page) - 1);
	const pageNumber = page ?? "1";
	const start = (Number(pageNumber) - 1) * Number(perPage);
	const hasPrevPage = start > 0;

	return { offset, hasPrevPage, perPage, pageNumber };
}

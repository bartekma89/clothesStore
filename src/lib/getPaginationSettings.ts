export function getPaginationSettings(page = "1") {
	const pageNumber = Number(page) ?? 1;
	const perPage = 4;
	const offset = pageNumber - 1;
	const start = pageNumber - 1 * perPage;
	const hasPrevPage = start > 0;

	return { offset, hasPrevPage, perPage, pageNumber };
}

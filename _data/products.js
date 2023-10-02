const { faker } = require("@faker-js/faker");

function genarateProducts() {
	const products = [];

	for (let id = 0; id < 50; id++) {
		const productId = id;
		const name = faker.commerce.productName();
		const price = faker.commerce.price();
		const category = faker.commerce.department();
		const description = faker.commerce.productDescription();
		const coverImage = {
			src: faker.image.urlPicsumPhotos({
				width: 480,
				height: 480,
			}),
			alt: faker.commerce.productAdjective(),
		};

		products.push({
			id: productId,
			name,
			price,
			category,
			description,
			coverImage,
		});
	}

	return {
		products,
	};
}

module.exports = genarateProducts;

/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartCreate {\n  createOrder(data: {email: \"bart@bart.test\", total: 0, stripeCheckoutId: \"\"}) {\n    ...CartId\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...CartId\n    orderItems {\n      total\n      quantity\n      product {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "fragment CartId on Order {\n  id\n}": types.CartIdFragmentDoc,
    "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "query CollectionGetBySlug($collectionId: String!) {\n  collections(where: {slug: $collectionId}) {\n    id\n    name\n    description\n    products {\n      id\n      name\n      price\n      slug\n      images {\n        width\n        height\n        url\n      }\n    }\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n  }\n}": types.CollectionsGetListDocument,
    "query Pagination($skip: Int!, $take: Int) {\n  productsConnection(skip: $skip, first: $take) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n      pageSize\n    }\n  }\n}": types.PaginationDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    id\n    name\n  }\n  images(first: 1) {\n    url\n    width\n    height\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategories($slug: String!) {\n  categories(where: {slug: $slug}) {\n    name\n    products {\n      id\n      name\n      description\n      categories(first: 1) {\n        id\n        name\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}": types.ProductsGetByCategoriesDocument,
    "query ProductsGetByName($query: String!) {\n  products(where: {name_contains: $query}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      id\n      name\n    }\n    images(first: 1) {\n      url\n      width\n      height\n    }\n    price\n  }\n}": types.ProductsGetByNameDocument,
    "query ProductsGetList($skip: Int, $take: Int) {\n  products(skip: $skip, first: $take) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {email: \"bart@bart.test\", total: 0, stripeCheckoutId: \"\"}) {\n    ...CartId\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...CartId\n    orderItems {\n      total\n      quantity\n      product {\n        ...ProductListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartId on Order {\n  id\n}"): typeof import('./graphql').CartIdFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($collectionId: String!) {\n  collections(where: {slug: $collectionId}) {\n    id\n    name\n    description\n    products {\n      id\n      name\n      price\n      slug\n      images {\n        width\n        height\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Pagination($skip: Int!, $take: Int) {\n  productsConnection(skip: $skip, first: $take) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n      pageSize\n    }\n  }\n}"): typeof import('./graphql').PaginationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    id\n    name\n  }\n  images(first: 1) {\n    url\n    width\n    height\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategories($slug: String!) {\n  categories(where: {slug: $slug}) {\n    name\n    products {\n      id\n      name\n      description\n      categories(first: 1) {\n        id\n        name\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByName($query: String!) {\n  products(where: {name_contains: $query}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      id\n      name\n    }\n    images(first: 1) {\n      url\n      width\n      height\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductsGetByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($skip: Int, $take: Int) {\n  products(skip: $skip, first: $take) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

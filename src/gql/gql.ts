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
    "query Pagination($skip: Int!, $take: Int) {\n  productsConnection(skip: $skip, first: $take) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n      pageSize\n    }\n  }\n}": types.PaginationDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetByCategories($slug: String!) {\n  categories(where: {slug: $slug}) {\n    name\n    products {\n      id\n      name\n      description\n      categories(first: 1) {\n        id\n        name\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}": types.ProductsGetByCategoriesDocument,
    "query ProductsGetList($skip: Int, $take: Int) {\n  products(skip: $skip, first: $take) {\n    id\n    name\n    description\n    categories(first: 1) {\n      id\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Pagination($skip: Int!, $take: Int) {\n  productsConnection(skip: $skip, first: $take) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n      pageSize\n    }\n  }\n}"): typeof import('./graphql').PaginationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategories($slug: String!) {\n  categories(where: {slug: $slug}) {\n    name\n    products {\n      id\n      name\n      description\n      categories(first: 1) {\n        id\n        name\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($skip: Int, $take: Int) {\n  products(skip: $skip, first: $take) {\n    id\n    name\n    description\n    categories(first: 1) {\n      id\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
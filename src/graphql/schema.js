import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    hello: String!
    productGroups(filter: ProductGroupFilterInput): [ProductGroup!]!
    productGroup(productGroupId: ID!): ProductGroup
    productOptionGroups: [ProductOptionGroup!]!
    productOptionGroup(productOptionGroupId: ID!): ProductOptionGroup
    productOptions: [ProductOption!]!
    productOption(productOptionId: ID!): ProductOption
    products(
      pagination: PaginationInput!
      filter: ProductsFilterInput
    ): ProductConnection!
    product(productId: ID!): Product
  }

  type ProductGroup {
    id: ID!
    productGroupName: String!
    companyName: String!
    products(
      pagination: PaginationInput!
      filter: ProductsFilterInput
    ): ProductConnection!
  }

  type ProductOptionGroup {
    id: ID!
    productOptionGroupName: String!
    productGroup: ProductGroup!
  }

  type ProductOption {
    id: ID!
    productOption: String!
    productOptionGroup: ProductOptionGroup!
  }

  type Product {
    id: ID!
    productName: String!
    productGroup: ProductGroup!
    productOptions: [ProductOption!]!
  }

  type ProductEdge {
    node: Product!
  }
  type ProductConnection {
    totalCount: Int!
    edges: [ProductEdge!]!
  }
  input ProductGroupFilterInput {
    productGroupName: String
    companyName: String
  }
  input ProductsFilterInput {
    productName: String
  }

  input PaginationInput {
    limit: Int = 5
    page: Int = 1
  }
`;

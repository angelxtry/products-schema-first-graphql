import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    hello: String!
    productGroups(filter: ProductGroupFilterInput): [ProductGroup!]!
    productGroup(id: ID!): ProductGroup
    productOptionGroups: [ProductOptionGroup!]!
    productOptionGroup(id: ID!): ProductOptionGroup
    productOptions: [ProductOption!]!
    productOption(id: ID!): ProductOption
    products(pageInput: PageInput!, filter: ProductsFilterInput): ProductConnection!
    product(id: ID!): Product
  }
  type ProductGroup {
    id: ID!
    productGroupName: String!
    companyName: String!
    products(pageInput: PageInput!): ProductConnection!
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
  input PageInput {
    first: Int = 5
    last: Int
    page: Int!
  }
`;

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
    products: [Product!]!
    product(id: ID!): Product
  }
  type ProductGroup {
    id: ID!
    productGroupName: String!
    companyName: String!
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
  input ProductGroupFilterInput {
    productGroupName: String
    companyName: String
  }
`;

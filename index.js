import { ApolloServer, gql } from 'apollo-server';

const productGroups = [
  {
    id: 'aaaa',
    productGroupName: '헤라 블랙쿠션',
  },
  {
    id: 'bbbb',
    productGroupName: '헤라 세럼',
  },
];

const productOptionGroups = [
  {
    id: 'pog1',
    productGroupId: 'bbbb',
    productOptionGroupName: '종류',
  },
  {
    id: 'pog2',
    productGroupId: 'bbbb',
    productOptionGroupName: '용량',
  },
];

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String!
      productGroups: [ProductGroup!]!
      productGroup(id: ID!): ProductGroup
      productOptionGroups: [ProductOptionGroup!]!
    }
    type ProductGroup {
      id: ID!
      productGroupName: String!
    }
    type ProductOptionGroup {
      id: ID!
      productOptionGroupName: String!
      productGroup: ProductGroup!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world!',
      productGroups: () => productGroups,
      productGroup: (parent, { id: productGroupId }, context) => {
        return productGroups.find((productGroup) => productGroup.id === productGroupId);
      },
      productOptionGroups: () => productOptionGroups,
    },
    ProductOptionGroup: {
      productGroup: (parent, args, context) => {
        const { productGroupId } = parent;
        return productGroups.find((productGroup) => productGroup.id === productGroupId);
      },
    },
  },
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log('Server start: ', url);
});

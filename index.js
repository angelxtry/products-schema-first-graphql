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

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String!
      productGroups: [ProductGroup!]!
    }
    type ProductGroup {
      id: ID!
      productGroupName: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world!',
      productGroups: () => productGroups,
    },
  },
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log('Server start: ', url);
});

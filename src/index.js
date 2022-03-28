import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/index.js';
import {
  productGroups,
  productOptionGroups,
  productOptions,
  products,
  productOptionDetailRel,
} from './db/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    productGroups,
    productOptionGroups,
    productOptions,
    products,
    productOptionDetailRel,
  },
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log('Server start: ', url);
});

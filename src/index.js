import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log('Server start: ', url);
});

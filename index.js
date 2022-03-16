import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world!',
    },
  },
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log('Server start: ', url);
});

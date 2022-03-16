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
  {
    id: 'pog3',
    productGroupId: 'aaaa',
    productOptionGroupName: '색상',
  },
  {
    id: 'pog4',
    productGroupId: 'aaaa',
    productOptionGroupName: '용량',
  },
];

const productOptions = [
  {
    id: 'po1',
    productOptionGroupId: 'pog3',
    productOption: '21 (라이트 베이지)',
  },
  {
    id: 'po2',
    productOptionGroupId: 'pog3',
    productOption: '23 (미디움 베이지)',
  },
  {
    id: 'po3',
    productOptionGroupId: 'pog4',
    productOption: '12g',
  },
  {
    id: 'po4',
    productOptionGroupId: 'pog4',
    productOption: '15g',
  },
  {
    id: 'po5',
    productOptionGroupId: 'pog1',
    productOption: '24K 골드 리페어',
  },
  {
    id: 'po6',
    productOptionGroupId: 'pog1',
    productOption: '비타민 C 브라이트',
  },
  {
    id: 'po7',
    productOptionGroupId: 'pog1',
    productOption: '콜라겐 리프팅',
  },
  {
    id: 'po8',
    productOptionGroupId: 'pog2',
    productOption: '35ml',
  },
  {
    id: 'po9',
    productOptionGroupId: 'pog2',
    productOption: '55ml',
  },
];

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String!
      productGroups: [ProductGroup!]!
      productGroup(id: ID!): ProductGroup
      productOptionGroups: [ProductOptionGroup!]!
      productOptionGroup(id: ID!): ProductOptionGroup
      productOptions: [ProductOption!]!
      productOption(id: ID!): ProductOption
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
    type ProductOption {
      id: ID!
      productOption: String!
      productOptionGroup: ProductOptionGroup!
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
      productOptionGroup: (parent, { id: productOptionGroupId }, context) => {
        return productOptionGroups.find(
          (productOptionGroup) => productOptionGroup.id === productOptionGroupId,
        );
      },
      productOptions: () => productOptions,
      productOption: (parent, { id: productOptionId }, context) => {
        return productOptions.find(
          (productOption) => productOption.id === productOptionId,
        );
      },
    },
    ProductOptionGroup: {
      productGroup: (parent, args, context) => {
        const { productGroupId } = parent;
        return productGroups.find((productGroup) => productGroup.id === productGroupId);
      },
    },
    ProductOption: {
      productOptionGroup: (parent, args, context) => {
        const { productOptionGroupId } = parent;
        return productOptionGroups.find(
          (productOptionGroup) => productOptionGroup.id === productOptionGroupId,
        );
      },
    },
  },
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log('Server start: ', url);
});

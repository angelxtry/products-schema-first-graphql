import { ApolloServer, gql } from 'apollo-server';

const productGroups = [
  {
    id: 'pg1',
    productGroupName: '헤라 블랙쿠션',
  },
  {
    id: 'pg2',
    productGroupName: '헤라 세럼',
  },
];

const productOptionGroups = [
  {
    id: 'pog1',
    productGroupId: 'pg2',
    productOptionGroupName: '종류',
  },
  {
    id: 'pog2',
    productGroupId: 'pg2',
    productOptionGroupName: '용량',
  },
  {
    id: 'pog3',
    productGroupId: 'pg1',
    productOptionGroupName: '색상',
  },
  {
    id: 'pog4',
    productGroupId: 'pg1',
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

const products = [
  {
    id: 'p1',
    productName: '헤라 블랙쿠션 - 21 (라이트 베이지) / 12g',
    productGroupId: 'pg1',
  },
  {
    id: 'p2',
    productName: '헤라 블랙쿠션 - 23 (미디움 베이지) / 12g',
    productGroupId: 'pg1',
  },
  {
    id: 'p3',
    productName: '헤라 블랙쿠션 - 21 (라이트 베이지) / 15g',
    productGroupId: 'pg1',
  },
  {
    id: 'p4',
    productName: '헤라 블랙쿠션 - 23 (미디움 베이지) / 15g',
    productGroupId: 'pg1',
  },
  {
    id: 'p5',
    productName: '헤라 세럼 - 24K 골드 리페어 / 35ml',
    productGroupId: 'pg2',
  },
  {
    id: 'p6',
    productName: '헤라 세럼 - 비타민 C 브라이트 / 35ml',
    productGroupId: 'pg2',
  },
  {
    id: 'p7',
    productName: '헤라 세럼 - 콜라겐 리프팅 / 35ml',
    productGroupId: 'pg2',
  },
  {
    id: 'p8',
    productName: '헤라 세럼 - 24K 골드 리페어 / 55ml',
    productGroupId: 'pg2',
  },
  {
    id: 'p9',
    productName: '헤라 세럼 - 비타민 C 브라이트 / 55ml',
    productGroupId: 'pg2',
  },
  {
    id: 'p10',
    productName: '헤라 세럼 - 콜라겐 리프팅 / 55ml',
    productGroupId: 'pg2',
  },
];

const productOptionDetailRel = [
  {
    id: 'podr1',
    productId: 'p1',
    productOptionId: 'po1',
  },
  {
    id: 'podr2',
    productId: 'p1',
    productOptionId: 'po3',
  },
  {
    id: 'podr3',
    productId: 'p2',
    productOptionId: 'po2',
  },
  {
    id: 'podr4',
    productId: 'p2',
    productOptionId: 'po3',
  },
  {
    id: 'podr5',
    productId: 'p3',
    productOptionId: 'po1',
  },
  {
    id: 'podr6',
    productId: 'p3',
    productOptionId: 'po4',
  },
  {
    id: 'podr7',
    productId: 'p4',
    productOptionId: 'po2',
  },
  {
    id: 'podr8',
    productId: 'p4',
    productOptionId: 'po4',
  },
  {
    id: 'podr9',
    productId: 'p5',
    productOptionId: 'po5',
  },
  {
    id: 'podr10',
    productId: 'p5',
    productOptionId: 'po8',
  },
  {
    id: 'podr11',
    productId: 'p6',
    productOptionId: 'po6',
  },
  {
    id: 'podr12',
    productId: 'p6',
    productOptionId: 'po8',
  },
  {
    id: 'podr13',
    productId: 'p7',
    productOptionId: 'po7',
  },
  {
    id: 'podr14',
    productId: 'p7',
    productOptionId: 'po8',
  },
  {
    id: 'podr15',
    productId: 'p8',
    productOptionId: 'po5',
  },
  {
    id: 'podr16',
    productId: 'p8',
    productOptionId: 'po9',
  },
  {
    id: 'podr17',
    productId: 'p9',
    productOptionId: 'po6',
  },
  {
    id: 'podr18',
    productId: 'p9',
    productOptionId: 'po9',
  },
  {
    id: 'podr19',
    productId: 'p10',
    productOptionId: 'po7',
  },
  {
    id: 'podr20',
    productId: 'p10',
    productOptionId: 'po9',
  },
];

const server = new ApolloServer({
  typeDefs: gql`
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
      productGroupName: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world!',
      productGroups: (parent, args, context) => {
        const { filter } = args;
        console.log(filter);
        let result = productGroups;
        if (filter.productGroupName) {
          result = result.filter((pg) =>
            pg.productGroupName.includes(filter.productGroupName),
          );
        }
        return result;
      },
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
      products: () => products,
      product: (parent, { id: productId }, context) => {
        return products.find((product) => product.id === productId);
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
    Product: {
      productGroup: (parent, args, context) => {
        const { productGroupId } = parent;
        return productGroups.find((productGroup) => productGroup.id === productGroupId);
      },
      productOptions: (parent, args, context) => {
        const { id: productId } = parent;
        const relations = productOptionDetailRel.filter(
          (rel) => rel.productId === productId,
        );
        const options = [];
        for (const rel of relations) {
          const option = productOptions.find((po) => po.id === rel.productOptionId);
          if (option) options.push(option);
        }
        return options;
      },
    },
  },
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log('Server start: ', url);
});

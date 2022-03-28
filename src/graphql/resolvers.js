import { paginatedFn } from '../utils/paginatedFn.js';

export const resolvers = {
  Query: {
    hello: () => 'world!',

    productGroups: (_, { filter }, { productGroups }) => {
      let result = productGroups;
      if (filter?.productGroupName) {
        result = result.filter((pg) =>
          pg.productGroupName.includes(filter.productGroupName),
        );
      }
      if (filter?.companyName) {
        result = result.filter((pg) => pg.companyName.includes(filter.companyName));
      }
      return result;
    },

    productGroup: (_, { productGroupId }, { productGroups }) => {
      return productGroups.find((productGroup) => productGroup.id === productGroupId);
    },

    productOptionGroups: (_, __, { productOptionGroups }) => productOptionGroups,

    productOptionGroup: (parent, { productOptionGroupId }, { productOptionGroups }) => {
      return productOptionGroups.find(
        (productOptionGroup) => productOptionGroup.id === productOptionGroupId,
      );
    },

    productOptions: (_, __, { productOptions }) => productOptions,

    productOption: (_, { productOptionId }, { productOptions }) => {
      return productOptions.find((productOption) => productOption.id === productOptionId);
    },

    products: (_, { pagination, filter }, { products }) => {
      let data = products;
      const productsResultFn = paginatedFn(pagination);
      if (filter) {
        data = data.filter((product) => product.productName.includes(filter.productName));
      }
      return productsResultFn(data);
    },

    product: (_, { productId }, { products }) => {
      return products.find((product) => product.id === productId);
    },
  },

  ProductGroup: {
    products: ({ id: productGroupId }, { pagination, filter }, { products }) => {
      let data = products.filter((product) => product.productGroupId === productGroupId);
      const productResultFn = paginatedFn(pagination);
      if (filter) {
        data = data.filter((product) => product.productName.includes(filter.productName));
      }
      return productResultFn(data);
    },
  },

  ProductOptionGroup: {
    productGroup: ({ productGroupId }, __, { productGroups }) => {
      return productGroups.find((productGroup) => productGroup.id === productGroupId);
    },
  },

  ProductOption: {
    productOptionGroup: ({ productOptionGroupId }, __, { productOptionGroups }) => {
      return productOptionGroups.find(
        (productOptionGroup) => productOptionGroup.id === productOptionGroupId,
      );
    },
  },

  Product: {
    productGroup: ({ productGroupId }, __, { productGroups }) => {
      return productGroups.find((productGroup) => productGroup.id === productGroupId);
    },

    productOptions: (
      { id: productId },
      __,
      { productOptionDetailRel, productOptions },
    ) => {
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
};

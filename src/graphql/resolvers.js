import {
  productGroups,
  productOptionDetailRel,
  productOptionGroups,
  productOptions,
  products,
} from '../db/index.js';

export const resolvers = {
  Query: {
    hello: () => 'world!',
    productGroups: (parent, args, context) => {
      const { filter } = args;
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
      return productOptions.find((productOption) => productOption.id === productOptionId);
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
};

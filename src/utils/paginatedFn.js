export const paginatedFn = ({ limit, page }) => {
  return (data) => {
    const index = (page - 1) * limit;
    const paginatedData = data.slice(index, index + limit);
    const edges = paginatedData.map((product) => {
      return { node: product };
    });
    return { edges, totalCount: data.length };
  };
};

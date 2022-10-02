export const getIntersect = (shelf, ids, books) => {
  return intersect(
    ids,
    books.filter((book) => book.shelf === shelf).map((book) => book.id)
  );
};

const intersect = (first, second) => {
  return first.filter((x) => second.includes(x));
};

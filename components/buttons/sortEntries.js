const sortAlphabetically = (array) => {
  array.sort((a, b) => {
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
      return -1;
    }
    if (a.title.toUpperCase() > b.title.toUpperCase()) {
      return 1;
    }
    return 0;
  });
  console.warn(array);
  return array;
};

const sortReverseAlphabetically = (array) => {
  array.sort((a, b) => {
    if (a.title.toUpperCase() > b.title.toUpperCase()) {
      return -1;
    }
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
      return 1;
    }
    return 0;
  });
  console.warn(array);
  return array;
};

const sortNewest = (array) => {
  array.sort((a, b) => {
    if (a.timestamp < b.timestamp) {
      return -1;
    }
    if (a.timestamp > b.timestamp) {
      return 1;
    }
    return 0;
  });
  console.warn(array);
  return array;
};

const sortOldest = (array) => {
  array.sort((a, b) => {
    if (a.timestamp > b.timestamp) {
      return -1;
    }
    if (a.timestamp < b.timestamp) {
      return 1;
    }
    return 0;
  });
  console.warn(array);
  return array;
};

export {
  sortAlphabetically,
  sortReverseAlphabetically,
  sortNewest,
  sortOldest
};

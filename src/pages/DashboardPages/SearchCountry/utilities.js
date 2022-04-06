const isEqual = (label, searchString) => {

  return label
    .toLowerCase()
    .includes(searchString.toLowerCase());

};

const filterByCountryName = (data, filterKey) => {

  let collection = data.filter((item) => isEqual(item.name.official, filterKey));

  return collection;

};

export const handleFilterChange = (data, filterKey) => {

  if (filterKey.trim() === '') {
    return data;
  }

  return filterByCountryName(data, filterKey);

};

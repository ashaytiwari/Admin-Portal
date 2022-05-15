export function sortCountryList(sort, countries) {

  if (sort === 0) {

    return ascendingSortCountryList(countries);

  }

  if (sort === 1) {

    return descendingSortCountryList(countries);

  }

  return countries;

}

export function ascendingSortCountryList(countries) {

  const sortedCountries = countries.sort((a, b) => {

    return a.downloads - b.downloads;

  });

  return sortedCountries;

}

export function descendingSortCountryList(countries) {

  const sortedCountries = countries.sort((a, b) => {

    return b.downloads - a.downloads;

  });

  return sortedCountries;

}
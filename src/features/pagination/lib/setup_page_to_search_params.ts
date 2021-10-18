export const setupPageToSearchParams = (
  searchParams: URLSearchParams,
  page: string,
) => {
  if (searchParams.has('page')) {
    searchParams.set('page', page);
  } else {
    searchParams.append('page', page);
  }

  return searchParams;
};

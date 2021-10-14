interface Arguments {
  url: string;
  queryString: string;
}

export const getUrlWithQs = ({ url, queryString }: Arguments) =>
  `${url}?${queryString}`;

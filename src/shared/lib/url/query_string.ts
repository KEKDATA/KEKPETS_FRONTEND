interface Values {
  [key: string]: string;
}

export const getQueryString = (values: Values) =>
  new URLSearchParams(values).toString();

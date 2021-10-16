import React from 'react';

interface Props {
  url: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
}

export const ImageView = ({ url, loading, alt }: Props) => {
  return <img src={url} loading={loading} alt={alt} />;
};

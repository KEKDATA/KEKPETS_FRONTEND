const prefix = 'https://www.google.ru/maps/place/';

export const getGoogleMapLink = (placeName: string) => `${prefix}${placeName}`;

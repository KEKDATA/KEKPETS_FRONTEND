export interface Result {
  id: string;
  photoUrl: string;
  mapParams: {
    lat: string;
    lon: string;
  };
}

export type Results = Array<Result> | null;

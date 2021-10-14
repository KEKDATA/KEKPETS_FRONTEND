export interface Result {
  id: string;
  photoUrl: string;
  photoDate: string;
}

export type Results = Array<Result> | null;

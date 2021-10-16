export interface Result {
  id: string;
  image: string;
  /**
   * string -> left,top,width,height
   */
  bbox: string;
}

export type Results = Array<Result> | null;

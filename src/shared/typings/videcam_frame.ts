import { Results } from 'shared/typings/results';

export interface VidecamFrameResponse {
  count: number;
  next: string;
  previous: string;
  results: Results;
}

export interface ITypes {
  count: number;
  next: null;
  previous: null;
  results: IResults[]
}

export interface IResults {
  name: string;
  url : string;
}
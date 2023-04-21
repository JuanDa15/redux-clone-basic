export interface Action <K = any>{
  type: string;
  payload?: K;
}


export interface Reducer<T> {
  ( state: T, action: Action): T
}
export interface RXV {
  use<T = any>(name: string, inputs?: any[], outputs?: any[]): Promise<T>;
}
export interface Module {
  readonly meta: {
    name: string;
    version: string;
    url?: string;
  };
  ref: number;
  [key: string]: any;
}

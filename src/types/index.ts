export interface IResponse {
  res: number;
  data: any;
  msg?: string;
}

export interface IRequestOption {
  timeout?: number;
  showErrMsg?: boolean;
  errMsg?: string;
}

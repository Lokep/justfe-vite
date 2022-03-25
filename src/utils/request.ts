import axios, { AxiosRequestConfig } from 'axios';
import { IResponse, IRequestOption } from '@/types';
import { message } from 'ant-design-vue';

const TIMEOUT = 30000;
const BASE_URL = (window as any).SERVER || 'http://192.168.3.97:9528';
const DEFAULT_ERR_MSG = '请求失败，请稍后再试';

export const instance = axios.create({
  baseURL: BASE_URL,
});

const responseGenerator = (msg: string): IResponse => ({
  res: -1,
  msg,
  data: {},
});

export const request = (config: AxiosRequestConfig, option: IRequestOption): Promise<IResponse> => {
  const { method = 'GET', url = '', data } = config;
  const { timeout = TIMEOUT, showErrMsg = true, errMsg = '' } = option;

  const token = sessionStorage.getItem('token');
  const header = token && { Authorization: `Bearer${token}` };

  if (!url) {
    const errMsg = '[axios]: url is required';
    console.error(errMsg);
    return Promise.resolve(responseGenerator(errMsg));
  }

  const kv = method.toUpperCase() === 'GET' ? { params: data } : { data };

  return new Promise((resolve) => {
    instance
      .request({
        ...kv,
        url,
        headers: header || {},
        timeout,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((res) => {
        const { msg = '' } = res.response || {};

        showErrMsg && message.error(errMsg || msg || DEFAULT_ERR_MSG);

        resolve(res.data);
      });
  });
};

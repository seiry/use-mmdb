import { expose } from 'comlink';
import { fetchFileAsBuffer } from './utils';
import * as mmdb from 'mmdb.js';
import { _mmdbUrl } from './hook';

let cache: mmdb.Reader<mmdb.CityResponse> | null = null;

const getReader = async (url: string) => {
  if (cache) return cache;
  const res = await fetchFileAsBuffer(url);
  if (!res) return;
  const reader = new mmdb.Reader<mmdb.CityResponse>(res);
  cache = reader;
  return reader;
};

const obj = {
  getIPInfo: async (ip: string, url: string = _mmdbUrl) => {
    const reader = await getReader(url);
    return reader?.get(ip);
  },
};

expose(obj);

export type Obj = typeof obj;
export type Reader = typeof cache;

import { useEffect, useState } from 'react';
import * as mmdb from 'mmdb.js';
import { fetchFileAsBuffer } from './utils';

const _mmdbUrl =
  'https://raw.githubusercontent.com/Max-Sum/17mon-mmdb/release/Country.mmdb';

export const useIp = (mmdbUrl?: string) => {
  const [reader, setReader] = useState<mmdb.Reader<mmdb.CityResponse>>();
  useEffect(() => {
    fetchFileAsBuffer(mmdbUrl ?? _mmdbUrl).then((res) => {
      if (!res) return;
      const reader = new mmdb.Reader<mmdb.CityResponse>(res);
      setReader(reader);
    });
  }, [mmdbUrl]);

  return reader;
};

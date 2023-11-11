import { FC, useEffect, useState } from 'react';
import { useIp } from './hook';
import { prettyPrintJson } from 'pretty-print-json';
import './box.css';
import { wrap } from 'comlink';
import { Obj } from './webWorker';

interface IpBoxProps {
  ip: string;
}

export const IpBox: FC<IpBoxProps> = (props) => {
  const { ip } = props;
  const reader = useIp();
  const data = reader?.get(ip);
  const html = prettyPrintJson.toHtml(data);

  return (
    <div className="box ">
      ip address: <pre>{ip}</pre>
      <pre dangerouslySetInnerHTML={{ __html: html }}></pre>
    </div>
  );
};

const worker = new Worker(new URL('./webWorker.ts', import.meta.url));
const obj = wrap<Obj>(worker);

export const IpBoxWebworker: FC<IpBoxProps> = (props) => {
  const { ip } = props;
  const [html, setHtml] = useState('');
  useEffect(() => {
    obj.getIPInfo(ip).then((res) => {
      setHtml(prettyPrintJson.toHtml(res));
    });
  }, [ip]);

  return (
    <div className="box ">
      ip address: <pre>{ip}</pre>
      <pre dangerouslySetInnerHTML={{ __html: html }}></pre>
    </div>
  );
};

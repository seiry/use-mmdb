import { wrap } from 'comlink';
import { Obj } from './webWorker';
import { IpBoxProps } from './ipBox';
import { prettyPrintJson } from 'pretty-print-json';
import { FC, useState, useEffect } from 'react';

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

import { FC } from 'react';
import { useIp } from './hook';
import { prettyPrintJson } from 'pretty-print-json';
import './box.css';

export interface IpBoxProps {
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

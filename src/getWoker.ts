import { wrap } from 'comlink';
import { Obj } from './webWorker';

const worker = new Worker(new URL('./webWorker.ts', import.meta.url));
export const workerObj = wrap<Obj>(worker);

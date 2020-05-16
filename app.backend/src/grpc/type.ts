import { Nullable, ObjectLiteral } from '../type';

export type HandlerAsync = (...args: any[]) => Promise<unknown>;
export type HandlersAsync = ObjectLiteral<HandlerAsync>;

export type Callback = (err: Nullable<Error>, res: any) => void;
export type HandlerCallback = (call: any, callback: Callback) => void;
export type HandlersCallback = ObjectLiteral<HandlerCallback>;

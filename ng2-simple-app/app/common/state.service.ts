import {Injectable} from 'angular2/core';
import {Config} from './config.model';
@Injectable()
export class StateService {
    private _message = 'Hello Message';
    private _subMessage:State = <State> {};
   config: Config = {
       name: 'Hello',
       description:'First Config'
   };

  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };

  get(){
    return this._subMessage;
  }
}

export interface State{
  id: number;
  description:string;
}

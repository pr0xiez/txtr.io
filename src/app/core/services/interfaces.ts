import { IQueuedMessagesR } from './../../texts/interfaces';
import { ISentMessagesR } from "../../texts/interfaces"

export interface IUserLogin {
  email: string,
  password: string
}

export interface IHttpResponse<T> {
  data: T
  errors: any
}

export interface ISentMessages {
  sentMsgs: ISentMessagesR
}

export interface IQueuedMessages {
  queuedMsgs: IQueuedMessagesR
}
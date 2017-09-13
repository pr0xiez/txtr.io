import { ISentMessagesR } from './../../home/interfaces'

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
/**
 * @author ADH - 9.13.17 - <alex.hall@united-installs.com>
 * @description collection of interfaces that define data in use by home module
 * Interfaces ending in QP are Query Parameters for the request that the GraphQL endpoint can handle
 * Interfaces ending in R are defining data coming back in response from the GraphQL endpoint
 */

export interface ICustomer {
  id: number
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  timezone: string
  createdAt: string
  updatedAt: string
}
export interface ITxtrClient {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}
export interface IMessageType {
  id: number
  name: string
  template: string
  sendAfterHour: number
  sendBeforeHour: number
  createdAt: string
  updatedAt: string
}

export interface IQueuedMessagesQP {
  id: number
  fromNumber: string
  toNumber: string
  twilioSid: string
  messageId: string
  templateVars: JSON
  sendAt: string
  customerId: number
  txtrClientId: number
  msgTypeId: number
}
export interface IQueuedMessagesR {
  id: number
  fromNumber: string
  toNumber: string
  messageId: string
  templateVars: JSON
  sendAt: string
  customer: ICustomer
  txtrClient: ITxtrClient
  msgType: IMessageType
  createdAt: string
  updatedAt: string
}
export interface ISentMessagesQP {
  id: number
  fromNumber: string
  toNumber: string
  twilioSid: string
  messageId: string
  templateVars: JSON
  sendAt: string
  customerId: number
  txtrClientId: number
  msgTypeId: number
}
export interface ISentMessagesR {
  id: number
  fromNumber: string
  toNumber: string
  twilioSid: string
  body: string
  messageId: string
  templateVars: JSON
  customer: ICustomer
  txtrClient: ITxtrClient
  msgType: IMessageType
  createdAt: string
  updatedAt: string
}
export interface IReceivedMessagesQP {
  id: number
  fromNumber: string
  toNumber: string
  twilioSid: string
  body: string
}
export interface IReceivedMessagesR {
  id: number
  fromNumber: string
  toNumber: string
  twilioSid: string
  body: string
  customer: ICustomer
  createdAt: string
  updatedAt: string
}
export interface IMessageTypesQP {
  id: number
  name: string
  template: string
  sendAfterHour: number
  sendBeforeHour: number
}
export interface IMessageTypesR {
  id: number
  name: string
  template: string
  sendAfterHour: number
  sendBeforeHour: number
  createdAt: string
  updatedAt: string
}
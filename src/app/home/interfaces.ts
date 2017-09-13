export interface IQeuedMessages {
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
export interface ISentMessages {
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
export interface IReceivedMessages {
  id: number
  fromNumber: string
  toNumber: string
  twilioSid: string
  body: string
}
export interface IMessageTypes {
  id: number
  name: string
  template: string
  sendAfterHour: number
  sendBeforeHour: number
}
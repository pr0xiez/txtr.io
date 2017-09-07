import { Injectable } from '@angular/core';
import * as crypt from 'crypto-js'

@Injectable()
export class SessionStorageService {
  secretKey: string = 'doubleIPAbestBeerNALOLLL111'
  private clearStorage() { sessionStorage.clear() }

  public setItem(key: string, data: Object): void {
    sessionStorage.setItem(key, JSON.stringify(data))
  }

  public getItem(key: string): Object {
    return JSON.parse(sessionStorage.getItem(key))
  }

  public setEncryptedItem(key: string, data: any): void {
    sessionStorage.setItem(key, crypt.AES.encrypt(JSON.stringify(data), this.secretKey))
  }

  public getDecryptedItem(key: string): string {
    let bytes = crypt.AES.decrypt(sessionStorage.getItem(key).toString(), this.secretKey)
    let decryptedData = JSON.parse(bytes.toString(crypt.enc.Utf8))
    console.log(decryptedData)
    return decryptedData
  }
}
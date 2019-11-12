import { Injectable } from '@angular/core';

@Injectable()
export class WebStorageService {
  public store(hashKey: string, obj: any): void {
    sessionStorage.setItem(hashKey, JSON.stringify(obj));
  }

  public retrieve(hashKey: string): any {
    const itemJsonString = sessionStorage.getItem(hashKey);
    return JSON.parse(itemJsonString);
  }
}

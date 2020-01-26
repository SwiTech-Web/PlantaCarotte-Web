import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly isMobile: boolean;

  constructor() {
    if (window.innerWidth <= 1024) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  getSate(): boolean {
    return this.isMobile;
  }
}

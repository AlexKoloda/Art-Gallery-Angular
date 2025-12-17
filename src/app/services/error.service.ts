import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  parseError(errorStatus: number): string {
    switch (errorStatus) {
      case 404: {
        return 'Not found, please try again later';
      }
      case 401: {
        return 'Access denied';
      }
      case 400: {
        return 'Incorrect value';
      }
      case 500:
      default: {
        return 'Server error';
      }
    }
  }
}

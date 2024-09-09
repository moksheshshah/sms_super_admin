import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalFunctions } from '../../common/global-function';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient, private _globalFunctions: GlobalFunctions) { }

  //Get All Products
  getSize(data: any): any {
    return this.http.post(environment.appURL + 'admin/size', data, this._globalFunctions.getAuthorizationHeader());
  }
}

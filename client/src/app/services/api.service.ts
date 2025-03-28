import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl = environment.apiUrl;

  constructor( private _http:  HttpClient ) {}

  getTypeRequest( url: string ){
    return this._http.get(`${this.baseUrl}${url}`).pipe(
      map(( response ) => {
        return response;
      })
    );
  }

  postTypeRequest( url: string,  payload: any )  {
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(
      map((response) => {
        return response;
      })
    );
  }

  putTypeRequest(url: string,  payload: any) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(
      map((response) => {
        return response;
      })
    );
  }

}
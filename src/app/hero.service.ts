import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private baseURL: string = "https://gateway.marvel.com/v1/public/";

  constructor(private http: Http) { }

  handleResponse(response:any) {
    return response.data.results;
  }

  fetchHeroes(endpoint:string): Promise<any> {
    return this.http.get(`${this.baseURL}${endpoint}`)
    .toPromise()
    .then(response => {
      return response.json();
    })
    .then(response => {
      return this.handleResponse(response);
    })
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

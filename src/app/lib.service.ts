import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Library } from './library';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibService  {

  private url = '/api/courses';
  constructor(private httpService: HttpClient) { }
  GetData(): Observable<Library[]> {
    return this.httpService.get<Library[]>(this.url).pipe(
      catchError(this.errorHandler));
  }
  deleteData(id: number) {
    const options = {
      params: new HttpParams().set('SNo', `${id}`),
    };
    return this.httpService.delete<Library[]>(this.url + '/' + id).pipe(catchError(this.errorHandler)); }
  errorHandler(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage : ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

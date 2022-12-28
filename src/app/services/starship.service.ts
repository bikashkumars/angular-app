import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  apiBaseUrl = environment.starwarBackendUrl;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  search(q, nextUrl): Observable<any> {
    let queryString = "q=" + q;
    if(nextUrl != ""){
      queryString = nextUrl;
    }

    return this.http
      .get<any>(this.apiBaseUrl + '/v1/starship/search/?'+queryString)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

import { Injectable } from '@angular/core';
import { IWomens } from '../womens/IWomens';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError,tap,map} from 'rxjs/operators';


@Injectable({
    providedIn:'root'
})

export class ChildrenService{

    private itemUrl ='api/item3/items.json';

    constructor(private http: HttpClient){ }

 getItems(): Observable <IWomens[]>{
     return this.http.get<IWomens[]>(this.itemUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      ) ;
    }

    getItem(id: number): Observable<IWomens | undefined> {
      return this.getItems()
        .pipe(
          map((childrenproducts: IWomens[]) => childrenproducts.find(i => i.productId === id))
        );
    }

    private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occured: ${err.error.message}`;
      } else {
        errorMessage = `Server returns code: ${err.status}, error massage is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
 }
}
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Lutador } from '../models/lutador';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
 const apiUrl = 'https://localhost:3000/lutador';
// const apiUrl = 'https://54.207.110.201:3000/lutador';

@Injectable({
  providedIn: 'root'
})
export class LutadorService {

  getLutadoresAleatorios(categoriaPeso: any, sexo: any): Observable<Lutador[]> {
    const url = apiUrl + '/versus?sexo=' + sexo + '&categoriaPeso=' + categoriaPeso;
    return this.http.get<Lutador[]>(url).pipe(
      catchError(this.handleError<Lutador[]>('getLutadoresAleatorios', []))
    );
  }

  constructor(private http: HttpClient) { }

  getLutadores (): Observable<Lutador[]> {
    return this.http.get<Lutador[]>(apiUrl + '?key=4ccc9336b467b9cf58051ea123493ef114eae029');
      // .pipe(
      //   tap(lutadores => console.log('leu os lutadores')),
      //   catchError(this.handleError('getLutadores', []))
      // );
  }
    pesquisaLutadores(termo: string, categoria: string): Observable<Lutador[]> {
      let query = '';
      if (!termo.trim() && !categoria) {
        return of([]);
      }
      if (termo.trim()) {
        query += '&nome=' + termo;
      }
      if (categoria.trim()) {
        query += '&categoriaPeso=' + categoria;
      }
      // tslint:disable-next-line:max-line-length
      return this.http.get<Lutador[]>(apiUrl + '?key=4ccc9336b467b9cf58051ea123493ef114eae029' + query).pipe(
        tap(_ => console.log(`Encontrou lutador que começa com: "${termo}"`)),
        catchError(this.handleError<Lutador[]>('pesquisaLutadores', []))
      );
    }

  getLutador(id: number): Observable<Lutador> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Lutador>(url).pipe(
      tap(_ => console.log(`leu o lutador id=${id}`)),
      catchError(this.handleError<Lutador>(`getLutador id=${id}`))
    );
  }

  addLutador (lutador): Observable<Lutador> {
    return this.http.post<Lutador>(apiUrl, lutador, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((lutador: Lutador) => console.log(`adicionou o lutador com w/ id=${lutador._id}`)),
      catchError(this.handleError<Lutador>('addLutador'))
    );
  }

  updateLutador(id, lutador): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, lutador, httpOptions).pipe(
      tap(_ => console.log(`atualiza o lutador com id=${id}`)),
      catchError(this.handleError<any>('updateLutador'))
    );
  }

  deleteLutador (id): Observable<Lutador> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Lutador>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o lutador com id=${id}`)),
      catchError(this.handleError<Lutador>('deleteLutador'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}

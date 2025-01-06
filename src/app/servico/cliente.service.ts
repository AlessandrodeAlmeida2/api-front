import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Url da API
  private url: string = "http://localhost:8080";

  //Construtor
  constructor(private http: HttpClient) { }

  //Método para selecionar todos os clientes
  selecionar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  // Método para inserir um cliente
  cadastrar(obj: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, obj);
  }

  // Método para editar um cliente
  editar(obj: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.url, obj);
  }

  // Método para excluir um cliente
  excluir(codigo: number): Observable<void> {
    return this.http.delete<void>(this.url+'/'+ codigo);
  }
  
  
}

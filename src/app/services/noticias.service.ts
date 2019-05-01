import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia.models';
import { Autor } from '../models/autor.models';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(public http: HttpClient) { }

  verNoticias() : Observable<Noticia[]> {
    return this.http.get<Noticia[]>("https://localhost:44343/api/Noticias/VerNoticias")
  }

  eliminaNoticia(noticiaID : number) : Observable<Boolean> {
    return this.http.get<Boolean>("https://localhost:44343/api/Noticias/Eliminar/" + noticiaID)
  }

  agregarNoticia(noticia: Noticia) : Observable<Boolean> {
    return this.http.post<Boolean>("https://localhost:44343/api/Noticias/Agregar", noticia)
  } 

  verAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>("https://localhost:44343/api/Noticias/VerAutores")
  }
//asd
}

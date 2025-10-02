import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Livros } from "../models/livros";
import { environment } from "../../environments/environments";

@Injectable({providedIn: 'root'})
export class livrosService{
    private http = inject(HttpClient);
    private base = environment. apiBase;

     listar(): Observable<Livros[]> {
       const url = `${this.base}api/livros`;
       return this.http.get<Livros[]>(url);
     }
   }
   
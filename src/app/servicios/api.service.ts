import { Injectable , Directive} from '@angular/core';

import { EmpresaI } from '../modelos/EmpresaI';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  direccion: string = "https://apitest-bt.herokuapp.com/api/v1/empresas";

  status;

  headers= new HttpHeaders()
          .set('user', 'User123')
          .set('password', 'Password123');

  constructor(private http:HttpClient) { }

  getEmpresas():Observable<EmpresaI[]>{
    
      console.log('Get Empresas');
      return this.http.get<EmpresaI[]>(this.direccion,{'headers': this.headers});
    
  }


}

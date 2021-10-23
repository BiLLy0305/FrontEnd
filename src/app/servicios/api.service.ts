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
      return this.http.get<EmpresaI[]>(this.direccion,{'headers': this.headers});
  }

  postEmpresa(form:EmpresaI):Observable<EmpresaI>{
    return this.http.post<EmpresaI>(this.direccion,form,{'headers': this.headers});
  }

  getEmpresaById(codigo:any):Observable<EmpresaI>{
    let direccionC = this.direccion + '/' + codigo;
    return this.http.get<EmpresaI>(direccionC,{'headers': this.headers});
  }

  putEmpresa(form:EmpresaI):Observable<EmpresaI>{
    return this.http.put<EmpresaI>(this.direccion+ '/'+form.id,form,{'headers': this.headers}   );
  }

  
  deletePatient(codigo){
    return this.http.delete(this.direccion+ '/'+codigo,{'headers': this.headers}).subscribe(data =>{
      console.log(data);
    });
  }

}

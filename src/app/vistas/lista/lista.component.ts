import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/servicios/api.service';

import { Router } from '@angular/router';

import { EmpresaI } from 'src/app/modelos/EmpresaI';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaEmpresas: EmpresaI[] = [];

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getEmpresas().subscribe(data =>{
      this.listaEmpresas =data;
    });
  }

  nuevaEmpresa(){
    this.router.navigate(['nuevo']);
  }

  editarEmpresa(id){
    this.router.navigate(['editar'],id);
  }

  eliminarEmpresa(id){

  }

}

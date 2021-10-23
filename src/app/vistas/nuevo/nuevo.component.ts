import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { EmpresaI } from 'src/app/modelos/EmpresaI';

import { Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  
  nuevoForm = new FormGroup({
    nombre_comercial: new FormControl('',[Validators.required]),
    razon_social:new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    nit: new FormControl(''),
    direccion : new FormControl(''),
    estado: new FormControl('')
  });

  constructor(private activerouter:ActivatedRoute, private router:Router,private api:ApiService) { }

  ngOnInit(): void {
  }

  salir(){
    this.router.navigate(['lista']);
  }

  postForm(form:EmpresaI){
    console.log(form);
    this.api.postEmpresa(form).subscribe(data =>{
      let respuesta: EmpresaI = data;
      console.log('Se Guardo ok!');
      this.router.navigate(['lista']);
    });
  }


}

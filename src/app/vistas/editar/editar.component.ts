import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/servicios/api.service';

import { FormGroup,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaI } from 'src/app/modelos/EmpresaI';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }


  datosEmpresa!: EmpresaI;

  editarForm = new FormGroup({
    nombre_comercial: new FormControl(''),
    razon_social:new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    nit: new FormControl(''),
    direccion : new FormControl(''),
    estado: new FormControl(''),
    id: new FormControl('')
  });


  ngOnInit(): void {
    console.log('LLEGA AC');
    let emrpesaCodigo = this.activerouter.snapshot.paramMap.get('codigo');
    this.api.getEmpresaById(emrpesaCodigo).subscribe(data =>{
   
      this.datosEmpresa = data;

      console.log(this.datosEmpresa.nombre_comercial);

      this.editarForm.setValue({
 
      'nombre_comercial': this.datosEmpresa.nombre_comercial,
      'razon_social': this.datosEmpresa.razon_social,
      'telefono': this.datosEmpresa.telefono,
      'correo': this.datosEmpresa.correo,
      'nit': this.datosEmpresa.nit,
      'direccion' : this.datosEmpresa.direccion,
      'estado': this.datosEmpresa.estado,
      'id': this.datosEmpresa.id
      });
    });
  }

  salir(){
    this.router.navigate(['lista']);
  }

  postForm(form:EmpresaI){
    this.api.putEmpresa(form).subscribe(data =>{
      console.log(data);
      let respuesta: EmpresaI = data;

      /*if(respuesta.codigo >=1){
        console.log('Datos Modificados con Exito!','Hecho');
      }else{
        console.log('Error al Modificar','Error');
      }*/
    });
  }

}

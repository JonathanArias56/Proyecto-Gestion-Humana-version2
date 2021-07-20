import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
class Persona{
    public name:string;
    public id:number;
    public edad:number;
    public carrera:string;
    constructor(pName:string,pId:number,pEdad:number,pCarrera:string) {
      this.name=pName;
      this.id=pId;
      this.edad=pEdad;
      this.carrera=pCarrera;

     }
}
@Component({
  selector: 'app-buscado-talentos',
  templateUrl: './buscado-talentos.component.html',
  styleUrls: ['./buscado-talentos.component.css']
})
export class BuscadoTalentosComponent implements OnInit {
  usuarios: Array<Persona>;
  id:number;
  constructor() { 
    this.usuarios=new Array<Persona>();
    this.id=0;

  }

  usuario: Usuario={
    name:"",
    id:null,
    edad:null,
    carrera:""
  };
  usuarioAgregar: Usuario={
    name:"",
    id:null,
    edad:null,
    carrera:""
  };
  
  

  public agregarUsuario(nombre,edad, carrera){
    
    this.id ++;
    let edadParseada = parseInt(edad);
    let nuevo = new Persona(nombre,this.id,edadParseada,carrera);
    var cont = this.usuarios.push(nuevo);

    alert("El usuario: "+ nuevo.name+" con id: "+ nuevo.id+", edad: "+nuevo.edad+" y profesión: "+ nuevo.carrera+ "  Se registró con éxito");
  }

  public buscarUsuario(nombre){
    //var encontro = new Boolean(false);
    var nombreUsuario = new String;
    var profesionUsuario = new String;
    for (var i = 0; i <= this.usuarios.length; i++) {
      if(this.usuarios[i].name == nombre){
        //encontro = true;
        nombreUsuario = this.usuarios[i].name;
        profesionUsuario= this.usuarios[i].carrera;
        alert("El usuario buscado es: " + nombreUsuario + ". El cual tiene como profesión: " + profesionUsuario);
      }
    }

    /*if(encontro == true){
      alert("El usuario buscado es: " + nombreUsuario + ". El cual tiene como profesión: " + profesionUsuario);
    }else{
      alert("No se encuentra registrado");
    }*/
    
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores:Marcador[]=[];

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(public snackBar: MatSnackBar,public dialog:MatDialog) {
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  agregarMarcador(evento){
    const coords:{lat:number,lng:number}=evento.coords;
    const nuevoMarcador = new Marcador(coords.lat,coords.lng);
    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();

    this.snackBar.open('Marcador agregador', 'Cerrar',{duration:3000});
  }

  borrarMarcador(index:number){
    this.marcadores.splice(index,1);

    this.guardarStorage();

    this.snackBar.open('Marcador eliminado', 'Cerrar', { duration: 3000 });
  }

  guardarStorage(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }

  editarMarcardor(marcador:Marcador){
    let dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result){
        console.log(result);

        marcador.titulo=result.titulo;
        marcador.desc=result.desc;
        this.guardarStorage();
        this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 3000 });
      }
      else{
        return;
      }
    });
  }



}

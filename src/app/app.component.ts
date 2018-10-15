import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('fileInput') fileInput;
  title = 'app';
  nombre: string;
  archivo: string;
  tipo: string;
  foto: string;
  posicion = 'left';
  CodificarArchivo(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.nombre = file.name;
            this.tipo = file.type;
            this.archivo = reader.result.split(',')[1];
            this.foto = 'data:' + this.tipo + ';base64,' + this.archivo;
            console.log(this.nombre);
            console.log(this.tipo);
            console.log(this.archivo);
        };
    }
}
}

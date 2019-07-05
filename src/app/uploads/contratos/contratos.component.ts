import { Component, OnInit } from '@angular/core';
import { LoadfileService } from '../../servicios/loadfile.service';
import { Archivo } from './../file.modal';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Upload } from '../../servicios/Upload.model';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  //Anterior
  //uploads:AngularFireList<Archivo>[];

  //Ejemplo Prueba
  uploads: Observable<Upload[]>;

  constructor(private loadfileService:LoadfileService) { }

  ngOnInit() {
    this.uploads=this.loadfileService.getUploads();
  }

}

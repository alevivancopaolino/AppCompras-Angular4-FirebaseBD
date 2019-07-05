import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB2AKLId9mLamBLCExLgg-3mzhi9xugf2g",
      authDomain: "comprasapp-91d7e.firebaseapp.com",
      databaseURL: "https://comprasapp-91d7e.firebaseio.com",
      projectId: "comprasapp-91d7e",
      storageBucket: "comprasapp-91d7e.appspot.com",
      messagingSenderId: "523058592864"
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent implements OnInit {

  loginForm : FormGroup;
  userdata : any;

  mensaje = false;

  autenticando = false;

  constructor(private formBuilder:FormBuilder,
    private autentificacionService:AutentificacionService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
         'email': ['', [
             Validators.required,
             Validators.email
           ]
         ],
         'password': ['', [
           Validators.required,
           Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
           Validators.minLength(6)
            ]
          ]
      });
    }

    onSubmit(){
      this.autenticando = true;
      this.userdata=this.saveUserData();    
      this.autentificacionService.inicioSesion(this.userdata);
      setTimeout(() =>{
        if(this.isAuth()==false){
          this.mensaje=true;
          this.autenticando = false;
        }
      }, 2000);
    }  
    
    saveUserData(){
      const saveUserdata = {
        email : this.loginForm.get('email').value,
        password : this.loginForm.get('password').value
      }
    
      return saveUserdata;
    }

    isAuth(){
      return this.autentificacionService.isAuthenticated(); 
    }

}
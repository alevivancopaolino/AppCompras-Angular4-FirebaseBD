import { Injectable } from '@angular/core';
import { CanActivate ,
       ActivatedRouteSnapshot ,
       RouterStateSnapshot  } from '@angular/router';
import { AutentificacionService } from './autentificacion.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private autentificacionService: AutentificacionService) { }

  canActivate(router:ActivatedRouteSnapshot , state: RouterStateSnapshot){
    return this.autentificacionService.isAuthenticated();
  }

}

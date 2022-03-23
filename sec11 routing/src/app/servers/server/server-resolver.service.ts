import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";


interface Server{
   id:number;
   name:string;
   status:string;
}
@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serverSerive:ServersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> |
         Promise<Server>| Server {
        return this.serverSerive.getServer(+route.params['id']);
    }


}
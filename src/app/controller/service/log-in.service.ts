import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Route, Router} from '@angular/router';
import { fournisseur } from '../model/fournisseur.model';
import { reserver } from '../model/reserver.model';

@Injectable({
  providedIn: 'root'
})
export class LogInService {


  constructor(private http: HttpClient,
              private router: Router) { }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @title Input with error messages
 */
@Component({
  selector: 'app-login-side',
  templateUrl: './login-side.component.html',
  styleUrls: ['./login-side.component.css']
})
export class LoginSideComponent implements OnInit {
  nom: string;
  password: string;
  showErrors;
  constructor(private router: Router,
              ) { }

  ngOnInit(): void {
  }
  login() {
                this.router.navigateByUrl('admin');

   // this.utlisateurService.seConnecter(this.utilisateu.login, this.utilisateu.modDePasse);
  }

}

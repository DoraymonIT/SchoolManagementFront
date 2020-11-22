import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant-compte',
  templateUrl: './etudiant-compte.component.html',
  styleUrls: ['./etudiant-compte.component.css']
})
export class EtudiantCompteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public openNav() {
    document.getElementById('mySidenav').style.width = '350px';
  }

  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}

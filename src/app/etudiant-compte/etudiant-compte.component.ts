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
public displayInformationPersonnel(){
    document.getElementById('informationPersonnel').style.display = 'inline-block';
    document.getElementById('couretexercice').style.display = 'none';
}
  public displayCouretExercice(){
    document.getElementById('couretexercice').style.display = 'inline-block';
    document.getElementById('informationPersonnel').style.display = 'none';
  }
}

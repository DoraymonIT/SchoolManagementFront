import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-principale',
  templateUrl: './page-principale.component.html',
  styleUrls: ['./page-principale.component.css']
})
export class PagePrincipaleComponent implements OnInit {

  constructor() { }
  responsiveOptions: any[];
  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
public  display() {
    document.getElementById('search-space').style.display = 'inline-block';
}
  public  masquer() {
    document.getElementById('search-space').style.display = 'none';
  }
  public openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }
  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}

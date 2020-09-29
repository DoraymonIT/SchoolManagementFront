import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-side",
  templateUrl: "./admin-side.component.html",
  styleUrls: ["./admin-side.component.css"],
})
export class AdminSideComponent implements OnInit {
  constructor() {
    this.hideMatBadge = false;
    this.ex = 3;
    this.aujourdHui = new Date();
  }

  aujourdHui: Date;

  opened: boolean;

  panelOpenState = false;
  hideMatBadge: boolean;
  ex: number;

  ngOnInit(): void {}

  time = new Date();

  badge() {
    this.hideMatBadge = true;
  }
  seDeconnecter() {
    localStorage.removeItem("login");
  }
}

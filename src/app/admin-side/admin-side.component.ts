import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-side",
  templateUrl: "./admin-side.component.html",
  styleUrls: ["./admin-side.component.css"],
})
export class AdminSideComponent implements OnInit {
  constructor() {
    this.hideMatBadge = false;
    this.hideMatBadgeMessage = false;
    this.ex = 3;
    this.exMessage = 5;
    this.aujourdHui = new Date();
  }

  aujourdHui: Date;

  opened: boolean;

  panelOpenState = false;
  hideMatBadge: boolean;
  hideMatBadgeMessage: boolean;
  ex: number;
  exMessage: number;
  ngOnInit(): void {}

  time = new Date();

  badge() {
    this.hideMatBadge = true;
  }

  badgeMessage() {
    this.hideMatBadgeMessage = true;
  }
  seDeconnecter() {
    localStorage.removeItem("login");
  }
}

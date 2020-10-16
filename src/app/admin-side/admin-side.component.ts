import { Component, OnInit } from "@angular/core";
import {Title} from "@angular/platform-browser";
@Component({
  selector: "app-admin-side",
  templateUrl: "./admin-side.component.html",
  styleUrls: ["./admin-side.component.css"],
})
export class AdminSideComponent implements OnInit {
  constructor(private titleService:Title) {
    this.hideMatBadge = false;
    this.hideMatBadgeMessage = false;
    this.ex = 3;
    this.exMessage = 5;
    this.aujourdHui = new Date();
    this.titleService.setTitle("Dashoboard");
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

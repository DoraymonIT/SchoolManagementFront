import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-admin-side",
  templateUrl: "./admin-side.component.html",
  styleUrls: ["./admin-side.component.css"],
})
export class AdminSideComponent implements OnInit {
  icon = "down";
  icon1 = "angle-right";
  icon2 = "down";
  icon3 = "down";
  icon4 = "down";
  icon5 = "down";
  icon6 = "down";
  icon7 = "down";
  icon8 = "down";
  constructor(private titleService: Title) {
    this.hideMatBadge = false;
    this.hideMatBadgeMessage = false;
    this.ex = 3;
    this.exMessage = 5;
    this.aujourdHui = new Date();
    this.titleService.setTitle("Dashoboard");
  }
  changeIcon() {
    if (this.icon == "down") {
      this.icon = "right";
    } else {
      this.icon = "down";
    }
  }
  changeIcon2() {
    if (this.icon2 == "down") {
      this.icon2 = "right";
    } else {
      this.icon2 = "down";
    }
  }
  changeIcon3() {
    if (this.icon3 == "down") {
      this.icon3 = "right";
    } else {
      this.icon3 = "down";
    }
  }
  changeIcon4() {
    if (this.icon4 == "down") {
      this.icon4 = "right";
    } else {
      this.icon4 = "down";
    }
  }
  changeIcon5() {
    if (this.icon5 == "down") {
      this.icon5 = "right";
    } else {
      this.icon5 = "down";
    }
  }
  changeIcon6() {
    if (this.icon6 == "down") {
      this.icon6 = "right";
    } else {
      this.icon6 = "down";
    }
  }
  changeIcon7() {
    if (this.icon7 == "down") {
      this.icon7 = "right";
    } else {
      this.icon7 = "down";
    }
  }
  changeIcon8() {
    if (this.icon8 == "down") {
      this.icon8 = "right";
    } else {
      this.icon8 = "down";
    }
  }
  changeIcon1() {
    if (this.icon1 == "angle-right") {
      this.icon1 = "angle-left";
    } else {
      this.icon1 = "angle-right";
    }
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

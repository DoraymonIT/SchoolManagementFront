import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {Title} from "@angular/platform-browser";
/**
 * @title Input with error messages
 */
@Component({
  selector: "app-login-side",
  templateUrl: "./login-side.component.html",
  styleUrls: ["./login-side.component.css"],
})
export class LoginSideComponent implements OnInit {
  nom: string;
  password: string;
  constructor(private router: Router,private titleService:Title) {
    this.titleService.setTitle("Login page ");
  }

  ngOnInit(): void {}
  login() {
    this.router.navigateByUrl("admin");
  }
}

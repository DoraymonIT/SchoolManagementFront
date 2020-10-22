import { Component, OnInit } from "@angular/core";

import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-teachers",
  templateUrl: "./teachers.component.html",
  styleUrls: ["./teachers.component.css"],
})
export class TeachersComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle("List of teaches");
  }

  ngOnInit() {}
}

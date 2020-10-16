import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Create New Teacher ");
  }

  ngOnInit(): void {
  }

}

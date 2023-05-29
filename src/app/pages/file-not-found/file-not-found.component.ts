import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-not-found',
  templateUrl: './file-not-found.component.html',
  styleUrls: ['./file-not-found.component.css']
})
export class FileNotFoundComponent implements OnInit {

  titleNot:string = "Ops! Nada foi encontrado!"

  constructor() { }

  ngOnInit(): void {
  }

}

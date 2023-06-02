import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titleHome:string = "Tweet Clone"

  tweets:string[] = []

  constructor(private service:MessagesService) { }

  ngOnInit(): void {
    this.tweets = this.service.getMessage()
  }

}

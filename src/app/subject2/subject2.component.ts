import { Component, OnInit } from '@angular/core';
import { Subjec2Service } from '../subjec2.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class Subject2Component implements OnInit {
  constructor(private subject2service:Subjec2Service){}
show=false
  ngOnInit(): void {
    this.subject2service.showParagragh.subscribe((value)=>{
      this.show=value
    })
  }

}

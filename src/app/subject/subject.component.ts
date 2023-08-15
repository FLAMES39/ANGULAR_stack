import { Component } from '@angular/core';
import { Subjec2Service } from '../subjec2.service';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { animate, state, style, keyframes, transition, trigger, group } from '@angular/animations';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
  standalone:true,
  imports:[CommonModule],
  animations:[
    trigger('btnTrigger',[
      state( 'small',style({ 
        transform:'scale(1)'
      })),
      state( 'large',style({ 
        transform:'scale(1.5)',
        color: 'red'
      })),
      transition('small<=>*',animate('1000ms 0.2s ease-out'))
    ]),



    
    trigger('listTrigger',[
      state('listStates',style({
        opacity:'1'
      })),
      //WILDCARD AND VOID
      transition('void => *' 
      // ,[style({
      //   opacity:'0',
      //   transform:'translateX(-100px)'
      // }), animate(1000)]
      ,group([
        animate("1s", style({ background: "black" })),
        animate("2s", style({ color: "white" }))
      ])
      ),
      transition('*=>void' ,[style({
        opacity:'0',
        transform:'translateY(100px)'
      }), animate(1000)]),
      transition("*=>void",[
        animate(2000, keyframes([
          style({
            opacity:'0',
            transform:'translateX(-100px)',
            offset:'0',
            color:'red'
          }),
          style({
            opacity:'0.5',
            transform:'translateX(-50px)',
            offset:'0.5',
            color:'purple'
          }),
          style({
            opacity:'1',
            transform:'translateX(-30px)',
            offset:'1',
            color:'brown'
          })
        ]))
      ])
      
    ])
  ]
})
export class SubjectComponent {
  constructor(private subject2service: Subjec2Service) { }
  state='small'
  state1='listStates'
  items=['Javacript','Java','Node js','Express']
  show() {
    // this.subject2service.showParagragh.emit(true)
    this.subject2service.showParagragh.next(true)
    this.state=this.state==='small'?'large':'small'
    this.items.push('c')
  }
  delete(id:number){
    this.items.splice(id,1)
  }
  
}


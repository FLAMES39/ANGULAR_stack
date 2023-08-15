import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Subjec2Service {
  // showParagragh= new EventEmitter<boolean>()
  showParagragh= new Subject<boolean>()
  constructor() { }
}

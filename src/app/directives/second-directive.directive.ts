import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSecondDirective]'
})
export class SecondDirectiveDirective implements OnInit{

    @Input({required:true}) color:string=''
    @Input({required:true}) bg:string=''

    @HostBinding('style.Color') defaultColor:string='black'
    @HostBinding('style.backgroundColor') bgDefaultColor:string='purple'

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','black')
    //  this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue')
    this.defaultColor=this.bg

  }
  @HostListener('mouseenter')mouseenter(){
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','red')
    // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow')
    this.bgDefaultColor=this.bg
    this.defaultColor=this.color
  }
  @HostListener('mouseleave')mouseleave(){
    // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','green')
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','pink')
    this.bgDefaultColor=this.bg
    this.defaultColor=this.color
  }

}

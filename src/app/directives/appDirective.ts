import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";



@Directive({
    selector:'[appBg]'
})

export class AppBgDirective implements OnInit{
     constructor(private elementRef:ElementRef,private renderer:Renderer2){}
    ngOnInit(): void {
       this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','purple')
       this.renderer.setStyle(this.elementRef.nativeElement,'color','yellow')
    }
}
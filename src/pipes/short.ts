import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
    name:"short"
})
export class shotPipe implements PipeTransform{
    transform(value: string,limit:number) {
        if(value.length<=0){
            return value
        }
        return value.slice(0,limit)+"..."
    }
}
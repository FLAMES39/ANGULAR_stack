import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  constructor(private fb:FormBuilder,private router:Router , private route:ActivatedRoute){}
  form!: FormGroup
  title=''
  ngOnInit(): void {
    this.form= this.fb.group({
      name:['',[Validators.required]],
      category:['',[Validators.required]],
      prices:['',[Validators.required]]
    })
    this.route.data.subscribe((data:Data)=>{
      console.log(data);
      this.title=data['message']
      
    })
  }
  onChange(){
    this.router.navigate(['/Category'],{relativeTo:this.route})
  }
  onSubmit(){

  }
}

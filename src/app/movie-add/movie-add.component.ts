import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Params, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css'],
  standalone:true,
  imports:[CommonModule,RouterModule,FormsModule,ReactiveFormsModule]
})
export class MovieAddComponent implements OnInit {
  constructor(private fb:FormBuilder,private router:Router , private route:ActivatedRoute){}
  form!: FormGroup
  title=''
  isUpdateClicked=false
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
  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    // console.log("Name: ", this.form.get('name')?.valu);
    // console.log("Category: ", this.form.value.category);
    // console.log("Prices: ", this.form.value.prices);
    
    if (
      (this.form.value.name === this.form.get('name')?.value ||
        this.form.value.category === this.form.get('category')?.value ||
        this.form.value.prices === this.form.get('prices')?.value) &&
      !this.isUpdateClicked
    ) {
      return confirm("Do you want to discard changes?");
    } else {
      return true;
    }
    
  }
}

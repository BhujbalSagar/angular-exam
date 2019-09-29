import { Component,OnInit } from '@angular/core';
import { GetExamService } from './get-exam.service';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'exam';
  examForm: FormGroup;
  constructor(private getExamService : GetExamService,fb: FormBuilder){
    this.examForm = fb.group({
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      option5: ['', Validators.required],
    });
  }
  data : any;
  ngOnInit(){
    this.getExamService.dataTest.subscribe((response)=>{
      let questn = JSON.parse(JSON.stringify(response))
      this.data = questn;
    })
  }
  
  Submit(){
    if(this.data){
      let cnt=0;
      if(this.examForm){
        for(let i=1;i<=this.data.length;i++){
          let option="option"+i;
          if(this.examForm.value[option] == this.data[i-1].ans){
            cnt++;
          }
          
        }
        
      }
      alert("Your Mark is: "+cnt);
    }
  }
  
}

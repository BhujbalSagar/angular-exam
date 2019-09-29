import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class GetExamService {
  dataTest = new BehaviorSubject(null);
  constructor(private httpClient : HttpClient) { this.getData()}
  getData(){
    this.httpClient.get("../assets/exam.json").subscribe((response)=>{
      this.dataTest.next(response);
    })
  }
}

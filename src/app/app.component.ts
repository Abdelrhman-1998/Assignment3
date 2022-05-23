import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string="";
  passwordStaus:boolean=false;
  click:number=0;
  clicks=[];
  onClickButton(){
    ++this.click;
    this.clicks.push(this.click);
    this.passwordStaus=!this.passwordStaus;
  }
  resetInput(){
    this.username="";
  }
}

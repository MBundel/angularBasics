import { Component } from '@angular/core';

@Component({
  selector: 'app-principles',
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.css']
})
export class PrinciplesComponent {
    // interpolation
    name = "Interpolation";
    // property binding
    isDisabled= true;

    // class Binding
   isClassOne = true;
    myClass = {
      "classOne": this.isClassOne,
      "classTwo": !this.isClassOne
    }

    //style Binding
    myStyle = {
        color:     "blue",
        fontStyle: "italic"
    }
  //  event binding
  textMsg = "";
 onClickByEventBinding(){
      this.textMsg = "Whazzz Uuuuup?"
 }
  // template reference variables
  refVarString =""
  refMethod(value: string){
     this.refVarString = value;
  }

  // two way binding
   twoWayBindingVal = ""; //formModule has to be imported

  // ng If
  isVisible = false;

  // ng Switch
  switchColor = "blue";

  // ng for
  forArray = [11,11,13,14];

 // component interaction
 message = "";

  // pipes
  pipeName ="I'M A PIPE"
  pipeNum = 1.23456
  pipeDate = new  Date();

  // services
    //---
  // Dependency Injection as Framework
    //---
  // Fetch Data Using HTTP

  // Binding Data to a Model
  user = {
    "name": ""
  }
      // can create User as Class

  // Tracking state and validity
    //     ng-touched, ng-dirty, ng-valid || ng-untouched, ng-pristine, ng-invalid
    // for [class.is-invalid="name.invalid" für css
  // this is the end

  }

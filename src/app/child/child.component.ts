import {Component, EventEmitter, Input, Output} from "@angular/core";



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input()  parentData = "";
@Output() childEvent = new EventEmitter();

fireEvent(){
  this.childEvent.emit("Ja Moin")
}

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {
  //item used to hold values from parent
@Input() item:string|undefined
@Output() onCancel= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
cancel()
{
this.onCancel.emit()
}
}

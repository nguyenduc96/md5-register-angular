import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Register} from '../register';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input()
  editItem: Register = {};

  @Output()
  editItemChange: EventEmitter<Register> = new EventEmitter<Register>();

  constructor() { }

  ngOnInit() {
  }

  editForm(formRegister: NgForm) {
    this.editItemChange.emit(formRegister.value);
  }
}

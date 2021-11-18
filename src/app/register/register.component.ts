import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Register} from '../register';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input()
  register: Register = {};

  @Output()
  onRegister: EventEmitter<Register> = new EventEmitter<Register>();

  constructor() {
  }

  ngOnInit() {
  }

  registerForm(formRegister: NgForm) {
    this.onRegister.emit(formRegister.value);
  }
}

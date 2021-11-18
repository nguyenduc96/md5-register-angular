import {Component, Input, OnInit} from '@angular/core';
import {Register} from '../register';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  registers: Register[] = [];

  isRegisterSelected: boolean = false;

  isUpdated: boolean = false;

  index = -1;

  id = 0;

  constructor() { }

  ngOnInit() {
  }

  registerFormButton() {
    this.isRegisterSelected = !this.isRegisterSelected;
  }


  addRegister($event: Register) {
    if ($event.id === undefined) {
      $event.id = this.id++;
    }
    this.registers.push($event);
  }

  editRegister(rgt: Register) {
    this.isUpdated = !this.isUpdated;
    this.index = this.registers.indexOf(rgt);
    console.log(this.index)
  }

  updateRegister($event: Register) {
    this.registers[this.index] = $event;
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})
export class CityInputComponent implements OnInit {

  @Output() onNewCity: EventEmitter<string>  = new EventEmitter<string> ()
  controlInput = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  setNewCity() {
    if(this.controlInput.invalid) {
      this.controlInput.markAsTouched();
      return;
    }
    this.onNewCity.emit(this.controlInput.value);
  }



}

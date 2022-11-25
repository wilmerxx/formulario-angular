import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validator, Validators} from '@angular/forms';
import{debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.buildForm();
    this.form.valueChanges
    .pipe(
      debounceTime(1000)
      )
    .subscribe(value => {
      console.log(value);
    })
   }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = new FormGroup({
      nameCtrl: new FormControl('', [Validators.required]),
      dateCtrl: new FormControl('', [Validators.required]),
      emailCtrl: new FormControl('', [Validators.required]),
      textCtrl: new FormControl('', [Validators.required]),
      categoryCtrl: new FormControl('', [Validators.required]),
      genderCtrl: new FormControl('', [Validators.required])

    });
  }

}
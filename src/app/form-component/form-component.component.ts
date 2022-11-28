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

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
    // this.form.valueChanges
    // .pipe(
    //   debounceTime(1000)
    //   )
    // .subscribe(value => {
    //   console.log(value);
    // })
   }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      nameCtrl: new FormControl('', [Validators.required]),
      dateCtrl: new FormControl('', [Validators.required]),
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
      textCtrl: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      categoryCtrl: new FormControl('', [Validators.required]),
      genderCtrl: new FormControl('', [Validators.required])

    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);
    }else{
      this.form.markAllAsTouched();
    }
    
  }

  get textField(){
    return this.form.get('textCtrl');
  }

 

}

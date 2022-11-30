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
  captcha: string;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
    this.captcha = "";
      //  this.form.valueChanges
      //  .pipe(
      //   debounceTime(1000)
      //  )
      // .subscribe(value => {
      //   console.log(value);
      // })
   }

  ngOnInit(): void {
  }


 //funcion par captcha
  resolved(captchaResponse: string){
    this.captcha = captchaResponse;
    // console.log('responda al captcha' + this.captcha);
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      nameCtrl: new FormControl('', [Validators.required]),
      numCtrl: new FormControl('', [Validators.required]),
      dateCtrl: new FormControl('', [Validators.required]),
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
      paisesCtrl: new FormControl('', [Validators.required]),
      genderCtrl: new FormControl('', [Validators.required]),
      bibliografiaCtrl: new FormControl('', [Validators.required ,Validators.maxLength(1000) , Validators.minLength(100)]),
      terminosCtrl: new FormControl('', [Validators.required]),

    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value.nameCtrl);
      console.log(value.numCtrl);

    }else{
      this.form.markAllAsTouched();
      console.log('los datos no estan llegando');
    }

  }

  get textField(){
    return this.form.get('bibliografiaCtrl');
  }

  get numCtrl(){
    return this.form.get('numCtrl');
  }

  get nameCtrl(){
    return this.form.get('nameCtrl');
  }

  get dateCtrl(){
    return this.form.get('dateCtrl');
  }

  get emailCtrl(){
    return this.form.get('emailCtrl');
  }

  get paisesCtrl(){
    return this.form.get('paisesCtrl');
  }

  get genderCtrl(){
    return this.form.get('genderCtrl');
  }

  get terminosCtrl(){
    return this.form.get('terminosCtrl');
  }




}

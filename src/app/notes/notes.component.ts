import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../Custom Validations/userName.validitors';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  registerationForm=this.fb.group({
    username:['',[Validators.required,ForbiddenNameValidator]], //ForbiddenNameValidator(/واكتب ال reg ال اانا عيزاة/) *(userName.validitor) الفانكشن التانية ال ف *
    subscribe:[false],
    discound:[''],
    alternativeEmails:this.fb.array([]),
  })
  
 products=["mobile","laptop","mac","tap"]
  ngOnInit(): void {
  }
  get discound()
  {
    return this.registerationForm.get('discound')
  }

  get alternativeEmails()
  {
    return this.registerationForm.get('alternativeEmails') as FormArray;
  }
  get username(){
return this.registerationForm.get('username')
  }

  addNewEmail(){
    this.alternativeEmails.push(this.fb.control(''));
  }
  deleteEmail(index:any){
    this.alternativeEmails.removeAt(index);
  }
  setEmailValidation()
  {
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(
      checkedValue=>{
        if(checkedValue)
        {
          this.discound?.setValidators(Validators.required);
        }
        else
        {
          this.discound?.clearValidators();
        }
        this.discound?.updateValueAndValidity();
      }
    )
  }
}

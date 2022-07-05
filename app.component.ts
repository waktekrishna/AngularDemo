import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  // Inject FormBuilder service
  constructor(public fbobj : FormBuilder)
  {
  }
  MarvellousForm = this.fbobj.group(
    {
      


      
      // Add Multiple validations
      username :['', [Validators.required, Validators.minLength(5) ,Validators.pattern('[a-zA-Z ]*')] ],
      email : ['',[Validators.required ,  Validators.email]],
      phone : ['',[Validators.required , Validators.pattern('[0-9 ]*'), Validators.maxLength(5) ]],
      address : [''],
      MarvellousClass : this.fbobj.group(
        {
          batch :['Python'],
          fees : ['5000'] 
        }
      )
    }
  );
  
  // Method to set FormControl fields through program
  SetData()
  {
    this.MarvellousForm.setValue(
      {
        username : 'Piyush',
        passowrd : 'abcd',
        ConfirmPass :  'abcd',
        MarvellousClass : 
        {
          batch : 'Python',
          fees : '5000'
        }
      }
    )
  }
}

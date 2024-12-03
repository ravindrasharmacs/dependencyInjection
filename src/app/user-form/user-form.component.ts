import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]]
      });
  }

  onSubmit() {
    // this.submitted = true;
    if (this.userForm.valid) {
      console.log('Form submitted successfully' , this.userForm.value);
      this.submitted = true;
      } else {
        console.log('Form is invalid');
        Object.keys(this.userForm.controls).forEach(field => {
          const control = this.userForm.get(field);
          if(control?.invalid){
            control.markAsTouched();
          }
        
          });
    }
}
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  title = "Contact Form"
  submitted: boolean = false
  contactForm!: FormGroup 
  contact = {
    username: '',
    email: '',
    text: ''
  }
  constructor() {
    this.createForm()
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      'username': new FormControl(this.contact.username, [
        Validators.required,
        Validators.minLength(3)
      ]),
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      'text': new FormControl(this.contact.text, [
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  onSubmit() {
    this.submitted = true
  }
}

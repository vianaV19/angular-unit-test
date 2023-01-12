import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should title equals 'Contact Form'`, () => {
    const fixture = TestBed.createComponent(ContactFormComponent)
    const contactForm = fixture.componentInstance
    expect(contactForm.title).toEqual('Contact Form')
  }) 

  it(`method onSubmit() should set varaible 'submitted' equals true`, () => {
    const fixture = TestBed.createComponent(ContactFormComponent)
    const contactForm = fixture.componentInstance
    fixture.detectChanges();
    contactForm.onSubmit();
    expect(contactForm.submitted).toBeTruthy()
  })

  it('form should be invalid', () => {
    const fixture = TestBed.createComponent(ContactFormComponent)
    const contactForm = fixture.componentInstance
    contactForm.contactForm.controls['username'].setValue('')
    contactForm.contactForm.controls['email'].setValue('')
    contactForm.contactForm.controls['text'].setValue('')
    expect(contactForm.contactForm.valid).toBeFalsy();
  })

  it('form should be valid', () => {
    const fixture = TestBed.createComponent(ContactFormComponent)
    const contactForm = fixture.componentInstance
    contactForm.contactForm.controls['username'].setValue('matheus')
    contactForm.contactForm.controls['email'].setValue('matheus@gmail.com')
    contactForm.contactForm.controls['text'].setValue('minha mensagem!')
    expect(contactForm.contactForm.valid).toBeTruthy();
  })
});

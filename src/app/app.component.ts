import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private defaultQuestion = 'pet';
  private answer = '';
  private genders = ['male', 'female'];
  private submitted = false;
  private user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  @ViewChild('f') private form: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    /*    this.form.setValue({
          userData: {
            username: suggestedName,
            email: ''
          },
          secret: 'pet',
          questionAnswer: '',
          gender: 'male'
        });*/
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;
    this.submitted = true;
    this.form.reset();
  }
}

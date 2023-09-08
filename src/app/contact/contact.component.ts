import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  isEmptyName: boolean = true;
  isEmptyAge: boolean = true;
  isEmptyEmail: boolean = true;
  isEmptyPass: boolean = true;
  showLabelName(e: any) {
    if (e.target.value.length > 0) {
      this.isEmptyName = false;
    } else {
      this.isEmptyName = true;
    }
  }
  showLabelAge(e: any) {
    if (e.target.value.length > 0) {
      this.isEmptyAge = false;
    } else {
      this.isEmptyAge = true;
    }
  }
  showLabelEmail(e: any) {
    if (e.target.value.length > 0) {
      this.isEmptyEmail = false;
    } else {
      this.isEmptyEmail = true;
    }
  }
  showLabelPass(e: any) {
    if (e.target.value.length > 0) {
      this.isEmptyPass = false;
    } else {
      this.isEmptyPass = true;
    }
  }
}

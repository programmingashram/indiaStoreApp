import { Component } from '@angular/core';
import { PersonalCare } from '../products';

@Component({
  selector: 'app-personal-care',
  templateUrl: './personal-care.component.html',
  styleUrls: ['./personal-care.component.scss']
})
export class PersonalCareComponent {
  products = PersonalCare;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

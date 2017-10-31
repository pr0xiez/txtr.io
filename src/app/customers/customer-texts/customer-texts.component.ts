import { CustomerTextsService } from '../../core/services/customer-texts.service';
import { Component } from '@angular/core'

@Component({
  selector: 'customer-texts',
  templateUrl: 'customer-texts.component.html',
  styleUrls: ['customer-texts.component.scss']
})

export class CustomerTextsComponent {
  constructor( public ctS: CustomerTextsService ) {}
}
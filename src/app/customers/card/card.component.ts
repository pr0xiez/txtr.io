import { ICustomer } from './../../texts/interfaces';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'customer-card',
  templateUrl: 'card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent {
  @Input() customer: ICustomer
  
  get id(): number { return this.customer.id }
  get firstName(): string { return this.customer.firstName }
  get lastName(): string { return this.customer.lastName }
  get email(): string { return this.customer.email }
  get phoneNumber() { return this.customer.phoneNumber }
  get timezone(): string { return this.customer.timezone }
}
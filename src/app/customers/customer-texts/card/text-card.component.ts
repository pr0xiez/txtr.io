import { ISentMessagesR } from './../../../texts/interfaces';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'text-card',
  templateUrl: 'text-card.component.html',
  styleUrls: ['text-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TextCardComponent {
  @Input() message: ISentMessagesR

  get firstName() { return this.message.customer.firstName }
  get lastName() { return this.message.customer.lastName }
  get body() { return this.message.body }
  get toNumber() { return this.message.toNumber }
  get sentAt() { return this.message.createdAt }
}
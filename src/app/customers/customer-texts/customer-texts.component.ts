import { ISentMessagesR } from '../../texts/interfaces';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerTextsService } from '../../core/services/customer-texts.service'
import { Component, OnInit } from '@angular/core'
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'customer-texts',
  templateUrl: 'customer-texts.component.html',
  styleUrls: ['customer-texts.component.scss']
})

export class CustomerTextsComponent implements OnInit {
  constructor(
    public ctS: CustomerTextsService,
    private route: ActivatedRoute
  ) {}
  messages$: Observable<any[]>

  navigate(x) {
    console.log(`button clicked ${x}`)
  }

  ngOnInit() {
    this.messages$ = this.route.paramMap.map(x => this.ctS.sentMessages.filter(msg => msg.id === parseInt(x.get('id'))))
  }
}
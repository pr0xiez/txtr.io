import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'filter',
    templateUrl: 'filter.component.html',
    styleUrls: [ 'filter.component.scss' ]
})

export class FilterComponent implements OnInit {
    constructor() {}
    ngOnInit() { }

    filterForm = new FormGroup({
        
    })
}
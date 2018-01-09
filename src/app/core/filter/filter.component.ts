import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'filter',
    templateUrl: 'filter.component.html',
    styleUrls: [ 'filter.component.scss' ]
})

export class FilterComponent implements OnInit {

    filterForm: FormGroup

    constructor(private fb: FormBuilder) {

    }

    ngOnInit() { }

    createForm(){
        this.filterForm = this.fb.group({
            name: '',
            email: '',
            phone: '',
            startDate: Date,
            endDate: Date
        })
    }
}
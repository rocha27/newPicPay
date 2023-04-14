import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    template: ` ola`
})
export class ModalCreate {

    constructor(public ref: DynamicDialogRef) {}

    ngOnInit() {
    }
}
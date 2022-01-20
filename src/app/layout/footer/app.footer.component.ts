import { AppComponent } from './../../app.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
})
export class AppFooterComponent {
    constructor(public app: AppComponent) { }
}

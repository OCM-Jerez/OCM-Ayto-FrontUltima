import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer p-d-flex p-ai-center p-p-4 p-shadow-2">
            <img id="footer-logo" [src]="'assets/layout/images/footer-' + (app.layoutMode === 'light' ? 'ultima' : 'ultima-dark') + '.svg'" alt="ultima-footer-logo">
            <button pButton pRipple type="button" icon="pi pi-github fs-large" class="p-button-rounded p-button-text p-button-plain p-ml-auto p-mr-2"></button>
            <button pButton pRipple type="button" icon="pi pi-facebook fs-large" class="p-button-rounded p-button-text p-button-plain p-mr-2"></button>
            <button pButton pRipple type="button" icon="pi pi-twitter fs-large" class="p-button-rounded p-button-text p-button-plain p-mr-2"></button>
        </div>
    `
})
export class AppFooterComponent {
    constructor(public app: AppComponent) {}
}

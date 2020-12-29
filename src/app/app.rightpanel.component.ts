import {Component} from '@angular/core';
import { AppComponent } from './app.component';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-rightpanel',
    templateUrl: './app.rightpanel.component.html'
})
export class AppRightPanelComponent {
    constructor(public appMain: AppMainComponent, public app: AppComponent) {
    }
}

import {Component,Inject,forwardRef} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-rightpanel',
    templateUrl: './app.rightpanel.component.html'
})
export class AppRightPanel {

    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent) {}

}
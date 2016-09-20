import {Component,AfterViewInit} from '@angular/core';

declare var Rio: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/application.html'
})
export class Application implements AfterViewInit {

    ngAfterViewInit() {
        //Rio.init();
    }
}
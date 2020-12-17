import {Component, ElementRef, ViewChild} from '@angular/core';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public appMain: AppMainComponent, public app: AppComponent) {
    }

    activeItem: number;

    @ViewChild('searchInput') searchInputViewChild: ElementRef;

    mobileMegaMenuItemClick(index) {
        this.appMain.megaMenuMobileClick = true;
        this.activeItem = this.activeItem === index ? null : index;
    }

    searchAnimationEnd() {
        this.searchInputViewChild.nativeElement.focus();
    }
}

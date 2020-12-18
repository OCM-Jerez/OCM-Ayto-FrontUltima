import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MenuService {

    private menuSource = new Subject<string>();
    private megaMenuSource = new Subject<string>();
    private resetSource = new Subject();
    private resetMegaMenuSource = new Subject();

    menuSource$ = this.menuSource.asObservable();
    megaMenuSource$ = this.megaMenuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();
    resetMegaMenuSource$ = this.resetMegaMenuSource.asObservable();

    onMenuStateChange(key: string) {
        this.menuSource.next(key);
    }

    reset() {
        this.resetSource.next();
    }

    onMegaMenuStateChange(key: string) {
        this.megaMenuSource.next(key);
    }

    resetMegaMEnu() {
        this.resetMegaMenuSource.next();
    }
}

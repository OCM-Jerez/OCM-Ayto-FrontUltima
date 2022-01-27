import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
    exports: [
        TabViewModule,
        TabMenuModule,
    ],
})
export class SharedDetailModule { }

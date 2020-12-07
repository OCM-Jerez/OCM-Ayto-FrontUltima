import {Component} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="topbar-left" routerLink="/">
                <div class="logo"></div>
            </div>

            <div class="topbar-right">
                <a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)">
                    <i class="pi pi-angle-left"></i>
                </a>

                <a id="rightpanel-menu-button" href="#" (click)="app.onRightPanelButtonClick($event)">
                    <i class="pi pi-arrow-left"></i>
                </a>

                <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
                    <i class="pi pi-bars"></i>
                </a>

                <ul class="topbar-items animated fadeInDown" [ngClass]="{'topbar-items-visible': app.topbarMenuActive}">
                    <li #profile class="profile-item" *ngIf="app.profileMode==='top'||app.isHorizontal()"
                        [ngClass]="{'active-top-menu':app.activeTopbarItem === profile}">

                        <a href="#" (click)="app.onTopbarItemClick($event,profile)">
                            <img class="profile-image" src="assets/layout/images/avatar.png" />
                            <span class="topbar-item-name">Jane Williams</span>
                        </a>

                        <ul class="ultima-menu animated fadeInDown">
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="pi pi-user"></i>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="pi pi-lock"></i>
                                    <span>Privacy</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="pi pi-cog"></i>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="pi pi-power-off"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #notifications [ngClass]="{'active-top-menu':app.activeTopbarItem === notifications}">
                        <a href="#" (click)="app.onTopbarItemClick($event,notifications)">
                            <i class="topbar-icon pi pi-table"></i>
                            <span class="topbar-item-name">Apps</span>
                        </a>
                        <ul class="ultima-menu animated fadeInDown">
                            <li>
                                <ul class="p-d-flex">
                                    <li role="menuitem">
                                        <a class="p-d-flex p-flex-column p-jc-center p-ai-center p-pb-3" href="#" (click)="app.onTopbarItemClick($event,notifications)">
                                            <i class="pi pi-image p-my-3"></i>
                                            <h6>Products</h6>
                                        </a>
                                    </li>
                                    <li role="menuitem">
                                        <a class="p-d-flex p-flex-column p-jc-center p-ai-center p-pb-3" href="#" (click)="app.onTopbarSubItemClick($event)">
                                            <i class="pi pi-file-pdf p-my-3"></i>
                                            <h6>Reports</h6>
                                        </a>
                                    </li>
                                    <li role="menuitem">
                                        <a class="p-d-flex p-flex-column p-jc-center p-ai-center p-pb-3" href="#" (click)="app.onTopbarSubItemClick($event)">
                                            <i class="pi pi-dollar p-my-3"></i>
                                            <h6>Balance</h6>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul class="p-d-flex">
                                    <li role="menuitem">
                                        <a class="p-d-flex p-flex-column p-jc-center p-ai-center p-pb-3" href="#" (click)="app.onTopbarSubItemClick($event)">
                                            <i class="pi pi-cog p-my-3"></i>
                                            <h6>Settings</h6>
                                        </a>
                                    </li>
                                    <li role="menuitem">
                                        <a class="p-d-flex p-flex-column p-jc-center p-ai-center p-pb-3" href="#" (click)="app.onTopbarSubItemClick($event)">
                                            <i class="pi pi-key p-my-3"></i>
                                            <h6>Credentials</h6>
                                        </a>
                                    </li>
                                    <li role="menuitem">
                                        <a class="p-d-flex p-flex-column p-jc-center p-ai-center p-pb-3" href="#" (click)="app.onTopbarSubItemClick($event)">
                                            <i class="pi pi-sitemap p-my-3"></i>
                                            <h6>Sitemap</h6>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li #messages [ngClass]="{'active-top-menu':app.activeTopbarItem === messages}">
                        <a href="#" (click)="app.onTopbarItemClick($event,messages)">
                            <i class="topbar-icon pi pi-bell animated swing"></i>
                            <span class="topbar-badge animated rubberBand">4</span>
                            <span class="topbar-item-name">Notifications</span>
                        </a>
                        <ul class="ultima-menu animated fadeInDown">
                            <li role="menuitem">
                                <p class="topbar-notification p-ml-3 p-mt-3">You have <b>4</b> new notifications</p>
                            </li>
                            <li role="menuitem">
                                <a class="p-pb-0 p-mb-0" href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <div class="p-d-flex p-flex-row p-mt-3">
                                        <img class="p-mr-3" src="../assets/demo/images/avatar/avatar-1.png"/>
                                        <div class="topbar-message p-d-flex p-flex-column">
                                            <div class="p-d-flex p-jc-between">
                                                <h6 class="p-my-0 p-jc-start">Jerome Bell</h6>
                                                <span class="p-jc-end">42 mins ago</span>
                                            </div>
                                            <span>How to write content about your photographs?</span>
                                        </div>
                                    </div>
                                    <hr class="p-mt-4 p-mb-0"/>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a class="p-py-0 p-my-0" href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <div class="p-d-flex p-flex-row p-mt-3">
                                        <img class="p-mr-3" src="../assets/demo/images/avatar/avatar-2.png"/>
                                        <div class="topbar-message p-d-flex p-flex-column">
                                            <div class="p-d-flex p-jc-between">
                                                <h6 class="p-my-0 p-jc-start">Cameron Williamson</h6>
                                                <span class="p-jc-end">48 mins ago</span>
                                            </div>
                                            <span>Start a blog to reach your creative peak.</span>
                                        </div>
                                    </div>
                                    <hr class="p-mt-4 p-mb-0"/>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a class="p-py-0 p-my-0" href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <div class="p-d-flex p-flex-row p-mt-3">
                                        <img class="p-mr-3" src="../assets/demo/images/avatar/avatar-3.png"/>
                                        <div class="topbar-message p-d-flex p-flex-column">
                                            <div class="p-d-flex p-jc-between">
                                                <h6 class="p-my-0 p-jc-start">Anna Miles</h6>
                                                <span class="p-jc-end">1 day ago</span>
                                            </div>
                                            <span>Caring is the new marketing</span>
                                        </div>
                                    </div>
                                    <hr class="p-mt-4 p-mb-0"/>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a class="p-pt-0 p-mt-0" href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <div class="p-d-flex p-flex-row p-my-3">
                                        <img class="p-mr-3" src="../assets/demo/images/avatar/avatar-4.png"/>
                                        <div class="topbar-message p-d-flex p-flex-column">
                                            <div class="p-d-flex p-jc-between">
                                                <h6 class="p-my-0 p-jc-start">Arlene Mccoy</h6>
                                                <span class="p-jc-end">4 day ago</span>
                                            </div>
                                            <span>Starting your traveling blog with Vasco.</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #search class="search-item" [ngClass]="{'active-top-menu':app.activeTopbarItem === search}"
                        (click)="app.onTopbarItemClick($event,search)">
                        <span class="p-input-icon-left">
                            <i class="topbar-icon pi pi-search"></i>
                            <input type="text" pInputText placeholder="Search">
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class AppTopbarComponent {

    constructor(public app: AppMainComponent) {}

}

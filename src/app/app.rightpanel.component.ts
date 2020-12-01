import {Component} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-rightpanel',
    template: `
		<div class="layout-rightpanel" [ngClass]="{'layout-rightpanel-active': app.rightPanelActive}"
			 (click)="app.onRightPanelClick()">
			<div class="layout-rightpanel-wrapper">
				<div class="layout-rightpanel-online-members p-d-flex p-flex-column p-ml-3 p-mt-3">
					<h6>ONLINE MEMBERS</h6>
                    <hr class="p-mt-2 p-mb-3"/>
                    <div class="online-members p-d-flex p-flex-column">
                        <div class="p-d-flex p-flex-row p-mb-2">
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-1.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-2.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-3.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-4.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-5.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-6.png" alt=""/>
                        </div>
                        <div class="p-d-flex p-flex-row p-mb-2">
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-7.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-8.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-9.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-10.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-11.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-12.png" alt=""/>
                        </div>
                        <div class="p-d-flex p-flex-row p-mb-2">
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-13.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-14.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-15.png" alt=""/>
                            <img class="p-mr-1" src="../assets/demo/images/avatar/avatar-16.png" alt=""/>
                        </div>
                    </div>
                    <p><span style="color: #00BCD4">+19</span> Costumers</p>
				</div>
				<div class="layout-rightpanel-latest-activity  p-d-flex p-flex-column p-ml-3 p-mt-6">
                    <h6>LATEST ACTIVITY</h6>
                    <hr class="p-mt-2 p-mb-3"/>
                    <div class="activity-col p-d-flex p-flex-row p-pb-3">
                        <i class="pi pi-images p-as-start p-mr-2"></i>
                        <div class="p-d-flex p-flex-column">
                            <h6>New Sale</h6>
                            <p>Richard Jones has purchased a blue t-shirt for $79.</p>
                            <p class="activity-user p-d-flex p-ac-center"><img class="p-mr-1" src="../assets/demo/images/avatar/activity-1.png" alt=""/> Emmy Adams, 21.40</p>
                        </div>
                    </div>
                    <div class="activity-col p-d-flex p-flex-row p-py-3">
                        <i class="pi pi-arrow-circle-down p-as-start p-mr-2"></i>
                        <div class="p-d-flex p-flex-column">
                            <h6>Withdrawal Initiated</h6>
                            <p>Your request for withdrawal of $2500 has been initiated.</p>
                            <p class="activity-user p-d-flex p-ac-center"><img class="p-mr-1" src="../assets/demo/images/avatar/activity-2.png" alt=""/> Emily Walter, 21.40</p>
                        </div>
                    </div>
                    <div class="activity-col p-d-flex p-flex-row p-pt-3">
                        <i class="pi pi-question p-as-start p-mr-2"></i>
                        <div class="p-d-flex p-flex-column">
                            <h6>Question Received</h6>
                            <p>Jane Davis has posted a new question about your product.</p>
                            <p class="activity-user p-d-flex p-ac-center"><img class="p-mr-1" src="../assets/demo/images/avatar/activity-3.png" alt=""/> Jane Davis, 21.45</p>
                        </div>
                    </div>
				</div>
                <div class="layout-rightpanel-next-events p-d-flex p-flex-column p-ml-3 p-py-6 p-mb-6">
                    <h6>NEXT EVENTS</h6>
                    <hr class="p-mt-2 p-mb-3"/>
                    <p><i class="pi pi-eye p-mr-3"></i>A/B Test</p>
                    <p><i class="pi pi-video p-mr-3"></i>Video Shoot</p>
                    <p><i class="pi pi-sitemap p-mr-3"></i>Board Meeting</p>
                    <p><i class="pi pi-compass p-mr-3"></i>Q4 Planning</p>
                    <p><i class="pi pi-palette p-mr-3"></i>Design Training</p>
                </div>
			</div>
		</div>
    `
})
export class AppRightpanelComponent {
    constructor(public app: AppMainComponent) {
    }
}

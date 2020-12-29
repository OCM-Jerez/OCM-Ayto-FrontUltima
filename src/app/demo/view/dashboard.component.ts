import {Component, OnInit} from '@angular/core';
import {EventService} from '../service/eventservice';
import {SelectItem} from 'primeng/api';
import {Product} from '../domain/product';
import {ProductService} from '../service/productservice';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AppMainComponent } from 'src/app/app.main.component';
import { AppComponent } from 'src/app/app.component';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    cities: SelectItem[];

    products: Product[];

    ordersChart: any;

    ordersOptions: any;

    chartMonthlyData: any;

    chartData: any;

    selectedCity: any;

    timelineEvents: any[];

    overviewChartData1: any;

    overviewChartData2: any;

    overviewChartData3: any;

    overviewChartData4: any;

    overviewChartOptions: any;

    constructor(public app: AppComponent, public appMain: AppMainComponent, private productService: ProductService, private eventService: EventService,
                private breadcrumbService: AppBreadcrumbService) {
      this.breadcrumbService.setItems([
          {label: 'Dashboard', routerLink: ['/']}
      ]); }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.cities = [];
        this.cities.push({label: 'Select City', value: null});
        this.cities.push({label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}});
        this.cities.push({label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}});
        this.cities.push({label: 'London', value: {id: 3, name: 'London', code: 'LDN'}});
        this.cities.push({label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}});
        this.cities.push({label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}});

        this.ordersChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
            datasets: [{
                label: 'New Orders',
                data: [31, 83, 69, 29, 62, 25, 59, 26, 46],
                borderColor: [
                    '#4DD0E1',
                ],
                backgroundColor: [
                    'rgba(77, 208, 225, 0.8)',
                ],
                borderWidth: 2,
                fill: true
            }, {
                label: 'Completed Orders',
                data: [67, 98, 27, 88, 38, 3, 22, 60, 56],
                borderColor: [
                    '#3F51B5',
                ],
                backgroundColor: [
                    'rgba(63, 81, 181, 0.8)',
                ],
                borderWidth: 2,
                fill: true,
            }]
        };

        this.ordersOptions = this.getOrdersOptions();

        this.overviewChartData1 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
            datasets: [{
                data: [18,11,15,5,25,30,29,22,17],
                borderColor: [
                    '#4DD0E1',
                ],
                backgroundColor: [
                    'rgba(77, 208, 225, 0.8)',
                ],
                borderWidth: 2,
                fill: true
            }
        ]};

        this.overviewChartData2 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
            datasets: [{
                data: [11,3,5,11,30,16,1,1,30],
                borderColor: [
                    '#4DD0E1',
                ],
                backgroundColor: [
                    'rgba(77, 208, 225, 0.8)',
                ],
                borderWidth: 2,
                fill: true
            }
        ]};

        this.overviewChartData3 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
            datasets: [{
                data: [3,12,18,8,9,15,24,3,17],
                borderColor: [
                    '#4DD0E1',
                ],
                backgroundColor: [
                    'rgba(77, 208, 225, 0.8)',
                ],
                borderWidth: 2,
                fill: true
            }
        ]};

        this.overviewChartData4 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
            datasets: [{
                data: [29,29,17,9,30,28,6,23,2],
                borderColor: [
                    '#4DD0E1',
                ],
                backgroundColor: [
                    'rgba(77, 208, 225, 0.8)',
                ],
                borderWidth: 2,
                fill: true
            }
        ]};

        this.overviewChartOptions = {
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }]
            },
            tooltips: {
                enabled: false
            },
            elements: {
                point:{
                    radius: 0
                }
            },
        };

        this.setOverviewColors();

        this.appMain['refreshChart'] = () => {
            this.ordersOptions = this.getOrdersOptions();
            this.setOverviewColors();
        };

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Completed',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4DD0E1'
                },
                {
                    label: 'Cancelled',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#212121'
                }
            ]
        };

        this.chartMonthlyData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#80DEEA',
                    borderColor: 'white',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#0097A7',
                    borderColor: 'white',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.timelineEvents = [
            {status: 'Ordered', date: '15/10/2020 10:30', icon: "pi pi-shopping-cart", color: '#E91E63', description: "Richard Jones (C8012) has ordered a blue t-shirt for $79."},
            {status: 'Processing', date: '15/10/2020 14:00', icon: "pi pi-cog", color: '#FB8C00' , description: "Order #99207 has processed succesfully."},
            {status: 'Shipped', date: '15/10/2020 16:15', icon: "pi pi-compass", color: '#673AB7' , description: "Order #99207 has shipped with shipping code 2222302090."},
            {status: 'Delivered', date: '16/10/2020 10:00', icon: "pi pi-check-square", color: '#0097A7' , description: "Richard Jones (C8012) has recieved his blue t-shirt."}
        ];
    }

    setOverviewColors() {
        const { pinkColor, tealColor } = this.getOverviewColors();

        this.overviewChartData1.datasets[0].borderColor[0] = tealColor;
        this.overviewChartData1.datasets[0].backgroundColor[0] = tealColor;

        this.overviewChartData2.datasets[0].borderColor[0] = tealColor;
        this.overviewChartData2.datasets[0].backgroundColor[0] = tealColor;

        this.overviewChartData3.datasets[0].borderColor[0] = pinkColor;
        this.overviewChartData3.datasets[0].backgroundColor[0] = pinkColor;

        this.overviewChartData4.datasets[0].borderColor[0] = tealColor;
        this.overviewChartData4.datasets[0].backgroundColor[0] = tealColor;
    }

    getOverviewColors() {
        const isLight = this.app.layoutMode === 'light';
        return {
            pinkColor: isLight ? '#EC407A' : '#F48FB1',
            tealColor: isLight ? '#26A69A' : '#80CBC4'
        }
    }

    getOrdersOptions() {
        const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
        const gridLinesColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';
        return {
            legend: {
                display: true,
                labels: {
                    fontColor: textColor
                }
            },
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: textColor
                    },
                    gridLines: {
                        color: gridLinesColor
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: textColor
                    },
                    gridLines: {
                        color: gridLinesColor
                    }
                }]
            }
        }
    }
}

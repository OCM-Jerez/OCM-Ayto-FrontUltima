import {Component, OnInit} from '@angular/core';
import {EventService} from '../demo/service/eventservice';
import {SelectItem} from 'primeng/api';
import {Product} from '../demo/domain/product';
import {ProductService} from '../demo/service/productservice';
import {AppBreadcrumbService} from '../app.breadcrumb.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AppMainComponent } from '../app.main.component';
import { AppComponent } from '../app.component';

@Component({
    templateUrl: './widgets.component.html'
})
export class WidgetsComponent implements OnInit {

    cities: SelectItem[];

    products: Product[];

    chartData: any;

    chartOptions: any;

    chartMonthlyData: any;

    radarChartData: any;

    pieData: any;

    mainData: any;

    events: any[];

    selectedCity: any;

    scheduleOptions: any;

    timelineEvents: any[];

    constructor(public app: AppComponent, public appMain: AppMainComponent, private productService: ProductService, private eventService: EventService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Utilities' },
            { label: 'Widgets', routerLink: ['/utilities/widgets'] }
        ]);
    }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.eventService.getEvents().then(events => {this.events = events; });

        this.cities = [];
        this.cities.push({label: 'Select City', value: null});
        this.cities.push({label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}});
        this.cities.push({label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}});
        this.cities.push({label: 'London', value: {id: 3, name: 'London', code: 'LDN'}});
        this.cities.push({label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}});
        this.cities.push({label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}});

        this.mainData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'New',
                data: [2, 7, 20, 9, 16, 9, 5],
                backgroundColor: [
                    'rgba(77, 208, 225, 0.5)',
                ],
                borderColor: [
                    '#45B2C0',
                ],
                borderWidth: 3,
                fill: true
            }]
        };

        this.chartData = this.getChartData();
        this.chartOptions = this.getChartOptions();

        this.appMain['refreshChart'] = () => {
            this.chartData = this.getChartData();
            this.chartOptions = this.getChartOptions();
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

        this.scheduleOptions = {
            plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
            defaultDate: '2017-02-12',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }
        };

        this.radarChartData = {
            labels: ['Ordered', 'Processed', 'Shipped', 'Delivered', 'Refunded'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96]
                }
            ]
        };

        this.pieData = {
            labels: ['O','D','R'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#0097A7",
                        "#EF6C00",
                        "#455A64"
                    ],
                    hoverBackgroundColor: [
                        "#00818E",
                        "#C55900",
                        "#354851"
                    ]
                }]
        };

        this.timelineEvents = [
            {status: 'Ordered', date: '15/10/2020 10:30', icon: "pi pi-shopping-cart", color: '#E91E63'},
            {status: 'Processing', date: '15/10/2020 14:00', icon: "pi pi-cog", color: '#FB8C00'},
            {status: 'Shipped', date: '15/10/2020 16:15', icon: "pi pi-compass", color: '#673AB7'},
            {status: 'Delivered', date: '16/10/2020 10:00', icon: "pi pi-check-square", color: '#0097A7'}
        ];
    }

    getChartData() {
        const isLight = this.app.layoutMode === 'light';
        const completedColors = {
            borderColor: isLight ? '#00ACC1' : '#4DD0E1',
            backgroundColor: isLight ? 'rgb(0, 172, 193, .3)' : 'rgb(77, 208, 225, .3)'
        };
        const canceledColors = {
            borderColor: isLight ? '#FF9800' : '#FFB74D',
            backgroundColor: isLight ? 'rgb(255, 152, 0, .3)' : 'rgb(255, 183, 77, .3)'
        };

        return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Completed',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: completedColors.borderColor,
                    backgroundColor: completedColors.backgroundColor,
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: 'Cancelled',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: canceledColors.borderColor,
                    backgroundColor: canceledColors.backgroundColor,
                    borderWidth: 2,
                    fill: true
                }
            ]
        };
    }

    getChartOptions() {
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

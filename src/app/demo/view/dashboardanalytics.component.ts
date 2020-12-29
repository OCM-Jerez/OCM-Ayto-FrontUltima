import {Component, OnInit, ViewChild} from '@angular/core';
import {EventService} from '../service/eventservice';
import {SelectItem} from 'primeng/api';
import {Product} from '../domain/product';
import {ProductService} from '../service/productservice';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';
import {UIChart} from 'primeng/chart';
import { AppComponent } from 'src/app/app.component';
import { AppMainComponent } from 'src/app/app.main.component';

@Component({
    templateUrl: './dashboardanalytics.component.html'
})
export class DashboardAnalyticsComponent implements OnInit {

    cities: SelectItem[];

    products: Product[];

    chartMonthlyData: any;

    chartMonthlyOptions: any;

    doughnutData: any;

    doughnutOptions: any;

    pieData: any;

    mainData: any;

    events: any[];

    selectedCity: any;

    scheduleOptions: any;

    timelineEvents: any[];

    @ViewChild('doughnut') doughnutViewChild: UIChart;

    @ViewChild('bar') chartViewChild: UIChart;

    constructor(public app: AppComponent, public appMain: AppMainComponent, private productService: ProductService, private eventService: EventService,
                private breadcrumbService: AppBreadcrumbService) {
      this.breadcrumbService.setItems([
          {label: 'Dashboard Analytics', routerLink: ['/favorites/dashboardanalytics']}
      ]); }

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

        this.chartMonthlyData = this.getChartData();
        this.chartMonthlyOptions = this.getChartOptions();

        this.doughnutData = this.getDoughnutData();
        this.doughnutOptions = this.getDoughnutOptions();

        this.appMain['refreshChart'] = () => {
            this.chartMonthlyData = this.getChartData();
            this.chartMonthlyOptions = this.getChartOptions();
            this.doughnutData = this.getDoughnutData();
            this.doughnutOptions = this.getDoughnutOptions();
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

    getColors() {
        const isLight = this.app.layoutMode === 'light';
        return {
            blueColor: isLight ? '#2196F3' : '#64B5F6',
            pinkColor: isLight ? '#E91E63' : '#F06292',
            indigoColor: isLight ? '#3F51B5' : '#7986CB',
            orangeColor: isLight ? '#FF9800' : '#FFB74D',
            purpleColor: isLight ? '#9C27B0' : '#BA68C8',
            greenColor: isLight ? '#4CAF50' : '#81C784',
            limeColor: isLight ? '#CDDC39' : '#DCE775',
            brownColor: isLight ? '#795548' : '#A1887F',
            cyanColor: isLight ? '#00ACC1' : '#4DD0E1'
        }
    }

    getChartData() {
        const { blueColor, pinkColor, indigoColor, orangeColor, purpleColor,
            greenColor, limeColor, brownColor, cyanColor }  = this.getColors();

        return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: '2012',
                    data: [89,18,95,18,97,61,54],
                    borderColor: blueColor,
                    backgroundColor: blueColor,
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: '2013',
                    data: [18,36,39,58,41,50,72],
                    borderColor: pinkColor,
                    backgroundColor: pinkColor,
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: '2014',
                    data: [31,4,35,74,47,35,46],
                    borderColor: indigoColor,
                    backgroundColor: indigoColor,
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: '2015',
                    data: [6,25,97,12,7,70,42],
                    borderColor: orangeColor,
                    backgroundColor: orangeColor,
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: '2016',
                    data: [81,3,5,11,59,47,99],
                    borderColor: purpleColor,
                    backgroundColor: purpleColor,
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: '2017',
                    data: [68,47,46,46,61,70,94],
                    borderColor: greenColor,
                    backgroundColor: greenColor,
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: '2018',
                    data: [31,9,18,76,6,11,79],
                    borderColor: limeColor,
                    backgroundColor: limeColor,
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: '2019',
                    data: [85,37,47,29,2,10,54],
                    borderColor: brownColor,
                    backgroundColor: brownColor,
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: '2020',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: cyanColor,
                    backgroundColor: cyanColor,
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
            maintainAspectRatio: false,
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
                    categoryPercentage: .9,
                    barPercentage: .8,
                    ticks: {
                        fontColor: textColor
                    },
                    gridLines: {
                        color: gridLinesColor
                    }
                }]
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    }

    getDoughnutData() {
        const { blueColor, pinkColor, indigoColor, orangeColor, purpleColor,
            greenColor, brownColor }  = this.getColors();
        const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

        return {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday'],
            datasets: [
                {
                    data: [11, 29, 71, 33, 28, 95, 6],
                    backgroundColor: [blueColor, pinkColor, indigoColor, orangeColor, purpleColor, greenColor, brownColor],
                    borderColor
                }
            ]
        };
    }

    getDoughnutOptions() {
        const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
        return {
            responsive: true,
            legend: {
                position: 'top',
                labels: {
                    fontColor: textColor
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        };
    }

    changeMonthlyDataView() {
        if (this.chartViewChild.chart.options.scales.xAxes[0].stacked) {
            this.chartViewChild.chart.options.scales.xAxes[0].stacked = false;
            this.chartViewChild.chart.options.scales.yAxes[0].stacked = false;
        }
        else {
            this.chartViewChild.chart.options.scales.xAxes[0].stacked = true;
            this.chartViewChild.chart.options.scales.yAxes[0].stacked = true;
        }

        this.chartViewChild.chart.update();
    }

    changeDoughnutDataView() {
        if (this.doughnutViewChild.chart.options.circumference === Math.PI) {
            this.doughnutViewChild.chart.options.circumference = 2 * Math.PI;
            this.doughnutViewChild.chart.options.rotation = -Math.PI / 2;
        } else {
            this.doughnutViewChild.chart.options.circumference = Math.PI;
            this.doughnutViewChild.chart.options.rotation = -Math.PI;
        }

        this.doughnutViewChild.chart.update();
    }
}

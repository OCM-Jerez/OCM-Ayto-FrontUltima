import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { AppBreadcrumbService } from "../../layout/breadcrumb/app.breadcrumb.service";
import { AppMainComponent } from "../../app.main.component";
import { AppComponent } from "../../app.component";

@Component({
    templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
    ordersChart: any;
    ordersOptions: any;
    chartData: any;
    overviewChartData1: any;
    overviewChartData2: any;
    overviewChartData3: any;
    overviewChartData4: any;
    overviewChartOptions: any;

    constructor(
        public app: AppComponent,
        public appMain: AppMainComponent,
        private breadcrumbService: AppBreadcrumbService
    ) {
        this.breadcrumbService.setItems([
            { label: "Dashboard ingresos", routerLink: ["/"] },
        ]);
    }

    ngOnInit() {


        this.ordersChart = {
            labels: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre",
            ],
            datasets: [
                {
                    label: "2020",
                    data: [31, 83, 69, 29, 62, 25, 59, 26, 46, 34, 21, 54],
                    borderColor: ["#4DD0E1"],
                    backgroundColor: ["rgba(77, 208, 225, 0.8)"],
                    borderWidth: 2,
                    fill: false,
                },
                {
                    label: "2021",
                    data: [67, 98, 27, 88, 38, 3, 22, 60, 56, 34, 45, 56],
                    borderColor: ["#3F51B5"],
                    backgroundColor: ["rgba(63, 81, 181, 0.8)"],
                    borderWidth: 2,
                    fill: false,
                },
            ],
        };

        this.overviewChartData1 = {
            labels: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
            ],
            datasets: [
                {
                    data: [50, 64, 32, 24, 18, 27, 20, 36, 30],
                    borderColor: ["#4DD0E1"],
                    backgroundColor: ["rgba(77, 208, 225, 0.8)"],
                    borderWidth: 2,
                    fill: true,
                },
            ],
        };

        this.overviewChartData2 = {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
            ],
            datasets: [
                {
                    data: [11, 30, 52, 35, 39, 20, 14, 18, 29],
                    borderColor: ["#4DD0E1"],
                    backgroundColor: ["rgba(77, 208, 225, 0.8)"],
                    borderWidth: 2,
                    fill: true,
                },
            ],
        };

        this.overviewChartData3 = {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
            ],
            datasets: [
                {
                    data: [20, 29, 39, 36, 45, 24, 28, 20, 15],
                    borderColor: ["#4DD0E1"],
                    backgroundColor: ["rgba(77, 208, 225, 0.8)"],
                    borderWidth: 2,
                    fill: true,
                },
            ],
        };

        this.overviewChartData4 = {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
            ],
            datasets: [
                {
                    data: [30, 39, 50, 21, 33, 18, 10, 24, 20],
                    borderColor: ["#4DD0E1"],
                    backgroundColor: ["rgba(77, 208, 225, 0.8)"],
                    borderWidth: 2,
                    fill: true,
                },
            ],
        };

        this.overviewChartOptions = {
            legend: {
                display: false,
            },
            responsive: true,
            scales: {
                yAxes: [
                    {
                        display: false,
                    },
                ],
                xAxes: [
                    {
                        display: false,
                    },
                ],
            },
            tooltips: {
                enabled: false,
            },
            elements: {
                point: {
                    radius: 0,
                },
            },
        };
    }

}

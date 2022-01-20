import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { SelectItem } from "primeng/api";
import { Product } from "../../domain/product";

import { AppBreadcrumbService } from "../../layout/breadcrumb/app.breadcrumb.service";
import { UIChart } from "primeng/chart";
import { AppComponent } from "../../app.component";
import { AppMainComponent } from "../../app.main.component";
import { throwError } from 'rxjs';

@Component({
    templateUrl: "./dashboard-gastos.component.html",
})
export class DashboardGastosComponent implements OnInit, AfterViewInit {
    chartMonthlyData: any;
    chartMonthlyOptions: any;
    doughnutData: any;
    doughnutOptions: any;
    pieData: any;
    pieOptions: any;
    mainData: any;

    @ViewChild("doughnut") doughnutViewChild: UIChart;
    @ViewChild("bar") chartViewChild: UIChart;
    @ViewChild("pie") pieViewChild: UIChart;

    constructor(
        public app: AppComponent,
        public appMain: AppMainComponent,
        private breadcrumbService: AppBreadcrumbService
    ) {
        this.breadcrumbService.setItems([
            {
                label: "Dashboard gastos",
                routerLink: ["/dashboardanalytics"],
            },
        ]);
    }


    ngOnInit() {
        this.chartMonthlyData = this.getChartData();
        this.chartMonthlyOptions = this.getChartOptions();

        this.doughnutData = this.getDoughnutData();
        this.doughnutOptions = this.getDoughnutOptions();

        this.pieData = this.getPieData();
        this.pieOptions = this.getPieOptions();

        this.appMain["refreshChart"] = () => {
            this.chartMonthlyData = this.getChartData();
            this.chartMonthlyOptions = this.getChartOptions();
            this.doughnutData = this.getDoughnutData();
            this.doughnutOptions = this.getDoughnutOptions();
            this.pieData = this.getPieData();
            this.pieOptions = this.getPieOptions();
        };
    }

    ngAfterViewInit(): void {
        throwError('sin definir');
    }

    ngOnDestroy() {

    }

    getColors() {
        const isLight = this.app.layoutMode === "light";
        return {
            pinkColor: isLight ? "#EC407A" : "#F48FB1",
            purpleColor: isLight ? "#AB47BC" : "#CE93D8",
            deeppurpleColor: isLight ? "#7E57C2" : "#B39DDB",
            indigoColor: isLight ? "#5C6BC0" : "#9FA8DA",
            blueColor: isLight ? "#42A5F5" : "#90CAF9",
            lightblueColor: isLight ? "#29B6F6" : "#81D4FA",
            cyanColor: isLight ? "#00ACC1" : "#4DD0E1",
            tealColor: isLight ? "#26A69A" : "#80CBC4",
            greenColor: isLight ? "#66BB6A" : "#A5D6A7",
            lightgreenColor: isLight ? "#9CCC65" : "#C5E1A5",
            limeColor: isLight ? "#D4E157" : "#E6EE9C",
            yellowColor: isLight ? "FFEE58" : "#FFF59D",
            amberColor: isLight ? "#FFCA28" : "#FFE082",
            orangeColor: isLight ? "#FFA726" : "#FFCC80",
            deeporangeColor: isLight ? "#FF7043" : "#FFAB91",
            brownColor: isLight ? "#8D6E63" : "#BCAAA4",
        };
    }

    getPieData() {
        const { limeColor, blueColor, tealColor } = this.getColors();
        const borderColor =
            getComputedStyle(document.body).getPropertyValue(
                "--divider-color"
            ) || "rgba(160, 167, 181, .3)";
        return {
            labels: ["O", "D", "R"],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [blueColor, tealColor, limeColor],
                    borderColor,
                },
            ],
        };
    }

    getPieOptions() {
        const textColor =
            getComputedStyle(document.body).getPropertyValue("--text-color") ||
            "rgba(0, 0, 0, 0.87)";
        const fontFamily = getComputedStyle(document.body).getPropertyValue(
            "--font-family"
        );
        return {
            responsive: true,
            aspectRatio: 1,
            legend: {
                position: "top",
                labels: {
                    fontFamily,
                    fontColor: textColor,
                },
            },
            animation: {
                animateScale: true,
                animateRotate: true,
            },
        };
    }

    getChartData() {
        const {
            limeColor,
            amberColor,
            orangeColor,
            blueColor,
            lightblueColor,
            cyanColor,
            tealColor,
            greenColor,
            lightgreenColor,
        } = this.getColors();

        return {
            labels: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
            ],
            datasets: [
                {
                    label: "2012",
                    data: [6, 25, 97, 12, 7, 70, 42],
                    borderColor: blueColor,
                    backgroundColor: blueColor,
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: "2013",
                    data: [81, 3, 5, 11, 59, 47, 99],
                    borderColor: lightblueColor,
                    backgroundColor: lightblueColor,
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: "2014",
                    data: [68, 47, 46, 46, 61, 70, 94],
                    borderColor: cyanColor,
                    backgroundColor: cyanColor,
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: "2015",
                    data: [31, 9, 18, 76, 6, 11, 79],
                    borderColor: tealColor,
                    backgroundColor: tealColor,
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: "2016",
                    data: [85, 37, 47, 29, 2, 10, 54],
                    borderColor: greenColor,
                    backgroundColor: greenColor,
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: "2017",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: lightgreenColor,
                    backgroundColor: lightgreenColor,
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: "2018",
                    data: [89, 18, 95, 18, 97, 61, 54],
                    borderColor: limeColor,
                    backgroundColor: limeColor,
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: "2019",
                    data: [18, 36, 39, 58, 41, 50, 72],
                    borderColor: amberColor,
                    backgroundColor: amberColor,
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: "2020",
                    data: [31, 4, 35, 74, 47, 35, 46],
                    borderColor: orangeColor,
                    backgroundColor: orangeColor,
                    borderWidth: 2,
                    fill: true,
                },
            ],
        };
    }

    getChartOptions() {
        const textColor =
            getComputedStyle(document.body).getPropertyValue("--text-color") ||
            "rgba(0, 0, 0, 0.87)";
        const gridLinesColor =
            getComputedStyle(document.body).getPropertyValue(
                "--divider-color"
            ) || "rgba(160, 167, 181, .3)";
        const fontFamily = getComputedStyle(document.body).getPropertyValue(
            "--font-family"
        );
        return {
            legend: {
                display: true,
                labels: {
                    fontFamily,
                    fontColor: textColor,
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            fontFamily,
                            fontColor: textColor,
                        },
                        gridLines: {
                            color: gridLinesColor,
                        },
                    },
                ],
                xAxes: [
                    {
                        categoryPercentage: 0.9,
                        barPercentage: 0.8,
                        ticks: {
                            fontFamily,
                            fontColor: textColor,
                        },
                        gridLines: {
                            color: gridLinesColor,
                        },
                    },
                ],
            },
            animation: {
                animateScale: true,
                animateRotate: true,
            },
        };
    }

    getDoughnutData() {
        const {
            blueColor,
            lightblueColor,
            cyanColor,
            tealColor,
            greenColor,
            lightgreenColor,
            orangeColor,
        } = this.getColors();
        const borderColor =
            getComputedStyle(document.body).getPropertyValue(
                "--divider-color"
            ) || "rgba(160, 167, 181, .3)";

        return {
            labels: [
                "Domingo",
                "Lunes",
                "Martes",
                "Miercoles",
                "Jueves",
                "Viernes",
                "Sabado",
            ],
            datasets: [
                {
                    data: [11, 29, 71, 33, 28, 95, 6],
                    backgroundColor: [
                        blueColor,
                        lightblueColor,
                        cyanColor,
                        tealColor,
                        greenColor,
                        lightgreenColor,
                        orangeColor,
                    ],
                    borderColor,
                },
            ],
        };
    }

    getDoughnutOptions() {
        const textColor =
            getComputedStyle(document.body).getPropertyValue("--text-color") ||
            "rgba(0, 0, 0, 0.87)";
        const fontFamily = getComputedStyle(document.body).getPropertyValue(
            "--font-family"
        );
        return {
            responsive: true,
            legend: {
                position: "top",
                labels: {
                    fontFamily,
                    fontColor: textColor,
                },
            },
            circumference: Math.PI,
            rotation: -Math.PI,
            animation: {
                animateScale: true,
                animateRotate: true,
            },
        };
    }

    changeMonthlyDataView() {
        if (this.chartViewChild.chart.options.scales.xAxes[0].stacked) {
            this.chartViewChild.chart.options.scales.xAxes[0].stacked = false;
            this.chartViewChild.chart.options.scales.yAxes[0].stacked = false;
        } else {
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

    togglePieDoughnut() {
        this.pieViewChild.chart.options.cutoutPercentage = this.pieViewChild
            .chart.options.cutoutPercentage
            ? 0
            : 50;
        this.pieViewChild.chart.update();
    }

    changePieDoughnutDataView() {
        if (this.pieViewChild.chart.options.circumference === Math.PI) {
            this.pieViewChild.chart.options.circumference = 2 * Math.PI;
            this.pieViewChild.chart.options.rotation = -Math.PI / 2;
        } else {
            this.pieViewChild.chart.options.circumference = Math.PI;
            this.pieViewChild.chart.options.rotation = -Math.PI;
        }

        this.pieViewChild.chart.update();
    }
}

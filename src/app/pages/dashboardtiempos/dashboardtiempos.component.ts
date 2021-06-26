import { Component, OnInit, ViewChild } from "@angular/core";

import { UIChart } from "primeng/chart";
import { AppComponent } from "src/app/app.component";

@Component({
    selector: "app-dashboardtiempos",
    templateUrl: "./dashboardtiempos.component.html",
    styleUrls: ["./dashboardtiempos.component.scss"],
})
export class DashboardtiemposComponent implements OnInit {
    doughnutData: any;
    doughnutOptions: any;
    @ViewChild("doughnut") doughnutViewChild: UIChart;

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.doughnutData = this.getDoughnutData();
        this.doughnutOptions = this.getDoughnutOptions();
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
                position: "null",
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
}

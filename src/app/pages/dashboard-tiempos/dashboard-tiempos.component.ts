import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/highcharts-more';
HC_exporting(Highcharts);
import * as moment from 'moment'

@Component({
    selector: "app-dashboardtiempos",
    templateUrl: "./dashboard-tiempos.component.html",
    styleUrls: ["./dashboard-tiempos.component.scss"],
})

export class DashboardtiemposComponent {
    Highcharts: typeof Highcharts = Highcharts; // required
    chartConstructor = 'chart'; // optional string, defaults to 'chart'
    updateFlag = false; // optional boolean
    oneToOneFlag = true; // optional boolean, defaults to false
    runOutsideAngular = false; // optional boolean, defaults to false
    fechaNormativa = moment("2020-10-15");
    now = moment();
    diasRetraso = this.now.diff(this.fechaNormativa, 'days');


    chartOptions: Highcharts.Options = {
        chart: {
            type: 'gauge',
            plotBackgroundColor: undefined,
            plotBackgroundImage: undefined,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [
                {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            // [0, '#32CD32'],
                            // [1, '#32CD32']
                            [0, '#FFF'],
                            [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                },
                {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            // [0, '#32CD32'],
                            // [1, '#32CD32']
                            [0, '#333'],
                            [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                },
                {
                    // default background
                },
                {
                    // backgroundColor: '#32CD32',
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }
            ]
        },
        // the value axis
        yAxis: {
            min: 0,
            max: 450,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2
                // rotation: 'auto'
            },
            title: {
                text: 'días'
            },
            plotBands: [
                {
                    from: 0,
                    to: 30,
                    color: '#55BF3B' // green
                },
                {
                    from: 30,
                    to: 60,
                    color: '#DDDF0D' // yellow
                },
                {
                    from: 60,
                    to: 200,
                    color: '#D0782A' // red
                },
                {
                    from: 200,
                    to: 450,
                    color: '#DF5353' // red
                }
            ]
        },

        series: [
            {
                type: 'gauge',
                name: 'Speed',
                data: [this.diasRetraso],
                tooltip: {
                    valueSuffix: ' días'
                }
            }
        ]

    }; // required
    chartCallback: Highcharts.ChartCallbackFunction = function (chart) {
    }; // optional function, defaults to

}
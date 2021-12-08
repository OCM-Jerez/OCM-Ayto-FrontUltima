import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
// import { EventService } from '../service/eventservice';
import { EventService } from "../../service/eventservice";
import { SelectItem } from "primeng/api";
// import { Product } from '../domain/product';
import { Product } from "../../domain/product";
// import { ProductService } from '../service/productservice';
import { ProductService } from "../../service/productservice";
import { AppBreadcrumbService } from "../../layout/breadcrumb/app.breadcrumb.service";
import { AppMainComponent } from "src/app/app.main.component";
import { AppComponent } from "src/app/app.component";

@Component({
    templateUrl: "./dashboard.component.html",
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
    chatMessages: any[];
    chatEmojis: any[];

    @ViewChild("chatcontainer") chatContainerViewChild: ElementRef;

    constructor(
        public app: AppComponent,
        public appMain: AppMainComponent,
        private productService: ProductService,
        private eventService: EventService,
        private breadcrumbService: AppBreadcrumbService
    ) {
        this.breadcrumbService.setItems([
            { label: "Dashboard", routerLink: ["/"] },
        ]);
    }

    ngOnInit() {
        this.productService
            .getProducts()
            .then((data) => (this.products = data));

        this.cities = [];
        this.cities.push({ label: "Select City", value: null });
        this.cities.push({
            label: "New York",
            value: { id: 1, name: "New York", code: "NY" },
        });
        this.cities.push({
            label: "Rome",
            value: { id: 2, name: "Rome", code: "RM" },
        });
        this.cities.push({
            label: "London",
            value: { id: 3, name: "London", code: "LDN" },
        });
        this.cities.push({
            label: "Istanbul",
            value: { id: 4, name: "Istanbul", code: "IST" },
        });
        this.cities.push({
            label: "Paris",
            value: { id: 5, name: "Paris", code: "PRS" },
        });

        this.chatMessages = [
            {
                from: "Ioni Bowcher",
                url: "assets/demo/images/avatar/ionibowcher.png",
                messages: [
                    "Hey M. hope you are well.",
                    "Our idea is accepted by the board. Now it’s time to execute it",
                ],
            },
            { messages: ["We did it! 🤠"] },
            {
                from: "Ioni Bowcher",
                url: "assets/demo/images/avatar/ionibowcher.png",
                messages: ["That's really good!"],
            },
            { messages: ["But it’s important to ship MVP ASAP"] },
            {
                from: "Ioni Bowcher",
                url: "assets/demo/images/avatar/ionibowcher.png",
                messages: [
                    "I’ll be looking at the process then, just to be sure 🤓",
                ],
            },
            { messages: ["That’s awesome. Thanks!"] },
        ];

        this.chatEmojis = [
            "😀",
            "😃",
            "😄",
            "😁",
            "😆",
            "😅",
            "😂",
            "🤣",
            "😇",
            "😉",
            "😊",
            "🙂",
            "🙃",
            "😋",
            "😌",
            "😍",
            "🥰",
            "😘",
            "😗",
            "😙",
            "😚",
            "🤪",
            "😜",
            "😝",
            "😛",
            "🤑",
            "😎",
            "🤓",
            "🧐",
            "🤠",
            "🥳",
            "🤗",
            "🤡",
            "😏",
            "😶",
            "😐",
            "😑",
            "😒",
            "🙄",
            "🤨",
            "🤔",
            "🤫",
            "🤭",
            "🤥",
            "😳",
            "😞",
            "😟",
            "😠",
            "😡",
            "🤬",
            "😔",
            "😟",
            "😠",
            "😡",
            "🤬",
            "😔",
            "😕",
            "🙁",
            "😬",
            "🥺",
            "😣",
            "😖",
            "😫",
            "😩",
            "🥱",
            "😤",
            "😮",
            "😱",
            "😨",
            "😰",
            "😯",
            "😦",
            "😧",
            "😢",
            "😥",
            "😪",
            "🤤",
        ];

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

        this.ordersOptions = this.getOrdersOptions();

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

        this.setOverviewColors();

        this.appMain["refreshChart"] = () => {
            this.ordersOptions = this.getOrdersOptions();
            this.setOverviewColors();
        };

        this.chartData = {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
            ],
            datasets: [
                {
                    label: "Completed",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: "#4DD0E1",
                },
                {
                    label: "Cancelled",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: "#212121",
                },
            ],
        };

        this.chartMonthlyData = {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
            ],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: "#80DEEA",
                    borderColor: "white",
                    data: [65, 59, 80, 81, 56, 55, 40],
                },
                {
                    label: "My Second dataset",
                    backgroundColor: "#0097A7",
                    borderColor: "white",
                    data: [28, 48, 40, 19, 86, 27, 90],
                },
            ],
        };

        this.timelineEvents = [
            {
                status: "Preparación",
                date: "15/10/2020 10:30",
                icon: "pi pi-shopping-cart",
                color: "#E91E63",
                description: "",
            },
            {
                status: "Acuerdo",
                date: "15/10/2020 14:00",
                icon: "pi pi-cog",
                color: "#FB8C00",
                description: "",
            },
            {
                status: "Aprobación",
                date: "15/10/2020 16:15",
                icon: "pi pi-compass",
                color: "#673AB7",
                description: "",
            },
            {
                status: "Ejecucuión",
                date: "16/10/2020 10:00",
                icon: "pi pi-check-square",
                color: "#0097A7",
                description: "",
            },
        ];
    }

    onEmojiClick(chatInput, emoji) {
        if (chatInput) {
            chatInput.value += emoji;
            chatInput.focus();
        }
    }

    onChatKeydown(event) {
        if (event.key === "Enter") {
            let message = event.currentTarget.value;
            let lastMessage = this.chatMessages[this.chatMessages.length - 1];

            if (lastMessage.from) {
                this.chatMessages.push({ messages: [message] });
            } else {
                lastMessage.messages.push(message);
            }

            if (message.match(/primeng|primereact|primefaces|primevue/i)) {
                this.chatMessages.push({
                    from: "Ioni Bowcher",
                    url: "assets/demo/images/avatar/ionibowcher.png",
                    messages: ["Always bet on Prime!"],
                });
            }

            event.currentTarget.value = "";

            const el = this.chatContainerViewChild.nativeElement;
            setTimeout(() => {
                el.scroll({
                    top: el.scrollHeight,
                    behavior: "smooth",
                });
            }, 1);
        }
    }

    setOverviewColors() {
        const { pinkBorderColor, pinkBgColor, tealBorderColor, tealBgColor } =
            this.getOverviewColors();

        this.overviewChartData1.datasets[0].borderColor[0] = tealBorderColor;
        this.overviewChartData1.datasets[0].backgroundColor[0] = tealBgColor;

        this.overviewChartData2.datasets[0].borderColor[0] = tealBorderColor;
        this.overviewChartData2.datasets[0].backgroundColor[0] = tealBgColor;

        this.overviewChartData3.datasets[0].borderColor[0] = pinkBorderColor;
        this.overviewChartData3.datasets[0].backgroundColor[0] = pinkBgColor;

        this.overviewChartData4.datasets[0].borderColor[0] = tealBorderColor;
        this.overviewChartData4.datasets[0].backgroundColor[0] = tealBgColor;
    }

    getOverviewColors() {
        const isLight = this.app.layoutMode === "light";
        return {
            pinkBorderColor: isLight ? "#E91E63" : "#EC407A",
            pinkBgColor: isLight ? "#F48FB1" : "#F8BBD0",
            tealBorderColor: isLight ? "#009688" : "#26A69A",
            tealBgColor: isLight ? "#80CBC4" : "#B2DFDB",
        };
    }

    getOrdersOptions() {
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
        };
    }
}

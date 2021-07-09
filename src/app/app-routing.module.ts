import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

// import { DashboardComponent } from "./demo/view/dashboard.component";
// import { DashboardAnalyticsComponent } from "./demo/view/dashboardanalytics.component";
import { AppAccessdeniedComponent } from "./pages/app.accessdenied.component";
import { AppContactusComponent } from "./pages/app.contactus.component";
import { AppErrorComponent } from "./pages/app.error.component";
import { AppLandingComponent } from "./pages/app.landing.component";
import { AppLoginComponent } from "./pages/app.login.component";
import { AppMainComponent } from "./app.main.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { AppProgramasComponent } from "./pages/app.programas.component";
import { DashboardAnalyticsComponent } from "./pages/dashboardgastos/dashboardanalytics.component";
import { DashboardComponent } from "./pages/dashboardingresos/dashboard.component";
import { DashboardtiemposComponent } from "./pages/dashboardtiempos/dashboardtiempos.component";
import { PresupuestosComponent } from "./pages/presupuestos/presupuestos.component";
import { ProgramaDetailComponent } from "./pages/programa-detail/programa-detail.component";
import { EcoGastosComponent } from "./pages/eco-gastos/eco-gastos.component";
import { OrganicosComponent } from "./pages/organicos/organicos.component";
import { EcoIngresosComponent } from "./pages/eco-ingresos/eco-ingresos.component";
import { CapituloIngresosComponent } from "./pages/capitulo-ingresos/capitulo-ingresos.component";
import { CapituloGastoComponent } from "./pages/capitulo-gasto/capitulo-gasto.component";
import { BarrioComponent } from "./pages/barrio/barrio.component";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: "",
                    component: AppMainComponent,
                    children: [
                        { path: "", component: DashboardComponent },
                        {
                            path: "favorites/dashboardanalytics",
                            component: DashboardAnalyticsComponent,
                        },
                        {
                            path: "dashboardtiempos",
                            component: DashboardtiemposComponent,
                        },
                        // **************** ingresos **********************
                        {
                            path: "pages/capituloIngresos",
                            component: CapituloIngresosComponent,
                        },
                        {
                            path: "pages/ecoIngresos",
                            component: EcoIngresosComponent,
                        },

                        // **************** gastos ************************
                        {
                            path: "pages/capituloGasto",
                            component: CapituloGastoComponent,
                        },
                        {
                            path: "pages/organicos",
                            component: OrganicosComponent,
                        },
                        {
                            path: "pages/programas",
                            component: AppProgramasComponent,
                        },
                        {
                            path: "pages/programaDetail",
                            component: ProgramaDetailComponent,
                        },
                        {
                            path: "pages/ecoGastos",
                            component: EcoGastosComponent,
                        },
                        {
                            path: "pages/presupuestos",
                            component: PresupuestosComponent,
                        },
                        // **************** temas ************************
                        {
                            path: "pages/barrio",
                            component: BarrioComponent,
                        },
                    ],
                },
                { path: "error", component: AppErrorComponent },
                { path: "access", component: AppAccessdeniedComponent },
                { path: "notfound", component: AppNotfoundComponent },
                { path: "contactus", component: AppContactusComponent },
                { path: "login", component: AppLoginComponent },
                { path: "landing", component: AppLandingComponent },
                { path: "**", redirectTo: "/notfound" },
            ],
            { scrollPositionRestoration: "enabled" }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }

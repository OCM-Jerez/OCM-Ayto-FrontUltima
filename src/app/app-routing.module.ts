import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

// import { DashboardComponent } from "./demo/view/dashboard.component";
// import { DashboardAnalyticsComponent } from "./demo/view/dashboardanalytics.component";
import { AppErrorComponent } from "./pages/error/app.error.component";
import { AppLoginComponent } from "./auth/login/app.login.component";
import { AppMainComponent } from "./app.main.component";
import { AppNotfoundComponent } from "./pages/404notFound/app.notfound.component";
import { AppProgramasComponent } from "./pages/programa/app.programas.component";
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
import { DelegacionComponent } from "./pages/delegacion/delegacion.component";
import { DistritoComponent } from "./pages/distrito/distrito.component";
import { EnteComponent } from "./pages/ente/ente.component";
import { OrganoContratacionComponent } from "./pages/organo-contratacion/organo-contratacion.component";
import { SeccionCensalComponent } from "./pages/seccion-censal/seccion-censal.component";
import { SindicatoComponent } from "./pages/sindicato/sindicato.component";
import { CuentaGeneralComponent } from "./pages/cuenta-general/cuenta-general.component";
import { RegisterComponent } from "./auth/register/register.component";
import { HomeGuard } from "src/common/guards/home.guard";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: "",
                    component: AppMainComponent,
                    canActivate: [HomeGuard],
                    canActivateChild: [],
                    children: [

                        {
                            path: "DashboardComponent",  //Ingresos
                            component: DashboardComponent
                        },
                        {
                            path: "dashboardanalytics", // Gastos
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
                        // **************** información económica ************************
                        {
                            path: "pages/presupuestos",
                            component: PresupuestosComponent,
                        },
                        {
                            path: "pages/cuentaGeneral",
                            component: CuentaGeneralComponent,
                        },
                        // **************** organización municipal ************************
                        {
                            path: "pages/delegacion",
                            component: DelegacionComponent,
                        },
                        {
                            path: "pages/ente",
                            component: EnteComponent,
                        },
                        {
                            path: "pages/organoContratacion",
                            component: OrganoContratacionComponent,
                        },
                        {
                            path: "pages/sindicato",
                            component: SindicatoComponent,
                        },
                        // **************** organización geográfica ************************
                        {
                            path: "pages/barrio",
                            component: BarrioComponent,
                        },
                        {
                            path: "pages/distrito",
                            component: DistritoComponent,
                        },
                        {
                            path: "pages/seccionCensal",
                            component: SeccionCensalComponent,
                        },
                    ],
                },
                { path: "error", component: AppErrorComponent },
                { path: "notfound", component: AppNotfoundComponent },
                { path: "auth/login", component: AppLoginComponent },
                {
                    path: "auth/register",
                    loadChildren: () => import("./auth/register/register.module").then(m => m.RegisterModule)
                },
                { path: "**", redirectTo: "/notfound" },
            ],
            { scrollPositionRestoration: "enabled" }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }

import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./demo/view/dashboard.component";
import { DashboardAnalyticsComponent } from "./demo/view/dashboardanalytics.component";
import { AppMainComponent } from "./app.main.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { AppContactusComponent } from "./pages/app.contactus.component";
import { AppErrorComponent } from "./pages/app.error.component";
import { AppAccessdeniedComponent } from "./pages/app.accessdenied.component";
import { AppLoginComponent } from "./pages/app.login.component";
import { AppLandingComponent } from "./pages/app.landing.component";
import { AppProgramasComponent } from "./pages/app.programas.component";
import { ProgramaDetailComponent } from "./pages/programa-detail/programa-detail.component";
import { DashboardtiemposComponent } from "./pages/dashboardtiempos/dashboardtiempos.component";
import { PresupuestosComponent } from "./pages/presupuestos/presupuestos.component";

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
                        {
                            path: "pages/programas",
                            component: AppProgramasComponent,
                        },
                        {
                            path: "pages/programaDetail",
                            component: ProgramaDetailComponent,
                        },
                        {
                            path: "pages/presupuestos",
                            component: PresupuestosComponent,
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
export class AppRoutingModule {}

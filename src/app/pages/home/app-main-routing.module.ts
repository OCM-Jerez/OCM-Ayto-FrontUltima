import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app-main.component';
import { DashboardIngresosComponent } from './dashboard-ingresos/dashboard-ingresos.component';

export const routes: Routes = [
    {
        path: "",
        component: AppMainComponent,
        children: [

            {
                path: "DashboardIngresos",  //Ingresos
                component: DashboardIngresosComponent
            },
            {
                path: "dashboardGastos", // Gastos
                loadChildren: () => import('./dashboard-gastos/dashboard-gastos.module').then(m => m.DashboardGastosModule)
            },
            //     {
            //         path: "dashboardTiempos",
            //         component: DashboardtiemposComponent,
            //     },
            //     // **************** ingresos **********************
            //     {
            //         path: "pages/capituloIngresos",
            //         component: CapituloIngresosComponent,
            //     },
            //     {
            //         path: "pages/ecoIngresos",
            //         component: EcoIngresosComponent,
            //     },

            //     // **************** gastos ************************
            //     {
            //         path: "pages/capituloGasto",
            //         component: CapituloGastoComponent,
            //     },
            //     {
            //         path: "pages/organicos",
            //         component: OrganicosComponent,
            //     },
            //     {
            //         path: "pages/programas",
            //         component: AppProgramasComponent,
            //     },
            //     {
            //         path: "pages/programaDetail",
            //         component: ProgramaDetailComponent,
            //     },
            //     {
            //         path: "pages/ecoGastos",
            //         component: EcoGastosComponent,
            //     },
            //     // **************** información económica ************************
            //     {
            //         path: "pages/presupuestos",
            //         component: PresupuestosComponent,
            //     },
            //     {
            //         path: "pages/cuentaGeneral",
            //         component: CuentaGeneralComponent,
            //     },
            //     // **************** organización municipal ************************
            //     {
            //         path: "pages/delegacion",
            //         component: DelegacionComponent,
            //     },
            //     {
            //         path: "pages/ente",
            //         component: EnteComponent,
            //     },
            //     {
            //         path: "pages/organoContratacion",
            //         component: OrganoContratacionComponent,
            //     },
            //     {
            //         path: "pages/sindicato",
            //         component: SindicatoComponent,
            //     },
            //     // **************** organización geográfica ************************
            //     {
            //         path: "pages/barrio",
            //         component: BarrioComponent,
            //     },
            //     {
            //         path: "pages/distrito",
            //         component: DistritoComponent,
            //     },
            //     {
            //         path: "pages/seccionCensal",
            //         component: SeccionCensalComponent,
            //     },
            {
                path: "",
                redirectTo: 'DashboardIngresos'
            }
        ],
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class AppMainRoutingodule { }

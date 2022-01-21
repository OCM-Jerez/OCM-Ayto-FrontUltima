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
                path: "DashboardIngresos",
                component: DashboardIngresosComponent
            },
            {
                path: "dashboardGastos",
                loadChildren: () => import('./dashboard-gastos/dashboard-gastos.module').then(m => m.DashboardGastosModule)
            },
            {
                path: "dashboardTiempos",
                loadChildren: () => import('./dashboard-tiempos/dashboard-tiempos.module').then(m => m.DashboardtiemposModule)
            },
            //   **************** ingresos **********************
            {
                path: "pages/capituloIngresos",
                loadChildren: () => import('./capitulo-ingresos/capitulo-ingresos.module').then(m => m.CapituloIngresosModule)
            },
            {
                path: "pages/ecoIngresos",
                loadChildren: () => import('./eco-ingresos/eco-ingresos.module').then(m => m.EcoIngresosModule)
            },
            //   **************** gastos ************************
            {
                path: "pages/capituloGasto",
                loadChildren: () => import('./capitulo-gastos/capitulo-gastos.module').then(m => m.CapituloGastosModule)
            },
            //     {
            //         path: "pages/capituloGasto",
            //         component: CapituloGastoComponent,
            //     },
            //     {
            //         path: "pages/organicos",
            //         component: OrganicosComponent,
            //     },
            //    
            {
                path: "pages/programas",
                loadChildren: () => import('./programas/app-programas.module').then(m => m.AppProgramasModule)
            },

            //     {
            //         path: "pages/programaDetail",
            //         component: ProgramaDetailComponent,
            //     },
            //   
            {
                path: "pages/ecoGastos",
                loadChildren: () => import('./eco-gastos/eco-gastos.module').then(m => m.EcoGastosModule)
            },
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

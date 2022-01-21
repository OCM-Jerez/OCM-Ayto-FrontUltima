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
            {
                path: "pages/organicos",
                loadChildren: () => import('./organicos/organicos.module').then(m => m.OrganicosModule)
            },
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
            //  **************** información económica ************************
            {
                path: "pages/presupuestos",
                loadChildren: () => import('./presupuestos/presupuestos.module').then(m => m.PresupuestosModule)
            },
            {
                path: "pages/cuentaGeneral",
                loadChildren: () => import('./cuenta-general/cuenta-general.module').then(m => m.CuentaGeneralModule)
            },

            //  **************** organización municipal ************************
            {
                path: "pages/delegacion",
                loadChildren: () => import('./delegacion/delegacion.module').then(m => m.DelegacionModule)
            },
            {
                path: "pages/ente",
                loadChildren: () => import('./entes/entes.module').then(m => m.EntesModule)
            },
            {
                path: "pages/organoContratacion",
                loadChildren: () => import('./organo-contratacion/organo-contratacion.module').then(m => m.OrganoContratacionModule)
            },
            //    
            //     {
            //         path: "pages/sindicato",
            //         component: SindicatoComponent,
            //     },
            //  **************** organización geográfica ************************
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

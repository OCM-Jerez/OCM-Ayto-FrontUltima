import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppErrorComponent } from "./pages/error/app.error.component";
import { AppLoginComponent } from "./auth/login/app.login.component";
import { AppNotfoundComponent } from "./pages/404notFound/app.notfound.component";

import { HomeGuard } from "../common/guards/home.guard";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: "",
                    canActivate: [HomeGuard],
                    loadChildren: () => import("./pages/home/app-main.module").then(m => m.AppMainModule)
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

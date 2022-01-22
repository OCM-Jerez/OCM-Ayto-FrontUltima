import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { IPrograma } from "../../domain/programa";
import { ProgramaService } from "../../service/programa.service";

@Component({
    selector: "app-programa-detail",
    templateUrl: "./programa-detail.component.html",
    styleUrls: ["./programa-detail.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class ProgramaDetailComponent implements OnInit {
    programaDialog: boolean;
    programas: IPrograma[];
    programa: IPrograma;
    selectedProgramas: IPrograma[];
    submitted: boolean;
    cols: any[];

    constructor(public programaService: ProgramaService) { }

    ngOnInit(): void {
        // this.programaService.getProgramas().then(data => this.programas = data);
        this.programaService
            .getProgramas()
            .subscribe((resp) => (this.programas = resp));
    }
}

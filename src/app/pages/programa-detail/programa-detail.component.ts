import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Programa } from '../../demo/domain/programa';
import { ProgramaService } from '../../demo/service/programaservice';

@Component({
  selector: 'app-programa-detail',
  templateUrl: './programa-detail.component.html',
  styleUrls: ['./programa-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramaDetailComponent implements OnInit {
    programaDialog: boolean;
    programas: Programa[];
    programa: Programa;
    selectedProgramas: Programa[];
    submitted: boolean;
    cols: any[];


  constructor(public programaService: ProgramaService ) { }

  ngOnInit(): void {
    // this.programaService.getProgramas().then(data => this.programas = data);
    this.programaService.getProgramas().
    subscribe(resp => this.programas = resp)

}

}

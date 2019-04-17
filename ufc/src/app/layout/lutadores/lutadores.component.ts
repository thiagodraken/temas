import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Lutador } from '../../models/lutador';
import { LutadorService } from '../../services/lutador.service';

@Component({
  selector: 'app-lutadores',
  templateUrl: './lutadores.component.html',
  styleUrls: ['./lutadores.component.scss'],
  animations: [routerTransition()]
})
export class LutadoresComponent implements OnInit {
  displayedColumns: string[] = [ 'nome', 'idade', 'sexo', 'peso', 'categoriaPeso', 'paisOrigem', ];
  dataSource: Lutador[];
  isLoadingResults = true;
  constructor(private api: LutadorService) { }

  ngOnInit() {
    this.api.getLutadores()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}

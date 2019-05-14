import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Lutador } from '../../shared/models/lutador';
import { LutadorService } from '../../shared/services/lutador.service';

@Component({
  selector: 'app-pesquisa-aleatoria',
  templateUrl: './pesquisa-aleatoria.component.html',
  styleUrls: ['./pesquisa-aleatoria.component.scss'],
  animations: [routerTransition()]
})
export class PesquisaAleatoriaComponent implements OnInit {
  dataSource: Lutador[];
  lutadoresInsuficientes: Boolean;

  constructor(private api: LutadorService) { }

  ngOnInit() {
  }

  getLutadoresAleatorios(categoriaPeso, sexo) {
    this.api.getLutadoresAleatorios(categoriaPeso, sexo)
    .subscribe(res => {
      if (res.length < 2) {
        this.lutadoresInsuficientes = true;
        this.dataSource = null;
      } else {
        this.lutadoresInsuficientes = false;
        this.dataSource = res;
        console.log(this.dataSource);
      }
    }, err => {
      console.log(err);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CalculoCategoriaService } from '../../services/calculo-categoria.service';

@Component({
  selector: 'app-verifica-categoria',
  templateUrl: './verifica-categoria.component.html',
  styleUrls: ['./verifica-categoria.component.scss'],
  animations: [routerTransition()]
})
export class VerificaCategoriaComponent implements OnInit {
  categoria: String = null;
  sexo: String;
  pesoProximaCategoria: number;
  pesoCategoriaAnterior: number;
  mostraBloco: boolean;

  constructor(private calcula: CalculoCategoriaService) { }

  ngOnInit() {
  }

  verificaCategoria(peso, sexo) {
    console.log(peso);
    this.categoria = this.calcula.verificaCategoria(peso, sexo);
    console.log(this.categoria);

    if (this.categoria != null) {
      this.mostraBloco = true;
      this.pesoCategoriaAnterior = this.calcula.pesoCategoriaAnterior(this.categoria, peso, sexo);
      this.pesoProximaCategoria = this.calcula.pesoProximaCategoria(this.categoria, peso, sexo);
    } else {
      this.mostraBloco = false;
    }
  }
}

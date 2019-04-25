import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Lutador } from '../../models/lutador';
import { LutadorService } from '../../services/lutador.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-lutadores',
  templateUrl: './lutadores.component.html',
  styleUrls: ['./lutadores.component.scss'],
  animations: [routerTransition()]
})
export class LutadoresComponent implements OnInit {
  displayedColumns: string[] = [ 'nome', 'idade', 'sexo', 'peso', 'categoriaPeso', 'paisOrigem', ];
  dataSource: Observable<Lutador[]>;
  isLoadingResults = true;

  private pesquisaTermos = new Subject<string>();
  private pesquisaCategorias = new Subject<string>();
  termo: string;
  categoria: string;

  constructor(private api: LutadorService) { }

  pesquisaTermo(termo: string, categoria: string): void {
    this.categoria = categoria;
    console.log(termo);
    this.pesquisaTermos.next(termo);
  }

  ngOnInit() {

    //    this.dataSource = this.api.getLutadores();

    // this.api.getLutadores()
    // .subscribe(res => {
    //   this.dataSource = res;
    //   console.log(this.dataSource);
    //   this.isLoadingResults = false;
    // }, err => {
    //   console.log(err);
    //   this.isLoadingResults = false;
    // });

    this.dataSource = this.pesquisaTermos.pipe(
      // wait 300ms after each keystroke before considering the termo
      debounceTime(300),

      // ignore new termo if same as previous termo
      // distinctUntilChanged(),

      // switch to new pesquisa observable each time the termo changes
      switchMap((termo: string) => this.api.pesquisaLutadores(termo, this.categoria)),
      );


      }

    }




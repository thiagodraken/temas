import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaAleatoriaRoutingModule } from './pesquisa-aleatoria-routing.module';
import { PesquisaAleatoriaComponent } from './pesquisa-aleatoria.component';
import { PageHeaderModule } from '../../shared';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, PesquisaAleatoriaRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [PesquisaAleatoriaComponent]
})
export class PesquisaAleatoriaModule {}

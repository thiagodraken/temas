import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LutadorDetalheRoutingModule } from './lutador-detalhe-routing.module';
import { LutadorDetalheComponent } from './lutador-detalhe.component';
import { PageHeaderModule } from '../../shared';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, LutadorDetalheRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [LutadorDetalheComponent]
})
export class LutadorDetalheModule {}

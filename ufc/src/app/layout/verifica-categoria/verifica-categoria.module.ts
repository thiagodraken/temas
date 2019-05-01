import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificaCategoriaRoutingModule } from './verifica-categoria-routing.module';
import { VerificaCategoriaComponent } from './verifica-categoria.component';
import { PageHeaderModule } from '../../shared';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, VerificaCategoriaRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [VerificaCategoriaComponent]
})
export class VerificaCategoriaModule {}

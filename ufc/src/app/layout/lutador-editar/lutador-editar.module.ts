import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LutadorEditarRoutingModule } from './lutador-editar-routing.module';
import { LutadorEditarComponent } from './lutador-editar.component';
import { PageHeaderModule } from '../../shared';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, LutadorEditarRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [LutadorEditarComponent]
})
export class LutadorEditarModule {}

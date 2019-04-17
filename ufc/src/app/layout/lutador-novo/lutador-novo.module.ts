import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LutadorNovoRoutingModule } from './lutador-novo-routing.module';
import { LutadorNovoComponent } from './lutador-novo.component';
import { PageHeaderModule } from '../../shared';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, LutadorNovoRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [LutadorNovoComponent]
})
export class LutadorNovoModule {}

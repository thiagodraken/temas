import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LutadoresRoutingModule } from './lutadores-routing.module';
import { LutadoresComponent } from './lutadores.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        LutadoresRoutingModule,
        PageHeaderModule
    ],
    declarations: [LutadoresComponent]
})
export class LutadoresModule {}

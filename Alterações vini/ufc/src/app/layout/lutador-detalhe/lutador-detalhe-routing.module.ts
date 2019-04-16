import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LutadorDetalheComponent } from './lutador-detalhe.component';

const routes: Routes = [
    {
        path: '', component: LutadorDetalheComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LutadorDetalheRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaAleatoriaComponent } from './pesquisa-aleatoria.component';

const routes: Routes = [
    {
        path: '', component: PesquisaAleatoriaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PesquisaAleatoriaRoutingModule {
}

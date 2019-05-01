import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificaCategoriaComponent } from './verifica-categoria.component';

const routes: Routes = [
    {
        path: '', component: VerificaCategoriaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VerificaCategoriaRoutingModule {
}

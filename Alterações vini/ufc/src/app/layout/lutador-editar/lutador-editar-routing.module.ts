import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LutadorEditarComponent } from './lutador-editar.component';

const routes: Routes = [
    {
        path: '', component: LutadorEditarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LutadorEditarRoutingModule {
}

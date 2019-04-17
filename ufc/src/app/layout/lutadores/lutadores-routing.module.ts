import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LutadoresComponent } from './lutadores.component';

const routes: Routes = [
    {
        path: '', component: LutadoresComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LutadoresRoutingModule {
}

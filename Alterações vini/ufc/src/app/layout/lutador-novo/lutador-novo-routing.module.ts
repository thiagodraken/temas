import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LutadorNovoComponent } from './lutador-novo.component';

const routes: Routes = [
    {
        path: '', component: LutadorNovoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LutadorNovoRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'lutadores', loadChildren: './lutadores/lutadores.module#LutadoresModule' },
            { path: 'lutador-novo', loadChildren: './lutador-novo/lutador-novo.module#LutadorNovoModule' },
            { path: 'lutador-detalhe/:id', loadChildren: './lutador-detalhe/lutador-detalhe.module#LutadorDetalheModule' },
            { path: 'lutador-editar/:id', loadChildren: './lutador-editar/lutador-editar.module#LutadorEditarModule' },
            { path: 'verifica-categoria', loadChildren: './verifica-categoria/verifica-categoria.module#VerificaCategoriaModule' },
            { path: 'pesquisa-aleatoria', loadChildren: './pesquisa-aleatoria/pesquisa-aleatoria.module#PesquisaAleatoriaModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

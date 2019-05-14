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
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhamentoFilmesComponent } from './detalhamento-filmes/detalhamento-filmes.component';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemFilmesComponent
  },
  {
    path: ':id',
    component: DetalhamentoFilmesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

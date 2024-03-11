import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './pages/members/members.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'members', component: MembersComponent },
  { path: 'proyects', component: ProyectsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

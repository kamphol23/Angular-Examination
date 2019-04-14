import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{ ChildComponent } from './child/child.component';
import { TrafikljusComponent } from './trafikljuset/trafikljus.component';
import {CommentsComponent} from './comments/comments.component';
const routes: Routes = [
	{ path: 'Ti-plater', component: ChildComponent },
	{ path: 'Trafikljus', component: TrafikljusComponent },
	{ path: 'Recension', component: CommentsComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

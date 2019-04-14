import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrafikljusComponent } from './trafikljuset/trafikljus.component';
import { ChildComponent} from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './comments.service';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    TrafikljusComponent,
    ChildComponent,
    ParentComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

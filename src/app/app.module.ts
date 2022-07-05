import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchesComponent } from './batches/batches.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InvalidComponent } from './invalid/invalid.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchesComponent,
    SubjectsComponent,
    AboutUsComponent,
    InvalidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
{ path : 'batches' , component : BatchesComponent},
{ path : 'Books' , component : SubjectsComponent},
{ path : 'Technologies' , component : AboutUsComponent},
{ path : '' , component : AboutUsComponent},
{ path : '**' , component : InvalidComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{
  
}

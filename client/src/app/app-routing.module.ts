import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent} from './profiles/profiles.component';

const routes : Routes = [
  { path : 'profiles', component: ProfilesComponent},
  { path : 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

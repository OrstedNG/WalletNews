import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'NotifyMe', loadChildren: './notify-me/notify-me.module#NotifyMePageModule' },
  { path: 'Latest', loadChildren: './latest/latest.module#LatestPageModule' },
  { path: 'US', loadChildren: './us/us.module#USPageModule' },
  { path: 'UK', loadChildren: './uk/uk.module#UKPageModule' },
  { path: 'Australia', loadChildren: './australia/australia.module#AustraliaPageModule' },
  { path: 'Asia', loadChildren: './asia/asia.module#AsiaPageModule' },
  { path: 'Africa', loadChildren: './africa/africa.module#AfricaPageModule' },
  { path: 'knowMore', loadChildren: './know-more/know-more.module#KnowMorePageModule' },
  { path: 'Settings', loadChildren: './settings/settings.module#SettingsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

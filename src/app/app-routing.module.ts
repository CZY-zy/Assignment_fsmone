import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', component: AccountInfoComponent},
  {path:'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent},
  {path:'menu', component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

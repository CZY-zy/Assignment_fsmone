import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { MenuComponent } from './menu/menu.component';
import { TaxInfoComponent } from './tax-info/tax-info.component';
import { SupportingDocComponent } from './supporting-doc/supporting-doc.component';

const routes: Routes = [
  {path:'', component: AccountInfoComponent},
  {path:'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent},
  {path:'menu', component:MenuComponent},
  {path:'tax-info', component:TaxInfoComponent},
  {path:'support-doc', component:SupportingDocComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

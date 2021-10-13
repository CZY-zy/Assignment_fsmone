import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { MenuComponent } from './menu/menu.component';
import { TaxInfoComponent } from './tax-info/tax-info.component';
import { SupportingDocComponent } from './supporting-doc/supporting-doc.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { FinancialInfoComponent } from './financial-info/financial-info.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {path:'', component:ContainerComponent},
  {path:'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent},
  {path:'menu', component:MenuComponent},
  {path:'tax-info', component:TaxInfoComponent},
  {path:'support-doc', component:SupportingDocComponent},
  {path:'basic-info', component:BasicInfoComponent},
  {path:'financial-info', component: FinancialInfoComponent},
  {path:'account-info', component: AccountInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

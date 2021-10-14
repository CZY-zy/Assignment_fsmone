import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { AccountInfoComponent } from './account-info/account-info.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { TaxInfoComponent } from './tax-info/tax-info.component';
import { SupportingDocComponent } from './supporting-doc/supporting-doc.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { FinancialInfoComponent } from './financial-info/financial-info.component';
import { ContainerComponent } from './container/container.component';
import { OptInForStockComponent } from './opt-in-for-stock/opt-in-for-stock.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AccountInfoComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    TaxInfoComponent,
    SupportingDocComponent,
    BasicInfoComponent,
    FinancialInfoComponent,
    ContainerComponent,
    OptInForStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzStepsModule,
    NzFormModule,
    NzInputModule,
    NzLayoutModule,
    NzButtonModule,
    NzRadioModule,
    NzSelectModule,
    NzModalModule,
    NzIconModule,
    NzAlertModule,
    NzCardModule,
    NzUploadModule,
    NzMessageModule,
    NzDatePickerModule,
    NzCheckboxModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

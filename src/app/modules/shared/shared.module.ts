import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { CoreLayoutComponent } from './components/core-layout/core-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { NgxHijriGregorianDatepickerModule } from 'ngx-hijri-gregorian-datepicker';
import {TabMenuModule} from 'primeng/tabmenu';
import {FileUploadModule} from 'primeng/fileupload';
import { HigriDatePipe } from './pipes/higri-date.pipe';




@NgModule({
  declarations: [
    AuthLayoutComponent,
    CoreLayoutComponent,
    HeaderComponent,
    NotAuthorizedComponent,
    FooterComponent,
    PageNotFoundComponent,
    HigriDatePipe,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    MessageModule,
    ButtonModule,
    ToastModule,
    TableModule,
    DialogModule,
    NgxHijriGregorianDatepickerModule,
    TabMenuModule,
    FileUploadModule,
  ],
  exports: [
    CommonModule,
    AuthLayoutComponent,
    CoreLayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    MessageModule,
    ButtonModule,
    ToastModule,
    TableModule,
    DialogModule,
    NgxHijriGregorianDatepickerModule,
    TabMenuModule,
    FileUploadModule,


  ],
})
export class SharedModule {}

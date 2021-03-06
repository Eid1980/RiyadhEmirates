import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/services/auth.guard';
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { DraftRequestsComponent } from './components/draft-requests/draft-requests.component';
import { IncomingOrdersComponent } from './components/incoming-orders/incoming-orders.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderInquiryComponent } from './components/order-inquiry/order-inquiry.component';
import { OrderStatusDetailsComponent } from './components/order-status-details/order-status-details.component';
import { RateServiceComponent } from './components/rate-service/rate-service.component';
import { SavedOrdersComponent } from './components/saved-orders/saved-orders.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { UserDashboradComponent } from './components/user-dashborad/user-dashborad.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'create/:id', component: CreateRequestComponent ,canActivate: [AuthGuard]},
  { path: 'create', component: CreateRequestComponent ,canActivate: [AuthGuard]},
  { path: 'my-orders', component: MyOrdersComponent , canActivate: [AuthGuard]},
  { path: 'inquiry', component: OrderInquiryComponent },
  { path: 'order-status/:id', component: OrderStatusDetailsComponent , canActivate: [AuthGuard] },
  { path: 'rate', component: RateServiceComponent },
  { path: 'saved', component: SavedOrdersComponent },
  { path: 'service-details', component: ServiceDetailsComponent },
  { path: 'dashboard', component: UserDashboradComponent },
  { path: 'profile', component: UserProfileComponent },
  {path : 'incoming-orders' , component : IncomingOrdersComponent , canActivate: [AuthGuard]},
  {path : 'draft-requests' , component : DraftRequestsComponent , canActivate: [AuthGuard]},
  { path: '', redirectTo: 'service-details', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectronicCouncilRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AccountComponent } from './account/account.component';
import { RentComponent } from './rent/rent.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'rent/:id', component: RentComponent, canActivate: [AuthGuard]},
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  { path: 'favorites/:id', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: 'product/list', component: ListProductComponent },
  { path: 'product/detail/:id', component: DetailProductComponent },
  { path: 'product/add', component: CreateProductComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

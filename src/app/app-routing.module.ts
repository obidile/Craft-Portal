import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './pages/countries/countries.component';
import { StatesComponent } from './pages/states/states.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { VendorDashboardComponent } from './pages/vendor-dashboard/vendor-dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { BusinessProfileComponent } from './pages/business-profile/business-profile.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  
  { component: ProductsComponent, path: '' },
  { component: CountriesComponent, path: 'countries' },
  { component: StatesComponent, path: 'states' },
  { component: SchoolsComponent, path: 'schools' },
  { component: AdminDashboardComponent, path: 'admin_dashboard' },
  { component: VendorDashboardComponent, path: 'vendor_dashboard' },
  { component: ProductsComponent, path: 'products' },
  { component: UserProfileComponent, path: 'user_profile' },
  { component: BusinessProfileComponent, path: 'business_profile' },
  { component: SignInComponent, path: 'sign_in' },
  { component: SignUpComponent, path: 'sign_up' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

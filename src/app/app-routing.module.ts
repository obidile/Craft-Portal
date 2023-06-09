import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'countries', loadChildren: () => import('./pages/countries/countries.module').then(m => m.CountriesModule) },

  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },

  { path: 'states', loadChildren: () => import('./pages/states/states.module').then(m => m.StatesModule) },

  { path: 'schools', loadChildren: () => import('./pages/schools/schools.module').then(m => m.SchoolsModule) },

  { path: 'admin_dashboard', loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },

  { path: 'vendor_dashboard', loadChildren: () => import('./pages/vendor-dashboard/vendor-dashboard.module').then(m => m.VendorDashboardModule) },

  { path: 'user_profile', loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule) },

  { path: 'business_profile', loadChildren: () => import('./pages/business-profile/business-profile.module').then(m => m.BusinessProfileModule) },

  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },

  { path: 'sign_up', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

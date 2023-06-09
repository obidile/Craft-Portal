import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiConfig } from './api-Base';
import { Observable } from 'rxjs';
import { AdminDashboardModel, VendorDashboardModel } from '../models/dashboard-model';

@Injectable({
    providedIn: 'root'
})

export class DashboardService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    getAdminDashboard(): Observable<AdminDashboardModel> {
        return this.http.get<AdminDashboardModel>(`${this.apiConfig.baseUrl}/admin/dashboard`);
    }

    getVendorDashboardData(): Observable<VendorDashboardModel> {
        return this.http.get<VendorDashboardModel>(`${this.apiConfig.baseUrl}/vendor/dashboard`);
    }
}
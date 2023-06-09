import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiConfig } from './api-Base';
import { OrderModel } from '../models/order-model';

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    create(model: OrderModel): Observable<any> {
        return this.http.post(this.apiConfig.baseUrl + '/Order', model);
    }

    get(): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/Order');
    }

    getById(id: number): Observable<OrderModel> {
        return this.http.get<OrderModel>(`${this.apiConfig.baseUrl}/Order/${id}`);
    }

    cancelOrder(orderId: number): Observable<OrderModel> {
        return this.http.put<OrderModel>(this.apiConfig.baseUrl + '/Order/{orderId}/cancel', OrderModel);
    }

    getOrdersPlacedOneHourAgo(): Observable<OrderModel[]> {
        return this.http.get<OrderModel[]>(`${this.apiConfig.baseUrl}/Order/one-hour-ago`);
    }
}
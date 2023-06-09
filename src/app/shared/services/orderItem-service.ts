import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiConfig } from './api-Base';
import { Observable } from 'rxjs';
import { OrderItemModel } from '../models/orderItem-model';

@Injectable({
    providedIn: 'root'
})

export class OrderItemService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    getOrderItemById(itemId: string): Observable<OrderItemModel> {
        return this.http.get<OrderItemModel>(`${this.apiConfig.baseUrl}/order-items/${itemId}`);
    }

    getOrderItemsByOrderId(orderId: number): Observable<OrderItemModel> {
        return this.http.get<OrderItemModel>(`${this.apiConfig.baseUrl}/orders/${orderId}/items`);
    }


}
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiConfig } from './api-Base';
import { ProductModel } from '../models/product-model';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    create(model: ProductModel): Observable<any> {
        return this.http.post(this.apiConfig.baseUrl + '/Product', model);
    }q

    get(): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/Product');
    }

    getById(userId: string): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/Product' + userId);
    }

    update(userId: string, model: ProductModel): Observable<any> {
        return this.http.put(this.apiConfig.baseUrl + '/Product' + userId, model);
    }

    delete(userId: string): Observable<any> {
        return this.http.delete(this.apiConfig.baseUrl + '/Product' + userId);
    }

}
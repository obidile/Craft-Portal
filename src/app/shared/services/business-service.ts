import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiConfig } from './api-Base';
import { BusinessModel } from '../models/business-model';

@Injectable({
    providedIn: 'root'
})

export class BusinessService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    create(model: BusinessModel): Observable<any> {
        return this.http.post(this.apiConfig.baseUrl + '/Business', model);
    }

    get(): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/Business');
    }

    getById(userId: string): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/Business' + userId);
    }

    update(userId: string, model: BusinessModel): Observable<any> {
        return this.http.put(this.apiConfig.baseUrl + '/Business' + userId, model);
    }

    delete(userId: string): Observable<any> {
        return this.http.delete(this.apiConfig.baseUrl + '/Business' + userId);
    }

}
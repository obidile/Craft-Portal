import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiConfig } from './api-Base';
import { CountryModel } from '../models/country-model';

@Injectable({
    providedIn: 'root'
})

export class CountryService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    create(model: CountryModel): Observable<any> {
        return this.http.post(this.apiConfig.baseUrl + '/Country', model);
    }

    get(): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/Country');
    }

    getById(userId: string): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/Country' + userId);
    }

    update(userId: string, model: CountryModel): Observable<any> {
        return this.http.put(this.apiConfig.baseUrl + '/Country' + userId, model);
    }

    delete(userId: string): Observable<any> {
        return this.http.delete(this.apiConfig.baseUrl + '/Country' + userId);
    }

}
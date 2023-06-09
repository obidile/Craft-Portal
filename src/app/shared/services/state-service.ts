import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiConfig } from './api-Base';
import { StateModel } from '../models/state-model';

@Injectable({
    providedIn: 'root'
})

export class StateService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    create(model: StateModel): Observable<any> {
        return this.http.post(this.apiConfig.baseUrl + '/State', model);
    }

    get(): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/State');
    }

    getById(userId: string): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/State' + userId);
    }

    update(userId: string, model: StateModel): Observable<any> {
        return this.http.put(this.apiConfig.baseUrl + '/State' + userId, model);
    }

    delete(userId: string): Observable<any> {
        return this.http.delete(this.apiConfig.baseUrl + '/State' + userId);
    }

}
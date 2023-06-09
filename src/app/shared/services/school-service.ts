import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiConfig } from './api-Base';
import { SchoolModel } from '../models/school-model';

@Injectable({
    providedIn: 'root'
})

export class SchoolService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    create(model: SchoolModel): Observable<any> {
        return this.http.post(this.apiConfig.baseUrl + '/School', model);
    }

    get(): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/School');
    }

    getById(userId: string): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/School' + userId);
    }

    update(userId: string, model: SchoolModel): Observable<any> {
        return this.http.put(this.apiConfig.baseUrl + '/School' + userId, model);
    }

    delete(userId: string): Observable<any> {
        return this.http.delete(this.apiConfig.baseUrl + '/School' + userId);
    }

}
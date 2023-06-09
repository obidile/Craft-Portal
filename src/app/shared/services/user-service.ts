import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { ApiConfig } from './api-Base';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    createUser(model: UserModel): Observable<any> {
        return this.http.post(this.apiConfig.baseUrl + '/Users', model);
    }

    register(model: UserModel): Observable<any> {
        return this.http.post(this.apiConfig.baseUrl + '/Users/register', model);
    }

    get(): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/Users');
    }

    getById(userId: string): Observable<any> {
        return this.http.get(this.apiConfig.baseUrl + '/Users' + userId);
    }

    update(userId: string, model: UserModel): Observable<any> {
        return this.http.put(this.apiConfig.baseUrl + '/Users' + userId, model);
    }

    delete(userId: string): Observable<any> {
        return this.http.delete(this.apiConfig.baseUrl + '/Users' + userId);
    }

}
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiConfig } from './api-Base';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    login(mailAddress: string, password: string): Observable<string> {
        const params = {
            MailAddress: mailAddress,
            Password: password
        };
        return this.http.post<string>(`${this.apiConfig.baseUrl}/login`, params);
    }
}
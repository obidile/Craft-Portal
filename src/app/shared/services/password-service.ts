import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfig } from './api-Base';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PasswordService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    updatePassword(userId: number, mailAddress: string, oldPassword: string, newPassword: string): Observable<any> {
        const params = {
            MailAddress: mailAddress,
            OldPassword: oldPassword,
            NewPassword: newPassword,
            UserId: userId
        };
        return this.http.put<any>(`${this.apiConfig.baseUrl}/PasswordManagements/${userId}`, params);
    }
}

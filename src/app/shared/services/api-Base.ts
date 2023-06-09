import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ApiConfig {
    public baseUrl = 'http://localhost/Craft/api';
}
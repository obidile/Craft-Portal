import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiConfig } from './api-Base';

@Injectable({
    providedIn: 'root'
})

export class RatingService {
    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

}
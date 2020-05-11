import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Alert {
    type: string;
    show: boolean;
    status: string;
    message: string;
}

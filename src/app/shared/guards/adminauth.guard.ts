import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem('isAdminLoggedin')) {
            return true;
        }

        this.router.navigate(['/adminlogin']);
        return false;
    }
}

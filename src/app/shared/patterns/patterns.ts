import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class Patterns {
    paramNamePattern: string = '[0-9a-zA-Z_\\-]{1,20}';
    namePattern: string = '[0-9a-zA-Z_\\- ]{5,50}';
    emailPattern: string = '([a-zA-Z0-9_.]{1,})((@[a-zA-Z]{2,})[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))';
    mobilePattern: string = '\\d{10}';
    amountPattern: string = '\\d{1,7}';
    numberPattern: string = '\\d{1,4}';
    passPattern: string = '/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/';
    codePattern: string = '[0-9a-zA-Z\\-\\/]{3,16}';
    gstinPattern: string = '[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Z]{1}[0-9a-zA-Z]{1}';
}
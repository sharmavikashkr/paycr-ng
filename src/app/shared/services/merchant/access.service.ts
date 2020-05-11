import { Injectable, SkipSelf } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { Register } from "../../models/register";
import { Token } from "../../models/token";

@Injectable({
  providedIn: "root",
})
export class AccessService {
  constructor(private httpClient: HttpClient) { }

  register(registerData: Register): Observable<any> {
    return this.httpClient.post<any>(
      environment.APP_URL + "/register",
      registerData
    );
  }

  authorize() {
    window.location.href =
      environment.OAUTH_URL +
      "/oauth/authorize?client_id=" +
      environment.CLIENT_ID +
      "&response_type=code";
  }

  getAccessToken(code: string) {
    const body = new HttpParams()
      .set("code", code)
      .set("grant_type", "authorization_code");
    return this.httpClient.post<Token>(
      environment.OAUTH_URL + "/oauth/token",
      body.toString(),
      {
        headers: new HttpHeaders()
          .set("Content-Type", "application/x-www-form-urlencoded")
          .set(
            "Authorization",
            "Basic " +
            btoa(environment.CLIENT_ID + ":" + environment.CLIENT_SECRET)
          ),
      }
    );
  }
}

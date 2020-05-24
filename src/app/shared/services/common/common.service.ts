import { Injectable } from "@angular/core";
import { PcUser } from "../../models/pc-user";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable()
export class CommonService {
  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<PcUser> {
    return this.httpClient.get<PcUser>(environment.APP_URL + "/user");
  }

  typeList(type: string): Observable<string[]> {
    return this.httpClient.get<string[]>(environment.APP_URL + '/static/enum/' + type)
  }
}

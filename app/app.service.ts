import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RecruitxService {
    public baseUrl = 'url';
    public auth_token = 'askme';

    constructor(public http: Http) {
    }

    getPanelists() {
        var options: {} = {
            headers: { Authorization: this.auth_token }
        };
        return this.http.get(this.baseUrl, options);
    }


}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventService {

    constructor(private http: HttpClient) {}

    getEvents() {
        return this.http.get('assets/demo/data/scheduleevents.json')
                    .toPromise()
                    .then(res => <any[]> res.data)
                    .then(data => data);
    }
}

///<reference path="../../../node_modules/rxjs/internal/Observable.d.ts"/>
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
        'Authorization': 'Bearer BQBDrni4AjShvRLXYKTGANgILyIcqrFOsLQnuOD34HvTFsLBsgx6ZBZVvl2Fy33bdetyPPrfCsGYImcZ0kE'
    });


    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );
  }
}

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
        'Authorization': 'Bearer BQCetPeVEl-N924_7r4m_GQhqcR3m5glxo6GEv6dAKhb9VcGjRUa3HrzKCUrYA-stUJ2N46ZFFWJPtEGCPo'
    });


    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } )
        .subscribe(res => {
          console.log(res);
        });
  }
}

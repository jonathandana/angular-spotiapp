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
        'Authorization': 'Bearer BQAJ15iNjDfXH7vqc6oma3HK5zikbz8_lt7CYlnqju00qW1eu2gfFOS_XfEDrSbvETMInwB85R8NeEk6tGw'
    });


    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );
  }

  getArtist(term: string) {
      const headers = new HttpHeaders({
          'Authorization': 'Bearer BQAJ15iNjDfXH7vqc6oma3HK5zikbz8_lt7CYlnqju00qW1eu2gfFOS_XfEDrSbvETMInwB85R8NeEk6tGw'
      });

      return this.http.get(`https://api.spotify.com/v1/search?query=${term}&offset=0&limit=20&type=artist`, { headers } );

  }
}

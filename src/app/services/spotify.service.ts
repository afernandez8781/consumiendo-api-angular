import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify');
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQACHLY7BMPQ3POXjBJyHKioxLQcLXZgDhwZL7noc96BfDNZRC_r_twRS0J_mGADM0PN6PeJRY_KlUk0M4g'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items));
             
  }

  getArtistas( termino: string ) {

    // return this.getQuery(`search?query=${ termino }&type=artist&market=BO&offset=0&limit=20`)
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
              .pipe( map( data => data['artists'].items));

  }

  getArtista( id: string ) {

    // return this.getQuery(`search?query=${ termino }&type=artist&market=BO&offset=0&limit=20`)
    return this.getQuery(`artists/${ id }`);
              // .pipe( map( data => data['artists'].items));

  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));

  }
  
}

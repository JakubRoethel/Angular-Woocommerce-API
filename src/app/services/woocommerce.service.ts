import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class WoocommerceService {
  private apiUrl = 'https://dev.szkolanumerologii.pl/wp-json/wc/v3';
  private customerKey = 'ck_6705394ba16761454f53d7d11475663187b34273';
  private customerSecret = 'cs_965879583348ab271147edb336a24455c88b3b3f';

  constructor(private http: HttpClient) { }

  // Dodanie parametrów do funkcji, domyślnie pobiera pierwszą stronę i 10 produktów na stronę
  getProducts(page: number = 1, perPage: number = 10): Observable<any> {
    const headers = {
      'Authorization': `Basic ${btoa(this.customerKey + ':' + this.customerSecret)}`
    };
    return this.http.get(`${this.apiUrl}/products?page=${page}&per_page=${perPage}`, { headers });
  }
}

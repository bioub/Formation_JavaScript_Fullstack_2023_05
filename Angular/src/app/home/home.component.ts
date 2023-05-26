import { Component } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  saisie = '';
  formatedAddress = '';

  constructor(private httpClient: HttpClient) {}

  search(event: SubmitEvent) {
    event.preventDefault();

    // Envoie la requête à api-adresse :
    // const handler = new HttpHandler()
    // new HttpClient();

    // get retourne un Observable
    // ce qui déclenche l'opération asynchrone c'est l'appel à subscribe
    this.httpClient.get('https://api-adresse.data.gouv.fr/search/', {
      params: {
        q: this.saisie,
      }
    }).subscribe((data) => {
      this.formatedAddress = (data as any).features[0].properties.label;
    });
  }
}

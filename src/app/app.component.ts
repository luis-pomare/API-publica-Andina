import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'API-publica-Andina';

  ngOnInit(): void {
    async function llamarRepos() {
      try {
        const response = await fetch(
          'https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&page=1&per_page=10'
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.error('Error al obtener datos de la API');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }

    llamarRepos();
  }
}

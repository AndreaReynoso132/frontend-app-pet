import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public displayText: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Escucha los cambios de datos en la ruta para actualizar el texto mostrado
    this.route.data.subscribe(data => {
      this.displayText = data['text'];
    });
  }
}

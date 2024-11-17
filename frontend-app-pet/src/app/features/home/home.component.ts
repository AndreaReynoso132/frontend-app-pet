import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public displayText: string = ''; 
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    
      this.route.data.subscribe(data => {
      this.displayText = data['text'];
    });
  }
}

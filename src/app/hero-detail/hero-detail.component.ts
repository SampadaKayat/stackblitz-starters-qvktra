import { Component, OnInit } from '@angular/core';
import { component, input } from '@angular/core';
import { hero } from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [HeroDetailComponent],
})
export class HeroDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

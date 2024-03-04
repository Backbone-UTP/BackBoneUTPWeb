import { Component } from '@angular/core';

import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import members from '../../../members.json';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class MembersComponent implements OnInit {
  miembros: any;
  ngOnInit(): void {
    this.miembros = members['members '];
  }
}

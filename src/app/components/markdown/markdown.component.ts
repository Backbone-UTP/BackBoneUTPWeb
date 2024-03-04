import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.css'
})
export class MarkdownComponent {

  markdown: string = "## Hola"; 

  constructor(private http: HttpClient){}
  async ngOnInit() {
    console.log('rendering')
    this.http.get('assets/test.md', {responseType: 'text'})
        .subscribe(data => this.markdown = data); 
  }
}

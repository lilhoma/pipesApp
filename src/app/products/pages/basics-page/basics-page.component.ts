import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower:string = 'homa';
  public nameUpper:string = 'HOMA';
  public fullName:string = 'lIL hOmA';

}

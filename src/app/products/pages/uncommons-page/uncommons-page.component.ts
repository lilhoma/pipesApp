import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommons-page',
  templateUrl: './uncommons-page.component.html',
  styleUrl: './uncommons-page.component.css'
})
export class UncommonsPageComponent {
  // i18n Select
  public name: string = 'Juan';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }


  changeClient(): void {
    this.name = 'Gabriela';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Gabriela', 'Fryda', 'Jacqueline', 'Ximena', 'Vale'];
  public clientsMap = {
    '=0' : 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes espeando.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue
    public person = {
      name: 'Gabriela',
      age: 22,
      address: 'Mazatlan, Sinaloa'
    }

    // Async pipe
    public myObservableTimer: Observable<number> = interval(2000)
      .pipe(
        tap(value => console.log('tap: ', value)
        )
      );

    public promiseValue: Promise<string> = new Promise( ( resolve, reject ) => {
      setTimeout(() => {
        resolve('Tenemos Data en la Promise')
        console.log('Tenemos Data en la Promise')
      }, 3500);
    } )

}

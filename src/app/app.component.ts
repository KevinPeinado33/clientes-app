import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bienvenido a Angular';

  curso: string = 'Spring boot y angular 10+';
  alumno: string = 'kevin peinado leiva';

}

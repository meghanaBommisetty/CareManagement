import { Component } from '@angular/core';

export class Person{
  id: number;
  name: string;
  dob:number;
  address:string;
  email:string;
}
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { }
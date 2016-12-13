import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `Hello   <a [routerLink]="['/home']">Dashboard</a>  <router-outlet></router-outlet>
    `
})
export class AppComponent { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'statistics';

  public routerData: any = [
    {
      lable: 'Apex chart',
      link: '',
    },
    {
      lable: 'Chart.js',
      link: '/dashboard-chartjs',
    },
  ];
}

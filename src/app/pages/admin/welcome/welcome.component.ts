import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
public barChartOptions={
  scaleShowVerticalLines:false,
  responsive:true
} 
public barChartLabels=['2018','2019','2020','2021','2022','2023','2024'];
public barChartLegend=true;
public barChartData=[
  {data:[3,4,5,6,1,4,2],label:'Series A'},
  {data:[4,5,6,7,8,4,5],label:'Series B'}

]

public polarAreaChartLabels: string[] = [
  'Download Sales',
  'In-Store Sales',
  'Mail Sales',
  'Telesales',
  'Corporate Sales',
];
public polarAreaChartData: ChartData<'polarArea'> = {
  labels: this.polarAreaChartLabels,
  datasets: [
    {
      data: [300, 500, 100, 40, 120],
      label: 'Series 1',
    },
  ],
};
public polarAreaLegend = true;

public polarAreaChartType: ChartType = 'polarArea';

}

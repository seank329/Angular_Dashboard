import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-main-display-area',
  templateUrl: './main-display-area.component.html',
  styleUrls: ['./main-display-area.component.css']
})
export class MainDisplayAreaComponent implements OnInit {
  public doughnutChartData = ['250','750'];
  public doughnutChartLabels = [`In-Progress`, 'New'];
  public doughnutChartType = 'doughnut';
  public doughnutChartColors : Array<any> = [{backgroundColor: ['#04D380','#003B68']}];
  public doughnutChartOptions : ChartOptions = {
    responsive:true,
    legend: {
      position: 'right',
      labels:{
        usePointStyle:true
      }
    },
    aspectRatio:2.5,
    cutoutPercentage:80,
    rotation:Math.PI
  }

  public barChartData = [
    {data: [100, 50], label: '', barPercentage:0.4}
  ];
  public barChartType = 'bar';
  public barChartLabels = ['',''];
  public barChartColors : Array<any> = [{backgroundColor: ['#00B3D9', '#00B3D9']}];
  public barChartOptions = {
    responsive:true,
    legend: {
       display:false
     },
    scales: {
      yAxes:[{
        display:false,
        gridLines: {
          drawOnChartArea:false
        },
        ticks:{
          beginAtZero:true
        },
      }],
      xAxes:[{
        gridLines: {
          drawOnChartArea:false
        },
      }],
    }
  }

  public lineChartData = [
    {data:[3, 2, 7, 4, 6, 2, 2, 8, 4, 3, 2, 9], fill:{ disabled :true},  borderColor:'#0374A0', lineTension:0, pointRadius:0},
    {data:[9, 5, 8, 10, 5, 4, 2, 8, 5, 6, 10, 9], fill:{ disabled :true},  borderColor:'#D9D9D9', lineTension:0, pointRadius:0}
  ];
  public lineChartLabels = [ '', '', 'Dec', '','', 'Mar','','', 'Jun', '','', 'Sept']
  public lineChartType = 'line'
  public lineChartOptions = {
    responsive:true,
    scales: {
      yAxes : [{
        ticks: {
          beginAtZero:true,
        },
        gridLines: {
          display:false
        }
      }],
      xAxes : [{
        gridLines: {
          drawOnChartArea:false
        },
        offset:true,
      }]
    },
    aspectRatio:4,
    legend: {
      display:false
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

}

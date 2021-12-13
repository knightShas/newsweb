import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';
@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  healthNewsDisplay:any=[];
  ngOnInit(): void {
    this._services.healthNews().subscribe((result)=>{
      this.healthNewsDisplay = result.articles;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';
@Component({
  selector: 'app-generalnews',
  templateUrl: './generalnews.component.html',
  styleUrls: ['./generalnews.component.css']
})
export class GeneralnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  generalNewsDisplay:any=[];
  ngOnInit(): void {
    this._services.generalNews().subscribe((result)=>{
      this.generalNewsDisplay = result.articles;
    })
  }

}

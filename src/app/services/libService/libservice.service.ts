import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {  } from '../../apiconfig'
@Injectable({
  providedIn: 'root'
})
export class LibserviceService {
  headers= new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private httpClient: HttpClient) { }
  getAllCampaigns() {    
   // return this.httpClient.get(campaignapis.getcampaigns,{headers:this.headers});
  }
}

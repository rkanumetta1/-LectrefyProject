import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { campaignapis } from '../apiconfig'

@Injectable({
  providedIn: 'root'
})

export class CampaignmangmntService {
 
  API_URL = 'http://localhost:8000';
  headers= new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private httpClient: HttpClient) { }

  getAllCampaigns() {    
    return this.httpClient.get(campaignapis.getcampaigns,{headers:this.headers});
  }

  editCampagin(body) {
    var contact
    return   this.httpClient.put(campaignapis.update,body,{headers:this.headers});
  }
   
  deleteCampaign(body) {
    // return this.httpClient.put(campaignapis.update,body,{headers:this.headers});
  }

  createCampaign(body){
    return this.httpClient.post(campaignapis.addcampaigns,body,{headers:this.headers});   
  }
}

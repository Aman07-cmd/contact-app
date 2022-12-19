import { Component, OnInit } from '@angular/core';
import { FormGroupName } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit{

  
  contactId:string=""
  groupId:any
  contact:any
  groupName:any
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
    this.contactId =data.contactId
    })

    //api call
    this.api.viewContact(this.contactId)
    .subscribe((data:any)=>{
      this.contact=data
      this.groupId=data.groupId
      console.log(this.groupId);
      
      //groupname api

      this.api.getGroupName(this.groupId).subscribe((result:any)=>{
        this.groupName=result.name;
        console.log(result);
        
      })
    })
  
   
  }

}

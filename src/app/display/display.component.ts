import { Component, OnInit } from '@angular/core';
import { DisplayServService } from '../services/display-serv.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  profile = { login: '',
  company: '',
  location: '',
  avatar_url: '',
  public_repos: '',
  public_gist: '',
  followers: '',
  following: '',
  email: '',
  bio: '',
  created_at: ''};
  repos: any[] = [];
  username: string ='';


  constructor( private service: DisplayServService) { 

  }





  ngOnInit(): void {
  }

}

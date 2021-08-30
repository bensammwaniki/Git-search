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
    this.service.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.service.getProfileRepo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
  findProfileRepo() {
    this.service.updateProfile(this.username);
    this.service.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.service.getProfileRepo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
  
  ngOnInit(): void {
  }

}

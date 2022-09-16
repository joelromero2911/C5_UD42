import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username:any;
  user:any;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    public loginService:AuthenticationService
  ) { }

  ngOnInit(): void {

  }

}

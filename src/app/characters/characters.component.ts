import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from '../service/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any = null;

  username: any;
  user: any;

  constructor(
    private router: Router,
    private charactersService: CharactersService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    if (!(sessionStorage.getItem('username') && sessionStorage.getItem('token'))) {
      this.router.navigate(['/login'])
    } else {
      this.charactersService.getAll()
        .subscribe(
          result => {
            this.characters = result;
          }
        )
    }
  }

  deleteCharacter(id: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.charactersService.delete(id)
        .subscribe(
          response => (
            console.log(response),
            this.ngOnInit()
          ),
          error => {
            console.log(error)
          }
        );
    }

  }

  deleteAllCharacters() {
    if (confirm('Are you sure you want to delete EVERYTHING?!')) {
      this.charactersService.deleteAll()
        .subscribe(
          response => (
            console.log(response),
            this.ngOnInit()
          ),
          error => {
            console.log(error)
          }
        );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../service/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersService.getAll()
    .subscribe(
      result => {
        this.characters = result;
      }
    )
  }

  deleteCharacter(id:any){
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

  deleteAllCharacters(){
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from '../models/character.model';
import { CharactersService } from '../service/characters.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:any = 0;

  character: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }
  submitted = false;

  constructor(
    private route:ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
    });

    this.charactersService.get(this.id)
    .subscribe(
      result => {
        this.character = result;
      }
    )
  }

  updateCharacter(){
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      image: this.character.image
    };

    this.charactersService.update(this.id, data)
      .subscribe(
        response => (
          console.log(response),
          this.submitted = true,
          this.ngOnInit()
        ),
        error => {
          console.log(error)
        }
      );
  }
}

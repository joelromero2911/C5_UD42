import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CharactersService } from '../service/characters.service';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.component.html',
  styleUrls: ['./ver-detalles.component.css']
})
export class VerDetallesComponent implements OnInit {

  id:any;
  character:any;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
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

}

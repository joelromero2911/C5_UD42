import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = ''
  surname = ''
  username = ''
  password = ''
  invalidRegister = false
  cargando = false

  @Input() error: string | null = "";

  constructor(
    private router: Router,
    private registerservice: RegisterService
  ) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.cargando = true;
    (this.registerservice.register(this.name, this.surname, this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/login'])
        this.invalidRegister = false
      },
      error => {
        this.cargando = false;
        this.invalidRegister = true
        this.error = "* Ese username ya esta en uso!";

      }
    )

    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({ username: new FormControl(), password: new FormControl() })
  status: String = "";
  loginFallido: String = "";

  constructor(public fb: FormBuilder, public router: Router) {

  }

  ngOnInit(): void {
  }


  login() {

    console.log(this.loginForm.value.username);
    if (this.loginForm.status == "VALID") {
      if (
        this.loginForm.value.username == "jhonatan" && this.loginForm.value.password == "1234"
        || this.loginForm.value.username == "pedro" && this.loginForm.value.password == "picapiedra"
        || this.loginForm.value.username == "qwerty" && this.loginForm.value.password == "qwerty"
      ) {

        this.router.navigate(['/principal'])
      }
    } else {
      this.loginFallido = "Los campos no fueron rellenados correctamente o no se encontro dicho usuario";
    }

  }
}

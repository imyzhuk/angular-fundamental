import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: Event){
    event.preventDefault()
    console.log("Login:" + "\nemail: " + this.email + "\npassword: " + this.password)
  }

}

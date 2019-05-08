import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;


    constructor(
        private formBuilder: FormBuilder,
        public router: Router
        ) {}

        ngOnInit() {
            this.loginForm = this.formBuilder.group({
                username: ['', Validators.required],
                password: ['', Validators.required]
            });
        }

        onLoggedin() {
            localStorage.setItem('isLoggedin', 'true');
        }
    }


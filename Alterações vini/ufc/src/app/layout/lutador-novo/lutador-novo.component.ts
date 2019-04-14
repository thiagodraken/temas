import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LutadorService } from '../../services/lutador.service';
import { Lutador } from '../../models/lutador';

@Component({
  selector: 'app-lutador-novo',
  templateUrl: './lutador-novo.component.html',
  styleUrls: ['./lutador-novo.component.scss'],
  animations: [routerTransition()]
})
export class LutadorNovoComponent implements OnInit {
  formLutador = new FormGroup({
    nomeLutador: new FormControl(''),
    idadeLutador: new FormControl(''),
    sexoLutador: new FormControl(''),
    pesoLutador: new FormControl(''),
    paisOrigemLutador: new FormControl('')
  });

  isLoadingResults = false;
  constructor(private router: Router, private api: LutadorService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLutador = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'idade' : [null],
      'sexo' : [null, Validators.required],
      'peso' : [null, Validators.required],
      'paisOrigem' : [null]
    });
  }
  addLutador(form: Lutador) {
    this.isLoadingResults = true;
    this.api.addLutador(form)
    .subscribe(res => {
      const id = res['id'];
      this.isLoadingResults = false;
      this.router.navigate(['/lutadores']);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}

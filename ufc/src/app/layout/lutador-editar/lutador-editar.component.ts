import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LutadorService } from '../../services/lutador.service';
import { Lutador } from '../../models/lutador';

@Component({
  selector: 'app-lutador-editar',
  templateUrl: './lutador-editar.component.html',
  styleUrls: ['./lutador-editar.component.scss'],
  animations: [routerTransition()]
})
export class LutadorEditarComponent implements OnInit {
  id: String = '';
  formLutador = new FormGroup({
    nomeLutador: new FormControl(''),
    idadeLutador: new FormControl(''),
    sexoLutador: new FormControl(''),
    pesoLutador: new FormControl(''),
    paisOrigemLutador: new FormControl('')
  });

  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: LutadorService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getLutador(this.route.snapshot.params['id']);
    this.formLutador = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'idade' : [null],
      'sexo' : [null, Validators.required],
      'peso' : [null, Validators.required],
      'paisOrigem' : [null]
    });
  }

  getLutador(id) {
    this.api.getLutador(id).subscribe(data => {
      this.id = data._id;
      this.formLutador.setValue({
        nome: data.nome,
        idade: data.idade,
        sexo: data.sexo,
        peso: data.peso,
        paisOrigem: data.paisOrigem
      });
    });
  }

  updateLutador(form: Lutador) {
    this.isLoadingResults = true;
    this.api.updateLutador(this.id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/lutador-detalhe/' + this.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
  }

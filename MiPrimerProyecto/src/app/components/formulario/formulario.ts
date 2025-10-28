import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviar() {
    if (this.formulario.invalid) {
      console.log("Formulario inválido");
    } else {
      console.log(this.formulario.value);
    }
  }

  reset() {
    this.formulario.reset({
      nombre: '',
      email: ''
    });
  }
}

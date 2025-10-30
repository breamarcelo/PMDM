import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatToolbarModule, MatDialogModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',

})


export class Formulario {
  formulario: FormGroup;
  tipoInvitado: string = "";
  dialog: MatDialog = new MatDialog;

  constructor(private fb: FormBuilder) {
    this.formulario = fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      disfraz: ['', Validators.required],
      fechaLlegada: ['', Validators.required],
      aceptarReglas: ['', Validators.required],
    });
  }

  enviar() {
    if (this.formulario.invalid) {
      alert("💀 Este formulario está de muerte, ¡revísalo!")
    } else {
      alert("🎃 ¡Bienvenido/a, " + this.formulario.get("nombre")?.value + " ! Tu entrada para la fiesta del castillo ha sido registrada con éxito.");

    }
  }
}

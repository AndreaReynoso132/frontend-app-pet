import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/auth/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    // Definir validaciones para los campos
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email requerido y válido
      password: ['', Validators.required] // Contraseña requerida
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Despachar la acción de inicio de sesión
      this.store.dispatch(AuthActions.login({ email, password }));
    }
  }
}

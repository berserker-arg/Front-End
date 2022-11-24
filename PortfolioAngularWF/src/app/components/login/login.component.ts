import { Component, OnInit } from '@angular/core';
// librerias de formulario
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// utilidades de formulario
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8),Validators.maxLength(16)]],
      
    })
  }  
    
    
  
  ngOnInit() {}
    
    get Password(){
      return this.form.get('password');
      // Toma los datos en html con formControlName=""
    }
    get Mail() {
      return this.form.get('email');
    }
    get PasswordValid(){
      return this.Password?.touched && !this.Password?.valid;
    }
    get MailValid() {
      return this.Mail?.touched && !this.Mail?.valid;
    }

    onEnviar(event:Event){
      //Detener ejecucion del sumbit de un form
      event.preventDefault;
      if(this.form.valid){
        //Llamamos a nuestro servicio para enviar los datos al servidor
        //Tambien podemos ejecutar una alerta
        alert("Todo salio bien, enviando formulario..")
      }else{
        //Corremos todas las validaciones para ejecutar mensajes de error
        this.form.markAllAsTouched();
        alert("Algo salio mal..")
      }
    }
  
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
// utilidades de formulario

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form: FormGroup;
  
  constructor(private formBuilder:FormBuilder) { 

    this.form = this.formBuilder.group({

      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8),Validators.maxLength(16)]],
      confirmPassword:['',[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    },{ validator: this.passwordMatchValidator});
  }
    passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');
  
  
    
      return password?.value === confirmPassword?.value ? null : { 'passwordMismatch': true };
      

    }
  

  login(){
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    console.log(this.form.value.confirmPassword);
  }

  ngOnInit() {}
    
    get Password(){
      return this.form.get('password');
      // Toma los datos en html con formControlName=""
    }
    get Mail() {
      return this.form.get('email');
    }
    get ConfirmPassword(){
      return this.form.get('confirmPassword')
    }

    get PasswordValid(){
      return this.Password?.touched && !this.Password?.valid;
    }
    get MailValid() {
      return this.Mail?.touched && !this.Mail?.valid;
    }
    get ConfirmPasswordValid(){
      return this.ConfirmPassword?. touched && !this.ConfirmPassword?.valid;
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

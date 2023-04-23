import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
 contactmeForm = this.fb.group({
info:this.fb.group({
asunto:['',Validators.required],
email:['',[Validators.required,Validators.email]]
}),
mensaje:['',Validators.required]

 });

  constructor(
 private fb : FormBuilder

  ) {}
_onSubmit(){
if(this.contactmeForm.valid){
  console.log(this.contactmeForm.value);

}else{
  alert("Formulario no valido")
}

}


  ngOnInit(): void {
  }

}

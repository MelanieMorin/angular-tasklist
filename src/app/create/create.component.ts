import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  )
  {  }

  taskForm = this.fb.group(
    {
      name: [
        '',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(15)
        ])
      ],
      status: ['',
      Validators.required
    ]
    }
  );

  submit() {
    console.log("Traitement des données");
  }

  ngOnInit() {
  }

}

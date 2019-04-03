import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Task } from '../models/task';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  @Input() service;
  
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
          Validators.maxLength(50)
        ])
      ],
      status: ['',
      Validators.required
    ]
    }
  );

  submit(): void {
    this.service.add(this.taskForm.value);
  }

  ngOnInit() {
  }

}

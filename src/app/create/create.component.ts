import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
  providers: [TaskService]
})
export class CreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService
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
    this.taskService.add(this.taskForm.value);
  }

  ngOnInit() {
  }

}

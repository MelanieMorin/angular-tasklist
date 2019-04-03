import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  providers: [ TaskService ]
})
export class ListComponent implements OnInit {

  defaults: Task[];
  keywords:string = '';

  constructor(private taskService: TaskService) {
    this.defaults = this.tasks;
    this.tasks = this.taskService.getAll();
  }

  ngOnInit() {
    
  }

  
  delete(task:Task): void{
    this.taskService.remove(task);
  }

  search() {

    this.tasks = this.defaults;

    this.tasks = this.tasks.filter(task =>
      task.getName().indexOf(
        this.keywords.toUpperCase()
      ) != -1
    );
  }
}

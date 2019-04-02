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

  tasks:Task[] /*= [
    new Task(1, 'Dire à Sam d\'arrêter de boire', false),
    new Task(2, 'Partir de l\'IMIE', false),
    new Task(3, 'Dormir 9h', false),
    new Task(4, 'Acheter du beaufort', false)
  ];*/
  defaults: Task[];
  keywords:string = '';

  constructor(private taskService: TaskService) {
    this.defaults = this.tasks;
    this.tasks = this.taskService.getAll();
  }

  ngOnInit() {
    
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

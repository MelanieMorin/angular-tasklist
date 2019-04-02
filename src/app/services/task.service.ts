import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
    providedIn: 'root'
})

export class TaskService 
{
    tasks: Task[];

    constructor() {
        const datas = JSON.parse(localStorage.getItem('tasks')) || [];
        this.tasks = datas.map(data =>
            new Task(data.id, data.name, data.status)
        );
    }

    incrementId(): number {
        return this.tasks.length == 0 ? 1 : this.tasks[this.tasks.length - 1].id + 1;
    }

    add(task): void {
        this.tasks.push(new Task(task.id, task.name, task.status));
        this.setToStorage();
    }

    remove(task): void {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.setToStorage();
    }

    setToStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    getAll() {
        return this.tasks;
    }

    findById(id): Task {
        return this.tasks.find(task =>
            task.id == id
        );
    }

}
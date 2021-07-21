import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    // of() turns a thing into an observable
    const tasks = of(TASKS);
    return tasks;
  }
}

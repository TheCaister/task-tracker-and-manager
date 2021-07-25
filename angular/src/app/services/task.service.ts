import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    // We're dealing with json text
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //List of task:boolean pairs to be used for the undo function
  tasksHistory: {taskCurrent: Task, isDelete: boolean}[] = [];
  
  private apiUrl = 'http://localhost:5000/tasks';

  // Adding HTTP client into constructor
  constructor(private http: HttpClient) { }

  // Getting tasks from json server using HTTP request
  getTasks(): Observable<Task[]> {
    // Must specify type of Observable
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task) : Observable<Task> {
    // Getting url of the specific task
    const url = `${this.apiUrl}/${task.id}`;
    this.tasksHistory.push({taskCurrent: task, isDelete: true});
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  // addTask method creates a post request using the task passed in
  addTask(task: Task) : Observable<Task>{
    this.tasksHistory.push({taskCurrent: task, isDelete: false});
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}

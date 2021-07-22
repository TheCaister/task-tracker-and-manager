import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
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
    return this.http.delete<Task>(url);
  }
}

// Group of tasks
import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';

// Importing service to call service methods
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // Initialising list of tasks as an empty array
  tasks: Task[] = [];

  // To use a service, you must add it as a provider in the constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Subscribe to the observable
    // Works similar to promises
    // Setting the tasks array
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

}

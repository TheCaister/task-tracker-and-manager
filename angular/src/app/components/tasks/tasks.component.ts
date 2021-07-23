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

  deleteTask(task: Task) {
    // Subscribe to the deleteTask observable
    // Filters out all ids that are not equal to the id of the task being deleted
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  toggleReminder(task){
    // Toggles the reminder on and off
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }

  // Add task component
  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}

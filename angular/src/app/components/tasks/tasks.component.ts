// Group of tasks
import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // Now we can use the tasks in the TASKS file
  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}

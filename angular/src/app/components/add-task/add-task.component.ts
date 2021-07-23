import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  // Creating task emitter
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  // Properties of the form
  text: string;
  day: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    // Doing some basic checking
    // Alert the user if the text is empty
    if(!this.text){
      alert('Please add a task!');
      return;
    }

    // Create task object from the given values in the form to be uploaded to the server
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    // Emits new task
    this.onAddTask.emit(newTask);

    // Clearing the form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}

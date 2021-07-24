import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

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
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    // Copy this block of code to any component that should respond to this onToggle()
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
   }

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

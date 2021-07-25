import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { TaskItemComponent } from './components/task-item/task-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private taskService: TaskService) { }

  darkModeOn: boolean = false;

  // Function for undoing actions
  undoTask(){
    if(this.taskService.tasksHistory.length <= 0){
      return
    }

    if(this.taskService.tasksHistory.pop()?.isDelete){
      //this.taskService.addTask()
      console.log("Undo Delete");
    }
    else{
      console.log("Undo Add");
    };
    console.log(this.taskService.tasksHistory);
  }

  toggleDarkMode(){
    this.darkModeOn = !this.darkModeOn;
    console.log(this.darkModeOn);
    if(this.darkModeOn == true){
      
    }
    else{

    }
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  // Creating a subject which sends notifications from one observable to be detected by several observers
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    // Passing value of showAddTask into subject.next()
    this.subject.next(this.showAddTask);
  }

  // Perform appropriate actions after toggling
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}

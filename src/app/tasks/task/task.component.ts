import { Component, input, output } from '@angular/core';
import { Task } from '../dummy-tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<string>();

  setCompleted() {
    this.complete.emit(this.task().id);
  }
}

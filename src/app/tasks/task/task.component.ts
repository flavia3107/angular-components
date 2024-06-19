import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { TasksService } from '../../services/tasks-service.service';
import { CardComponent } from '../../shared/card/card.component';
import { Task } from '../dummy-tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  private _tasksService: TasksService = inject(TasksService);

  setCompleted() {
    this._tasksService.removeTask(this.task().id);
  }
}

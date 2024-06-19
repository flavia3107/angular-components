import { Component, input } from '@angular/core';
import { dummyTasks, Task } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  user = input.required<any>();
  tasks: Task[] = dummyTasks;
  userTasks: Task[] = [];
  isAddingTaskVisible = false;
  ngOnChanges() {
    this.userTasks = dummyTasks.filter((task: Task) => task.userId === this.user().id);
  }

  updateTask(id: string) {
    this.userTasks = this.userTasks.filter(task => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTaskVisible = true;
  }

  onCancelAddTask() {
    this.isAddingTaskVisible = false;
  }
}

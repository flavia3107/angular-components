import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  user: { id: string; name: string; avatar: string; } | undefined;
  selectedId: string = '';

  onSelectUser(id: string) {
    this.user = DUMMY_USERS.find(user => user.id === id);
    this.selectedId = id;
  }
}

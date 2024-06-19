import { Component, computed, EventEmitter, input, output, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<{ avatar: string, name: string, id: string }>();
  selected = input.required<boolean>();

  imagePath = computed(() => `assets/users/${this.user().avatar}`);
  onUserClick = output<string>();

  onSelectUser() {
    this.onUserClick.emit(this.user().id);
  }
}

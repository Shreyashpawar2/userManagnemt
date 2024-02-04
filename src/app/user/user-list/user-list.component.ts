// user-list.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(id: string): void {
    this.userService.deleteUser(id);
    this.users = this.users.filter(user => user.id !== id);
  
  }

  
  onUserChanged(): void {
    this.loadUsers();
  }
}

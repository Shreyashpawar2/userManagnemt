// user-upsert.component.ts

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { User } from '../user.model';


@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent implements OnInit {
  @Output() userChanged: EventEmitter<void> = new EventEmitter<void>();
  
  userForm: FormGroup = this.fb.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}
  user: User[] = [];
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
  
      // Subscribe to the observable to get the array of users
      this.userService.getUsers().subscribe(users => {
        const existingUser = users.find(user =>
          user.firstName === newUser.firstName &&
          user.lastName === newUser.lastName &&
          user.email === newUser.email 
        );
  
        if (existingUser) {
          // Update existing user
          existingUser.address = newUser.address;
          this.userService.updateUser(existingUser);
          this.clearForm();
        } else {
          // Add new user with a unique ID
          newUser.id = new Date().getTime().toString();
          this.userService.addUser(newUser);
          this.clearForm();
        }
  
        
      });
   
    }
    this.userChanged.emit();
  }
  
  clearForm(): void {
    this.userForm.reset();
  }
}

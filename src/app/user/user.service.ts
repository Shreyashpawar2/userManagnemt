import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { User } from './user.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingSubject = new Subject<boolean>();
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  showLoader(): void {
    this.loadingSubject.next(true);
  }

  hideLoader(): void {
    this.loadingSubject.next(false);
  }
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  constructor(private dialog: MatDialog, private loaderService: LoaderService) {
    // Load users from local storage on service initialization
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  private updateLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  private async openConfirmationDialog(): Promise<boolean> {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
    });

    return dialogRef.afterClosed().toPromise() || false;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  async addUser(user: User): Promise<void> {
    this.loaderService.showLoader();

    const confirmed = await this.openConfirmationDialog();
    if (confirmed) {
      this.users.push(user);
      this.updateLocalStorage();
    }

    this.loaderService.hideLoader();
  }

  async updateUser(user: User): Promise<void> {
    this.loaderService.showLoader();

    const confirmed = await this.openConfirmationDialog();
    if (confirmed) {
      const index = this.users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        this.users[index] = user;
        this.updateLocalStorage();
      }
    }

    this.loaderService.hideLoader();
  }

  async deleteUser(id: string): Promise<void> {
    this.loaderService.showLoader();

    const confirmed = await this.openConfirmationDialog();
    if (confirmed) {
      this.users = this.users.filter((user) => user.id !== id);
      this.updateLocalStorage();
    }

    this.loaderService.hideLoader();
  }
}

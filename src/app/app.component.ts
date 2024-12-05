import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppPaginatedListComponent } from './app-paginated-list/app-paginated-list.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,
    ModalComponent,
     RouterOutlet , UserFormComponent,TodoListComponent , AppPaginatedListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items2: string[] = ['item 1' , 'item 2' , 'item 3']  ;
  items3: string[] = ['item 1' , 'item 2' , 'item 3']  ;
  isModalOpen = false;

  title = 'dep-inj';
  private dataService = inject(DataService);
  items: string[] = this.dataService.getData();
  addNewItem() {
  const newItem = `Item ${this.items.length + 1}`;
  this.dataService.addItem(newItem);
  this.items = this.dataService.getData();
  }

  addNewItem2() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  addNewItem3() {
    this.items3.push(`Item ${this.items3.length + 1}`);
  }

  openModal(){
    this.isModalOpen = true;
  
  }
  closeModal(){
    this.isModalOpen = false;
  }
}

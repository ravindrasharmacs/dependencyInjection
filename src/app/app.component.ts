import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule , RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dep-inj';
  private dataService = inject(DataService);
  items: string[] = this.dataService.getData();
  addNewItem() {
  const newItem = `Item ${this.items.length + 1}`;
  this.dataService.addItem(newItem);
  this.items = this.dataService.getData();
  }
}

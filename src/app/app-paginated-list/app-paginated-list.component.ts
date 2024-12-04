import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-paginated-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-paginated-list.component.html',
  styleUrl: './app-paginated-list.component.scss'
})
export class AppPaginatedListComponent {
 items : string[] = [];
 paginatedItems : string[] = [];
 currentPage  = 1 ;
 itemsPerPage = 10;
 totalPages = 0 ;

ngOnInit() {
  //Generate sample data
  this.items = Array.from({length: 100}, (_, i) => `Item ${i+1}`);
  this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
  this.updatePage();
}

changePage(direction : number) {
  this.currentPage += direction;
  this.updatePage();
}

updatePage() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  this.paginatedItems = this.items.slice(startIndex, endIndex);
}

}
